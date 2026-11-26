/* Touch attacks and damage/effect rolls for the Grimoire.
   Uses the same 3D dice engine as skill rolls; never expends items or spells
   implicitly. All modifiers reference the live, editable character sheet. */
(() => {
  'use strict';
  const api=window.GRIMOIRE,refs=window.SPELL_REFERENCES;
  if(!api)return;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sign=n=>n>=0?'+'+n:String(n);
  const mod=n=>Math.floor((Number(n)-10)/2);
  const state=()=>api.getState();
  const casterContext=()=>({casterLevel:state().spellcastingLevel+1,necroLevel:state().spellcastingLevel+4});
  let effects=[];
  function touchBonus(kind){
    const s=state(),c=s.sheet?.combat;
    if(!c)return 0;
    const ability=kind==='melee'?'STR':'DEX';
    const base=c.bab+mod(s.abilities[ability])+c.attackMisc+(c.buffs.haste?1:0);
    const situational=Math.max(-100,Math.min(100,Math.trunc(Number($('combat-attack-mod').value)||0)));
    return base+situational+(kind==='melee' && $('combat-spectral-hand').checked?2:0);
  }
  function rollAttack(kind){
    const name=kind==='melee'?'Melee touch attack':'Ranged touch attack';
    const bonus=touchBonus(kind);
    window.grimoireRollCheck?.({label:name,modifier:bonus,sides:20});
  }
  function builtInEffects(){
    const s=state(),available=s.spells||[],has=name=>available.some(x=>x.name===name);
    const out=[];
    const add=(id,label,formula,note='')=>out.push({id,label,formula,note});
    const cha=mod(s.abilities.CHA),lich='1d8'+(cha<0?cha:cha>0?'+'+cha:'');
    add('lich-touch','Lich damaging touch',lich,'Negative energy to living targets; Will half. Touch attack is separate.');
    // Keep this view focused on rolls Malzareth actually makes in play.
    // The old list automatically rendered 14+ obscure spells and stale staff
    // formulas, making routine attacks hard to find.
    if(has('Enervation'))add('spell-enervation','Enervation · negative levels','1d4',
      'Ranged touch and spell resistance first; this is negative levels, not hit point damage. Staff of Necromancy expends 2 charges when used.');
    if(has('Ray of Enfeeblement'))add('spell-ray-enfeeblement','Ray of Enfeeblement · Strength penalty','1d6+5',
      'Ranged touch and spell resistance first. Strength penalty (not ability damage); nonstacking with itself.');
    if(has('False Life'))add('spell-false-life','False Life · temporary HP','1d10+10',
      'At caster level 20 or greater: 1d10+10 temporary HP, does not stack with another False Life.');
    const inv=s.sheet?.inventory||[];
    const owns=id=>inv.some(x=>x.id===id&&x.qty>0);
    if(owns('wand-orb-force'))
      add('wand-orb-force','Wand of Orb of Force · damage','7d6',
        'Ranged touch hit first, CL 7. Charges are tracked separately and are not spent by rolling.');
    return out;
  }
  function render(){
    const baseM=touchBonus('melee'),baseR=touchBonus('ranged');
    $('combat-attack-buttons').innerHTML=
      '<button class="combat-attack-button" type="button" data-combat-attack="melee">⚄ Melee touch <strong>'+sign(baseM)+'</strong></button>'+
      '<button class="combat-attack-button" type="button" data-combat-attack="ranged">⚄ Ranged touch <strong>'+sign(baseR)+'</strong></button>';
    effects=builtInEffects();
    $('combat-effect-buttons').innerHTML=effects.map(e=>`<button type="button" class="combat-effect-button" data-combat-effect="${esc(e.id)}" title="${esc(e.note)}"><span>${esc(e.label)}</span><strong>${esc(e.formula)}</strong></button>`).join('');
    $('combat-custom-list').innerHTML=(state().damagePresets||[]).map(p=>`<div class="combat-custom-row">
      <button type="button" data-combat-custom="${esc(p.id)}"><span>${esc(p.name)}</span><strong>${esc(p.formula)}</strong></button>
      <button type="button" class="combat-remove" data-combat-delete="${esc(p.id)}" title="Delete preset" aria-label="Delete ${esc(p.name)}">×</button>
    </div>`).join('')||'<p class="muted small">No custom rolls saved yet.</p>';
  }
  function effectRoll(spec){
    if(!spec)return;
    if(!window.grimoireRollFormula?.({label:spec.label,formula:spec.formula})){
      $('dice-breakdown').textContent='Finish the current roll before starting another.';
    }
  }
  document.addEventListener('click',event=>{
    const attack=event.target.closest('[data-combat-attack]');
    if(attack){rollAttack(attack.dataset.combatAttack);return;}
    const button=event.target.closest('[data-combat-effect]');
    if(button){effectRoll(effects.find(x=>x.id===button.dataset.combatEffect));return;}
    const custom=event.target.closest('[data-combat-custom]');
    if(custom){
      const preset=(state().damagePresets||[]).find(x=>x.id===custom.dataset.combatCustom);
      if(preset)effectRoll({label:preset.name,formula:preset.formula});return;
    }
    const del=event.target.closest('[data-combat-delete]');
    if(del){
      if(confirm('Delete this custom dice roll?'))api.deleteDamagePreset(del.dataset.combatDelete);
      return;
    }
  });
  $('combat-attack-mod').addEventListener('input',render);
  $('combat-spectral-hand').addEventListener('change',render);
  $('combat-custom-form').addEventListener('submit',event=>{
    event.preventDefault();
    const name=$('combat-custom-name').value.trim();
    const formula=$('combat-custom-formula').value.trim();
    if(!api.saveDamagePreset(name,formula)){
      $('dice-breakdown').textContent='Invalid formula or full preset list. Try 2d6+3 (1–40 dice, single die type).';
      return;
    }
    $('combat-custom-name').value='';$('combat-custom-formula').value='';
  });
  window.refreshCombatRolls=render;
  window.grimoireTouchAttack=rollAttack;
  render();
})();
