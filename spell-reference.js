/* Compact, original, paraphrased D&D 3.5 spell quick-reference notes.
   Not a replacement for the user's rulebooks. These descriptions are shown as
   fallbacks only; local spell edits always take precedence.
   Formulae are labelled by EFFECT TYPE, not automatically 'damage'. */
(() => {
'use strict';
const entries = {
 'Resistance':['Grants a +1 resistance bonus on one creature’s saving throws for a short duration.'],
 'Acid Splash':['Make a ranged touch attack to splash a creature with a small amount of acid; spell resistance does not apply.','None','ranged'],
 'Detect Poison':['Reveals whether a creature, object or area contains poison and helps identify the toxin with a check.'],
 'Detect Magic':['Concentrate to detect nearby magical auras, then learn their number, location and strength over successive rounds.'],
 'Read Magic':['Decipher magical writings, scrolls and inscriptions without activating them.'],
 'Ghost Sound':['Creates an illusion of noise within range; listeners may disbelieve it.','Will disbelief'],
 'Disrupt Undead':['A ranged touch attack sends positive energy into an undead target, damaging it.','None','ranged'],
 'Touch of Fatigue':['A melee touch attack fatigues a living creature unless it resists.','Fortitude negates','melee'],
 'Mage Hand':['Moves an unattended lightweight nonmagical object at a distance.'],
 'Mending':['Repairs small breaks in a single object, subject to the spell’s limits.'],
 'Message':['Whisper across a distance to designated creatures; replies can travel back through the spell.'],
 'Open/Close':['Remotely opens or shuts an unattended door, lid or similar object within the weight limits.'],
 'Arcane Mark':['Leaves a personal magical rune that can be visible or invisible.'],
 'Prestidigitation':['Performs minor harmless magical effects, cleaning, colouring, chilling or shaping small objects.'],
 'Mage Armour':['Grants a +4 armour bonus to AC for hours; does not stack with another armour bonus such as Greater Mage Armour.'],
 'Shield':['Provides a +4 shield bonus to AC and protects against magic missile.'],
 'Ray of Enfeeblement':['Ranged touch ray imposes a Strength penalty of 1d6 + 1 per two caster levels, maximum +5; it cannot lower Strength below 1. No saving throw.','None','ranged'],
 'Protection from Good':['Protects against good creatures with defensive bonuses and guards against certain mental controls.'],
 'Identify':['Examines one magic item to determine its properties; normally requires costly material.'],
 'Grease':['Makes a surface or held object slippery, forcing balance or Reflex checks and possibly causing falls or disarms.','Reflex (varies)'],
 'Silent Image':['Creates a purely visual illusion; maintaining it requires concentration.','Will disbelief'],
 'Benign Transposition':['Instantly swaps the positions of two willing creatures within range.'],
 'Nerveskitter':['Immediate-action initiative boost (+5); cast at the start of an encounter under its timing restrictions.'],
 'Backbiter':['Hexes a melee weapon so its next attack turns upon its wielder instead. Magical weapons can resist.','Will (magic item)'],
 'False Life':['Gain 1d10 + up to 10 temporary hit points, based on caster level. Temporary HP do not stack with themselves.'],
 'Glitterdust':['Coats an area in shining dust, outlining invisible creatures and potentially blinding targets.','Will negates blindness'],
 'Command Undead':['Compel a nonintelligent undead to obey; intelligent undead can resist and have additional limitations.','Will (intelligent undead)'],
 'See Invisibility':['See invisible creatures and objects as visible, including some ethereal beings.'],
 'Spectral Hand':['Invest 1d4 of your hit points in a floating hand that delivers touch spells of 4th level or lower at range; +2 on the hand’s touch attack.'],
 'Bands of Steel':['Conjures restraining metal bands; a failed Reflex save immobilises, a success leaves the target entangled. Escape uses Strength or Escape Artist.','Reflex partial'],
 'Dispel Magic':['Attempt a caster-level check to end an ongoing spell, suppress an item or counter a spell; normal dispel checks cap at +10.'],
 'Undead Torch':['Imbues corporeal undead allies with necromantic fire: their melee attacks deal an additional 2d6 to living foes (Spell Compendium version).'],
 'Haste':['Buffs allies with +1 attack, Reflex and dodge AC, increased speed and an extra weapon attack on a full attack (not another spell).'],
 'Stinking Cloud':['Creates nauseating fumes; creatures inside may become nauseated and cannot act normally.','Fortitude negates (each round)'],
 'Greater Mage Armour':['Provides a +6 armour bonus to AC for hours; replaces rather than stacks with Mage Armour.'],
 'Animate Dead':['Turns suitable corpses or bones into skeletons or zombies you control, subject to HD limits. Requires black onyx worth 25 gp per HD.'],
 'Enervation':['Ranged touch ray inflicts 1d4 negative levels on a living target; no immediate saving throw.','None','ranged'],
 'Dimension Door':['Instantly teleports you and limited additional carried/willing creatures a short distance; you cannot act further that turn.'],
 'Fear':['Cone of terror; targets who fail their Will save panic, and successful targets are still shaken briefly.','Will partial'],
 'Greater Invisibility':['Subject remains invisible even while attacking or casting, for a shorter duration than ordinary Invisibility.'],
 'Orb of Force':['Ranged touch orb of force deals 1d6 force damage per caster level (maximum 10d6); no saving throw or spell resistance.','None','ranged'],
 'Magic Jar':['Transfer your spirit to a magic gem and attempt to possess another creature; body, range and save restrictions apply.'],
 'Waves of Fatigue':['Wave instantly fatigues living creatures in its area; no saving throw, though the effect does not stack into exhaustion.','None'],
 'Overland Flight':['Grants long-duration flight suitable for sustained travel and manoeuvring.'],
 'Teleport':['Moves you and willing companions instantly over long distance; arrival accuracy depends on familiarity.'],
 'Create Undead':['Creates particular intelligent undead from corpses at the appropriate caster level; the result is not automatically under your control.'],
 'Animate Dread Warrior':['Turns a recent humanoid corpse into a dread warrior under your command. Requires a sword fragment and 250 XP per HD; source is Unapproachable East (3.0), confirm campaign ruling.'],
 'Spectral Dragon':['Concentrate to direct a shadow dragon that bites using caster level + casting ability modifier. A hit deals 1d6 Strength damage and one negative level to living foes.'],
 'Heartfreeze':['Freezes a vulnerable target’s heart. Failed Fortitude save causes exhaustion and delayed death; success still deals 5d8 cold damage. Creatures immune to critical hits are unaffected.','Fortitude partial'],
 'Analyse Dweomer':['Detailed magical examination that identifies active magical effects and item properties; material focus and spell resistance rules may apply.'],
 'Necrotic Awareness':['Sense creatures bearing necrotic cysts; detection range and limits are specified in Libris Mortis.'],
 'Necrotic Cyst':['Melee touch implants a necrotic cyst in a living target. The cyst hinders saves against Necromancy and increases damage from undead natural weapons.','Fortitude negates','melee'],
 'Necrotic Scrying':['Use an implanted cyst as a focus to observe and communicate with its bearer from afar.'],
 'Necrotic Bloat':['An existing cyst swells and harms its host for 1d6 per Necromancy caster level (maximum 10d6); half is vile damage.','None'],
 'Necrotic Domination':['Exert domination over a humanoid already bearing a necrotic cyst, under Dominate Person-style restrictions.','Will negates'],
 'Necrotic Burst':['A cyst-bearing victim failing Fortitude is killed; on success takes 1d6 per Necromancy caster level (maximum 15d6), half vile. A slain host produces a skulking cyst.','Fortitude partial'],
 'Necrotic Eruption':['A failed Fortitude save destroys an encysted host and causes a damaging cyst eruption in a 20-foot radius. Success damages the host instead.','Fortitude partial; Reflex half (burst)'],
 'Waves of Exhaustion':['A 60-ft cone exhausts living creatures (−6 Strength and Dexterity, half speed, cannot run or charge); already exhausted creatures are unaffected. No save; SR applies. Instantaneous.','None; SR yes'],
 'Greater Teleport':['As Teleport, but no range limit or off-target chance; a reliable description suffices for an unseen destination. Same plane only; at CL 13 carry four additional Medium-equivalent willing creatures. Insufficient information returns you to the starting point.','None / Will negates (object); SR no / yes (object)'],
 'Sword of Darkness':['Creates a blade of negative energy, attacking immediately at caster-level BAB (CL 14 for Malzareth), with iterative attacks when applicable. Each hit drains one level (two on confirmed 19–20 critical); no permanent level loss. Continue attacking the same target automatically; standard action to redirect. Against undead, grants 5 temporary HP per two CL, max 25, for up to an hour. Medium range, 1 round/level, no save, SR yes; consumes a longsword or bastard sword.','None; SR yes'],
 'Necrotic Tumor':['Transforms an implanted cyst to allow potent domination of a cyst-bearing creature, potentially permanently.','Fortitude partial'],
 'Necrotic Empowerment':['Draws on your mother cyst to greatly boost mental agility, natural armour and temporary HP, but blocks other Mother Cyst spells for its duration.'],
 'Necrotic Termination':['Severe cyst-based death magic: failure destroys an encysted host and soul, preventing normal resurrection; success causes major vile damage. Costs 1,000 XP.','Fortitude partial']
};
const specials={
 'Acid Splash':{type:'Acid damage',formula:()=> '1d3'},
 'Disrupt Undead':{type:'Positive-energy damage (undead)',formula:()=> '1d6'},
 'Ray of Enfeeblement':{type:'Strength penalty (not HP damage)',formula:ctx=>'1d6+'+Math.min(5,Math.floor(ctx.necroLevel/2))},
 'False Life':{type:'Temporary HP gained',formula:ctx=>'1d10+'+Math.min(10,ctx.necroLevel)},
 'Spectral Hand':{type:'HP invested in spectral hand',formula:()=> '1d4'},
 'Undead Torch':{type:'Bonus damage per undead melee hit',formula:()=> '2d6'},
 'Orb of Force':{type:'Force damage after ranged touch hit',formula:ctx=>Math.max(1,Math.min(10,ctx.casterLevel))+'d6'},
 'Enervation':{type:'Negative levels inflicted (not HP damage)',formula:()=> '1d4'},
 'Necrotic Bloat':{type:'Damage, half vile',formula:ctx=>Math.min(10,ctx.necroLevel)+'d6'},
 'Necrotic Burst':{type:'Damage on successful Fortitude save; half vile',formula:ctx=>Math.min(15,ctx.necroLevel)+'d6'},
 'Necrotic Eruption':{type:'Damage on save / to burst targets; half vile',formula:ctx=>Math.min(15,ctx.necroLevel)+'d6'},
 'Necrotic Termination':{type:'Damage on successful Fortitude save; half vile',formula:ctx=>Math.min(25,ctx.necroLevel)+'d6'},
 'Spectral Dragon':{type:'Strength damage on dragon bite (plus 1 negative level)',formula:()=> '1d6'},
 'Heartfreeze':{type:'Cold damage on successful Fortitude save',formula:()=> '5d8'}
};
const get=spell=>entries[spell?.name]?
 {description:entries[spell.name][0],save:entries[spell.name][1]||'',attack:entries[spell.name][2]||null}:
 null;
const rollFor=(spell,ctx)=>{const spec=specials[spell?.name];if(!spec)return null;return {
 label:spell.name+' · '+spec.type,
 type:spec.type,formula:spec.formula(ctx),attack:get(spell)?.attack||null
}};
window.SPELL_REFERENCES={get,rollFor,summariesCount:Object.keys(entries).length};
window.STARTER_SPELLS?.forEach(s=>{
 const ref=get(s);if(!ref)return;
 if(!s.description)s.description=ref.description;
 if(!s.save&&ref.save)s.save=ref.save;
});
})();
