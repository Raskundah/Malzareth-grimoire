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
   campaign:'The Ashen Crown',era:'19 Marpenoth 1375 DR · preparing for the Stolen Hour',
   race:'Lesser Tiefling Lich',characterClass:'Wizard 5 / Master Specialist 10 / Abjurant Champion 5',
   alignment:'Neutral Evil',origin:'Thay',size:'Medium',
   characterLevel:20,xp:199525,xpNext:210000,
   languages:'',description:'',deity:'',playerNotes:'',
   xpNote:'Confirmed current XP 199,525 after +9,000 shared campaign milestones and -1,000 for calling Gate. Two Wish XP costs were paid before level 19. Level 21 starts at 210,000 XP.'
 },
 combat:{
   maxHP:168,currentHP:168,tempHP:0,damageNotes:'',speedFt:30,
   bab:12,baseSaves:{fort:5,ref:5,will:15},saveMisc:{fort:-2,ref:1,will:1},
   naturalArmor:5,enhanceNatural:5,deflection:5,armorMisc:8,shieldMisc:0,saveResistance:5,
   initiativeMisc:6,attackMisc:1,actionPoints:7,
   buffs:{greaterMageArmor:false,shield:false,haste:false},
   conditions:'Current active buffs, temporary HP, damage and combat conditions must be checked against the current session; the prior 19:00 checkpoint is historical.',attackNotes:'Lich touch: negative energy 1d8+5; DC calculated using HD + Charisma.',
   defencesNotes:'DR 15/bludgeoning and magic; cold & electricity immunity; fire resistance 5; turn resistance +4.',
   actionNote:'Action points: 7 last recorded, current expenditures not reconciled.'
 },
 currency:{
   gp:660070,sp:0,cp:0,pp:0,
   fortressTreasuryGp:395750,
   notes:'After the Marquis figures are historical. Verified 19 Marpenoth 1375 DR discretionary liquid funds: 660,070 gp, following two Freedom scrolls at 3,825 gp each and one 100 gp oil of Bless Weapon (7,750 gp total), in addition to five earlier scrolls and jade focus already deducted. Separate war reserve: 395,750 gp; fortress treasury field is this same reserve, not additional cash. Unliquidated valuables: 269,115 gp, not cash. No payroll prepayments presumed.'
 },
 inventory:[
   item('headband-intellect-6','Headband of Intellect +6','Magic item','Worn / head',1,{equipped:true,notes:'+6 enhancement to natural Intelligence 29 (level-20 ability increase); equipped score 35. Does not add skill points.'}),
   item('ring-protection-5','Ring of Protection +5','Magic item','Worn / ring 1',1,{equipped:true,notes:'+5 deflection AC included in baseline.'}),
   item('cloak-displacement-minor','Minor Cloak of Displacement','Magic item','Worn / shoulders',1,{equipped:true,notes:'Continuous 20% miss chance against eligible attacks. Old Cloak of Resistance +5 was sold; Vest of the Archmagi gives +5 resistance instead.'}),
   item('ring-mortal-guise','Ring of Mortal Guise','Magic item','Carried / social-use swap',1,{equipped:false,notes:'Retained. Swap into ring 2 outside combat when needed: Disguise Self at will and +10 Disguise. Ring of Spell-Battle occupies ring 2 in combat.'}),
   item('ring-spell-battle','Ring of Spell-Battle','Magic item','Worn / ring 2 (combat)',1,{equipped:true,valueGp:12000,notes:'Magic Item Compendium p127. Detect spellcasting within 60ft; identify with Spellcraft; 1/day immediate-action counter or redirect per printed limits. Replaces Mortal Guise in combat.'}),
   item('vest-archmagi','Vest of the Archmagi','Magic item','Worn / torso',1,{equipped:true,valueGp:200000,notes:'+8 armor AC, +5 resistance on saves, +2 enhancement to overcome SR, and spell-recall features. Worn with Robe of Arcane Might; overlapping armor bonuses do not stack.'}),
   item('robe-arcane-might-necromancy','Robe of Arcane Might (Necromancy)','Magic item','Worn / body',1,{equipped:true,valueGp:21000,notes:'+1 Necromancy caster level; +4 armor overlaps Vest +8.'}),
   item('pale-green-prism-ioun-stone','Pale Green Prism Ioun Stone','Magic item','Worn / slotless',1,{equipped:true,valueGp:30000,notes:'+1 competence bonus to attacks, saves, checks; applies alongside competence effects only when they do not overlap.'}),
   item('dusty-rose-prism-ioun-stone','Dusty Rose Prism Ioun Stone','Magic item','Worn / slotless',1,{equipped:true,valueGp:5000,notes:'+1 insight to AC; earlier AC papers counted 37 unbuffed after appropriate netting with Vulnerable flaw; do not silently double count.'}),
   item('rod-undead-mastery','Rod of Undead Mastery','Rod','Carried / must hold for benefit',1,{valueGp:10000,notes:'While held, doubles applicable Animate Dead undead control capacity; changing to a metamagic rod can affect this capacity. It does not increase per-casting animation limit.'}),
   item('rod-quicken-greater','Greater Metamagic Rod of Quicken','Rod','Carried / accessible',1,{valueGp:170000,charges:3,maxCharges:3,notes:'Purchased after Marquis. 3 uses/day, quicken one arcane spell of up to 9th level without increasing slot; each still consumes one swift action and rod must be held.'}),
   item('rod-maximize-normal','Normal Metamagic Rod of Maximize','Rod','Carried / accessible',1,{valueGp:54000,charges:3,maxCharges:3,notes:'Purchased after Marquis. 3 uses/day, maximize a spell of up to 6th level. Maximize Enervation to 4 negative levels; rod must be held.'}),
   item('staff-necromancy','Staff of Necromancy','Staff / wand','Carried',1,{valueGp:65000,charges:50,maxCharges:50,notes:'Purchased full 50 charges after Marquis. DMG p244: Cause Fear 1; Ghoul Touch 1; Halt Undead 1; Enervation 2; Waves of Fatigue 2; Circle of Death 3. User chooses caster level and spell DCs when higher than staff (subject to staff rules).'}),
   item('rod-keychains','Rod keychains / retention clips (custom)', 'Accessory','Carried / custom rod holders',2,{valueGp:12000,notes:'Two purchased at 12,000 gp each = 24,000 gp. House-rule Wand Bracelet adaptation for heavier 5-lb metamagic rods. Up to four rods per clip as capacity permits; swift action to retrieve an item, move action to stow or exchange. These clips are custom slotless carriers by campaign approval, not official RAW; a retrieved rod must still be held to activate. No additional free-action drawing or magic-item activation.',certainty:'recorded'}),
   item('wand-bracelet','Wand Bracelet','Magic item','Worn / arms',1,{equipped:true,valueGp:12000,notes:'Magic Item Compendium p. 147. Stores up to four hand-held items of at most 3 lb each; swift action to retrieve, move action to store or switch. Intended for wands, not standard 5-lb rods. Arms slot; no other arms-slot magical item is currently equipped. Purchased after Marquis for 12,000 gp.'}),
   item('amulet-natural-armour-5','Amulet of Natural Armour +5','Magic item','Worn / throat',1,{equipped:true,notes:'+5 enhancement to lich natural armor +5; total natural armor +10.'}),
    item('orange-prism-ioun-stone','Orange Prism Ioun Stone','Magic item','Worn / slotless',1,{equipped:true,notes:'+1 general caster level; at 19th level general CL 20, Necromancy CL 23 including Master Specialist +2 and Robe +1.'}),
    item('belt-of-battle','Belt of Battle','Magic item','Worn',1,{equipped:true,charges:3,maxCharges:3,notes:'+2 competence initiative included in combat values; 3 daily charges, spent for additional actions. Current charges require session verification.'}),
    item('third-eye-clarity','Third Eye Clarity','Magic item','Worn / face',1,{equipped:true,charges:1,maxCharges:1,notes:'Immediate activation once per day to negate one confusion, daze, fascination or stun effect. Current use unverified.'}),
    item('boots-of-speed','Boots of Speed','Magic item','Worn / feet',1,{equipped:true,charges:10,maxCharges:10,notes:'Up to 10 rounds of haste effects daily. Track rounds as charges; current daily expenditure unverified.'}),
    item('pearl-power-5','Pearl of Power (5th level)','Magic item','Carried',1,{charges:1,maxCharges:1,notes:'Once daily recalls one prepared 5th-level spell cast that day. Current use unverified.'}),
   item('staff-transmutation','Staff of Transmutation','Staff / wand','Carried',1,{charges:44,maxCharges:50,notes:'Last recovered 44/50 charges, CL 13. Expeditious Retreat, Alter Self, Blink (1); Polymorph, Baleful Polymorph (2); Disintegrate (3). Charges not re-audited.',certainty:'last-sheet'}),
   item('wand-orb-force','Wand of Orb of Force (CL 7)','Staff / wand','Carried',1,{charges:42,maxCharges:50,notes:'Historical later count 42/50; charge total must be reconciled from in-session use log. 7d6 force.',certainty:'last-sheet'}),
   item('wand-acid','Acid-effect wand (spell unverified)','Staff / wand','Carried',1,{charges:48,maxCharges:50,notes:'Historical count 48/50. Specific acid spell and final charge count need verification.',certainty:'last-sheet'}),
   item('wand-greater-invisibility','Wand of Greater Invisibility','Staff / wand','Carried',1,{charges:21,maxCharges:50,notes:'Historical count 21/50; subsequent uses not yet reconciled.',certainty:'last-sheet'}),
   item('rod-extend-unknown','Metamagic Rod of Extend (tier unverified)','Rod','Stored / unconfirmed',1,{notes:'Earlier campaign references lesser and/or normal Extend rod; exact item/tier and current 3/day uses require verification. Do not double count with newly purchased rods.',certainty:'unverified'}),
   item('bag-holding-iv','Bag of Holding, Type IV','Container','Carried',1,{weightLb:60,notes:'Purchased in Suzail. Capacity 1,500 lb and 250 cubic feet. The bag itself weighs 60 lb. Contents are tracked separately.',certainty:'recent-session'}),
   item('blessed-book','Boccob\'s Blessed Book','Book / document','Carried / spellbook',1,{notes:'Already owned before the titan spell purchase; eight new spells occupy 37 pages. No further material transcription cost, 24 hours per spell.'}),
    item('jade-shapechange-circlet','Jade Circlet (Shapechange focus)','Magic focus','Carried / spell component pouch',1,{valueGp:1500,notes:'Reusable jade circlet, at least 1,500 gp, required focus for Shapechange; purchased 18 Marpenoth 1375 DR. This cost is already deducted from liquid treasury.'}),
    item('scroll-freedom-reserve','Scroll of Freedom (9th, arcane CL 17)','Consumable','Carried / emergency spell scroll case',1,{valueGp:3825,notes:'One of two scrolls bought 19 Marpenoth 1375 DR; the other was transcribed and consumed. This scroll is held in reserve for phane stasis rescue. Cost already paid.'}),
    item('oil-bless-weapon','Oil of Bless Weapon','Consumable','Carried / Vara weapon kit',1,{valueGp:100,notes:'D&D 3.5 oil for Vara\'s currently reported +5 greatsword. Grants good alignment temporarily, suppressing other weapon alignments, for bypassing phane regeneration. Does not bypass DR 15/epic and does not grant ghost touch; consume on application.'}),
   item('heroics-fighter-fragment','Heroics — 15th-level fighter equipment fragment','Component','Component pouch',1,{notes:'Consumable piece of armament used in combat by a fighter of at least 15th level, secured during pre-fight procurement; one casting only. No book-listed GP cost.'}),
   item('spellbooks','Personal spellbooks','Book / document','Carried',1,{notes:'Full transcription still being reconciled against Grimoire spell archive.'}),
   item('robes','Ornate robes','Clothing','Stored / spare',1,{equipped:false}),
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
   feature('undead','Undead traits','Type','No Constitution; 20d12 HD (20th d12 HP roll pending). Immune to poison, sleep, paralysis, stunning, disease, death effects, nonlethal damage, critical hits, fatigue, exhaustion, energy drain, and other standard undead immunities.'),
   feature('lich-defenses','Lich resistances','Lich','Cold and electricity immunity; DR 15/bludgeoning and magic; darkvision 60 ft; +4 turn resistance.'),
   feature('lich-touch','Lich damaging touch','Lich','Melee touch attack; 1d8+5 negative energy to living creatures, Will half. Save DC scales with 1/2 HD + CHA.'),
   feature('lich-paralysis','Paralysing touch','Lich','Living creatures hit by lich touch must make Fortitude save (DC scales with 1/2 HD + CHA) or be permanently paralysed.'),
   feature('lich-fear','Fear aura','Lich','60-ft radius; creatures below 5 HD that see the lich make Will save or suffer fear; successful save grants 24h immunity.'),
   feature('lich-phylactery','Lich phylactery','Lich','If phylactery survives, lich can reform in 1d10 days; location must remain protected.'),
   feature('darkness','Darkness','Heritage','Lesser tiefling: Darkness 1/day.',1),
   feature('fire-resistance','Fire resistance','Heritage','Lesser tiefling: Fire resistance 5.'),
   feature('esoterica-minor','Minor school esoterica','Master Specialist','When casting Necromancy, allied undead within 60 ft gain +10 turn resistance and +10 saves for 10 rounds.'),
   feature('caster-level','Necromancy caster-level bonus','Master Specialist','Master Specialist adds +2 to Necromancy caster level; Orange Prism Ioun Stone adds +1 general caster level. Level 20: CL 21 general with Orange Prism; CL 24 Necromancy with Necromancy robe (+1) and Master Specialist (+2). Martial Arcanist has no extra impact while BAB 12 is below casting CL.'),
   feature('esoterica-moderate','Moderate school esoterica','Master Specialist','When casting Necromancy, temporary immunity to ability damage/drain, energy drain and negative levels for rounds equal to spell level.'),
   feature('expanded-spellbook','Expanded spellbook','Master Specialist','At class levels 2, 5 and 8, add an extra spell of the specialty school. Level 8 choice: Waves of Exhaustion.'),
   feature('esoterica-major','Major school esoterica','Master Specialist 10','Casting Necromancy grants allied undead within 60 ft fast healing 10 for 5 rounds.'),
   feature('abjurant-armor','Abjurant Armor','Abjurant Champion 5','Adds +5 to qualifying shield and armour bonuses from Abjuration: Shield grants +9 shield AC. Greater Mage Armour does not benefit.'),
   feature('extended-abjuration','Extended Abjuration','Abjurant Champion','Automatically doubles duration of Abjuration spells, no slot increase.'),
   feature('swift-abjuration','Swift Abjuration','Abjurant Champion 4','2nd-level or lower Abjuration spells can be swift actions; shares one swift action per turn with Quicken Spell and Wraithstrike.'),
   feature('arcane-boost','Arcane Boost','Abjurant Champion 4','Swift action: sacrifice one prepared arcane spell for 1-round insight bonus to AC, attack or damage, saves, or energy resistance. Scale benefits by expended spell level; competes with other swift actions.'),
   feature('martial-arcanist','Martial Arcanist','Abjurant Champion 5','For one chosen advanced arcane casting class, caster level is at least BAB. Malzareth has BAB +12 and wizard caster level 20 before item boosts, so this currently adds no caster-level bonus.')
 ],
 resolvedAudit:[],
 audit:[
   'Level 20 choices confirmed: d12 roll 8 for 168 HP, +1 natural Intelligence to 29 (35 equipped), Absorption and Reaving Dispel selected. Five 9th-level scroll spells transcribed 18 Marpenoth, Freedom transcribed from one of two bought 19 Marpenoth. One Freedom scroll and Bless Weapon oil remain. Ranks: Spellcraft 23, Knowledge (arcana) 23, Concentration 23, Truespeak 7.',
   'Level 19: rolled 10 on lich d12, maximum HP 160. The 8 unspent level-18 skill points and 11 level-19 points have been allocated; compare against local skill edits before applying.',
   'Post-Marquis: roughly 845,000 gp treasury reported; 337,000 gp spent on four magic items, two custom rod keychains and one Wand Bracelet; estimated remaining treasury ~508,000 gp. Ring of Spell-Battle worn in combat, Mortal Guise stored. Staff of Necromancy began with 50 charges. Rod keychain heavier capacity and slotless design are house rules; price and retrieval actions follow Wand Bracelet.',
   'Future level-up skill priorities: Spellcraft, Knowledge (arcana), Concentration, then Truespeak. Maximise the first three toward class-skill caps; pay Truespeak cross-class costs and respect cap. Remaining points may go to secondary skills; do not retroactively alter approved level-18/19 allocation.',
   'LA buyoff complete (+0). Current level-19 XP requires reconciliation; old 78,674 figure is historical.',
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
