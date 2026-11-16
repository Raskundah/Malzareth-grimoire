/* Malzareth's Character Folio — offline, no framework, local-only saves.
   Source data and migrations are managed in sheet-data.js / app.js. */
(() => {
  'use strict';
  const api=window.GRIMOIRE;
  if(!api)return;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const signed=n=>n>=0?'+'+n:String(n);
  const num=(v,def=0)=>Number.isFinite(Number(v))?Number(v):def;
  const whole=(v,def=0,min=-999999,max=999999)=>Math.max(min,Math.min(max,Math.trunc(num(v,def))));
  const mod=score=>Math.floor((num(score,10)-10)/2);
  const uid=()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():'local-'+Date.now()+'-'+Math.random().toString(36).slice(2);
  const get=()=>api.getState();
  const sheet=()=>get().sheet;
  const save=fn=>api.updateSheet(fn);
  let tab='overview',inventoryQuery='';
  const blankItem=()=>({id:uid(),name:'',category:'Other',location:'Carried',qty:1,
    weightLb:null,valueGp:null,charges:null,maxCharges:null,equipped:false,notes:'',certainty:'user'});
  const blankFeat=()=>({id:uid(),name:'',kind:'General',source:'',effect:'',notes:'',usesPerDay:null,usedToday:0});
  const blankFeature=()=>({id:uid(),name:'',category:'Other',effect:'',notes:'',usesPerDay:null,usedToday:0});

  function calcCombat(){
    const s=get(),c=sheet().combat,a=s.abilities;
    const dex=mod(a.DEX),wis=mod(a.WIS),str=mod(a.STR),cha=mod(a.CHA);
    const haste=c.buffs.haste?1:0,mage=c.buffs.greaterMageArmor?6:0,
      shield=c.buffs.shield?4:0;
    const ac=10+dex+c.naturalArmor+c.enhanceNatural+c.deflection+
      c.armorMisc+c.shieldMisc+haste+mage+shield;
    const touch=10+dex+c.deflection+haste;
    const flat=10+c.naturalArmor+c.enhanceNatural+c.deflection+
      c.armorMisc+c.shieldMisc+mage+shield;
    const saves={
      fort:c.baseSaves.fort+c.saveResistance+c.saveMisc.fort,
      ref:c.baseSaves.ref+dex+c.saveResistance+c.saveMisc.ref,
      will:c.baseSaves.will+wis+c.saveResistance+c.saveMisc.will
    };
    const hd=whole(sheet().identity.characterLevel,12,1,99);
    return {ac,touch,flat,saves,
      initiative:dex+c.initiativeMisc,melee:c.bab+str+c.attackMisc,
      ranged:c.bab+dex+c.attackMisc,grapple:c.bab+str,
      lichDC:10+Math.floor(hd/2)+cha,haste,mage,shield};
  }
  function stat(label,value,note=''){
    return `<div class="sheet-stat"><small>${esc(label)}</small><strong>${esc(value)}</strong>${note?`<span>${esc(note)}</span>`:''}</div>`;
  }
  function field(id,label,value,type='text',extra=''){
    return `<label>${esc(label)}<input id="${id}" type="${type}" value="${esc(value??'')}" ${extra}></label>`;
  }
  function area(id,label,value,rows=3){
    return `<label class="sheet-wide">${esc(label)}<textarea id="${id}" rows="${rows}">${esc(value??'')}</textarea></label>`;
  }
  function row(title,value,note=''){
    return `<div class="sheet-line"><span>${esc(title)}</span><strong>${esc(value)}</strong>${note?`<small>${esc(note)}</small>`:''}</div>`;
  }
  function renderIdentity(){
    const s=sheet(),id=s.identity,done=Math.max(0,id.xp),next=Math.max(done+1,id.xpNext);
    // Conventional 3.5 XP floor for the current class level; campaign LA
    // buyoff ruling remains unresolved, so this is only a visual guide.
    const previous=Math.max(0,Math.trunc((id.characterLevel-1)*id.characterLevel*500));
    const progress=Math.max(0,Math.min(100,100*(done-previous)/Math.max(1,next-previous)));
    $('sheet-identity').innerHTML=`<div><p class="overline">${esc(id.title)} · ${esc(id.era)}</p><h3>${esc(id.name)}</h3>
      <p class="muted">${esc(id.race)} · ${esc(id.characterClass)} · ${esc(id.alignment)}</p>
      <p class="muted small">${esc(id.origin)} · ${esc(id.size)} · ${esc(id.campaign)}</p></div>
      <div class="sheet-xp"><strong>Level ${esc(id.characterLevel)}</strong><span>${esc(id.xp.toLocaleString('en-GB'))} / ${esc(id.xpNext.toLocaleString('en-GB'))} XP</span>
      <div class="meter-track"><div class="meter-fill" style="width:${progress}%"></div></div><small class="muted">${esc(id.xpNote)}</small></div>`;
    const state=get(),a=state.abilities;
    const names=[['STR','Strength'],['DEX','Dexterity'],['CON','Constitution'],['INT','Intelligence'],['WIS','Wisdom'],['CHA','Charisma']];
    $('sheet-summary').innerHTML=names.map(([key,name])=>{
      if(key==='CON')return stat(name,'—','Undead');
      const score=key==='INT'?state.intelligence:a[key];
      return stat(name,score,signed(mod(score)));
    }).join('');
  }
  function renderCombat(){
    const sh=sheet(),c=sh.combat,x=calcCombat(),hp=c.currentHP,temp=c.tempHP;
    $('sheet-vitals').innerHTML=`<div class="sheet-summary compact">${stat('Current HP',hp,'Max '+c.maxHP)}${stat('Temporary HP',temp)}${stat('Action points',c.actionPoints,'Last reported; verify uses')}${stat('Speed',c.speedFt+' ft.')}</div>
      <div class="meter-track sheet-hp-meter"><div class="meter-fill" style="width:${Math.max(0,Math.min(100,c.maxHP?100*hp/c.maxHP:0))}%"></div></div>
      ${hp<=0?'<p class="sheet-warning">At 0 HP, an undead creature is destroyed under standard rules.</p>':''}`;
    $('sheet-temp-hp').value=temp;
    $('sheet-action-points').value=c.actionPoints;
    $('sheet-defences').innerHTML=`<div class="sheet-summary compact">${stat('Armour Class',x.ac)}${stat('Touch AC',x.touch)}${stat('Flat-footed AC',x.flat)}${stat('Damage Reduction','15/ bludgeoning + magic')}</div>`;
    for(const [key,val] of Object.entries(c.buffs))document.querySelectorAll('[data-sheet-buff="'+key+'"]').forEach(el=>el.checked=val);
    $('sheet-attacks').innerHTML=`<div class="sheet-summary compact">${stat('Initiative',signed(x.initiative))}${stat('BAB',signed(c.bab))}${stat('Melee touch',signed(x.melee))}${stat('Ranged touch',signed(x.ranged))}${stat('Grapple',signed(x.grapple))}${stat('Lich ability DC',x.lichDC)}</div>
      <div class="sheet-summary compact">${stat('Fortitude',signed(x.saves.fort))}${stat('Reflex',signed(x.saves.ref))}${stat('Will',signed(x.saves.will))}</div>
      <p class="muted small">Negative energy touch: 1d8+5; Will DC ${x.lichDC} halves. Paralysing touch: Fort DC ${x.lichDC}. Fear aura: Will DC ${x.lichDC} (targets below 5 HD).</p>
      <p class="muted small">${esc(c.attackNotes)}</p>`;
    $('sheet-special-defences').innerHTML=`<p class="muted small">${esc(c.defencesNotes)}</p>
      <p class="muted small">Undead immunities include poison, sleep, paralysis, stunning, disease, death effects, critical hits, nonlethal damage, fatigue and exhaustion. No Constitution score.</p>
      <p class="muted small">${esc(c.actionNote)}</p>`;
    $('sheet-conditions').value=c.conditions;
  }
  function profileFields(){
    const a=sheet().identity,c=sheet().combat;
    const top=[
      field('cf-name','Name',a.name),field('cf-title','Title',a.title),
      field('cf-race','Race / template',a.race),field('cf-class','Class & levels',a.characterClass),
      field('cf-alignment','Alignment',a.alignment),field('cf-level','Character level (HD)',a.characterLevel,'number','min="1" max="99"'),
      field('cf-xp','Experience',a.xp,'number','min="0"'),field('cf-next','Next level XP',a.xpNext,'number','min="0"'),
      field('cf-origin','Origin',a.origin),field('cf-size','Size',a.size),
      field('cf-campaign','Campaign',a.campaign),field('cf-era','Campaign date',a.era),
      field('cf-languages','Languages known',a.languages),field('cf-deity','Deity / patron',a.deity),
      area('cf-description','Appearance / identifying details',a.description),
      area('cf-player-notes','Additional character notes',a.playerNotes),
      area('cf-xp-note','XP and LA / buyoff notes',a.xpNote)
    ];
    const combat=[
      field('cf-maxhp','Maximum HP',c.maxHP,'number'),field('cf-speed','Base speed (ft)',c.speedFt,'number'),
      field('cf-bab','Base Attack Bonus',c.bab,'number'),
      field('cf-natural','Lich natural armour',c.naturalArmor,'number'),
      field('cf-amulet','Enhancement to natural armour',c.enhanceNatural,'number'),
      field('cf-deflection','Deflection bonus',c.deflection,'number'),
      field('cf-resistance','Save resistance bonus',c.saveResistance,'number'),
      field('cf-armor','Other armour bonus',c.armorMisc,'number'),
      field('cf-shield','Other shield bonus',c.shieldMisc,'number'),
      field('cf-init','Initiative misc (includes feat)',c.initiativeMisc,'number'),
      field('cf-attack','Attack misc bonus',c.attackMisc,'number'),
      field('cf-fort','Base Fortitude',c.baseSaves.fort,'number'),
      field('cf-ref','Base Reflex',c.baseSaves.ref,'number'),
      field('cf-will','Base Will',c.baseSaves.will,'number'),
      field('cf-fortmisc','Fortitude misc',c.saveMisc.fort,'number'),
      field('cf-refmisc','Reflex misc',c.saveMisc.ref,'number'),
      field('cf-willmisc','Will misc',c.saveMisc.will,'number'),
      area('cf-attacknotes','Attack reference',c.attackNotes),
      area('cf-defencenotes','Defensive traits',c.defencesNotes),
      area('cf-actionnote','Action point tracking note',c.actionNote)
    ];
    $('sheet-profile-fields').innerHTML='<h4 class="sheet-wide">Identity &amp; advancement</h4>'+top.join('')+
      '<h4 class="sheet-wide">Combat values and adjustments</h4>'+combat.join('');
  }
  function capacity(){
    const items=sheet().inventory;
    const inBag=items.filter(x=>x.location.toLowerCase().includes('bag of holding'));
    const carried=items.filter(x=>['carried','worn'].includes(x.location.toLowerCase()));
    const sum=xs=>xs.reduce((n,x)=>n+(x.weightLb===null?0:x.weightLb*x.qty),0);
    const unknown=xs=>xs.filter(x=>x.weightLb===null&&x.qty>0).length;
    const bagWeight=sum(inBag);
    const loadWeight=sum(carried);
    return `<div class="sheet-capacity"><strong>Weight tracking (known weights only)</strong>
      <span>Carried / worn: ${loadWeight.toFixed(1)} lb ${unknown(carried)?'· '+unknown(carried)+' items unknown':''}</span>
      <span>Inside Bag of Holding: ${bagWeight.toFixed(1)} / 1,500 lb ${unknown(inBag)?'· '+unknown(inBag)+' items unknown':''}</span>
      <small class="muted">Bag capacity also limited to 250 cubic feet. Total carrying load remains a partial estimate until item weights and contents are recorded.</small></div>`;
  }
  function renderInventory(){
    const sh=sheet(),c=sh.currency;
    for(const [id,key] of [['sheet-pp','pp'],['sheet-gp','gp'],['sheet-sp','sp'],['sheet-cp','cp'],['sheet-treasury','fortressTreasuryGp']]){
      $(id).value=c[key];
    }
    $('sheet-money-notes').value=c.notes;
    $('sheet-inventory-count').textContent=sh.inventory.length+' item entries · quantities and charges editable';
    $('sheet-capacity').innerHTML=capacity();
    const q=inventoryQuery.trim().toLowerCase();
    const filtered=sh.inventory.filter(x=>!q||[x.name,x.category,x.location,x.notes].join(' ').toLowerCase().includes(q));
    $('sheet-items').innerHTML=filtered.length?filtered.map(x=>{
      const quantity=x.qty===1?'':x.qty+' × ';
      const charges=x.charges!==null?`<span class="item-charge">${x.charges}/${x.maxCharges??'?'} charges</span>`:'';
      const label=x.certainty==='unverified'?'Needs appraisal':x.certainty==='last-sheet'?'Last sheet':x.certainty==='recent-session'?'Recent session':'Recorded';
      return `<article class="sheet-item" data-entry-id="${esc(x.id)}">
        <div class="sheet-item-main"><strong>${esc(quantity+x.name)}</strong><div class="sheet-tags"><span>${esc(x.category)}</span><span>${esc(x.location)}</span><span>${esc(label)}</span>${x.equipped?'<span>Equipped</span>':''}</div>
        ${x.notes?`<p class="muted small">${esc(x.notes)}</p>`:''}
        <div class="sheet-item-meta">${x.weightLb!==null?`Weight ${esc((x.weightLb*x.qty).toFixed(1))} lb`:''}${x.valueGp!==null?` · Value ${esc(x.valueGp.toLocaleString('en-GB'))} gp`:''}${charges}</div>
        </div>
        <div class="sheet-item-actions">
          ${x.charges!==null?`<button type="button" data-sheet-action="use-charge" data-id="${esc(x.id)}" ${x.charges<=0?'disabled':''}>−1 charge</button>`:''}
          ${x.category==='Consumable'?`<button type="button" data-sheet-action="use-item" data-id="${esc(x.id)}" ${x.qty<=0?'disabled':''}>−1 used</button>`:''}
          <button type="button" data-sheet-action="edit-item" data-id="${esc(x.id)}">Edit</button>
        </div></article>`;
    }).join(''):'<p class="muted">No inventory items match this search.</p>';
  }
  function renderFeats(){
    const sh=sheet();
    const card=(x,kind)=>{
      const max=x.usesPerDay,used=whole(x.usedToday,0,0,9999);
      const limited=max!==null;
      const usage=limited?`<span class="sheet-usage">${used}/${max} used today</span>`:'';
      const buttons=limited?`<button type="button" data-sheet-action="spend-use" data-kind="${kind}" data-id="${esc(x.id)}" ${used>=max?'disabled':''}>Use</button><button type="button" data-sheet-action="restore-use" data-kind="${kind}" data-id="${esc(x.id)}" ${used<=0?'disabled':''}>Restore</button>`:'';
      return `<article class="sheet-ability-card"><div><strong>${esc(x.name)}</strong><span class="muted small">${esc(kind==='feats'?x.kind+' · '+x.source:x.category)}</span>
        <p>${esc(kind==='feats'?x.effect:x.effect)}</p>${x.notes?`<p class="muted small">${esc(x.notes)}</p>`:''}${usage}
      </div><div class="sheet-ability-actions">${buttons}<button type="button" data-sheet-action="edit-${kind==='feats'?'feat':'feature'}" data-id="${esc(x.id)}">Edit</button></div></article>`;
    };
    $('sheet-feat-list').innerHTML=sh.feats.map(x=>card(x,'feats')).join('');
    $('sheet-feature-list').innerHTML=sh.features.map(x=>card(x,'features')).join('');
  }
  function renderAudit(){
    const sh=sheet();
    const checkbox=sh.audit.map((note,i)=>{
      const completed=sh.resolvedAudit.includes(note);
      return `<label class="sheet-audit-item ${completed?'done':''}"><input type="checkbox" data-sheet-audit="${i}" ${completed?'checked':''}><span>${esc(note)}</span></label>`;
    }).join('');
    $('sheet-audit-list').innerHTML=checkbox;
    const alerts=[];
    if(!sh.identity.languages.trim())alerts.push('Languages have not been transcribed yet.');
    if(sh.inventory.some(x=>x.certainty==='unverified'))alerts.push('Several item identifications and storage locations remain unverified.');
    if(sh.inventory.some(x=>x.weightLb===null))alerts.push('Carrying capacity cannot yet be fully calculated because item weights are missing.');
    if(sh.combat.actionPoints===7)alerts.push('Action points may be historical; check recent expenditure.');
    if(sh.identity.xp===71975)alerts.push('XP remains at the latest printed sheet amount; confirm newer awards.');
    const count=sh.audit.length-sh.resolvedAudit.length;
    $('sheet-audit-summary').innerHTML=`<div class="sheet-summary compact">${stat('Recorded feats',sh.feats.length)}${stat('Inventory entries',sh.inventory.length)}${stat('Open audit issues',count)}${stat('Daily spells',get().slots.reduce((a,b)=>a+b,0))}</div>
       <p class="muted small">Core fields covered: identity, ability scores, HP, AC, attacks, saves, initiative, speed, XP, skills, feats, class features, spellbook, spell slots, wealth and possessions.</p>
       ${alerts.length?'<ul class="sheet-alerts">'+alerts.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'<p>All automated checks cleared. Review campaign-specific rulings manually.</p>'}`;
  }
  function render(){
    if(!sheet())return;
    for(const button of document.querySelectorAll('[data-sheet-tab]'))button.classList.toggle('active',button.dataset.sheetTab===tab);
    for(const key of ['overview','inventory','feats','audit'])$('sheet-'+key).hidden=tab!==key;
    renderIdentity();renderCombat();profileFields();renderInventory();renderFeats();renderAudit();
  }
  function setTab(name){
    if(!['overview','inventory','feats','audit'].includes(name))return;
    tab=name;render();
  }

  // Reusable add/edit form for inventory items, feats and racial/class powers.
  function openEditor(kind,id){
    const list=kind==='item'?'inventory':kind==='feat'?'feats':'features';
    const record=id?sheet()[list].find(x=>x.id===id):null;
    const x=record||({item:blankItem,feat:blankFeat,feature:blankFeature}[kind]());
    $('sheet-edit-kind').value=kind;$('sheet-edit-id').value=record?.id||'';
    $('sheet-dialog-title').textContent=(record?'Edit ':'Add ')+({item:'item',feat:'feat',feature:'feature'}[kind]);
    let fields;
    if(kind==='item')fields=[
      field('sf-name','Item name',x.name),field('sf-category','Category',x.category),
      field('sf-location','Location (e.g. Carried, Worn, Bag of Holding)',x.location),
      field('sf-qty','Quantity',x.qty,'number','min="0"'),
      field('sf-weight','Weight per item (lb; blank = unknown)',x.weightLb,'number','min="0" step="0.01"'),
      field('sf-value','Last known total value (gp; optional)',x.valueGp,'number','min="0" step="0.01"'),
      field('sf-charges','Current charges (optional)',x.charges,'number','min="0"'),
      field('sf-maxcharges','Maximum charges (optional)',x.maxCharges,'number','min="0"'),
      field('sf-certainty','Ledger source (recorded, recent-session, unverified)',x.certainty),
      `<label class="sheet-toggle-field"><input type="checkbox" id="sf-equipped" ${x.equipped?'checked':''}> Equipped / worn</label>`,
      area('sf-notes','Description, special rules or provenance',x.notes,4)
    ];
    else if(kind==='feat')fields=[
      field('sf-name','Feat name',x.name),field('sf-category','Category',x.kind),
      field('sf-source','Rulebook / source',x.source),
      field('sf-uses','Daily uses (blank = unlimited/passive)',x.usesPerDay,'number','min="0"'),
      field('sf-used','Uses expended today',x.usedToday,'number','min="0"'),
      area('sf-effect','Benefit / description',x.effect,4),
      area('sf-notes','Notes',x.notes,3)
    ];
    else fields=[
      field('sf-name','Feature or power',x.name),
      field('sf-category','Category (class, race, lich, etc.)',x.category),
      field('sf-uses','Daily uses (blank = unlimited/passive)',x.usesPerDay,'number','min="0"'),
      field('sf-used','Uses expended today',x.usedToday,'number','min="0"'),
      area('sf-effect','Effect / description',x.effect,4),area('sf-notes','Notes',x.notes,3)
    ];
    $('sheet-edit-fields').innerHTML=fields.join('');
    $('sheet-entry-delete').hidden=!record;
    $('sheet-dialog').showModal();
  }
  const val=id=>$(id)?.value??'';
  const readMaybe=id=>val(id).trim()===''?null:num(val(id),null);
  function saveEntry(event){
    event.preventDefault();
    const kind=val('sheet-edit-kind'),id=val('sheet-edit-id');
    const list=kind==='item'?'inventory':kind==='feat'?'feats':'features';
    if(!['inventory','feats','features'].includes(list)||!val('sf-name').trim())return;
    save(sh=>{
      let item=sh[list].find(x=>x.id===id);
      if(!item){
        item=kind==='item'?blankItem():kind==='feat'?blankFeat():blankFeature();
        sh[list].push(item);
      }
      item.name=val('sf-name').trim();
      item.notes=val('sf-notes');
      if(kind==='item'){
        item.category=val('sf-category').trim()||'Other';
        item.location=val('sf-location').trim()||'Carried';
        item.qty=whole(val('sf-qty'),1,0,999999);
        item.weightLb=readMaybe('sf-weight');
        item.valueGp=readMaybe('sf-value');
        item.charges=readMaybe('sf-charges');
        item.maxCharges=readMaybe('sf-maxcharges');
        item.certainty=val('sf-certainty').trim()||'user';
        item.equipped=$('sf-equipped').checked;
      }else{
        if(kind==='feat'){item.kind=val('sf-category').trim();item.source=val('sf-source').trim();}
        else item.category=val('sf-category').trim();
        item.effect=val('sf-effect');
        item.usesPerDay=readMaybe('sf-uses');
        item.usedToday=whole(val('sf-used'),0,0,9999);
      }
    });
    $('sheet-dialog').close();
  }
  function deleteEntry(){
    const kind=val('sheet-edit-kind'),id=val('sheet-edit-id');
    const list=kind==='item'?'inventory':kind==='feat'?'feats':'features';
    if(!id||!confirm('Delete this character record entry? This cannot be undone except by restoring a JSON backup.'))return;
    save(sh=>{sh[list]=sh[list].filter(x=>x.id!==id);});
    $('sheet-dialog').close();
  }

  function saveProfile(event){
    event.preventDefault();
    const fields={
      name:'cf-name',title:'cf-title',race:'cf-race',characterClass:'cf-class',alignment:'cf-alignment',
      origin:'cf-origin',size:'cf-size',campaign:'cf-campaign',era:'cf-era',
      languages:'cf-languages',deity:'cf-deity',description:'cf-description',playerNotes:'cf-player-notes',xpNote:'cf-xp-note'
    };
    const combatFields={
      maxHP:'cf-maxhp',speedFt:'cf-speed',bab:'cf-bab',naturalArmor:'cf-natural',
      enhanceNatural:'cf-amulet',deflection:'cf-deflection',saveResistance:'cf-resistance',
      armorMisc:'cf-armor',shieldMisc:'cf-shield',initiativeMisc:'cf-init',attackMisc:'cf-attack'
    };
    save(sh=>{
      for(const [key,input] of Object.entries(fields))sh.identity[key]=val(input);
      sh.identity.characterLevel=whole(val('cf-level'),12,1,99);
      sh.identity.xp=whole(val('cf-xp'),0,0,999999999);
      sh.identity.xpNext=whole(val('cf-next'),0,0,999999999);
      for(const [key,input] of Object.entries(combatFields))sh.combat[key]=whole(val(input),0,-200,9999);
      for(const [key,suffix] of [['fort','fort'],['ref','ref'],['will','will']]){
        sh.combat.baseSaves[key]=whole(val('cf-'+suffix),0,-100,100);
        sh.combat.saveMisc[key]=whole(val('cf-'+suffix+'misc'),0,-100,100);
      }
      sh.combat.attackNotes=val('cf-attacknotes');
      sh.combat.defencesNotes=val('cf-defencenotes');
      sh.combat.actionNote=val('cf-actionnote');
      sh.combat.currentHP=Math.min(sh.combat.currentHP,sh.combat.maxHP);
    });
    document.querySelector('.sheet-editor')?.removeAttribute('open');
  }
  function saveCurrency(event){
    event.preventDefault();
    save(sh=>{
      for(const [key,id] of [['pp','sheet-pp'],['gp','sheet-gp'],['sp','sheet-sp'],['cp','sheet-cp'],['fortressTreasuryGp','sheet-treasury']]){
        sh.currency[key]=whole(val(id),0,0,999999999);
      }
      sh.currency.notes=val('sheet-money-notes');
    });
  }
  function adjustHP(sign){
    const amount=whole(val('sheet-hp-delta'),0,0,9999);
    if(!amount)return;
    save(sh=>{
      const c=sh.combat;
      if(sign<0){
        const consumed=Math.min(c.tempHP,amount);
        c.tempHP-=consumed;c.currentHP=Math.max(0,c.currentHP-(amount-consumed));
      }else c.currentHP=Math.min(c.maxHP,c.currentHP+amount);
    });
  }
  document.addEventListener('click',event=>{
    const tabButton=event.target.closest('[data-sheet-tab]');
    if(tabButton){setTab(tabButton.dataset.sheetTab);return;}
    const b=event.target.closest('[data-sheet-action]');
    if(!b)return;
    const action=b.dataset.sheetAction,id=b.dataset.id,kind=b.dataset.kind;
    if(action==='damage')return adjustHP(-1);
    if(action==='heal')return adjustHP(1);
    if(action==='add-item')return openEditor('item');
    if(action==='add-feat')return openEditor('feat');
    if(action==='add-feature')return openEditor('feature');
    if(action==='edit-item')return openEditor('item',id);
    if(action==='edit-feat')return openEditor('feat',id);
    if(action==='edit-feature')return openEditor('feature',id);
    if(['use-charge','use-item','spend-use','restore-use'].includes(action))save(sh=>{
      if(action==='use-charge'){const x=sh.inventory.find(x=>x.id===id);if(x&&x.charges!==null)x.charges=Math.max(0,x.charges-1);}
      if(action==='use-item'){const x=sh.inventory.find(x=>x.id===id);if(x)x.qty=Math.max(0,x.qty-1);}
      if(action==='spend-use'||action==='restore-use'){
        const x=sh[kind]?.find(x=>x.id===id);
        if(x&&x.usesPerDay!==null)x.usedToday=action==='spend-use'?
          Math.min(x.usesPerDay,x.usedToday+1):Math.max(0,x.usedToday-1);
      }
    });
  });
  document.querySelectorAll('[data-sheet-buff]').forEach(el=>el.addEventListener('change',e=>{
    const key=e.target.dataset.sheetBuff;
    save(sh=>{if(Object.prototype.hasOwnProperty.call(sh.combat.buffs,key))sh.combat.buffs[key]=e.target.checked;});
  }));
  $('sheet-inventory-search').addEventListener('input',e=>{inventoryQuery=e.target.value;renderInventory();});
  $('sheet-temp-hp').addEventListener('change',e=>save(sh=>{sh.combat.tempHP=whole(e.target.value,0,0,9999);}));
  $('sheet-action-points').addEventListener('change',e=>save(sh=>{sh.combat.actionPoints=whole(e.target.value,0,0,9999);}));
  $('sheet-conditions').addEventListener('change',e=>save(sh=>{sh.combat.conditions=e.target.value;}));
  $('sheet-profile-form').addEventListener('submit',saveProfile);
  $('sheet-currency-form').addEventListener('submit',saveCurrency);
  $('sheet-form').addEventListener('submit',saveEntry);
  $('sheet-dialog-close').addEventListener('click',()=>$('sheet-dialog').close());
  $('sheet-entry-cancel').addEventListener('click',()=>$('sheet-dialog').close());
  $('sheet-entry-delete').addEventListener('click',deleteEntry);
  $('sheet-audit-list').addEventListener('change',e=>{
    const checkbox=e.target.closest('[data-sheet-audit]');if(!checkbox)return;
    const index=whole(checkbox.dataset.sheetAudit,-1,-1,100);
    const note=sheet().audit[index];if(!note)return;
    save(sh=>{
      sh.resolvedAudit=sh.resolvedAudit.filter(x=>x!==note);
      if(checkbox.checked)sh.resolvedAudit.push(note);
    });
  });
  window.refreshGrimoireSheet=render;
  render();
})();
