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
  const casterContext=()=>({casterLevel:state().spellcastingLevel,necroLevel:state().spellcastingLevel+1});
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
    const spellNames=[
      'Orb of Force','Disrupt Undead','Acid Splash','Undead Torch','Enervation',
      'Ray of Enfeeblement','False Life','Spectral Hand','Spectral Dragon',
      'Necrotic Bloat','Necrotic Burst','Necrotic Eruption','Necrotic Termination',
      'Heartfreeze'
    ];
    for(const name of spellNames){
      if(!has(name))continue;
      const roll=refs?.rollFor({name},casterContext());
      if(roll)add('spell-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),roll.label,roll.formula,
        roll.attack?roll.attack+' touch attack required when targeting a hostile creature.':'');
    }
    const inv=s.sheet?.inventory||[];
    const item=id=>inv.find(x=>x.id===id&&x.qty>0);
    if(item('wand-orb-force')){
      add('wand-orb-force','Wand of Orb of Force (CL 7) · force damage','7d6','Ranged touch hit first. Does not automatically spend a wand charge.');
    }
    if(item('staff-transmutation')){
      add('staff-disintegrate','Staff Disintegrate (CL 13) · failed save','26d6','Ranged touch followed by Fortitude save; 3 staff charges if used.');
      add('staff-disintegrate-save','Staff Disintegrate · successful Fortitude save','5d6','Use this instead if the target makes its Fortitude save. Does not spend charges.');
    }
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
