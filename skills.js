/* Malzareth's post-lich skill ledger, level 12, 28 Tarsakh 1373 DR.
   Source: Malzareth_Vhane_Updated_Character_Sheet_v3.pdf (p. 2).
   Totals incorporate recorded racial, feat, gear and synergy bonuses.
   Ranks and extra modifiers are adjustable; ability changes recalculate.
   Only a modifier tracker: this does not spend/validate skill points. */
(() => {
  'use strict';
  const BASE_ABILITIES={STR:10,DEX:18,INT:30,WIS:12,CHA:20};
  // [id, name, ability, ranks, total, group, trainedOnly, notes]
  const base=[
    ['concentration','Concentration','CHA',23,28,'Arcane',false,'Undead: Charisma instead of Constitution'],
    ['craft','Craft (any)','INT',0,10,'Practical',false,'Specify a craft when rolling'],
    ['decipher-script','Decipher Script','INT',18,28,'Arcane'],
    ['knowledge-arcana','Knowledge (arcana)','INT',23,33,'Knowledge'],
    ['knowledge-architecture','Knowledge (architecture & engineering)','INT',2,12,'Knowledge'],
    ['knowledge-dungeoneering','Knowledge (dungeoneering)','INT',2,12,'Knowledge'],
    ['knowledge-geography','Knowledge (geography)','INT',1,11,'Knowledge'],
    ['knowledge-history','Knowledge (history)','INT',10,20,'Knowledge'],
    ['knowledge-local','Knowledge (local)','INT',9,19,'Knowledge'],
    ['knowledge-nature','Knowledge (nature)','INT',1,11,'Knowledge'],
    ['knowledge-nobility','Knowledge (nobility & royalty)','INT',12,22,'Knowledge'],
    ['knowledge-religion','Knowledge (religion)','INT',4,14,'Knowledge'],
    ['knowledge-planes','Knowledge (the planes)','INT',20,30,'Knowledge'],
    ['profession','Profession (any)','WIS',0,1,'Practical',true,'Needs training for normal skill use'],
    ['spellcraft','Spellcraft','INT',23,38,'Arcane',false,'Includes Skill Focus +3 and synergy +2'],
    ['appraise','Appraise','INT',0,10,'Practical'],
    ['balance','Balance','DEX',0,4,'Movement'],
    ['bluff','Bluff','CHA',4,11,'Social',false,'Includes lesser tiefling racial +2'],
    ['climb','Climb','STR',0,0,'Movement'],
    ['diplomacy','Diplomacy','CHA',0,5,'Social'],
    ['disable-device','Disable Device','INT',0,10,'Practical',true,'Trained only'],
    ['disguise','Disguise','CHA',0,5,'Social',false,'Ring of Mortal Guise variant available below'],
    ['escape-artist','Escape Artist','DEX',0,4,'Movement'],
    ['gather-information','Gather Information','CHA',0,7,'Social'],
    ['forgery','Forgery','INT',0,10,'Practical'],
    ['heal','Heal','WIS',0,1,'Practical'],
    ['handle-animal','Handle Animal','CHA',0,5,'Practical',true,'Trained only'],
    ['hide','Hide','DEX',0,12,'Movement',false,'Lich +8 racial bonus'],
    ['intimidate','Intimidate','CHA',19,24,'Social'],
    ['jump','Jump','STR',0,0,'Movement'],
    ['listen','Listen','WIS',0,9,'Perception',false,'Lich +8 racial bonus'],
    ['move-silently','Move Silently','DEX',0,12,'Movement',false,'Lich +8 racial bonus'],
    ['open-lock','Open Lock','DEX',0,4,'Practical',true,'Trained only'],
    ['perform','Perform (any)','CHA',0,5,'Social',true,'Trained for normal skill use'],
    ['ride','Ride','DEX',0,4,'Movement'],
    ['search','Search','INT',0,18,'Perception',false,'Lich +8 racial bonus'],
    ['sense-motive','Sense Motive','WIS',0,9,'Perception',false,'Lich +8 racial bonus'],
    ['sleight-of-hand','Sleight of Hand','DEX',3,7,'Practical',true,'Trained only'],
    ['spot','Spot','WIS',0,9,'Perception',false,'Lich +8 racial bonus'],
    ['survival','Survival','WIS',0,1,'Perception'],
    ['swim','Swim','STR',0,0,'Movement'],
    ['tumble','Tumble','DEX',0,4,'Movement',true,'Trained only'],
    ['use-rope','Use Rope','DEX',0,4,'Practical'],
    ['use-magic-device','Use Magic Device','CHA',4,9,'Arcane',true,'Scroll activation variant available below'],
    ['truespeak','Truespeak','INT',7,17,'Arcane',true,'Seven cross-class ranks: includes 4 new ranks at level 20 (8 skill points). The target’s personal truename must first be discovered; speaking it requires a check (Tome of Magic).']
  ].map(([id,name,ability,ranks,total,group,trainedOnly=false,notes=''])=>
    ({id,name,ability,ranks,total,group,trainedOnly,notes}));
  // Variant modifiers are derived from the base skill's *current* bonus,
  // including future skill ranks, adjustments and ability increases.
  const variants=[
    {id:'spellcraft-necromancy',name:'Spellcraft · learn Necromancy',baseId:'spellcraft',modifier:2,group:'Special cases',notes:'Master Specialist +2 when learning a spell of the specialty school'},
    {id:'use-magic-device-scroll',name:'Use Magic Device · scroll',baseId:'use-magic-device',modifier:4,group:'Special cases',notes:'+2 Decipher Script and +2 Spellcraft synergy for scrolls'},
    {id:'disguise-ring',name:'Disguise · Ring of Mortal Guise',baseId:'disguise',modifier:10,group:'Special cases',notes:'Disguise Self from ring adds +10 while the effect applies'}
  ];
  const quick=[
    {id:'initiative',name:'Initiative',ability:'DEX',ranks:0,total:7,group:'Quick checks',notes:'Includes Improved Initiative +4 and Belt of Battle +2 competence when equipped'},
    {id:'fortitude-save',name:'Fortitude save',ability:null,ranks:0,total:6,group:'Quick checks',notes:'Undead have no Constitution; live total includes the equipped cloak +5'},
    {id:'reflex-save',name:'Reflex save',ability:'DEX',ranks:0,total:9,group:'Quick checks',notes:'Live total includes the equipped cloak of Resistance +5'},
    {id:'will-save',name:'Will save',ability:'WIS',ranks:0,total:13,group:'Quick checks',notes:'Live total includes the equipped cloak of Resistance +5'}
  ];
  const byId=new Map([...base,...quick,...variants].map(skill=>[skill.id,skill]));
  const $=id=>document.getElementById(id);
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const signed=n=>n>=0?'+'+n:String(n);
  const mod=score=>Math.floor((Number(score)-10)/2);
  const state=()=>window.GRIMOIRE?.getState();
  const abilityScore=(code,s)=>{
    if(!code)return null;
    return code==='INT' ? s.intelligence : (s.abilities?.[code]??BASE_ABILITIES[code]);
  };
  function details(skill,localOverride=null){
    const s=state();
    if(skill.baseId){
      const parent=details(byId.get(skill.baseId));
      return {...parent,bonus:parent.bonus+skill.modifier,notes:skill.notes};
    }
    const over=localOverride||s.skillOverrides?.[skill.id]||{};
    const ranks=Number.isFinite(Number(over.ranks))?Number(over.ranks):skill.ranks;
    const extra=Number.isFinite(Number(over.extra))?Number(over.extra):0;
    // Combat quick checks come from the live Character Folio rather than
    // remaining stuck on the original printed saving throws.
    const c=s.sheet?.combat;
    if(c && skill.group==='Quick checks'){
      const dex=mod(abilityScore('DEX',s)),wis=mod(abilityScore('WIS',s));
      const haste=c.buffs?.haste?1:0;
      const numbers={
        'initiative':dex+c.initiativeMisc,
        'fortitude-save':c.baseSaves.fort+c.saveResistance+c.saveMisc.fort,
        'reflex-save':c.baseSaves.ref+dex+c.saveResistance+c.saveMisc.ref+haste,
        'will-save':c.baseSaves.will+wis+c.saveResistance+c.saveMisc.will
      };
      return {bonus:(numbers[skill.id]??skill.total)+extra,ranks:0,extra,trainedOnly:false,canRoll:true};
    }
    const delta=skill.ability
      ? mod(abilityScore(skill.ability,s))-mod(BASE_ABILITIES[skill.ability])
      : 0;
    const bonus=skill.total+delta+(ranks-skill.ranks)+extra;
    return {bonus,ranks,extra,trainedOnly:!!skill.trainedOnly,canRoll:!skill.trainedOnly||ranks>0};
  }
  function render(){
    const query=$('skill-search').value.trim().toLowerCase();
    const situational=Math.max(-100,Math.min(100,Math.trunc(Number($('skill-situational').value)||0)));
    const row=(spec)=>{
      const det=details(spec);
      const canRoll=det.canRoll;
      const bonus=det.bonus+situational;
      const title=spec.notes||'';
      const hint=spec.baseId?'Variant · edit the underlying skill':spec.ability||'Ability-independent';
      return `<div class="skill-row" title="${esc(title)}">
        <div class="skill-row-info"><strong>${esc(spec.name)}</strong><small>${esc(hint)} · ${det.ranks} ranks${canRoll?'':' · trained only'}</small></div>
        <button type="button" class="skill-roll" data-skill-roll="${esc(spec.id)}" ${canRoll?'':'disabled title="Requires training (rank 1 or higher)"'}>⚄ ${signed(bonus)}</button>
        <button type="button" class="skill-edit" data-skill-edit="${esc(spec.baseId||spec.id)}" title="Edit ranks and modifiers for ${esc(spec.name)}" aria-label="Edit ${esc(spec.name)}">✎</button>
      </div>`;
    };
    $('skill-quick-rolls').innerHTML=quick.filter(skill=>!query||skill.name.toLowerCase().includes(query)).map(row).join('');
    const featured=['spellcraft','knowledge-arcana','concentration','truespeak'];
    $('skill-favourites').innerHTML=featured.map(id=>byId.get(id))
      .filter(spec=>spec&&(!query||spec.name.toLowerCase().includes(query)))
      .map(row).join('')||'<p class="muted small">No frequent skills matched; search all skills below.</p>';
    if(query)$('skill-all-panel').open=true;
    const groups=['Arcane','Knowledge','Perception','Movement','Social','Practical','Special cases'];
    $('skill-list').innerHTML=groups.map(group=>{
      const subset=[...base,...variants].filter(spec=>spec.group===group && (!query||spec.name.toLowerCase().includes(query)||spec.ability?.toLowerCase().includes(query)));
      // Speak Language is a skill, but D&D 3.5 does not use a die check for it.
      // Language learning has no die roll; omit it from the Dice tab.
      const language='';
      if(!subset.length&&!language)return '';
      return `<section class="skill-group"><h4>${esc(group)} <span>${subset.length+(language?1:0)}</span></h4><div class="skill-group-rows">${subset.map(row).join('')}${language}</div></section>`;
    }).join('')+(query&&![...base,...variants,...quick].some(spec=>spec.name.toLowerCase().includes(query))&&!'speak language'.includes(query)?'<p class="muted">No matching skill checks.</p>':'');
  }
  function rollSkill(id){
    const skill=byId.get(id);
    if(!skill)return;
    const det=details(skill);
    if(!det.canRoll)return;
    const extra=Math.max(-100,Math.min(100,Math.trunc(Number($('skill-situational').value)||0)));
    const total=det.bonus+extra;
    if(!window.grimoireRollCheck?.({label:skill.name,modifier:total,sides:20})){
      $('dice-result').textContent='Dice still rolling — try again.';
    }
  }
  function editSkill(id){
    const spec=byId.get(id);
    if(!spec||spec.baseId)return;
    const det=details(spec);
    $('skill-edit-id').value=id;
    $('skill-dialog-title').textContent=spec.name;
    $('skill-editor-description').textContent=(spec.ability||'Fixed')+' · base '+signed(spec.total)+'. '+(spec.notes||'');
    $('skill-edit-ranks').value=det.ranks;
    $('skill-edit-ranks').disabled=quick.includes(spec);
    $('skill-edit-extra').value=det.extra;
    updatePreview();
    $('skill-dialog').showModal();
  }
  function updatePreview(){
    const spec=byId.get($('skill-edit-id').value);
    if(!spec)return;
    const ranks=Math.max(0,Math.min(60,Math.trunc(Number($('skill-edit-ranks').value)||0)));
    const extra=Math.max(-100,Math.min(100,Math.trunc(Number($('skill-edit-extra').value)||0)));
    const det=details(spec,{ranks,extra});
    $('skill-editor-total').textContent='Updated check: d20 '+signed(det.bonus)+(spec.trainedOnly&&ranks===0?' (untrained: cannot roll normally)':'');
  }
  function close(){$('skill-dialog').close();}
  document.addEventListener('click',event=>{
    const roll=event.target.closest('[data-skill-roll]');
    if(roll){rollSkill(roll.dataset.skillRoll);return;}
    const edit=event.target.closest('[data-skill-edit]');
    if(edit){editSkill(edit.dataset.skillEdit);return;}
  });
  $('skill-search').addEventListener('input',render);
  $('skill-situational').addEventListener('input',render);
  $('skill-dialog-close').addEventListener('click',close);
  $('skill-edit-cancel').addEventListener('click',close);
  $('skill-dialog').addEventListener('click',event=>{if(event.target.id==='skill-dialog')close();});
  $('skill-edit-ranks').addEventListener('input',updatePreview);
  $('skill-edit-extra').addEventListener('input',updatePreview);
  $('skill-form').addEventListener('submit',event=>{
    event.preventDefault();
    window.GRIMOIRE?.updateSkill($('skill-edit-id').value,$('skill-edit-ranks').value,$('skill-edit-extra').value);
    close();
  });
  $('skill-edit-reset').addEventListener('click',()=>{
    window.GRIMOIRE?.resetSkill($('skill-edit-id').value);
    close();
  });
  // Called after the main app's restore/import/settings changes.
  window.refreshGrimoireSkills=render;
  render();
})();
