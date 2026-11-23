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
   campaign:'The Ashen Crown',era:'1373 DR · level 18; day not reconciled',
   race:'Lesser Tiefling Lich',characterClass:'Wizard 5 / Master Specialist 10 / Abjurant Champion 3',
   alignment:'Neutral Evil',origin:'Thay',size:'Medium',
   characterLevel:18,xp:78674,xpNext:171000,
   languages:'',description:'',deity:'',playerNotes:'',
   xpNote:'Level 18 achieved; 78,674 XP is a historical snapshot, not the current confirmed XP. Next level 171,000 XP.'
 },
 combat:{
   maxHP:150,currentHP:150,tempHP:0,damageNotes:'',speedFt:30,
   bab:10,baseSaves:{fort:5,ref:5,will:14},saveMisc:{fort:0,ref:0,will:0},
   naturalArmor:5,enhanceNatural:3,deflection:3,armorMisc:0,shieldMisc:0,saveResistance:5,
   initiativeMisc:6,attackMisc:0,actionPoints:7,
   buffs:{greaterMageArmor:false,shield:false,haste:false},
   conditions:'Current active buffs, temporary HP, damage and combat conditions must be checked against the current session; the prior 19:00 checkpoint is historical.',attackNotes:'Lich touch: negative energy 1d8+5; DC calculated using HD + Charisma.',
   defencesNotes:'DR 15/bludgeoning and magic; cold & electricity immunity; fire resistance 5; turn resistance +4.',
   actionNote:'Action points: 7 last recorded, current expenditures not reconciled.'
 },
 currency:{
   gp:262892,sp:4,cp:8,pp:0,
   fortressTreasuryGp:35543,
   notes:'23 Eleasis pre-Orathion: 271,517 gp 4 sp 8 cp cash after previous equipment purchases, less 8,625 gp scrolls = 262,892 gp 4 sp 8 cp. Escrow 245,000 gp not yet earned; titan equipment/loot pending. FortressTreasuryGp field is an old historical figure, not additional current cash.'
 },
 inventory:[
   item('headband-intellect-4','Headband of Intellect +4','Magic item','Worn',1,{equipped:true,notes:'Included in INT 30; do not add the bonus again.'}),
   item('ring-protection-3','Ring of Protection +3','Magic item','Worn',1,{equipped:true,notes:'Deflection +3 is included in the character sheet AC calculation.'}),
   item('cloak-resistance-5','Cloak of Resistance +5','Magic item','Worn',1,{equipped:true,notes:'+5 resistance bonus already included in saving throws. Replaces previous +3 cloak.'}),
   item('ring-mortal-guise','Ring of Mortal Guise','Magic item','Worn',1,{equipped:true,notes:'Custom ring; Disguise Self at will; +10 Disguise while active.'}),
   item('amulet-natural-armour-3','Amulet of Natural Armour +3','Magic item','Worn',1,{equipped:true,notes:'+3 enhancement to natural armour included in AC; replaces previous +2 amulet.'}),
    item('orange-prism-ioun-stone','Orange Prism Ioun Stone','Magic item','Worn / slotless',1,{equipped:true,notes:'+1 general caster level; already reflected in CL 19 and Necromancy CL 21.'}),
    item('belt-of-battle','Belt of Battle','Magic item','Worn',1,{equipped:true,charges:3,maxCharges:3,notes:'+2 competence initiative included in combat values; 3 daily charges, spent for additional actions. Current charges require session verification.'}),
    item('third-eye-clarity','Third Eye Clarity','Magic item','Worn / face',1,{equipped:true,charges:1,maxCharges:1,notes:'Immediate activation once per day to negate one confusion, daze, fascination or stun effect. Current use unverified.'}),
    item('boots-of-speed','Boots of Speed','Magic item','Worn / feet',1,{equipped:true,charges:10,maxCharges:10,notes:'Up to 10 rounds of haste effects daily. Track rounds as charges; current daily expenditure unverified.'}),
    item('pearl-power-5','Pearl of Power (5th level)','Magic item','Carried',1,{charges:1,maxCharges:1,notes:'Once daily recalls one prepared 5th-level spell cast that day. Current use unverified.'}),
   item('staff-transmutation','Staff of Transmutation','Staff / wand','Carried',1,{charges:44,maxCharges:50,notes:'Last recovered 44/50 charges, CL 13. Expeditious Retreat, Alter Self, Blink (1); Polymorph, Baleful Polymorph (2); Disintegrate (3). Charges not re-audited.',certainty:'last-sheet'}),
   item('wand-orb-force','Wand of Orb of Force (CL 7)','Staff / wand','Carried',1,{charges:47,maxCharges:50,notes:'Purchased in Suzail; 7d6 force; last recovered 47/50 charges. Verify subsequent uses.',certainty:'recent-session'}),
   item('bag-holding-iv','Bag of Holding, Type IV','Container','Carried',1,{weightLb:60,notes:'Purchased in Suzail. Capacity 1,500 lb and 250 cubic feet. The bag itself weighs 60 lb. Contents are tracked separately.',certainty:'recent-session'}),
   item('blessed-book','Boccob\'s Blessed Book','Book / document','Carried / spellbook',1,{notes:'Already owned before the titan spell purchase; eight new spells occupy 37 pages. No further material transcription cost, 24 hours per spell.'}),
   item('heroics-fighter-fragment','Heroics — 15th-level fighter equipment fragment','Component','Component pouch',1,{notes:'Consumable piece of armament used in combat by a fighter of at least 15th level, secured during pre-fight procurement; one casting only. No book-listed GP cost.'}),
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
   item('loot-ring-prot-1','Ring of Protection +1','Magic item','Unallocated treasure',1,{valueGp:2000,notes:'25 Mirtul loot; not equipped.'}),
   item('loot-gentle-repose','Wand of Gentle Repose (CL 3)','Staff / wand','Unallocated treasure',1,{charges:18,maxCharges:50,notes:'25 Mirtul loot; 18 charges remaining.'}),
   item('loot-bracers-armor-2','Bracers of Armor +2','Magic item','Unallocated treasure',1,{valueGp:4000,notes:'25 Mirtul loot; not equipped.'}),
   item('loot-gem-hoard','Gem hoard (aggregate)','Loot / unappraised','Party reserve',1,{valueGp:7200,notes:'Includes 10 black onyx, 3 diamonds and 3 bloodstones; do not count separately.'}),
   item('loot-ordinary-valuables','Ordinary valuables (aggregate)','Loot / unappraised','Party reserve',1,{valueGp:1695,notes:'25 Mirtul checkpoint.'}),
   item('loot-chain-shirts','Chain shirts (reserve)','Armour','Party reserve',2,{notes:'3 recovered; 1 issued, 2 reserve.'}),
   item('loot-longswords','Longswords (reserve)','Weapon','Party reserve',3,{notes:'4 recovered; 1 issued, 3 reserve. Can supply Sword of Darkness material if authorised.'}),
   item('loot-shields','Shields (reserve)','Armour','Party reserve',3,{notes:'4 recovered; 1 issued, 3 reserve.'}),
   item('loot-crossbows','Light crossbows','Weapon','Party reserve',2),
   item('loot-breastplate-new','Breastplate (25 Mirtul)','Armour','Party reserve',1,{notes:'Check against prior unappraised breastplate; not counted in aggregate totals again.'}),
   item('loot-heavy-mace','Heavy mace','Weapon','Party reserve',1),
   item('loot-spears','Spears','Weapon','Party reserve',3),
   item('loot-bolts','Crossbow bolts','Ammunition','Party reserve',40),
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
   feat('mother-cyst','Mother Cyst','Libris Mortis','Enables the full Necrotic Cyst spell family.','Necromancy'),
   feat('combat-casting','Combat Casting','Player’s Handbook','+4 Concentration when casting defensively or grappled; qualification for Abjurant Champion.','Combat'),
   feat('quicken-spell','Quicken Spell','Player’s Handbook','Swift action metamagic, normally +4 slot levels; shares swift action with Wraithstrike and Swift Abjuration.','Metamagic')
 ],
 features:[
   feature('undead','Undead traits','Type','No Constitution; 18d12 HD. Immune to poison, sleep, paralysis, stunning, disease, death effects, nonlethal damage, critical hits, fatigue, exhaustion, energy drain, and other standard undead immunities.'),
   feature('lich-defenses','Lich resistances','Lich','Cold and electricity immunity; DR 15/bludgeoning and magic; darkvision 60 ft; +4 turn resistance.'),
   feature('lich-touch','Lich damaging touch','Lich','Melee touch attack; 1d8+5 negative energy to living creatures, Will half. Save DC scales with 1/2 HD + CHA.'),
   feature('lich-paralysis','Paralysing touch','Lich','Living creatures hit by lich touch must make Fortitude save (DC scales with 1/2 HD + CHA) or be permanently paralysed.'),
   feature('lich-fear','Fear aura','Lich','60-ft radius; creatures below 5 HD that see the lich make Will save or suffer fear; successful save grants 24h immunity.'),
   feature('lich-phylactery','Lich phylactery','Lich','If phylactery survives, lich can reform in 1d10 days; location must remain protected.'),
   feature('darkness','Darkness','Heritage','Lesser tiefling: Darkness 1/day.',1),
   feature('fire-resistance','Fire resistance','Heritage','Lesser tiefling: Fire resistance 5.'),
   feature('esoterica-minor','Minor school esoterica','Master Specialist','When casting Necromancy, allied undead within 60 ft gain +10 turn resistance and +10 saves for 10 rounds.'),
   feature('caster-level','Necromancy caster-level bonus','Master Specialist','Master Specialist adds +2 to Necromancy caster level; Orange Prism Ioun Stone adds +1 general caster level. Level 18: CL 19 general, 21 Necromancy.'),
   feature('esoterica-moderate','Moderate school esoterica','Master Specialist','When casting Necromancy, temporary immunity to ability damage/drain, energy drain and negative levels for rounds equal to spell level.'),
   feature('expanded-spellbook','Expanded spellbook','Master Specialist','At class levels 2, 5 and 8, add an extra spell of the specialty school. Level 8 choice: Waves of Exhaustion.'),
   feature('esoterica-major','Major school esoterica','Master Specialist 10','Casting Necromancy grants allied undead within 60 ft fast healing 10 for 5 rounds.'),
   feature('abjurant-armor','Abjurant Armor','Abjurant Champion 3','Adds +3 to shield and armour bonuses from Abjuration: Shield grants +7 shield AC. Greater Mage Armour does not benefit.'),
   feature('extended-abjuration','Extended Abjuration','Abjurant Champion','Automatically doubles duration of Abjuration spells, no slot increase.'),
   feature('swift-abjuration','Swift Abjuration','Abjurant Champion 3','2nd-level or lower Abjuration spells can be swift actions; shares one swift action per turn with Quicken Spell and Wraithstrike.')
 ],
 resolvedAudit:[],
 audit:[
   'Level 18: 1 Truespeak cross-class rank bought with 2 skill points; 8 level-18 points remain unallocated.',
   'LA buyoff complete (+0). Current level-18 XP requires reconciliation; old number is historical.',
   'Confirm pending 3,510 gp sale receipts, exact gem/valuable breakdown and unallocated magic inventory; do not double count.',
   'Action-point uses since the last sheet are not fully itemised; 7 is a historical value.',
   'Black onyx balance and staff/wand charges should be updated after each expenditure.',
   'Unidentified captured gear, potions, scrolls and documents need appraisal or identification.',
   'All eight pre-Orathion scrolls transcribed in Blessed Book; their scrolls were consumed. Do not add to currently prepared spells without preparing them.',
   'Complete spellbook transcription, prohibited-school exceptions, language list, carrying load and other situational modifiers are not fully audited.',
   'Equipping or removing a magic item does not automatically change attack, AC or save modifiers. Update combat adjustments when equipment changes.',
   'Specific weapon attack profiles, spell resistance (if any), armour-check penalties, exact encumbrance thresholds and temporary buff durations are not fully recorded.',
   'Four skill points over the simple historical allocation remain approved by the campaign; keep the rank ledger and note the house rule.'
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
