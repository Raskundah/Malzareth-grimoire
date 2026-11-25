/* Malzareth's Grimoire v1.0 — vanilla JavaScript, no dependencies or trackers. */
(() => {
  'use strict';
  const STORAGE_KEY = 'ashen-crown-grimoire-v1';
  const MAX_LEVEL = 9;
  const DATA_VERSION = 19;
  const PREFIGHT_NAMES = ['Mirror Image','Heroics','Wall of Stone','Greater Blink','Dimension Jumper','Disintegrate','Planar Binding','Freezing Fog'];
  const LEVEL13_NAMES = ['Waves of Exhaustion','Greater Teleport','Sword of Darkness'];
  const LEVEL19_CATALOG = ['Plague of Undead','Gate'];
  const LEVEL18_CATALOG = ['Earth bind','Fly','Ray reflection','Assay spell resistance','Dimension anchor','Ray Deflection',
    'Greater Dispel Magic','Magnificent Mansion','Energy Immunity','Whirling Blade','Wraithstrike',
    'Awaken Undead','Limited Wish','Greater Planar Binding','Avascular Mass','Wish','Time Stop','Foresight','Unname'];
  const NEW_CYST_NAMES = new Set(['Necrotic Awareness','Necrotic Burst','Necrotic Eruption','Necrotic Tumor','Necrotic Empowerment','Necrotic Termination']);
  const defaults = window.STARTER_SPELLS || [];
  const sheetModel=window.SHEET_MODEL;
  const spellReference=window.SPELL_REFERENCES;
  const spellTagger=window.SPELL_TAGS;
  const slotRules = window.SPELL_SLOT_RULES;
  const calcSlots = (score,level) => slotRules
    ? slotRules.calculate(score,level,true)
    : {entries:[],totals:[...(window.DEFAULT_SLOTS||[5,8,8,7,6,6,5]),0,0,0]};
  // Only mark a save migrated when the newly deployed default catalog is
  // actually present. This prevents a mixed old/new PWA cache from falsely
  // recording a successful migration without adding the spells.
  const completeCystDefaults = [...NEW_CYST_NAMES].every(name =>
    defaults.some(s => s.status === 'cyst' && s.name === name)
  );
  const completeLevel13Defaults = LEVEL13_NAMES.every(name=>defaults.some(s=>s.name===name&&s.level===7)) && sheetModel?.createDefault()?.identity.characterLevel>=13;
  const completePrefightDefaults = PREFIGHT_NAMES.every(name=>defaults.some(s=>s.name===name && s.status==='spellbook'));
  const completeLevel18Defaults = LEVEL18_CATALOG.every(name=>defaults.some(s=>s.name===name && s.status==='spellbook'))
    && sheetModel?.createDefault()?.identity.characterLevel>=18;
  const completeLevel19Defaults = LEVEL19_CATALOG.every(name=>defaults.some(s=>s.name===name && s.level===9 && s.status==='spellbook'))
    && sheetModel?.createDefault()?.identity.characterLevel>=19 && !!window.LEVEL19_JOURNAL;
  const completeEquipmentDefaults = sheetModel?.createDefault()?.inventory?.some(x=>x.id==='orange-prism-ioun-stone')
    && sheetModel?.createDefault()?.combat?.saveResistance===5;
  // Only migrate after the entire added spell-catalog script has loaded;
  // protects installed phones with a transient mixed PWA cache.
  const completeLevel78Research = window.RESEARCH_ARCHIVE78?.revision===2
    && window.RESEARCH_ARCHIVE78.verified===true
    && Number(window.RESEARCH_ARCHIVE78.added)>=120
    && defaults.some(s=>s.id==='research-7-banishment')
    && defaults.some(s=>s.id==='research-7-ice-castle')
    && defaults.some(s=>s.id==='research-8-greater-celerity')
    && !defaults.some(s=>window.RESEARCH_ARCHIVE78.invalidIds.includes(s.id));
  const completeSpellDetails = window.SPELL_DETAIL_AUDIT?.revision===2
    && window.SPELL_DETAIL_AUDIT.coreEntries>=80
    && window.SPELL_DETAIL_AUDIT.originalSupplements>=90
    && defaults.some(s=>s.name==='Mind Blank' && !!s.range && !!s.target && !!s.sr)
    && defaults.some(s=>s.name==='Fimbulwinter' && !!s.description)
    && window.SPELL_FACT_AUDIT?.revision===2
    && Number(window.SPELL_FACT_AUDIT.matched)>=200
    && defaults.some(s=>s.name==='Ice Castle' && !!s.casting && !!s.target && !!s.duration);
  const catalogueReady = completeCystDefaults && completeLevel13Defaults && completePrefightDefaults
    && completeLevel18Defaults && completeLevel19Defaults && completeEquipmentDefaults && completeLevel78Research && completeSpellDetails
    && spellTagger?.revision===1;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const uid = () => (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const labelLevel = (l) => Number(l)===0 ? 'Cantrip' : `${l}${({1:'st',2:'nd',3:'rd'}[l] || 'th')} circle`;
  const statusLabels = {spellbook:'Spellbook',cyst:'Mother Cyst'};
  const byName = (name) => state.spells.find(s => s.name === name);
  const stateFactory = () => {
    const spells = structuredClone(defaults).map(s=>({...s,tags:spellTagger?.tagsFor(s)||[]}));
    const prepared = [];
    Object.entries(window.STARTER_PREPARATION||{}).forEach(([level, names]) => names.forEach(name => {
      const spell = spells.find(s => s.name === name && s.level === Number(level));
      if(spell) prepared.push({id: uid(), spellId: spell.id, used:false});
    }));
    const slots = calcSlots(34,19).totals;
    return {
      version:catalogueReady ? DATA_VERSION : 1,spells,prepared,slots,
      manualSlots:[...slots],autoSlots:true,spellcastingLevel:19,
      intelligence:34,necroBonus:2,presets:[],
      cogitation:{level:6,used:false,spellId:null},
      abilities:{STR:10,DEX:18,WIS:12,CHA:20},skillOverrides:{},
      sheet:sheetModel?.createDefault() || null,damagePresets:[],
      journal:[window.LEVEL13_JOURNAL,window.PREFIGHT_ACQUISITION_JOURNAL].filter(Boolean).join('\n\n'),lastSaved:new Date().toISOString()
    };
  };
  const normalizeSpell = (s) => {
    const clean = (k,max=4000) => String(s?.[k]??'').slice(0,max);
    return {
      id:clean('id',160)||uid(),name:clean('name',100).trim(),level:Math.max(0,Math.min(9,Math.trunc(Number(s?.level)||0))),
      school:clean('school',80),status:s?.status==='cyst'?'cyst':'spellbook',source:clean('source',120),detailsSource:clean('detailsSource',120),
      casting:clean('casting',140),components:clean('components',140),range:clean('range',200),target:clean('target',250),duration:clean('duration',200),sr:clean('sr',120),
      save:clean('save',200),description:clean('description'),notes:clean('notes'),favorite:!!s?.favorite,
      tags:Array.isArray(s?.tags)?(spellTagger?.normalise(s.tags)||s.tags.slice(0,16)):(spellTagger?.tagsFor(s)||[])
    };
  };
  const normalizeData = (input) => {
    if(!input || !Array.isArray(input.spells) || !Array.isArray(input.prepared)) throw new Error('Not a valid grimoire backup.');
    if(input.spells.length>2500 || input.prepared.length>1000) throw new Error('Backup is too large.');
    const spells = input.spells.map(normalizeSpell).filter(s=>s.name);
    // Fill previously unverified schools from corrected starter records.
    // Preserve every nonempty school and never rewrite custom user spells.
    if ((Number(input.version) || 1) < 8) {
      for (const spell of spells) {
        if (spell.school) continue;
        const starter=defaults.find(s=>s.id===spell.id && s.name===spell.name && s.level===spell.level);
        if(starter?.school)spell.school=starter.school;
      }
    }
    // Non-destructive migration for saves that missed the earlier update,
    // including phones that cached new app.js with old data.js.
    // Once v3 is stored, intentional subsequent deletions stay deleted.
    if ((Number(input.version) || 1) < 3 && completeCystDefaults) {
      for (const starter of defaults) {
        if (starter.status !== 'cyst' || !NEW_CYST_NAMES.has(starter.name)) continue;
        if (!spells.some(s => s.level === starter.level && s.name.toLowerCase() === starter.name.toLowerCase())) {
          spells.push(structuredClone(starter));
        }
      }
    }
    // One-time campaign advancement; preserve preparation, presets and user edits.
    const advance = (Number(input.version)||1)<9 && completeLevel13Defaults;
    if(advance){
      for(const name of LEVEL13_NAMES){
        const starter=defaults.find(s=>s.level===7&&s.name===name);
        if(!spells.some(s=>s.level===7&&s.name.toLowerCase()===name.toLowerCase()))spells.push(structuredClone(starter));
      }
    }
    // Add purchased pre-titan scroll transcriptions once; respect all user edits and prep counts.
    const acquire = (Number(input.version)||1)<10 && completePrefightDefaults;
    if(acquire){
      for(const name of PREFIGHT_NAMES){
        const starter=defaults.find(s=>s.name===name && s.status==='spellbook');
        if(starter&&!spells.some(s=>s.name.toLowerCase()===name.toLowerCase() && s.level===starter.level))spells.push(structuredClone(starter));
      }
    }
    // Version 11: import only explicitly known missing spells from level 18
    // and the user's prior export. Existing spell edits and prep remain untouched.
    const advance18 = (Number(input.version)||1)<11 && completeLevel18Defaults;
    if(advance18){
      for(const name of LEVEL18_CATALOG){
        const starter=defaults.find(s=>s.name===name && s.status==='spellbook');
        if(starter&&!spells.some(s=>s.level===starter.level && s.name.toLowerCase()===name.toLowerCase()))
          spells.push(structuredClone(starter));
      }
    }
    const advance19=(Number(input.version)||1)<19 && completeLevel19Defaults;
    if(advance19){
      for(const name of LEVEL19_CATALOG){
        const starter=defaults.find(s=>s.name===name&&s.level===9&&s.status==='spellbook');
        if(starter&&!spells.some(s=>s.level===9&&s.name.toLocaleLowerCase()===name.toLocaleLowerCase()))
          spells.push(structuredClone(starter));
      }
    }
    // Previously completed, approved two-year project: import every new
    // school-legal level 7/8 inscription. The current day-state is not reset.
    const archive78=(Number(input.version)||1)<13 && completeLevel78Research;
    if(archive78){
      const normalizeName=name=>String(name).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
      for(const starter of defaults){
        if(![7,8].includes(starter.level)||!starter.id.startsWith('research-'))continue;
        if(['Evocation','Enchantment'].includes(starter.school))continue;
        if(!spells.some(s=>s.level===starter.level && normalizeName(s.name)===normalizeName(starter.name)))
          spells.push(structuredClone(starter));
      }
    }
    // Version 14: repair only incorrect entries created by our previous bulk
    // transcription, never user-created records or entries from other sources.
    // Import ONLY newly verified spells so intentional deletions remain deleted.
    const audit78=(Number(input.version)||1)<14 && completeLevel78Research;
    if(audit78){
      const invalid=new Set(window.RESEARCH_ARCHIVE78.invalidIds);
      for(let i=spells.length-1;i>=0;i--){
        const entry=spells[i];
        // A repurposed, user-renamed entry is not the offending archived spell.
        const originalName=entry.id.replace(/^research-[78]-/,'').replace(/-/g,'');
        const currentName=String(entry.name).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
        const originalLevel=Number(entry.id.match(/^research-([78])-/)?.[1]);
        if(invalid.has(entry.id) && entry.level===originalLevel && currentName===originalName)
          spells.splice(i,1);
      }
      const normalizeName=name=>String(name).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
      for(const id of window.RESEARCH_ARCHIVE78.newIds){
        const starter=defaults.find(s=>s.id===id);
        if(starter && !spells.some(s=>s.level===starter.level && normalizeName(s.name)===normalizeName(starter.name)))
          spells.push(structuredClone(starter));
      }
    }
    // Populate blank verified fields. Replace only unchanged old boilerplate;
    // never overwrite the player's edited descriptions or named custom spells.
    const enhanceDetails=(Number(input.version)||1)<17 && completeSpellDetails;
    if(enhanceDetails){
      const original=window.SPELL_DETAIL_AUDIT.previousDescriptionById;
      for(const entry of spells){
        const starter=defaults.find(s=>s.id===entry.id && s.name===entry.name && s.level===entry.level);
        if(!starter)continue;
        for(const field of ['casting','components','range','target','duration','save','sr','detailsSource']){
          if(!entry[field] && starter[field])entry[field]=starter[field];
        }
        const oldText=original[entry.id]??'';
        if(starter.description && (!entry.description || (entry.description===oldText && oldText!==starter.description)))
          entry.description=starter.description;
      }
    }
    // Sourcebook fact cleanup (v17): repair only exact old OCR-derived values
    // from our previous release. Preserve user modifications to those fields.
    const repairFacts=(Number(input.version)||1)<17 && completeSpellDetails;
    if(repairFacts){
      const legacy=window.SPELL_FACT_AUDIT.legacyFields||{};
      for(const entry of spells){
        const oldFields=legacy[entry.name];
        if(!oldFields)continue;
        const starter=defaults.find(s=>s.id===entry.id && s.name===entry.name && s.level===entry.level);
        if(!starter)continue;
        for(const [field,oldValue] of Object.entries(oldFields)){
          if((entry[field]||'')===oldValue)
            entry[field]=starter[field]||'';
        }
      }
    }
    // Tag migration is additive and never replaces an explicitly saved tag list,
    // including an intentionally emptied list. New starter inscriptions are seeded.
    for(const spell of spells)if(!Array.isArray(spell.tags))spell.tags=spellTagger?.tagsFor(spell)||[];
    const ids = new Set();
    for(const s of spells){if(ids.has(s.id)) s.id=uid(); ids.add(s.id);}
    const prepared = input.prepared.filter(p=>p && ids.has(p.spellId)).map(p=>({id:uid(),spellId:String(p.spellId),used:!!p.used}));
    let intelligence = Number.isFinite(Number(input.intelligence)) ? Math.max(1, Math.min(99, Math.trunc(Number(input.intelligence)))) : 30;
    if(advance19 && [30,32].includes(intelligence))intelligence=34;
    let spellcastingLevel = Number.isFinite(Number(input.spellcastingLevel))
      ? Math.max(1,Math.min(20,Math.trunc(Number(input.spellcastingLevel)))) : 13;
    if(advance && spellcastingLevel===12)spellcastingLevel=13;
    if(advance18 && spellcastingLevel<18)spellcastingLevel=18;
    if(advance19 && spellcastingLevel===18)spellcastingLevel=19;
    const calculated = calcSlots(intelligence,spellcastingLevel).totals;
    const readSlots = (list, fallback) => Array.from({length:10},(_,l)=>{
      const n=Number(list?.[l]);
      return list && list[l] !== undefined && Number.isFinite(n)
        ? Math.max(0,Math.min(50,Math.trunc(n)))
        : fallback[l];
    });
    const existingSlots = readSlots(input.slots,calculated);
    const savedManual = readSlots(input.manualSlots,existingSlots);
    // Keep historical manual modifications when upgrading a saved v4 book.
    const autoSlots = typeof input.autoSlots==='boolean'
      ? input.autoSlots
      : !!slotRules && existingSlots.every((n,l)=>n===calculated[l]);
    const manualSlots = autoSlots ? savedManual : (Array.isArray(input.manualSlots) ? savedManual : existingSlots);
    const slots = autoSlots ? [...calculated] : [...manualSlots];
    // Auto changes must not silently delete already prepared spells.
    // Mark excess preparations in the UI instead of inflating RAW limits.
    if(!autoSlots){
      for(let l=0;l<=MAX_LEVEL;l++){
        const count = prepared.filter(p=>spells.find(s=>s.id===p.spellId)?.level===l).length;
        if(count>slots[l]) slots[l]=count;
      }
    }
    const necroBonus = Number.isFinite(Number(input.necroBonus)) ? Math.max(0, Math.min(20, Math.trunc(Number(input.necroBonus)))) : 2;
    const presets = (Array.isArray(input.presets) ? input.presets : []).slice(0,40).map(p => ({
      id:String(p?.id || uid()).slice(0,160),
      name:String(p?.name || '').trim().slice(0,60),
      cogitationLevel:p?.cogitationLevel === null ? null :
        (Number.isInteger(Number(p?.cogitationLevel)) && p?.cogitationLevel !== undefined
          ? Math.max(0,Math.min(9,Number(p.cogitationLevel))) : undefined),
      entries:(Array.isArray(p?.entries) ? p.entries : []).slice(0,100).map(e => ({
        level:Math.max(0,Math.min(9,Math.trunc(Number(e?.level)||0))),
        name:String(e?.name || '').slice(0,100)
      })).filter(e => e.name)
    })).filter(p => p.name);
    if(audit78){
      const invalidNames=new Set([
        '7/symbolofstunning','8/symbolofinsanity',
        '7/greatersignofsealing','7/illusorypit','7/brilliantblade',
        '7/fiendform','7/imbuefamiliarwithspellability',
        '8/greaterdispellingscreen','8/stormwalk'
      ]);
      const key=e=>e.level+'/'+e.name.toLowerCase().replace(/[^a-z0-9]/g,'');
      for(const preset of presets) preset.entries=preset.entries.filter(e=>!invalidNames.has(key(e)));
    }
    const clampInt = (value,low,high,fallback) =>
      value !== undefined && value !== null && value !== '' && Number.isFinite(Number(value))
        ? Math.max(low,Math.min(high,Math.trunc(Number(value)))) : fallback;
    const abilities = Object.fromEntries(
      [['STR',10],['DEX',17],['WIS',12],['CHA',20]]
        .map(([key,baseline])=>[key,clampInt(input.abilities?.[key],1,99,baseline)])
    );
    if(advance18 && abilities.DEX===17)abilities.DEX=18;
    const skillOverrides = {};
    if(input.skillOverrides && typeof input.skillOverrides==='object' && !Array.isArray(input.skillOverrides)){
      for(const [key,record] of Object.entries(input.skillOverrides).slice(0,150)){
        if(!/^[a-z0-9-]{1,80}$/.test(key))continue;
        skillOverrides[key]={
          ranks:clampInt(record?.ranks,0,60,0),
          extra:clampInt(record?.extra,-100,100,0)
        };
      }
    }
    if(advance18){
      // Confirmed ranks to level 17, plus one Truespeak rank at 18.
      // Never lower an existing locally edited rank.
      for(const [id,rank] of Object.entries({
        'concentration':18,'spellcraft':20,'decipher-script':18,
        'knowledge-arcana':20,'knowledge-planes':18,'knowledge-nobility':12,
        'intimidate':16,'truespeak':1
      })){
        const previous=skillOverrides[id];
        skillOverrides[id]={ranks:Math.max(rank,previous?.ranks??0),extra:previous?.extra??0};
      }
    }
    if(advance19){
      // 8 points from level 18, 11 from level 19. Never overwrite a locally
      // edited rank outside the exact previous recorded values.
      const finalRanks={
        concentration:[18,22],spellcraft:[20,22],
        'knowledge-arcana':[20,22],intimidate:[16,19],
        'knowledge-planes':[18,20],truespeak:[1,3]
      };
      for(const [id,[previous,latest]] of Object.entries(finalRanks)){
        const entry=skillOverrides[id];
        if(!entry||entry.ranks===previous)skillOverrides[id]={ranks:latest,extra:entry?.extra??0};
      }
    }
    const countAt = level => prepared.filter(p=>spells.find(s=>s.id===p.spellId)?.level===level).length;
    const requestedCogitation = input.cogitation && typeof input.cogitation==='object'
      ? input.cogitation : null;
    const initialLevel=6;
    const initialReserve = slots[initialLevel] > countAt(initialLevel) ? initialLevel : null;
    const level = requestedCogitation
      ? (requestedCogitation.level === null || requestedCogitation.level === '' ? null : clampInt(requestedCogitation.level,0,9,null))
      : initialReserve;
    const cogitation = {
      level,
      used:requestedCogitation?.used === true && level !== null,
      spellId:typeof requestedCogitation?.spellId === 'string' ? requestedCogitation.spellId.slice(0,160) : null
    };
    // If a phone briefly loads an old asset bundle, preserve existing
    // sheet information rather than replacing it with empty defaults.
    const sheet=sheetModel?.normalize(input.sheet) ?? input.sheet ?? null;
    if(advance && sheet){
      const baseline=sheetModel.createDefault();
      if(sheet.identity.characterLevel<=12){
        Object.assign(sheet.identity,{characterLevel:13,characterClass:baseline.identity.characterClass,era:baseline.identity.era,xp:Math.max(sheet.identity.xp,78674),xpNext:91000,xpNote:baseline.identity.xpNote});
        if(sheet.combat.maxHP===95){sheet.combat.maxHP=104;sheet.combat.currentHP=Math.min(104,sheet.combat.currentHP+9);}
        if(sheet.combat.bab===5)sheet.combat.bab=6;
        if(sheet.combat.baseSaves.will===9)sheet.combat.baseSaves.will=10;
      }
      // Update known stale cash, but preserve separately edited balances.
      const cur=sheet.currency;
      if((cur.gp===11755&&cur.sp===4&&cur.cp===3)||(cur.gp===9824&&cur.sp===3&&cur.cp===8)){
        Object.assign(cur,{gp:11367,sp:9,cp:8,notes:baseline.currency.notes});
      }else if(!cur.notes.includes('25 Mirtul 19:00')){
        cur.notes=(cur.notes+'\n'+baseline.currency.notes).slice(0,2000);
      }
      for(const item of baseline.inventory.filter(x=>x.id.startsWith('loot-'))){
        if(!sheet.inventory.some(x=>x.id===item.id||x.name.toLowerCase()===item.name.toLowerCase()))sheet.inventory.push(item);
      }
      for(const id of ['staff-transmutation','wand-orb-force']){
        const old=sheet.inventory.find(x=>x.id===id),updated=baseline.inventory.find(x=>x.id===id);
        if(old&&updated&&old.charges===50){old.charges=updated.charges;old.notes=updated.notes;}
      }
      for(const id of ['undead','esoterica-minor','caster-level','expanded-spellbook']){
        const old=sheet.features.find(x=>x.id===id),updated=baseline.features.find(x=>x.id===id);
        if(old&&updated)old.effect=updated.effect;else if(updated)sheet.features.push(updated);
      }
      const stale=['Latest experience needs checking','Lich +4 level adjustment','Recent shopping, treasury transfers'];
      sheet.audit=sheet.audit.filter(note=>!stale.some(p=>note.startsWith(p)));
      for(const note of baseline.audit.slice(0,3))if(!sheet.audit.includes(note))sheet.audit.push(note);
    }
    if(acquire && sheet){
      const baseline=sheetModel.createDefault();
      const cur=sheet.currency;
      // Only replace a precisely recognised source balance. Never deduct twice from custom cash.
      if((cur.gp===271517 && cur.sp===4 && cur.cp===8) || (cur.gp===11367 && cur.sp===9 && cur.cp===8)){
        Object.assign(cur,{gp:262892,sp:4,cp:8,notes:baseline.currency.notes});
      }else if(!String(cur.notes||'').includes('8,625 gp scrolls')){
        cur.notes=[cur.notes,baseline.currency.notes+' Balance not automatically overwritten because local value was edited.'].filter(Boolean).join('\n').slice(0,2000);
      }
      for(const item of baseline.inventory.filter(x=>['blessed-book','heroics-fighter-fragment'].includes(x.id))){
        if(!sheet.inventory.some(x=>x.id===item.id || x.name.toLowerCase()===item.name.toLowerCase()))sheet.inventory.push(item);
      }
      for(const note of baseline.audit.filter(note=>note.startsWith('All eight pre-Orathion'))){if(!sheet.audit.includes(note))sheet.audit.push(note);}
    }
    if(advance18 && sheet && sheet.identity.characterLevel<18){
      const baseline=sheetModel.createDefault();
      const oldMax=Number(sheet.combat.maxHP)||0;
      if(oldMax>0&&oldMax<150){
        const gained=150-oldMax;
        // Maintain the injury difference, rather than silently healing on upgrade.
        if(sheet.combat.currentHP>0)sheet.combat.currentHP=Math.min(150,sheet.combat.currentHP+gained);
        sheet.combat.maxHP=150;
      }
      sheet.identity.characterLevel=18;
      sheet.identity.characterClass=baseline.identity.characterClass;
      sheet.identity.xpNext=Math.max(Number(sheet.identity.xpNext)||0,171000);
      sheet.identity.xpNote='Level 18 confirmed. Current XP must be reconciled; stored historical XP retained. Next level is 171,000 XP.';
      sheet.combat.bab=Math.max(sheet.combat.bab,10);
      for(const [key,value] of Object.entries({fort:5,ref:5,will:14}))
        sheet.combat.baseSaves[key]=Math.max(sheet.combat.baseSaves[key]??0,value);
      for(const feat of baseline.feats.filter(f=>['combat-casting','quicken-spell'].includes(f.id)))
        if(!sheet.feats.some(f=>f.id===feat.id||f.name.toLowerCase()===feat.name.toLowerCase()))sheet.feats.push(feat);
      for(const feature of baseline.features.filter(f=>['esoterica-major','abjurant-armor','extended-abjuration','swift-abjuration'].includes(f.id)))
        if(!sheet.features.some(f=>f.id===feature.id||f.name.toLowerCase()===feature.name.toLowerCase()))sheet.features.push(feature);
      for(const feature of sheet.features){
        const latest=baseline.features.find(f=>f.id===feature.id);
        if(latest&&['undead','caster-level','esoterica-minor','esoterica-major'].includes(feature.id))feature.effect=latest.effect;
      }
      const pending='Level 18: eight skill points remain unspent after buying one cross-class Truespeak rank for two points.';
      sheet.audit=sheet.audit.filter(a=>!a.startsWith('Allocate 10 skill points gained at level 13')&&!a.startsWith('LA buyoff complete (+0). XP 78,674'));
      if(!sheet.audit.includes(pending))sheet.audit.unshift(pending);
      const uncertain='Level 18: reconcile current XP, treasury, date and consumables with the campaign ledger; old values preserved.';
      if(!sheet.audit.includes(uncertain))sheet.audit.unshift(uncertain);
    }
    // Separate level-18 gear migration also covers phones which loaded the
    // initial v11 update before the equipment audit was complete.
    const upgradeEquipment=(Number(input.version)||1)<12 && completeEquipmentDefaults;
    if(upgradeEquipment && sheet){
      const baseline=sheetModel.createDefault();
      const getUpdated=id=>baseline.inventory.find(x=>x.id===id);
      for(const [oldId,oldName,newId] of [
        ['cloak-resistance-3','Cloak of Resistance +3','cloak-resistance-5'],
        ['amulet-natural-armour-2','Amulet of Natural Armour +2','amulet-natural-armour-3']
      ]){
        const updated=getUpdated(newId);
        if(!updated)continue;
        const existing=sheet.inventory.some(x=>x.id===newId||x.name.toLowerCase()===updated.name.toLowerCase());
        if(existing)continue;
        const old=sheet.inventory.find(x=>x.id===oldId&&x.name.toLowerCase()===oldName.toLowerCase()&&x.equipped);
        if(old){
          old.id=updated.id;
          old.name=updated.name;
          old.notes=updated.notes;
        }else sheet.inventory.push(structuredClone(updated));
      }
      for(const id of ['orange-prism-ioun-stone','belt-of-battle','third-eye-clarity','boots-of-speed','pearl-power-5']){
        const updated=getUpdated(id);
        if(updated&&!sheet.inventory.some(x=>x.id===id||x.name.toLowerCase()===updated.name.toLowerCase()))
          sheet.inventory.push(structuredClone(updated));
      }
      // Replace only values matching the previous standard equipment.
      // User-edited bonuses or charges remain untouched.
      if(sheet.inventory.some(x=>x.id==='cloak-resistance-5'&&x.equipped)&&sheet.combat.saveResistance===3)
        sheet.combat.saveResistance=5;
      if(sheet.inventory.some(x=>x.id==='amulet-natural-armour-3'&&x.equipped)&&sheet.combat.enhanceNatural===2)
        sheet.combat.enhanceNatural=3;
      if(sheet.inventory.some(x=>x.id==='belt-of-battle'&&x.equipped)&&sheet.combat.initiativeMisc===4)
        sheet.combat.initiativeMisc=6;
    }
    if(advance19 && sheet){
      const baseline=sheetModel.createDefault();
      const wasEarlier=Number(sheet.identity.characterLevel)<19;
      if(wasEarlier){
        sheet.identity.characterLevel=19;
        if(['Wizard 5 / Master Specialist 10 / Abjurant Champion 3','Wizard 5 / Master Specialist 10 / Abjurant Champion 4'].includes(sheet.identity.characterClass))
          sheet.identity.characterClass=baseline.identity.characterClass;
        if(String(sheet.identity.era||'').includes('level 18'))
          sheet.identity.era=String(sheet.identity.era).replace('level 18','level 19');
        sheet.identity.xpNext=Math.max(Number(sheet.identity.xpNext)||0,190000);
        sheet.identity.xpNote='Level 19 confirmed, with 160 maximum HP. Exact current XP, including Wish costs, needs reconciliation; historical XP preserved. Next level 190,000 XP.';
        if(sheet.combat.maxHP===150){
          // Increase the maximum without healing unrelated damage.
          if(sheet.combat.currentHP>0)sheet.combat.currentHP=Math.min(160,sheet.combat.currentHP+10);
          sheet.combat.maxHP=160;
        }
        sheet.combat.bab=Math.max(Number(sheet.combat.bab)||0,11);
        sheet.combat.baseSaves.will=Math.max(Number(sheet.combat.baseSaves.will)||0,15);
      }
      for(const feature of baseline.features.filter(f=>f.id==='arcane-boost')){
        if(!sheet.features.some(x=>x.id===feature.id))sheet.features.push(feature);
      }
      for(const feature of sheet.features){
        const newer=baseline.features.find(x=>x.id===feature.id);
        if(!newer)continue;
        if(feature.id==='abjurant-armor' && String(feature.effect).includes('Shield grants +7'))
          Object.assign(feature,{effect:newer.effect,category:newer.category});
        if(feature.id==='caster-level' && String(feature.effect).includes('Level 18:'))
          feature.effect=newer.effect;
        if(feature.id==='undead' && String(feature.effect).includes('18d12'))
          feature.effect=newer.effect;
      }
      const oldAudit=/^Level 18: (1 Truespeak|eight skill points remain)/;
      sheet.audit=sheet.audit.filter(note=>!oldAudit.test(note));
      const note='Level 19: 160 HP (d12 roll 10), INT 34 with +6 headband; 8 level-18 and 11 level-19 skill points allocated; two new 9th-level spells (Gate, Plague of Undead). Exact current XP pending.';
      if(!sheet.audit.includes(note))sheet.audit.unshift(note);
    }
    const damagePresets=(Array.isArray(input.damagePresets)?input.damagePresets:[]).slice(0,40)
      .filter(x=>x&&typeof x==='object')
      .map(x=>({
        id:String(x.id||uid()).slice(0,140),
        name:String(x.name||'').trim().slice(0,65),
        formula:String(x.formula||'').replace(/\s+/g,'').slice(0,18)
      })).filter(x=>x.name&&/^([1-9]\d?)d(3|4|6|8|10|12|20|100)([+-]\d{1,4})?$/.test(x.formula));
    return {
      version:catalogueReady ? DATA_VERSION : (Number(input.version) || 1),
      spells,prepared,slots,manualSlots:autoSlots ? manualSlots : [...slots],
      autoSlots,spellcastingLevel,intelligence,necroBonus,presets,
      cogitation,abilities,skillOverrides,sheet,damagePresets,
      journal:(()=>{let j=String(input.journal??''); if(advance&&!j.includes('78,674 / 91,000'))j=[j,window.LEVEL13_JOURNAL].filter(Boolean).join('\n\n');if(acquire&&!j.includes('Eight scrolls bought at standard minimum'))j=[j,window.PREFIGHT_ACQUISITION_JOURNAL].filter(Boolean).join('\n\n');if(advance18&&!j.includes('Level 18: Wizard 5 / Master Specialist 10'))j=[j,window.LEVEL18_JOURNAL].filter(Boolean).join('\n\n');if(advance19&&!j.includes('Level 19: Wizard 5 / Master Specialist 10'))j=[j,window.LEVEL19_JOURNAL].filter(Boolean).join('\n\n');return j.slice(0,100000);})(),lastSaved:new Date().toISOString()
    };
  };
  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return stateFactory();
      const previous = JSON.parse(raw);
      const next = normalizeData(previous);
      if ((Number(previous.version) || 1) < next.version) {
        // Persist the migration once so intentional later deletions are kept.
        try { localStorage.setItem(STORAGE_KEY+'-pre-v'+next.version+'-backup', raw); localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
        catch(e) { console.warn('Unable to persist grimoire migration', e); }
      }
      return next;
    } catch(e) { console.warn('Unable to load local save', e); return stateFactory(); }
  };
  let state=load();
  // Shared, local-only state interface for the Dice tab's skill checks.
  window.GRIMOIRE = {
    getState:()=>state,
    updateSkill(id,ranks,extra){
      if(!/^[a-z0-9-]{1,80}$/.test(id))return;
      state.skillOverrides[id]={
        ranks:Math.max(0,Math.min(60,Math.trunc(Number(ranks)||0))),
        extra:Math.max(-100,Math.min(100,Math.trunc(Number(extra)||0)))
      };
      persist();window.refreshGrimoireSkills?.();
    },
    resetSkill(id){
      delete state.skillOverrides[id];
      persist();window.refreshGrimoireSkills?.();
    },
    updateSheet(mutator){
      if(!state.sheet||typeof mutator!=='function')return false;
      mutator(state.sheet);
      state.sheet=sheetModel?.normalize(state.sheet) ?? state.sheet;
      persist();render();return true;
    },
    resetSheet(){
      if(!sheetModel)return false;
      state.sheet=sheetModel.createDefault();
      persist();render();return true;
    },
    saveDamagePreset(name,formula){
      name=String(name||'').trim().slice(0,65);
      formula=String(formula||'').replace(/\s+/g,'').toLowerCase();
      if(!name||!/^([1-9]\d?)d(3|4|6|8|10|12|20|100)([+-]\d{1,4})?$/.test(formula)
        ||Number(formula.split('d')[0])>40
        ||Math.abs(Number((formula.match(/[+-]\d+$/)||[])[0]||0))>1000)return false;
      const previous=state.damagePresets.find(x=>x.name.toLowerCase()===name.toLowerCase());
      if(!previous&&state.damagePresets.length>=40)return false;
      if(previous)previous.formula=formula;
      else state.damagePresets.push({id:uid(),name,formula});
      persist();window.refreshCombatRolls?.();
      return true;
    },
    deleteDamagePreset(id){
      state.damagePresets=state.damagePresets.filter(x=>x.id!==id);
      persist();window.refreshCombatRolls?.();
    }
  };
  const dcFor = (level,school) => 10 + Number(level) + Math.floor((state.intelligence-10)/2) + (school==='Necromancy'?state.necroBonus:0);
  let levelFilter='all';
  const activeTags=new Set();
  const tagsOf=spell=>Array.isArray(spell.tags)?spell.tags:(spellTagger?.tagsFor(spell)||[]);
  const spellMatchesTags=(spell,mode)=>{
    if(!activeTags.size)return true;
    const names=tagsOf(spell);
    const hit=tag=>tag==='__untagged__'?!names.length:names.includes(tag);
    return mode==='all'?[...activeTags].every(hit):[...activeTags].some(hit);
  };
  let view='library';
  let toastTimeout;
  function persist(){
    state.lastSaved = new Date().toISOString();
    try {localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
    catch(e){toast('Could not save locally. Export a backup to avoid losing changes.'); console.error(e);}
  }
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),3500);}
  function currentCount(level){return state.prepared.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===level).length;}
  function cogitationOccupies(level){return state.cogitation?.level===level ? 1 : 0;}
  function prepLimit(level){return Math.max(0,(state.slots[level]||0)-cogitationOccupies(level));}
  function updateStats(){
    $('#stat-spells').textContent=state.spells.length;
    $('#stat-prep').textContent=`${state.prepared.length + (state.cogitation?.level!==null?1:0)} / ${state.slots.reduce((a,b)=>a+b,0)}`;
    $('#stat-cast').textContent=state.prepared.filter(p=>p.used).length;
    const selectedLevel = levelFilter==='all' ? 6 : Number(levelFilter);
    $('#stat-dc').textContent=dcFor(selectedLevel,'Necromancy');
    $('#stat-dc-label').textContent=`Level ${selectedLevel} · Necromancy`;
    $('#hero-int').textContent=state.intelligence;
    if($('#hero-class'))$('#hero-class').textContent=state.sheet?.identity.characterClass||'Wizard 5 / Master Specialist 10 / Abjurant Champion 3';
    if($('#hero-cl'))$('#hero-cl').textContent=state.spellcastingLevel+1;
    if($('#hero-necro'))$('#hero-necro').textContent=state.spellcastingLevel+3;
    const baseDC=10+Math.floor((state.intelligence-10)/2);
    $('#standard-dc-formula').textContent=`${baseDC} + level`;
    $('#necro-dc-formula').textContent=`${baseDC+state.necroBonus} + level`;
  }
  function makeFilters(){
    $('#level-filters').innerHTML=['all',0,1,2,3,4,5,6,7,8,9].map(l=>{
      const text = l==='all'?'All circles':l===0?'0':String(l);
      return `<button type="button" class="filter-pill ${String(l)===String(levelFilter)?'active':''}" data-level="${l}" aria-pressed="${String(l)===String(levelFilter)}">${text}</button>`;
    }).join('');
  }
  function renderTagFilters(base){
    const main=$('#tag-filter-primary'),more=$('#tag-filter-more');
    if(!main||!more||!spellTagger)return;
    const observed=new Set(state.spells.flatMap(tagsOf));
    const core=spellTagger.core.filter(tag=>observed.has(tag)||activeTags.has(tag));
    const custom=[...observed].filter(tag=>!spellTagger.core.includes(tag)).sort((a,b)=>a.localeCompare(b));
    const all=[...core,...custom,'__untagged__'];
    const primary=new Set(spellTagger.primary);
    const makeButton=tag=>{
      const number=base.filter(s=>tag==='__untagged__'?!tagsOf(s).length:tagsOf(s).includes(tag)).length;
      const label=tag==='__untagged__'?'Untagged':tag;
      return `<button type="button" class="tag-filter-chip ${activeTags.has(tag)?'active':''}" data-tag-filter="${esc(tag)}" aria-pressed="${activeTags.has(tag)}">${esc(label)} <span class="tag-count">${number}</span></button>`;
    };
    main.innerHTML=all.filter(tag=>primary.has(tag)).map(makeButton).join('');
    more.innerHTML=all.filter(tag=>!primary.has(tag)).map(makeButton).join('');
    $('#tag-selection-summary').textContent=activeTags.size?`${activeTags.size} selected`:'All purposes';
    $('#tag-clear').disabled=!activeTags.size;
  }
  function renderLibrary(){
    const q=$('#search').value.trim().toLocaleLowerCase();
    const status=$('#status-filter').value;
    const schoolFilter=$('#school-filter').value;
    const favorites=$('#only-faves').checked;
    const base=state.spells.filter(s=>(levelFilter==='all'||s.level===Number(levelFilter)) && (status==='all'||s.status===status) && (schoolFilter==='all'||(schoolFilter==='unverified'?!s.school:s.school===schoolFilter)) && (!favorites||s.favorite) && (!q||[s.name,s.school,s.source,s.description,spellReference?.get(s)?.description||'',s.notes,s.components,s.range,s.target,s.duration,s.sr,...tagsOf(s)].join(' ').toLocaleLowerCase().includes(q)));
    const spells=base.filter(s=>spellMatchesTags(s,$('#tag-match-mode').value)).sort((a,b)=>a.level-b.level||a.name.localeCompare(b.name));
    renderTagFilters(base);
    $('#result-count').textContent=`${spells.length} ${spells.length===1?'spell':'spells'} shown`;
    $('#spell-list').innerHTML=spells.length?spells.map(s=>{
      const available=currentCount(s.level)<prepLimit(s.level);
      const brief=s.description||spellReference?.get(s)?.description||'';
      const mechanics=[['Casting time',s.casting],['Components',s.components],['Range',s.range],
        ['Target / area / effect',s.target],['Duration',s.duration],['Saving throw',s.save],['Spell resistance',s.sr]];
      const mechanicsHTML=mechanics.map(([label,value])=>'<div><dt>'+esc(label)+'</dt><dd class="'+(value?'':'not-verified')+'">'+esc(value||'Not yet verified')+'</dd></div>').join('');
      const rolled=spellReference?.rollFor(s,{
        casterLevel:state.spellcastingLevel+1,necroLevel:state.spellcastingLevel+3
      });
      return `<article class="spell-card">
        <div class="spell-top"><span class="spell-level" title="${esc(labelLevel(s.level))}">${s.level}</span><div class="spell-head"><h3>${esc(s.name)}</h3><div class="spell-tags">${s.school?`<span class="tag ${s.school==='Necromancy'?'necro':''}">${esc(s.school)}</span>`:'<span class="tag">School unverified</span>'}${s.status==='cyst'?'<span class="tag cyst">Mother Cyst</span>':''}<span class="tag spell-dc" title="Saving throw DC, if applicable">DC ${dcFor(s.level,s.school)}</span></div></div></div>
        <div class="spell-purpose-tags" aria-label="Spell purpose tags">${tagsOf(s).slice(0,5).map(tag=>`<button type="button" class="tag tag-purpose" data-tag-filter="${esc(tag)}" title="Filter spells tagged ${esc(tag)}">${esc(tag)}</button>`).join('')}${tagsOf(s).length>5?`<span class="tag" title="View or edit to see all tags">+${tagsOf(s).length-5}</span>`:''}</div>
        <p class="spell-description ${brief?'':'empty'}">${brief?esc(brief):'Description not yet recorded. Add an effect summary in this spell record.'}</p>
        <details class="spell-mechanics"><summary>Full spell details</summary><dl>${mechanicsHTML}</dl><p class="muted small">Reference: ${esc(s.source||'Not recorded')} · ${esc(s.detailsSource||'Campaign notes / user entry')}</p></details>
        <div class="spell-actions"><button type="button" class="text-button" data-action="edit" data-id="${esc(s.id)}">View / edit</button>${rolled?`<button type="button" class="text-button" data-action="roll-effect" data-id="${esc(s.id)}" title="${esc(rolled.type)}">⚄ Roll effect</button>`:''}<button type="button" class="star-button ${s.favorite?'starred':''}" data-action="favorite" data-id="${esc(s.id)}" aria-label="${s.favorite?'Remove from':'Add to'} favourites" title="Favourite">${s.favorite?'★':'☆'}</button><button type="button" class="add-button" data-action="quick-prepare" data-id="${esc(s.id)}" ${available?'':'disabled title="All slots are filled"'}>＋ Prepare</button></div>
      </article>`;
    }).join(''):'<div class="empty-state"><strong>No spells found</strong><p>Try a different search or filter, or create a new inscription.</p></div>';
    makeFilters();
  }
  function prepare(spellId){
    const s=state.spells.find(x=>x.id===spellId);
    if(!s)return;
    if(currentCount(s.level)>=prepLimit(s.level)){toast(`${labelLevel(s.level)} has no free preparation slots (one may be reserved for Alacritous Cogitation).`);return;}
    state.prepared.push({id:uid(),spellId:s.id,used:false});
    persist();render();toast(`${s.name} prepared.`);
  }
  function renderPrep(){
    const max=Math.max(6,...state.spells.map(s=>s.level),...state.slots.map((n,i)=>n>0?i:0));
    $('#preparation-list').innerHTML=Array.from({length:max+1},(_,level)=>{
      const spells=state.spells.filter(s=>s.level===level).sort((a,b)=>a.name.localeCompare(b.name));
      const entries=state.prepared.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===level);
      const total=state.slots[level]||0;
      const count=entries.length, reserved=cogitationOccupies(level);
      const used=entries.filter(p=>p.used).length;
      const hasNecro=entries.some(p=>state.spells.find(s=>s.id===p.spellId)?.school==='Necromancy');
      const overLimit=Math.max(0,count+reserved-total);
      const open=Array.from({length:Math.max(total-count-reserved,0)},
        ()=>'<div class="prep-item is-open"><span class="prep-name">Empty spell slot</span></div>').join('');
      const content=entries.map(p=>{
        const spell=state.spells.find(s=>s.id===p.spellId);
        if(!spell)return '';
        return `<div class="prep-item ${p.used?'is-cast':''}" title="${esc(spell.school||'School unverified')}"><span class="prep-name">${esc(spell.name)}${spell.school==='Necromancy'?' ✦':''}</span><button type="button" data-action="toggle-cast" data-id="${esc(p.id)}" class="cast-button ${p.used?'is-restoring':''}">${p.used?'Restore':'Cast'}</button><button type="button" class="remove-prep" data-action="remove-prep" data-id="${esc(p.id)}" title="Remove prepared spell" aria-label="Remove ${esc(spell.name)}">×</button></div>`;
      }).join('');
      const cog=state.cogitation;
      const castSpell=cog?.spellId?state.spells.find(s=>s.id===cog.spellId):null;
      const feat=reserved
        ? `<div class="prep-item is-reserved ${cog.used?'is-cast':''}"><span class="prep-name">✧ Alacritous Cogitation — ${cog.used?'expended'+(castSpell?' ('+esc(castSpell.name)+')':''):'open reserved slot'}</span></div>`
        : '';
      return `<section class="prep-section"><div class="prep-top"><div class="prep-heading"><div class="prep-symbol">${level===0?'◌':level}</div><div><h3>${esc(labelLevel(level))}</h3><p>${used} cast · ${count-used} ready${reserved?' · 1 feat slot':''}</p></div></div><div><div class="prep-meter">${count+reserved} / ${total} slots</div><div class="meter-track"><div class="meter-fill" style="width:${total?Math.min(100,100*(count+reserved)/total):0}%"></div></div></div></div><div class="prep-content"><div class="prep-items">${content}${feat}${open || (!content&&!feat?'<div class="prep-item is-open"><span class="prep-name">No open slots</span></div>':'')}</div><div class="prep-controls"><select aria-label="Choose a spell for ${esc(labelLevel(level))}" id="prep-select-${level}" ${spells.length?'':'disabled'}>${spells.length?spells.map(s=>`<option value="${esc(s.id)}">${esc(s.name)}</option>`).join(''):'<option>No known spells at this level</option>'}</select><button type="button" class="btn btn-outline" data-action="prepare-level" data-level="${level}" ${count>=prepLimit(level)||!spells.length?'disabled':''}>＋ Prepare</button></div>${overLimit?`<div class="prep-warning">⚠ ${overLimit} slot${overLimit===1?' is':'s are'} over the current limit. No spells were deleted; free a slot or adjust the reservation.</div>`:''}${total>0&&!hasNecro?'<div class="prep-warning">✧ A Necromancy spell is still required for the specialist slot at this level.</div>':''}</div></section>`;
    }).join('');
  }
  function renderCogitation(){
    const feat=state.cogitation;
    const levelSelect=$('#alacritous-level');
    const oldLevel=levelSelect.value;
    levelSelect.innerHTML='<option value="">No reservation</option>'+
      state.slots.map((n,l)=>{
        const eligible=n>currentCount(l) || feat.level===l;
        return n>0 || feat.level===l
          ? `<option value="${l}" ${eligible?'':'disabled'}>Level ${l} · ${n} slots${!eligible?' (full)':''}</option>`
          : '';
      }).join('');
    levelSelect.value=feat.level===null?'':String(feat.level);
    levelSelect.disabled=feat.used;
    const spellSelect=$('#alacritous-spell');
    const chosen=feat.spellId || '';
    const valid=feat.level!==null && (state.slots[feat.level]||0)>0;
    const available=valid?state.spells.filter(s=>s.level<=feat.level).sort((a,b)=>a.level-b.level||a.name.localeCompare(b.name)):[];
    spellSelect.innerHTML='<option value="">Choose a known spell…</option>'+
      available.map(spell=>`<option value="${esc(spell.id)}">${spell.level} · ${esc(spell.name)}</option>`).join('');
    spellSelect.value=available.some(s=>s.id===chosen)?chosen:'';
    spellSelect.disabled=!valid||feat.used;
    const occupied=feat.level===null?false:currentCount(feat.level)<state.slots[feat.level];
    const canCast=valid&&occupied&&!feat.used&&!!spellSelect.value;
    $('#alacritous-cast').disabled=!canCast;
    $('#alacritous-status').textContent=feat.used?'Expended':feat.level===null?'Not reserved':!occupied?'Overbooked':'Ready';
    $('#alacritous-hint').textContent=feat.used?'Rest to refresh this feat.':
      feat.level===null?'Select a slot level to reserve.':
      !occupied?'No unprepared slot remains at this level.':
      'One slot stays open for a spell of level '+feat.level+' or lower.';
  }
  function renderDCPreview(){
    const level=Number($('#spell-level').value);
    const school=$('#spell-school').value;
    $('#spell-dc-preview').textContent=`Potential saving throw DC: ${dcFor(level,school)} · Level ${level}${school==='Necromancy'?' · Necromancy bonus applied':''}. Only applies to spells with saving throws.`;
  }
  function renderPresets(){
    const select=$('#preset-select');
    const previous=select.value;
    select.innerHTML='<option value="">Choose a preset…</option><option value="__campaign">✧ Last recorded campaign preparation</option>'+
      state.presets.map(p=>`<option value="${esc(p.id)}">${esc(p.name)} (${p.entries.length} spells)</option>`).join('');
    if([...select.options].some(o=>o.value===previous)) select.value=previous;
  }
  function savePreset(){
    const input=$('#preset-name'), name=input.value.trim();
    if(!name){toast('Give this preparation preset a name first.');input.focus();return;}
    if(!state.prepared.length){toast('Prepare at least one spell before saving a preset.');return;}
    const entries=state.prepared.map(p=>state.spells.find(s=>s.id===p.spellId)).filter(Boolean).map(s=>({level:s.level,name:s.name}));
    const existing=state.presets.find(p=>p.name.toLowerCase()===name.toLowerCase());
    if(existing&&!confirm(`Overwrite existing preset “${existing.name}”?`))return;
    if(!existing&&state.presets.length>=40){toast('Maximum of 40 presets reached.');return;}
    if(existing){existing.entries=entries;existing.cogitationLevel=state.cogitation.level;}
    else state.presets.push({id:uid(),name:name.slice(0,60),entries,cogitationLevel:state.cogitation.level});
    persist();renderPresets();
    $('#preset-select').value=existing?.id||state.presets.at(-1).id;
    input.value='';toast(`Saved “${name}” preset.`);
  }
  function loadPreset(){
    const id=$('#preset-select').value;
    if(!id){toast('Choose a preparation preset first.');return;}
    if(id==='__campaign'){loadRecordedPreparation();return;}
    const preset=state.presets.find(p=>p.id===id);
    if(!preset)return;
    if(!confirm(`Replace today's prepared spells with “${preset.name}”?`))return;
    const next=[];let skipped=0;
    const priorCogitation=state.cogitation;
    if(preset.cogitationLevel!==undefined){
      const level=preset.cogitationLevel;
      state.cogitation={
        level:level!==null && state.slots[level]>0?level:null,
        used:false,spellId:null
      };
      if(level!==null && state.cogitation.level===null)skipped++;
    }else state.cogitation={...priorCogitation,used:false,spellId:null};
    for(const entry of preset.entries){
      const spell=state.spells.find(s=>s.name===entry.name&&s.level===entry.level);
      if(!spell||next.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===entry.level).length>=prepLimit(entry.level)){skipped++;continue;}
      next.push({id:uid(),spellId:spell.id,used:false});
    }
    state.prepared=next;persist();render();
    toast(skipped?`Preset loaded; ${skipped} spell(s) skipped (unknown or insufficient slots).`:`Loaded “${preset.name}”.`);
  }
  function deletePreset(){
    const id=$('#preset-select').value;
    if(!id||id==='__campaign'){toast('Choose a saved custom preset to delete.');return;}
    const p=state.presets.find(p=>p.id===id);
    if(!p||!confirm(`Delete preparation preset “${p.name}”?`))return;
    state.presets=state.presets.filter(p=>p.id!==id);persist();renderPresets();
    toast('Preset deleted.');
  }
  function recalculateSlots(){
    if(state.autoSlots) state.slots=[...calcSlots(state.intelligence,state.spellcastingLevel).totals];
  }
  function overPreparedTotal(){
    return state.slots.reduce((sum,slots,l)=>sum+Math.max(0,currentCount(l)+cogitationOccupies(l)-slots),0);
  }
  function renderSlotControls(){
    for(const [key,id] of [['STR','ability-str'],['DEX','ability-dex'],['WIS','ability-wis'],['CHA','ability-cha']]){
      $('#'+id).value=state.abilities[key];
    }
    $('#intelligence-score').value=state.intelligence;
    $('#necro-bonus').value=state.necroBonus;
    $('#auto-slot-calc').checked=state.autoSlots;
    $('#wizard-spell-level').value=state.spellcastingLevel;
    $('#manual-slot-section').hidden=state.autoSlots;
    const breakdown=calcSlots(state.intelligence,state.spellcastingLevel);
    if(breakdown.entries.length){
      const columns = breakdown.entries.map(e=>{
        const available=e.base>0 && e.accessible;
        return `<tr class="${e.level===4?'highlight-level':''}"><td>${e.level===0?'Cantrip':e.level+'th'}</td><td>${available?e.base:'—'}</td><td>${available?e.bonus:'—'}</td><td>${available?e.specialty:'—'}</td><td><strong>${e.total}</strong></td></tr>`;
      }).join('');
      $('#slot-breakdown').innerHTML=
        `<details><summary>D&amp;D 3.5 slot breakdown · Level ${state.spellcastingLevel}, INT ${state.intelligence} (modifier ${breakdown.modifier>=0?'+':''}${breakdown.modifier})</summary><div class="slot-table-wrap"><table class="slot-table"><thead><tr><th>Spell</th><th>Base</th><th>INT</th><th>Specialist</th><th>Total</th></tr></thead><tbody>${columns}</tbody></table></div></details>`+
        `<p class="muted small">${state.autoSlots?'Using calculated slot totals.':'Manual slot override enabled; calculated totals shown above for reference.'}</p>`;
    }else $('#slot-breakdown').textContent='Slot calculation is unavailable offline; manual totals are retained.';
    $('#slot-controls').innerHTML=state.slots.map((n,l)=>`<label class="slot-control">${l===0?'Cantrip':`Level ${l}`}<input type="number" min="0" max="50" step="1" value="${n}" data-slot-level="${l}" aria-label="Daily slots for ${esc(labelLevel(l))}"></label>`).join('');
  }
  function render(){updateStats();renderLibrary();renderPrep();renderCogitation();renderSlotControls();renderPresets();window.refreshGrimoireSkills?.();window.refreshGrimoireSheet?.();window.refreshCombatRolls?.();}
  function setView(name){
    if(!['library','prepared','dice','journal','character'].includes(name))return;
    view=name;
    $$('.view').forEach(el=>el.hidden=(el.id!==`view-${name}`));
    $$('[data-view]').forEach(el=>{el.classList.toggle('active',el.dataset.view===name);if(el.dataset.view===name)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
    if(name==='prepared')renderPrep();
    if(name==='journal')renderSlotControls();
    window.scrollTo({top:Math.min(320,window.scrollY),behavior:'auto'});
  }
  function openEditor(id=null){
    const spell=id?state.spells.find(s=>s.id===id):null;
    $('#spell-form').reset();
    $('#edit-id').value=spell?.id||'';
    $('#dialog-title').textContent=spell?'Edit inscription':'New inscription';
    const fields={name:'spell-name',level:'spell-level',school:'spell-school',status:'spell-status',source:'spell-source',casting:'spell-casting',components:'spell-components',range:'spell-range',target:'spell-target',duration:'spell-duration',save:'spell-save',sr:'spell-sr',description:'spell-description',notes:'spell-notes'};
    for(const [key,sel] of Object.entries(fields)){
      const base=spell?.[key]??(key==='status'?'spellbook':'');
      $(`#${sel}`).value=(key==='description'&&!base&&spell)
        ? (spellReference?.get(spell)?.description||'') : base;
    }
    const knownTags=spellTagger?.core||[];
    const selectedTags=spell?tagsOf(spell):[];
    $('#spell-tag-options').innerHTML=knownTags.map(tag=>
      `<label class="tag-option"><input type="checkbox" data-spell-tag="${esc(tag)}" ${selectedTags.includes(tag)?'checked':''}>${esc(tag)}</label>`
    ).join('');
    $('#spell-custom-tags').value=selectedTags.filter(tag=>!knownTags.includes(tag)).join(', ');
    $('#spell-favorite').checked=!!spell?.favorite;
    $('#delete-spell').hidden=!spell;
    renderDCPreview();
    $('#spell-dialog').showModal();
  }
  function closeEditor(){$('#spell-dialog').close();}
  function saveEditor(event){
    event.preventDefault();
    const name=$('#spell-name').value.trim();if(!name){$('#spell-name').focus();toast('A spell needs a name.');return;}
    const get=(id)=>$(`#spell-${id}`).value.trim();
    const previous=state.spells.find(x=>x.id===$('#edit-id').value);
    const editing=!!previous;
    const data=normalizeSpell({
      id:previous?.id||uid(),name,level:Number($('#spell-level').value),school:get('school'),status:get('status'),source:get('source'),
      casting:get('casting'),components:get('components'),range:get('range'),target:get('target'),duration:get('duration'),save:get('save'),sr:get('sr'),detailsSource:previous?.detailsSource||'',
      description:get('description'),notes:get('notes'),favorite:$('#spell-favorite').checked,
      tags:[...[...document.querySelectorAll('[data-spell-tag]:checked')].map(el=>el.dataset.spellTag),...$('#spell-custom-tags').value.split(',')]
    });
    if(previous){
      const currentPrepared=state.prepared.filter(p=>p.spellId===previous.id).length;
      if(currentPrepared && previous.level!==data.level && currentCount(data.level)+currentPrepared>prepLimit(data.level)){
        toast('Clear some prepared spells or increase available slots before changing this spell level.');return;
      }
      state.spells[state.spells.indexOf(previous)]=data;
    }else state.spells.push(data);
    persist();closeEditor();render();toast(editing?'Spell inscription updated.':'Spell added to the grimoire.');
  }
  function deleteSpell(){
    const id=$('#edit-id').value;
    const s=state.spells.find(s=>s.id===id);if(!s)return;
    if(!confirm(`Delete “${s.name}” from the spellbook and remove its prepared slots?`))return;
    state.spells=state.spells.filter(s=>s.id!==id);
    state.prepared=state.prepared.filter(p=>p.spellId!==id);
    if(state.cogitation.spellId===id)state.cogitation.spellId=null;
    persist();closeEditor();render();toast('Spell deleted.');
  }
  function resetCasts(){
    state.prepared.forEach(p=>p.used=false);
    state.cogitation.used=false;
    state.cogitation.spellId=null;
    // Limited-use daily racial/class abilities and feat counters also reset.
    if(state.sheet){
      state.sheet.features.forEach(x=>{if(x.usesPerDay!==null)x.usedToday=0;});
      state.sheet.feats.forEach(x=>{if(x.usesPerDay!==null)x.usedToday=0;});
    }
    persist();render();toast('Rest complete — spells, Cogitation and daily powers refreshed.');
  }
  function clearPrepared(){
    if(!confirm('Clear every prepared spell slot? Your spellbook itself will be unchanged.'))return;
    state.prepared=[];persist();render();toast('Prepared spells cleared; any reserved Alacritous Cogitation slot remains reserved.');
  }
  function loadRecordedPreparation(){
    if(!confirm('Replace current preparation with the last recorded campaign snapshot? Cast tracking will reset.'))return;
    const next=[];
    // Campaign snapshot reserved one 6th-level open slot for this feat.
    state.cogitation={level:state.slots[6]>0?6:null,used:false,spellId:null};
    for(const [level,names] of Object.entries(window.STARTER_PREPARATION||{})){
      for(const name of names){
        const spell=state.spells.find(s=>s.name===name && s.level===Number(level));
        if(spell && next.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===Number(level)).length<prepLimit(Number(level))) next.push({id:uid(),spellId:spell.id,used:false});
      }
    }
    state.prepared=next;persist();render();toast('Last recorded preparation loaded.');
  }
  function exportBackup(){
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;
    a.download=`malzareth-grimoire-${new Date().toISOString().slice(0,10)}.json`;
    document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Grimoire backup exported.');
  }
  async function importBackup(file){
    if(!file)return;
    try{
      if(file.size>4000000)throw new Error('Backup file is too large.');
      const parsed=JSON.parse(await file.text());
      const next=normalizeData(parsed);
      if(!confirm(`Import backup containing ${next.spells.length} spells? This replaces the current device's grimoire. Export your current data first if needed.`))return;
      state=next;persist();$('#journal-notes').value=state.journal;render();toast('Grimoire imported successfully.');
    }catch(error){toast(`Import failed: ${error.message}`);}finally{$('#import-file').value='';}
  }
  function restoreDefaults(){
    if(!confirm('Reset ALL spells, edits, cast slots and notes to the original campaign starting record? Export a backup first if you wish to keep your changes.'))return;
    state=stateFactory();persist();$('#journal-notes').value=state.journal;render();toast('Starting spellbook restored.');
  }
  function actions(event){
    const tagButton=event.target.closest('[data-tag-filter]');
    if(tagButton){const tag=tagButton.dataset.tagFilter;activeTags.has(tag)?activeTags.delete(tag):activeTags.add(tag);renderLibrary();return;}
    const nav=event.target.closest('[data-view]');if(nav){setView(nav.dataset.view);return;}
    const pill=event.target.closest('[data-level]');if(pill && pill.matches('.filter-pill')){levelFilter=pill.dataset.level==='all'?'all':Number(pill.dataset.level);renderLibrary();updateStats();return;}
    const btn=event.target.closest('[data-action]');if(!btn)return;
    const {action,id,level}=btn.dataset;
    if(action==='edit')openEditor(id);
    else if(action==='favorite'){const s=state.spells.find(s=>s.id===id);if(s){s.favorite=!s.favorite;persist();renderLibrary();}}
    else if(action==='quick-prepare')prepare(id);
    else if(action==='roll-effect'){
      const spell=state.spells.find(s=>s.id===id);
      const effect=spellReference?.rollFor(spell,{
        casterLevel:state.spellcastingLevel+1,necroLevel:state.spellcastingLevel+3
      });
      if(!effect)return;
      setView('dice');
      if(!window.grimoireRollFormula?.({label:effect.label,formula:effect.formula}))
        toast('Dice are busy or this formula is not supported.');
    }
    else if(action==='prepare-level'){const sel=$(`#prep-select-${level}`);if(sel?.value)prepare(sel.value);}
    else if(action==='toggle-cast'){const p=state.prepared.find(p=>p.id===id);if(p){p.used=!p.used;persist();render();}}
    else if(action==='remove-prep'){state.prepared=state.prepared.filter(p=>p.id!==id);persist();render();}
  }
  document.addEventListener('click',actions);
  $('#header-add').addEventListener('click',()=>openEditor());
  $('#add-spell').addEventListener('click',()=>openEditor());
  $('#dialog-close').addEventListener('click',closeEditor);
  $('#cancel-spell').addEventListener('click',closeEditor);
  $('#spell-form').addEventListener('submit',saveEditor);
  $('#spell-level').addEventListener('change',renderDCPreview);
  $('#spell-school').addEventListener('change',renderDCPreview);
  $('#delete-spell').addEventListener('click',deleteSpell);
  $('#spell-dialog').addEventListener('click',e=>{if(e.target.id==='spell-dialog')closeEditor();});
  $('#search').addEventListener('input',renderLibrary);
  $('#status-filter').addEventListener('change',renderLibrary);
  $('#school-filter').addEventListener('change',renderLibrary);
  $('#tag-match-mode').addEventListener('change',renderLibrary);
  $('#tag-clear').addEventListener('click',()=>{activeTags.clear();renderLibrary();});
  $('#spell-tag-suggest').addEventListener('click',()=>{
    const tags=spellTagger?.tagsFor({name:$('#spell-name').value,status:$('#spell-status').value})||[];
    if(!tags.length){toast('No curated suggestions for this spell. Add tags manually.');return;}
    const existing=document.querySelectorAll('[data-spell-tag]:checked').length||$('#spell-custom-tags').value.trim();
    if(existing && !confirm('Replace the current tag choices with catalogue suggestions?'))return;
    document.querySelectorAll('[data-spell-tag]').forEach(el=>{el.checked=tags.includes(el.dataset.spellTag);});
    $('#spell-custom-tags').value=tags.filter(tag=>!(spellTagger?.core||[]).includes(tag)).join(', ');
    toast('Catalogue tag suggestions applied. Review them before saving.');
  });
  $('#only-faves').addEventListener('change',renderLibrary);
  $('#reset-casts').addEventListener('click',resetCasts);
  $('#alacritous-level').addEventListener('change',e=>{
    if(state.cogitation.used){renderCogitation();return;}
    const value=e.target.value;
    const level=value===''?null:Number(value);
    if(level!==null && (
       !Number.isInteger(level)||level<0||level>9||
       state.slots[level]<=currentCount(level)
    )){
      toast('Unprepare a spell at that level before reserving the slot.');
      renderCogitation();return;
    }
    state.cogitation={level,used:false,spellId:null};
    persist();render();
  });
  $('#alacritous-spell').addEventListener('change',e=>{
    state.cogitation.spellId=e.target.value||null;
    persist();renderCogitation();
  });
  $('#alacritous-cast').addEventListener('click',()=>{
    const feat=state.cogitation;
    const spell=state.spells.find(s=>s.id===feat.spellId);
    if(feat.level===null||feat.used||!spell||spell.level>feat.level||
       currentCount(feat.level)>=state.slots[feat.level]){
      toast('Choose a valid known spell and retain an open reserved slot.');return;
    }
    if(!confirm(`Cast ${spell.name} using the reserved level ${feat.level} slot? This expends Alacritous Cogitation for today.`))return;
    feat.used=true;persist();render();
    toast(`${spell.name} cast with Alacritous Cogitation. Ready again after rest.`);
  });
  $('#clear-prep').addEventListener('click',clearPrepared);
  $('#save-preset').addEventListener('click',savePreset);
  $('#load-preset').addEventListener('click',loadPreset);
  $('#delete-preset').addEventListener('click',deletePreset);
  $('#export-data').addEventListener('click',exportBackup);
  $('#import-data').addEventListener('click',()=>$('#import-file').click());
  $('#import-file').addEventListener('change',e=>importBackup(e.target.files?.[0]));
  $('#restore-defaults').addEventListener('click',restoreDefaults);
  $('#intelligence-score').value=state.intelligence;
  $('#wizard-spell-level').value=state.spellcastingLevel;
  $('#necro-bonus').value=state.necroBonus;
  for(const [id,key,min,max] of [
    ['intelligence-score','intelligence',1,99],
    ['wizard-spell-level','spellcastingLevel',1,20],
    ['necro-bonus','necroBonus',0,20]
  ]){
    $('#'+id).addEventListener('change',e=>{
      const n=Number(e.target.value);
      state[key]=Number.isFinite(n)?Math.max(min,Math.min(max,Math.trunc(n))):state[key];
      e.target.value=state[key];
      recalculateSlots();
      persist();render();
      const extra=overPreparedTotal();
      if(extra)toast(`${extra} already-prepared spell${extra===1?' exceeds':'s exceed'} your new limits. No spells were removed.`);
    });
  }
  $('#auto-slot-calc').addEventListener('change',e=>{
    if(e.target.checked && !slotRules){
      e.target.checked=false;toast('The slot calculator has not loaded. Refresh while online.');return;
    }
    state.autoSlots=e.target.checked;
    state.slots=state.autoSlots
      ? [...calcSlots(state.intelligence,state.spellcastingLevel).totals]
      : [...state.manualSlots];
    if(!state.autoSlots){
      for(let l=0;l<=MAX_LEVEL;l++)state.slots[l]=Math.max(state.slots[l],currentCount(l)+cogitationOccupies(l));
      state.manualSlots=[...state.slots];
    }
    persist();render();
    const extra=overPreparedTotal();
    toast(extra?`Automatic limits applied; ${extra} existing prepared spells exceed the new totals.`:
      state.autoSlots?'RAW slot calculation enabled.':'Manual slot overrides enabled.');
  });
  for(const [key,id] of [['STR','ability-str'],['DEX','ability-dex'],['WIS','ability-wis'],['CHA','ability-cha']]){
    $('#'+id).value=state.abilities[key];
    $('#'+id).addEventListener('change',event=>{
      const n=Number(event.target.value);
      if(Number.isFinite(n))state.abilities[key]=Math.max(1,Math.min(99,Math.trunc(n)));
      event.target.value=state.abilities[key];
      persist();window.refreshGrimoireSkills?.();
    });
  }
  $('#journal-notes').value=state.journal;
  $('#journal-notes').addEventListener('input',e=>{state.journal=e.target.value;persist();});
  $('#slot-controls').addEventListener('change',e=>{
    if(!e.target.matches('[data-slot-level]'))return;
    const level=Number(e.target.dataset.slotLevel);
    const next=Math.max(0,Math.min(50,Math.trunc(Number(e.target.value)||0)));
    if(next<currentCount(level)+cogitationOccupies(level)){toast(`Remove prepared spells or the feat reservation before reducing below ${currentCount(level)+cogitationOccupies(level)} slots.`);renderSlotControls();return;}
    state.slots[level]=next;state.manualSlots=[...state.slots];persist();render();
  });
  document.addEventListener('keydown',event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){
      event.preventDefault();setView('library');$('#search').focus();
    }
  });
  render();setView('library');
  if('serviceWorker' in navigator && (location.protocol==='https:' || ['localhost','127.0.0.1'].includes(location.hostname))){
    // Ask for a fresh worker instead of accepting a stale cached sw.js.
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'})
        .then(reg => reg.update().catch(() => {}))
        .catch(err => console.warn('Offline caching unavailable',err));
    });
    // On future worker updates, reload once to display the new version.
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!sessionStorage.getItem('grimoire-worker-reloaded')) {
          sessionStorage.setItem('grimoire-worker-reloaded', '1');
          location.reload();
        }
      });
    }
  }
})();