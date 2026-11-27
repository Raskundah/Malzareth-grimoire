/* Companion folios: independent of the original grimoire storage and migration. */
(() => {'use strict';
const SEEDS={
  "vara": {
    "name": "Vara Blackthorn",
    "role": "Shock assault",
    "race": "Half-orc",
    "alignment": "Neutral Evil (provisional)",
    "classes": "Fighter 20 / Spiritual Lion Totem Barbarian 1",
    "level": 21,
    "xp": 211525,
    "maxHP": 270,
    "hp": 270,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": 25,
    "dex": 14,
    "con": 22,
    "int": 10,
    "wis": 12,
    "cha": 8,
    "bab": 20,
    "epic": 1,
    "initiative": 10,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": null,
    "ref": null,
    "will": null,
    "attack": 40,
    "damage": "2d6+21",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. HP and XP are level-21 values; current HP defaults to rested maximum for the new session and is editable. Attack +40 is prior campaign buffed +39 with epic +1; conditional, not unbuffed. Confirm active buffs and weapon profile. Alignment provisional; ability scores are the last stated equipped values. Exact AC/save and skill totals require reconciliation.",
    "feats": "Superior Initiative; Improved Initiative (superseded); Weapon Supremacy; Weapon Focus and Greater Weapon Focus (greatsword); Weapon Specialization and Greater Weapon Specialization; Melee Weapon Mastery; Power Attack; Shock Trooper; Leap Attack; Combat Brute; Robilar’s Gambit; Combat Reflexes. Other feats not fully recovered.",
    "features": "Pounce (Ex): full attack at end of a legal charge; replaces Fast Movement. Rage 1/day: +4 Str/Con, +2 morale Will, −2 AC; 11 rounds with Con 26; +42 HP at level 21. Fatigued afterward. Weapon Supremacy: take 10 on one attack/round; +5 to a later attack in a full attack; other benefits see PHB II. Heedless Charge moves Power Attack penalty to AC; maximum 21 per prior campaign ruling. Leap Attack only on qualifying jump. Robilar’s Gambit: opponents gain +4 attack/damage, retaliatory AoO after attack. Combat Brute: Momentum Swing on round after qualifying charge. Ring of Freedom of Movement; Soulfire.",
    "gear": "+5 Soulfire mithral full plate\nBelt of Giant Strength +6\nAmulet of Health +6\nRing of Protection +5\nRing of Freedom of Movement\nWinged Vest\nArmbands of Might\nHorned Helm\nGloves of Fortunate Striking\nBoots of Speed\n+4 unholy greatsword (retained); main greatsword +5 per combat record, precise properties to verify",
    "skills": "Jump: +2 ranks at 21 (previous total unknown)\nClimb: +1 rank at 21 (previous total unknown)\nSwim: +1 rank at 21 (previous total unknown)",
    "tactics": "Nerveskitter +5 initiative if Malzareth uses it on Vara. Haste gives fifth attack. Charge, Pounce, Shock Trooper; full Power Attack only if accuracy/defence tradeoff is appropriate. Prior buffed raging charge profile +44/+44/+39/+34/+29, conditional. Bless Weapon oil when needed; do not assume active.",
    "resources": [
      {
        "name": "Rage",
        "max": 1,
        "left": 1
      },
      {
        "name": "Winged Vest activation",
        "max": 1,
        "left": 1
      },
      {
        "name": "Boots of Speed rounds",
        "max": 10,
        "left": 10
      }
    ],
    "moves": [],
    "spells": []
  },
  "sylrissa": {
    "name": "Sylrissa Vhaen",
    "role": "Precision execution / infiltration",
    "race": "Drow",
    "alignment": "Unverified",
    "classes": "Rogue 16 / Swordsage 4 / Hit-and-Run Fighter 1",
    "level": 21,
    "xp": 211525,
    "maxHP": 184,
    "hp": 184,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": null,
    "dex": 29,
    "con": 18,
    "int": 16,
    "wis": 12,
    "cha": null,
    "bab": 15,
    "epic": 1,
    "initiative": null,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": 16,
    "ref": 30,
    "will": 15,
    "attack": 35,
    "damage": "1d8+12d6+21",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. Attack +35 and damage are prior conditional campaign estimates for flat-footed target within 30 ft, Haste, Recitation, Rapid Shot; verify gear bonuses and situational modifiers. Saves from level-20 record; full initiative not recovered (+2 Hit-and-Run at 21). Splitting commissioned and paid, not confirmed delivered. HP defaults to rested max. Exact skill totals/known maneuvers need audit.",
    "feats": "Lingering Damage (epic); Precise Shot (Fighter bonus); Crossbow Sniper; Rapid Shot; Rapid Reload; Point Blank Shot; Adaptive Style; Darkstalker; Improved Initiative (recorded earlier); Crippling Strike (Rogue special ability). Other feats pending audit.",
    "features": "Sneak attack 8d6 base; Assassin’s Stance +2d6; Rogue’s Vest +1d6; Deadly Precision +1d6. Crossbow Sniper allows qualifying sneak attacks within 60 ft. Crippling Strike: 2 Str damage on qualifying sneak attacks; does not repeat with Lingering Damage. Hit-and-Run +2 initiative, +9 competence weapon damage vs flat-footed targets within 30 ft. Lingering Damage: record actual core sneak attack damage per qualifying hit, repeat next turn (campaign ruling excludes item bonus dice). Splitting: two separately rolled projectiles per bolt; each eligible for sneak attack in full attack per campaign ruling. Evasion, trapfinding, trap sense, uncanny dodge/improved uncanny dodge, Swordsage discipline focus; verify exact special ability list.",
    "gear": "+5 Deadly Precision light crossbow; Splitting upgrade commissioned (+9 equivalent, 90,000 gp paid)\nGreater Truedeath Crystal\nGreater Demolition Crystal (6,000 gp paid); one augment crystal attached at a time\nCelestial Armor\nGloves of Dexterity +6\nAmulet of Health +6\nRing of Protection +5\nRogue’s Vest\nBelt of Battle\nScout’s Headband\nGoggles of Foefinding\nBoots of Speed\nCloak of Resistance +5\nRing of Counterspells (stored spell unknown)\nBracers of Murder",
    "skills": "Hide: +1 rank at 21 (2 points)\nMove Silently: +1 rank at 21 (2 points)\nJump: +1 rank at 21\nSearch / Disable Device: last recorded 19 ranks; current ranks unverified\nOpen Lock, Tumble, Spot, Listen, Use Magic Device: verify exact ranks",
    "tactics": "Assassin’s Stance for precision damage; Pearl of Black Doubt for defence. Hasted splitting full attack: +35/+35/+35/+30/+25, each doubled (conditional). No ranged flanking by default. Switch crystals for undead/constructs. Check concealment, immunity, range and flat-footed status. Belt of Battle for positioning/full attacks. Track lingering damage separately per target.",
    "resources": [
      {
        "name": "Belt of Battle charges",
        "max": 3,
        "left": 3
      },
      {
        "name": "Boots of Speed rounds",
        "max": 10,
        "left": 10
      }
    ],
    "moves": [
      {
        "name": "Cloak of Deception",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Blade Technique",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Garrote",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Stride",
        "ready": false,
        "spent": false
      },
      {
        "name": "Strength Draining Strike",
        "ready": false,
        "spent": false
      },
      {
        "name": "Hand of Death",
        "ready": false,
        "spent": false
      },
      {
        "name": "Bloodletting Strike",
        "ready": false,
        "spent": false
      },
      {
        "name": "Sudden Leap",
        "ready": false,
        "spent": false
      },
      {
        "name": "Bonesplitting Strike (prerequisite audit)",
        "ready": false,
        "spent": false
      }
    ],
    "spells": [],
    "lingering": []
  },
  "voss": {
    "name": "Malrec Voss",
    "role": "Divine support / counter-magic",
    "race": "Human",
    "alignment": "Neutral Evil",
    "classes": "Cleric 15 / Paragnostic Apostle 5 / Hierophant 1",
    "level": 21,
    "xp": 211425,
    "maxHP": 204,
    "hp": 204,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": null,
    "dex": null,
    "con": 20,
    "int": 14,
    "wis": 28,
    "cha": null,
    "bab": null,
    "epic": 1,
    "initiative": null,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": null,
    "ref": null,
    "will": null,
    "attack": null,
    "damage": "",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. Wisdom 28 until Tome of Understanding +3 is read; expected 31 if no higher inherent bonus. HP defaults to rested max. Exact ability scores, saves, BAB, turning pool, prepared spells and slot totals not recovered; do not infer. Skill ranks reconstructed in level-21 advancement.",
    "feats": "Epic Spellcasting; Divine Metamagic (Persistent Spell); Persistent Spell; Divine Defiance; other feats pending full audit.",
    "features": "Velsharoon; Magic and Death domains. Cleric caster level 21 including Hierophant; Bead of Karma +4 while active. Rebuke/command undead as Cleric 15 before items. Divine Reach: deliver touch-range divine spells at 30 ft (ranged touch attack where required). Divine Defiance: spend rebuke attempt to counterspell as immediate action; appropriate counterspell needed. Divine Metamagic: spend rebuke attempts to apply selected metamagic; Persistent Spell costs 7 attempts. Paragnostic Apostle: Penetrating Insight, Mind over Matter recorded; other selections to verify. Epic Spellcasting: two daily epic divine spells after development; none developed.",
    "gear": "+5 Soulfire mithral full plate\n+5 Animated Shield\nCirclet of Wisdom +6 / Rapid Casting\nBelt of Battle / Constitution +6\nRing of Protection +5\nNightstick\nReliquary Holy Symbol\nRing of Enduring Arcana\nTunic of Steady Spellcasting\nScepter of the Netherworld\nPrayer Bead of Karma\nThird Eye Clarity\nCloak of Resistance +5\nTome of Understanding +3 (reading in progress)",
    "skills": "Concentration: 24 ranks\nSpellcraft: 24 ranks\nKnowledge (religion): 24 ranks\nKnowledge (arcana): 23 ranks\nHeal: 18 ranks\nDecipher Script: 12 ranks\nKnowledge (the planes): 5 ranks",
    "tactics": "Prepare Mass Conviction, Recitation, Freedom of Movement, Death Ward, Righteous Wrath of the Faithful, True Seeing, Greater Spell Immunity where available. Use Divine Defiance or immediate rescue (Delay Death) as appropriate; same immediate action. Heal Vara/Sylrissa or Harm Malzareth through Divine Reach. Mass Resurgence for ongoing effects. Belt of Battle for extra action. Spell list below is suggested, not prepared until entered.",
    "resources": [
      {
        "name": "Belt of Battle charges",
        "max": 3,
        "left": 3
      },
      {
        "name": "Bead of Karma",
        "max": 1,
        "left": 1
      },
      {
        "name": "Epic spells (after development)",
        "max": 2,
        "left": 2
      },
      {
        "name": "Rebuke attempts (verify)",
        "max": null,
        "left": null
      }
    ],
    "moves": [],
    "spells": []
  }
};

const KEY='ashen-crown-companion-folios-v1';
const clone=x=>JSON.parse(JSON.stringify(x));
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const validId=id=>own(SEEDS,id);
const safe=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const n=(x)=>x===''||x==null?null:Number(x);
const bounded=(x,min,max)=>Number.isFinite(x)?Math.min(max,Math.max(min,Math.trunc(x))):null;
const empty=()=>({version:1,active:'malzareth',characters:clone(SEEDS)});
function normalize(raw){
 if(!raw||raw.version!==1||!raw.characters||typeof raw.characters!=='object')throw Error('Invalid party backup');
 const next=empty();
 for(const id of Object.keys(SEEDS)){
  const src=raw.characters[id]; if(!src||typeof src!=='object'||Array.isArray(src))throw Error('Missing character '+id);
  const base=next.characters[id];
  for(const k of Object.keys(base)){
   if(!own(src,k))continue;
   if(Array.isArray(base[k])){
    if(!Array.isArray(src[k])||src[k].length>500)throw Error('Invalid list '+k);
    if(k==='resources'||k==='spells')base[k]=src[k].map(r=>{if(!r||typeof r.name!=='string')throw Error('Invalid resource');return {name:r.name.slice(0,200),max:bounded(n(r.max),0,999),left:bounded(n(r.left),0,999),...(k==='spells'?{level:bounded(n(r.level),0,9),notes:String(r.notes??'').slice(0,1000)}:{})};});
    else if(k==='moves')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),ready:!!r.ready,spent:!!r.spent}));
    else if(k==='lingering')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),damage:bounded(n(r.damage),0,100000)??0}));
   }else if(typeof base[k]==='number'||base[k]===null)base[k]=bounded(n(src[k]),-100000,1000000000);
   else if(typeof src[k]==='string')base[k]=src[k].slice(0,30000);
  }
 }
 next.active=validId(raw.active)?raw.active:'malzareth';
 return next;
}
let state=empty(), loadError='';
try{const old=localStorage.getItem(KEY);if(old)state=normalize(JSON.parse(old));}catch(e){loadError='Saved companion data could not be read. It has not been overwritten. Export or recover it before editing.';}
const app=document.querySelector('#app'); if(!app)return;
const bar=document.createElement('section');bar.className='party-switcher';bar.setAttribute('aria-label','Select character');
bar.innerHTML='<label for="party-select">Character</label> <select id="party-select"><option value="malzareth">Malzareth Vhane</option>'+Object.keys(SEEDS).map(id=>'<option value="'+id+'">'+safe(SEEDS[id].name)+'</option>').join('')+'</select><button type="button" class="btn btn-small btn-outline" id="party-export">Export companion backup</button><button type="button" class="btn btn-small btn-outline" id="party-import">Import companion backup</button><input type="file" id="party-file" accept=".json,application/json" hidden><p class="muted small" id="party-status" role="status" aria-live="polite"></p>';
app.querySelector('.site-header').after(bar);
const panel=document.createElement('section');panel.id='party-folio';panel.hidden=true;bar.after(panel);
const style=document.createElement('style');style.textContent=
'.party-switcher{display:flex;gap:.55rem;align-items:center;flex-wrap:wrap;margin:1rem 0;padding:.75rem;border:1px solid #776a85;border-radius:.7rem}.party-switcher label{font-weight:700}.party-switcher select{max-width:100%;min-width:12rem}.party-switcher p{flex-basis:100%;margin:0}.party-mode #app>.hero,.party-mode #app>.status-grid,.party-mode #app>.main-grid,.party-mode #header-add,.party-mode .mobile-nav{display:none!important}#party-folio[hidden]{display:none!important}#party-folio{padding-bottom:2rem}#party-folio .party-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(125px,1fr));gap:.7rem}#party-folio label{display:flex;flex-direction:column;gap:.25rem;font-size:.86rem}#party-folio input,#party-folio textarea{width:100%;box-sizing:border-box}#party-folio textarea{min-height:8rem;resize:vertical}#party-folio .party-box{border:1px solid #776a85;border-radius:.7rem;padding:1rem;margin:.8rem 0}#party-folio .party-row{display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;margin:.5rem 0}#party-folio .party-row label{flex:1;min-width:80px}#party-folio .party-row button{flex-shrink:0}#party-folio .party-roll{white-space:pre-wrap;min-height:2rem;font-weight:600}#party-folio details>summary{cursor:pointer;font-weight:700}#party-folio button{min-height:36px}#party-folio .party-note{color:inherit;opacity:.85;font-size:.88rem}';
document.head.append(style);
const q=s=>bar.querySelector(s), status=t=>q('#party-status').textContent=t;
function save(){if(loadError){status(loadError);return false;}try{localStorage.setItem(KEY,JSON.stringify(state));status('Companion records saved on this device.');return true;}catch(e){status('Save failed: '+e.message+'. Export a backup before closing.');return false;}}
const select=q('#party-select');select.value=state.active;
const rollDie=d=>{const a=new Uint32Array(1);const limit=Math.floor(4294967296/d)*d;do{crypto.getRandomValues(a);}while(a[0]>=limit);return 1+a[0]%d;};
function rollExpr(expr){const s=String(expr).replace(/\s+/g,'').toLowerCase();if(!/^[+-]?(?:\d*d\d+|\d+)(?:[+-](?:\d*d\d+|\d+))*$/.test(s))throw Error('Use e.g. 2d6+21 or 1d8+12d6+21');let total=0,parts=[];for(const term of s.match(/[+-]?(?:\d*d\d+|\d+)/g)){const sign=term[0]==='-'?-1:1;const t=term.replace(/^[+-]/,'');if(t.includes('d')){const [a,b]=t.split('d'),count=Number(a||1),sides=Number(b);if(count<1||count>100||sides<2||sides>10000)throw Error('Dice outside supported range');const dice=Array.from({length:count},()=>rollDie(sides));total+=sign*dice.reduce((x,y)=>x+y,0);parts.push((sign<0?'-':'+')+t+' ['+dice.join(', ')+']');}else{const value=Number(t);if(value>100000)throw Error('Modifier too large');total+=sign*value;parts.push((sign<0?'-':'+')+t);}}return total+' = '+parts.join(' ');}
const numberFields=[['level','Level'],['xp','XP'],['maxHP','Max HP'],['hp','Current HP'],['tempHP','Temporary HP'],['ap','Action points left'],['maxAP','Action point maximum'],['str','Strength'],['dex','Dexterity'],['con','Constitution'],['int','Intelligence'],['wis','Wisdom'],['cha','Charisma'],['bab','Pre-epic BAB'],['epic','Epic attack bonus'],['initiative','Initiative modifier'],['ac','AC'],['touch','Touch AC'],['flat','Flat-footed AC'],['fort','Fortitude'],['ref','Reflex'],['will','Will'],['attack','Attack modifier (edit for buffs)'],['speed','Speed (ft)']];
const numInput=(key,label,value)=>'<label>'+safe(label)+'<input type="number" step="1" data-field="'+key+'" value="'+safe(value)+'" placeholder="Unverified"></label>';
const textInput=(key,label,value)=>'<label>'+safe(label)+'<input type="text" data-field="'+key+'" value="'+safe(value)+'"></label>';
const textarea=(key,label,value)=>'<label>'+safe(label)+'<textarea data-field="'+key+'">'+safe(value)+'</textarea></label>';
const check=(name,mod)=>'<button type="button" class="btn btn-small btn-outline" data-roll="'+safe(name)+'" data-mod="'+safe(mod??'')+'" '+(mod==null?'disabled title="Enter the modifier first"':'')+'>'+safe(name)+(mod==null?' ?':' '+(mod>=0?'+':'')+mod)+'</button>';
function render(){
 const id=state.active;document.body.classList.toggle('party-mode',id!=='malzareth');panel.hidden=id==='malzareth';if(panel.hidden)return;
 const c=state.characters[id];const resourceRows=(arr,kind)=>arr.map((r,i)=>'<div class="party-row"><label>Name<input data-list="'+kind+'" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label>'+(kind==='spells'?'<label>Level<input type="number" min="0" max="9" data-list="'+kind+'" data-i="'+i+'" data-key="level" value="'+safe(r.level)+'"></label>':'')+'<label>Remaining<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="left" value="'+safe(r.left)+'" placeholder="?"></label><label>Maximum<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="max" value="'+safe(r.max)+'" placeholder="?"></label><button type="button" class="btn btn-small btn-outline" data-act="spend" data-list="'+kind+'" data-i="'+i+'">Use</button><button type="button" class="btn btn-small btn-outline" data-act="remove" data-list="'+kind+'" data-i="'+i+'">Remove</button>'+(kind==='spells'?'<label>Notes<input data-list="'+kind+'" data-i="'+i+'" data-key="notes" value="'+safe(r.notes)+'"></label>':'')+'</div>').join('');
 panel.innerHTML='<div class="section-header"><div><p class="eyebrow">THE ASHEN CROWN · COMPANION FOLIO</p><h2>'+safe(c.name)+'</h2><p class="muted">'+safe(c.classes)+' · '+safe(c.role)+'</p></div></div><p class="party-note">Independent local save. Blank numbers are unknown, not zero. Edits save on change; export a companion backup separately from Malzareth’s original backup.</p>'+
 '<div class="party-box"><h3>Vitals &amp; combat</h3><div class="party-grid">'+numberFields.map(([k,l])=>numInput(k,l,c[k])).join('')+'</div><div class="party-row"><button type="button" class="btn btn-outline" data-act="damage">Apply damage</button><button type="button" class="btn btn-outline" data-act="heal">Heal</button><input type="number" min="0" id="party-hp-change" placeholder="HP amount" aria-label="HP amount" style="max-width:110px"><button type="button" class="btn btn-outline" data-act="ap">Spend action point</button><button type="button" class="btn btn-outline" data-act="rest">Reset daily resources</button></div></div>'+
 '<div class="party-box"><h3>Dice &amp; attacks</h3><div class="party-row">'+check('Initiative',c.initiative)+check('Fortitude',c.fort)+check('Reflex',c.ref)+check('Will',c.will)+check('Attack',c.attack)+'<button type="button" class="btn btn-outline" data-act="actiondice">Action dice (3d6 highest)</button></div><div class="party-row">'+textInput('damage','Damage expression',c.damage)+'<button type="button" class="btn btn-accent" data-act="weapondamage">Roll damage</button></div><div class="party-row"><label>Custom check name<input id="party-check-name" placeholder="e.g. Hide or Spellcraft"></label><label>Modifier<input id="party-check-mod" type="number" step="1" placeholder="Enter modifier"></label><button type="button" class="btn btn-outline" data-act="custom">Roll d20</button><label>Any dice expression<input id="party-dice" placeholder="2d6+4"></label><button type="button" class="btn btn-outline" data-act="dice">Roll</button></div><div class="party-roll" role="status" aria-live="polite" id="party-roll-result"></div></div>'+
 '<div class="party-box"><h3>Daily resources</h3>'+resourceRows(c.resources,'resources')+'<button type="button" class="btn btn-outline" data-act="add" data-list="resources">Add resource</button></div>'+
 (id==='sylrissa'?'<div class="party-box"><h3>Maneuvers &amp; lingering damage</h3><p class="party-note">Choose the actual readied maneuvers before combat (maximum per class record to verify). Adaptive Style recovery follows its normal action requirements.</p>'+c.moves.map((r,i)=>'<div class="party-row"><span>'+safe(r.name)+'</span><label>Readied<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="ready" '+(r.ready?'checked':'')+'></label><label>Expended<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="spent" '+(r.spent?'checked':'')+'></label></div>').join('')+'<button type="button" class="btn btn-outline" data-act="recover">Recover maneuvers</button><h4>Lingering Damage (next turn)</h4>'+c.lingering.map((r,i)=>'<div class="party-row"><label>Target<input data-list="lingering" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label><label>Core sneak damage<input type="number" min="0" data-list="lingering" data-i="'+i+'" data-key="damage" value="'+safe(r.damage)+'"></label><button type="button" class="btn btn-outline" data-act="remove" data-list="lingering" data-i="'+i+'">Clear applied</button></div>').join('')+'<button type="button" class="btn btn-outline" data-act="add" data-list="lingering">Record qualifying hit</button><p class="party-note">Pending total: '+c.lingering.reduce((a,r)=>a+r.damage,0)+'</p></div>':'')+
 (id==='voss'?'<div class="party-box"><h3>Divine preparation</h3><p class="party-note">No exact prepared list recovered. Enter prepared spells, count, level and notes; suggested spells appear in tactics below. This is a manual tracker, not an automatic cleric slot calculator.</p>'+resourceRows(c.spells,'spells')+'<button type="button" class="btn btn-outline" data-act="add" data-list="spells">Add prepared spell</button></div>':'')+
 '<div class="party-box"><h3>Character records</h3><div class="party-grid">'+textInput('name','Name',c.name)+textInput('race','Race',c.race)+textInput('alignment','Alignment',c.alignment)+textInput('classes','Class progression',c.classes)+textInput('role','Role',c.role)+'</div>'+textarea('feats','Feats',c.feats)+textarea('features','Class features &amp; rules',c.features)+textarea('gear','Equipment / inventory',c.gear)+textarea('skills','Skills (ranks / modifiers)',c.skills)+textarea('tactics','Tactical reference',c.tactics)+textarea('notes','Audit / campaign notes',c.notes)+'</div>';
}
select.addEventListener('change',()=>{state.active=select.value;save();render();});
panel.addEventListener('change',e=>{const t=e.target,c=state.characters[state.active];if(!c)return;if(t.dataset.field){const k=t.dataset.field;if(!own(c,k))return;c[k]=t.type==='number'?bounded(n(t.value),-100000,1000000000):t.value;save();if(['initiative','fort','ref','will','attack'].includes(k))render();}else if(t.dataset.list){const arr=c[t.dataset.list],r=arr?.[Number(t.dataset.i)];if(!r||!own(r,t.dataset.key))return;const k=t.dataset.key;r[k]=t.type==='checkbox'?t.checked:t.type==='number'?bounded(n(t.value),0,100000):t.value;save();if(t.dataset.list==='lingering')render();}});
panel.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const c=state.characters[state.active];if(!c)return;const output=msg=>{const el=panel.querySelector('#party-roll-result');if(el)el.textContent=msg;};try{
 if(b.dataset.roll){if(b.dataset.mod==='')return;const d=rollDie(20),m=Number(b.dataset.mod);output(b.dataset.roll+': '+d+' '+(m<0?'− '+Math.abs(m):'+ '+m)+' = '+(d+m));return;}
 const a=b.dataset.act,kind=b.dataset.list,i=Number(b.dataset.i),arr=c[kind];if(!a)return;
 if(a==='dice'){output(rollExpr(panel.querySelector('#party-dice').value));return;}
 if(a==='weapondamage'){output(rollExpr(c.damage));return;}
 if(a==='custom'){const mod=n(panel.querySelector('#party-check-mod').value);if(!Number.isFinite(mod))throw Error('Enter the verified modifier');const d=rollDie(20);output((panel.querySelector('#party-check-name').value||'Check')+': '+d+' + ('+mod+') = '+(d+mod));return;}
 if(a==='actiondice'){const ds=Array.from({length:3},()=>rollDie(6));output('Action dice: '+ds.join(', ')+' → '+Math.max(...ds)+' (spend AP separately)');return;}
 if(a==='damage'||a==='heal'){const amount=bounded(n(panel.querySelector('#party-hp-change').value),0,100000);if(amount===null||c.hp===null)throw Error('Enter a valid HP amount and current HP');if(a==='damage'){const absorb=Math.min(Math.max(c.tempHP||0,0),amount);c.tempHP=(c.tempHP||0)-absorb;c.hp-=amount-absorb;}else{if(c.maxHP===null)throw Error('Enter maximum HP first');c.hp=Math.min(c.maxHP,c.hp+amount);}}
 else if(a==='ap'){if(c.ap==null||c.ap<=0)throw Error('No recorded action points remaining');c.ap--;}
 else if(a==='rest'){if(!confirm('Reset tracked daily resources and prepared spell counts? HP and action points will not be changed.'))return;for(const r of [...c.resources,...c.spells])if(r.max!=null)r.left=r.max;}
 else if(a==='recover'){if(!confirm('Recover readied maneuvers after the appropriate recovery action?'))return;for(const r of c.moves)if(r.ready)r.spent=false;}
 else if(a==='add'&&Array.isArray(arr)){arr.push(kind==='lingering'?{name:'',damage:0}:kind==='spells'?{name:'',level:null,left:1,max:1,notes:''}:{name:'',left:null,max:null});}
 else if(a==='remove'&&Array.isArray(arr)){if(!confirm('Remove this entry?'))return;arr.splice(i,1);}
 else if(a==='spend'&&Array.isArray(arr)){if(!arr[i]||arr[i].left==null||arr[i].left<=0)throw Error('Enter remaining uses or resource exhausted');arr[i].left--;}
 else return;save();render();
 }catch(err){output(err.message);status(err.message);}
});
q('#party-export').addEventListener('click',()=>{const raw=loadError?localStorage.getItem(KEY):JSON.stringify(state,null,2);const url=URL.createObjectURL(new Blob([raw??''],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ashen-crown-companions-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
q('#party-import').addEventListener('click',()=>q('#party-file').click());
q('#party-file').addEventListener('change',async e=>{try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('Backup too large');const next=normalize(JSON.parse(await file.text()));if(!confirm('Replace the three local companion records? Malzareth’s grimoire is unaffected.'))return;const old=localStorage.getItem(KEY);if(old)localStorage.setItem(KEY+'-pre-import',old);localStorage.setItem(KEY,JSON.stringify(next));state=next;loadError='';select.value=state.active;render();status('Companion backup imported. Previous data retained in pre-import backup.');}catch(err){status('Import failed: '+err.message);}finally{e.target.value='';}});
if(loadError)status(loadError);render();
})();