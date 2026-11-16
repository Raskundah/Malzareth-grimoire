/* Campaign-verified starter character record.
   Baseline: Malzareth_Vhane_Updated_Character_Sheet_v3.pdf, 28 Tarsakh 1373 DR.
   Later purchases/treasury from the 16 Nov 2026 session: do NOT add old treasury
   to the newer available cash total without reconciling the ledger. */
(() => {
'use strict';
const item=(id,name,category,location,qty=1,options={})=>({
 id,name,category,location,qty,weightLb:null,valueGp:null,charges:null,maxCharges:null,
 equipped:false,notes:'',certainty:'recorded',...options
});
const feat=(id,name,source,effect,kind='General')=>({
 id,name,source,effect,kind,notes:'',usesPerDay:null,usedToday:0
});
const feature=(id,name,category,effect,usesPerDay=null)=>({
 id,name,category,effect,usesPerDay,usedToday:0,notes:''
});
const baseline={
 identity:{
   name:'Malzareth Vhane',title:'The Seventh Keeper',
   campaign:'The Ashen Crown',era:'28 Tarsakh 1373 DR',
   race:'Lesser Tiefling Lich',characterClass:'Wizard 5 / Master Specialist 7',
   alignment:'Neutral Evil',origin:'Thay',size:'Medium',
   characterLevel:12,xp:71975,xpNext:78000,
   languages:'',description:'',deity:'',playerNotes:'',
   xpNote:'XP 71,975 / 78,000 last confirmed on the post-lich sheet. Level adjustment and XP/buyoff ruling require reconciliation.'
 },
 combat:{
   maxHP:95,currentHP:95,tempHP:0,damageNotes:'',speedFt:30,
   bab:5,baseSaves:{fort:3,ref:3,will:9},saveMisc:{fort:0,ref:0,will:0},
   naturalArmor:5,enhanceNatural:2,deflection:3,armorMisc:0,shieldMisc:0,saveResistance:3,
   initiativeMisc:4,attackMisc:0,actionPoints:7,
   buffs:{greaterMageArmor:false,shield:false,haste:false},
   conditions:'',attackNotes:'Lich touch: negative energy 1d8+5; DC calculated using HD + Charisma.',
   defencesNotes:'DR 15/bludgeoning and magic; cold & electricity immunity; fire resistance 5; turn resistance +4.',
   actionNote:'Action points: 7 last recorded, current expenditures not reconciled.'
 },
 currency:{
   gp:11755,sp:4,cp:3,pp:0,
   fortressTreasuryGp:35543,
   notes:'11,755 gp 4 sp 3 cp is the latest reported combined liquid remainder after Suzail purchases. 35,543 gp treasury was reported earlier in the same session: do NOT add it to available cash without a fresh reconciliation.'
 },
 inventory:[
   item('headband-intellect-4','Headband of Intellect +4','Magic item','Worn',1,{equipped:true,notes:'Included in INT 30; do not add the bonus again.'}),
   item('ring-protection-3','Ring of Protection +3','Magic item','Worn',1,{equipped:true,notes:'Deflection +3 included in AC 23.'}),
   item('cloak-resistance-3','Cloak of Resistance +3','Magic item','Worn',1,{equipped:true,notes:'+3 resistance bonus already included in saves.'}),
   item('ring-mortal-guise','Ring of Mortal Guise','Magic item','Worn',1,{equipped:true,notes:'Custom ring; Disguise Self at will; +10 Disguise while active.'}),
   item('amulet-natural-armour-2','Amulet of Natural Armour +2','Magic item','Worn',1,{equipped:true,notes:'+2 enhancement to natural armour already included in AC.'}),
   item('staff-transmutation','Staff of Transmutation','Staff / wand','Carried',1,{charges:50,maxCharges:50,notes:'Last recorded 50/50 charges, CL 13. Expeditious Retreat, Alter Self, Blink (1); Polymorph, Baleful Polymorph (2); Disintegrate (3). Charges not re-audited.',certainty:'last-sheet'}),
   item('wand-orb-force','Wand of Orb of Force (CL 7)','Staff / wand','Carried',1,{charges:50,maxCharges:50,notes:'Purchased in Suzail; 7d6 force, 50 charges at acquisition. Verify any subsequent uses.',certainty:'recent-session'}),
   item('bag-holding-iv','Bag of Holding, Type IV','Container','Carried',1,{weightLb:60,notes:'Purchased in Suzail. Capacity 1,500 lb and 250 cubic feet. The bag itself weighs 60 lb. Contents are tracked separately.',certainty:'recent-session'}),
   item('spellbooks','Personal spellbooks','Book / document','Carried',1,{notes:'Full transcription still being reconciled against Grimoire spell archive.'}),
   item('robes','Ornate robes','Clothing','Worn',1,{equipped:true}),
   item('onyx','Black onyx components','Component','Carried',1,{valueGp:550,notes:'550 gp worth is the last itemised component stock; quantity/current amount not verified.',certainty:'last-sheet'}),
   item('phylactery','Phylactery (skull-shaped jar)','Important','Secured repository',1,{notes:'Concealed in lowest restricted repository. Not carried; if intact, lich may reform in 1d10 days.'}),
   item('ring-mind-shielding','Ring of Mind Shielding','Magic item','Stored / unconfirmed',1,{notes:'Retained from recent events. Exact wearer/storage not confirmed; remember two-ring limit.',certainty:'recent-session'}),
   item('black-iron-staff','Black iron ceremonial staff (unidentified)','Loot / unappraised','Stored / unconfirmed',1,{notes:'From Shyntlara Auvryndar; not identified or valued.',certainty:'unverified'}),
   item('breastplate-loot','Fine breastplate','Loot / unappraised','Stored / unconfirmed',1,{notes:'Captured loot. Earlier outdated breastplate sold; this is separate unappraised loot.',certainty:'unverified'}),
   item('holy-symbol','Silver holy symbol of Kiaransalee','Loot / unappraised','Stored / unconfirmed',1,{certainty:'unverified'}),
   item('potions-unknown','Unidentified potions','Consumable','Stored / unconfirmed',2,{certainty:'unverified'}),
   item('scroll-cases','Sealed scroll cases','Book / document','Stored / unconfirmed',2,{certainty:'unverified'}),
   item('onyx-signet','Black-onyx signet ring','Loot / unappraised','Stored / unconfirmed',1,{certainty:'unverified'}),
   item('small-iron-key','Small iron key','Important','Stored / unconfirmed',1,{certainty:'unverified'}),
   item('documents','Recovered documents / ledgers','Book / document','Stored / unconfirmed',1,{notes:'Exact contents require inventory audit.',certainty:'unverified'})
 ],
 feats:[
   feat('scribe-scroll','Scribe Scroll','Player’s Handbook','Wizard 1 bonus feat; make scrolls using normal prerequisites.','Item creation'),
   feat('spell-focus','Spell Focus (Necromancy)','Player’s Handbook','+1 save DC for Necromancy spells.','Spellcasting'),
   feat('greater-spell-focus','Greater Spell Focus (Necromancy)','Player’s Handbook','Further +1 Necromancy save DC; Master Specialist bonus.','Spellcasting'),
   feat('skill-focus','Skill Focus (Spellcraft)','Player’s Handbook','+3 Spellcraft checks; Master Specialist 1 bonus.','Skill'),
   feat('corpsecrafter','Corpsecrafter','Libris Mortis','Undead raised/created with Necromancy spells gain +4 Strength and +2 HP per HD.','Necromancy'),
   feat('improved-initiative','Improved Initiative','Player’s Handbook','+4 Initiative checks.','Combat'),
   feat('craft-wondrous','Craft Wondrous Item','Player’s Handbook','Allows crafting qualifying wondrous items; used for phylactery.','Item creation'),
   feat('alacritous-cogitation','Alacritous Cogitation','Complete Mage','Once per day, cast a known arcane spell using an open reserved slot as a full-round action. Managed in Prepared tab.','Spellcasting'),
   feat('mother-cyst','Mother Cyst','Libris Mortis','Enables the full Necrotic Cyst spell family.','Necromancy')
 ],
 features:[
   feature('undead','Undead traits','Type','No Constitution; 12d12 HD. Immune to poison, sleep, paralysis, stunning, disease, death effects, nonlethal damage, critical hits, fatigue, exhaustion, energy drain, and other standard undead immunities.'),
   feature('lich-defenses','Lich resistances','Lich','Cold and electricity immunity; DR 15/bludgeoning and magic; darkvision 60 ft; +4 turn resistance.'),
   feature('lich-touch','Lich damaging touch','Lich','Melee touch attack; 1d8+5 negative energy to living creatures, Will half. Save DC scales with 1/2 HD + CHA.'),
   feature('lich-paralysis','Paralysing touch','Lich','Living creatures hit by lich touch must make Fortitude save (DC scales with 1/2 HD + CHA) or be permanently paralysed.'),
   feature('lich-fear','Fear aura','Lich','60-ft radius; creatures below 5 HD that see the lich make Will save or suffer fear; successful save grants 24h immunity.'),
   feature('lich-phylactery','Lich phylactery','Lich','If phylactery survives, lich can reform in 1d10 days; location must remain protected.'),
   feature('darkness','Darkness','Heritage','Lesser tiefling: Darkness 1/day.',1),
   feature('fire-resistance','Fire resistance','Heritage','Lesser tiefling: Fire resistance 5.'),
   feature('esoterica-minor','Minor school esoterica','Master Specialist','When casting Necromancy, allied undead within 60 ft gain +7 turn resistance and +7 saving throws for 7 rounds.'),
   feature('caster-level','Necromancy caster-level bonus','Master Specialist','+1 caster level on Necromancy (typically CL 13 at current progression; increases further at Master Specialist 9).'),
   feature('esoterica-moderate','Moderate school esoterica','Master Specialist','When casting Necromancy, temporary immunity to ability damage/drain, energy drain and negative levels for rounds equal to spell level.'),
   feature('expanded-spellbook','Expanded spellbook','Master Specialist','At class levels 2 and 5, add an extra spell of the specialty school.')
 ],
 resolvedAudit:[],
 audit:[
   'Latest experience needs checking after recent events: 71,975 / 78,000 is from the last PDF.',
   'Lich +4 level adjustment and the campaign XP/LA-buyoff arrangement require an explicit ruling.',
   'Recent shopping, treasury transfers and the 11,755 gp cash remainder need one reconciled ledger: do not sum treasury and liquid figures.',
   'Action-point uses since the last sheet are not fully itemised; 7 is a historical value.',
   'Black onyx balance and staff/wand charges should be updated after each expenditure.',
   'Unidentified captured gear, potions, scrolls and documents need appraisal or identification.',
   'Complete spellbook transcription, prohibited-school exceptions, language list, carrying load and other situational modifiers are not fully audited.'
 ]
};
const clone = value=>JSON.parse(JSON.stringify(value));
const n=(x,fallback,min=-999999999,max=999999999)=>Number.isFinite(Number(x))&&x!==''&&x!==null&&x!==undefined?
 Math.max(min,Math.min(max,Number(x))):fallback;
const str=(x,fallback='',max=600)=>typeof x==='string'?x.slice(0,max):fallback;
const safeId=x=>str(x,'',100).replace(/[^a-z0-9-]/gi,'').slice(0,100);
const updateList=(original,arr,fields,max,kind)=>{
 if(!Array.isArray(arr))return clone(original);
 const result=[];
 for(const raw of arr.slice(0,max)){
  if(!raw||typeof raw!=='object')continue;
  const item=kind==='items'
   ? {id:safeId(raw.id)||'item-'+result.length,name:str(raw.name,'Untitled',120),category:str(raw.category,'Other',80),location:str(raw.location,'Carried',120),qty:n(raw.qty,1,0,999999),weightLb:raw.weightLb===null?null:n(raw.weightLb,null,0,9999999),valueGp:raw.valueGp===null?null:n(raw.valueGp,null,0,999999999),charges:raw.charges===null?null:n(raw.charges,null,0,999999),maxCharges:raw.maxCharges===null?null:n(raw.maxCharges,null,0,999999),equipped:!!raw.equipped,notes:str(raw.notes,'',1000),certainty:str(raw.certainty,'user',40)}
   : kind==='feats'
    ? {id:safeId(raw.id)||'feat-'+result.length,name:str(raw.name,'Feat',120),source:str(raw.source,'',120),effect:str(raw.effect,'',1200),kind:str(raw.kind,'General',60),notes:str(raw.notes,'',1000),usesPerDay:raw.usesPerDay===null?null:n(raw.usesPerDay,null,0,100),usedToday:n(raw.usedToday,0,0,100)}
    : {id:safeId(raw.id)||'feature-'+result.length,name:str(raw.name,'Feature',120),category:str(raw.category,'Other',60),effect:str(raw.effect,'',1200),usesPerDay:raw.usesPerDay===null?null:n(raw.usesPerDay,null,0,100),usedToday:n(raw.usedToday,0,0,100),notes:str(raw.notes,'',1000)};
  if(!item.name||result.some(x=>x.id===item.id))item.id='custom-'+kind+'-'+result.length;
  result.push(item);
 }
 return result;
};
function normalize(input){
 const original=clone(baseline);
 if(!input||typeof input!=='object')return original;
 const id=input.identity||{},c=input.combat||{},cur=input.currency||{};
 for(const k of ['name','title','campaign','era','race','characterClass','alignment','origin','size','languages','description','deity','playerNotes','xpNote'])
   original.identity[k]=str(id[k],original.identity[k],k==='playerNotes'?2000:450);
 for(const k of ['characterLevel','xp','xpNext'])original.identity[k]=n(id[k],original.identity[k],0,999999999);
 for(const k of ['maxHP','currentHP','tempHP','speedFt','bab','naturalArmor','enhanceNatural','deflection','armorMisc','shieldMisc','saveResistance','initiativeMisc','attackMisc','actionPoints'])
   original.combat[k]=n(c[k],original.combat[k],k==='currentHP'?-999:-200,100000);
 for(const k of ['damageNotes','conditions','attackNotes','defencesNotes','actionNote'])original.combat[k]=str(c[k],original.combat[k],2000);
 for(const k of ['fort','ref','will']){
   original.combat.baseSaves[k]=n(c.baseSaves?.[k],original.combat.baseSaves[k],-100,100);
   original.combat.saveMisc[k]=n(c.saveMisc?.[k],original.combat.saveMisc[k],-100,100);
 }
 for(const k of ['greaterMageArmor','shield','haste'])original.combat.buffs[k]=!!c.buffs?.[k];
 for(const k of ['gp','sp','cp','pp','fortressTreasuryGp'])original.currency[k]=n(cur[k],original.currency[k],0,999999999);
 original.currency.notes=str(cur.notes,original.currency.notes,2000);
 original.inventory=updateList(baseline.inventory,input.inventory,null,300,'items');
 original.feats=updateList(baseline.feats,input.feats,null,150,'feats');
 original.features=updateList(baseline.features,input.features,null,150,'features');
 original.audit=Array.isArray(input.audit)?input.audit.slice(0,30).map(x=>str(x,'',550)).filter(Boolean):clone(baseline.audit);
 original.resolvedAudit=Array.isArray(input.resolvedAudit)?input.resolvedAudit.slice(0,50).map(x=>str(x,'',550)):[];
 return original;
}
window.SHEET_MODEL={createDefault:()=>clone(baseline),normalize};
})();
