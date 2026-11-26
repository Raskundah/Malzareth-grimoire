/* The Ashen Crown — Malzareth's reconstructed campaign spell ledger.
   'Confirmed' = explicitly listed in the 44-entry level 11 spellbook.
   'Recorded' = shown on the later post-lich preparation sheet.
   'Mother Cyst' = prepared via the feat; spellbook transcription unverified.
*/
(() => {
  const original = {
    0: ['Resistance','Acid Splash','Detect Poison','Detect Magic','Read Magic','Ghost Sound','Disrupt Undead','Touch of Fatigue','Mage Hand','Mending','Message','Open/Close','Arcane Mark','Prestidigitation'],
    1: ['Mage Armour','Shield','Ray of Enfeeblement','Protection from Good','Identify','Grease','Silent Image','Benign Transposition','Nerveskitter','Backbiter'],
    2: ['False Life','Glitterdust','Command Undead','See Invisibility','Spectral Hand'],
    3: ['Bands of Steel','Dispel Magic','Undead Torch','Haste','Stinking Cloud'],
    4: ['Animate Dead','Enervation','Dimension Door','Fear'],
    5: ['Magic Jar','Waves of Fatigue','Overland Flight','Teleport'],
    6: ['Create Undead','Animate Dread Warrior']
  };
  const recorded = {
    3: ['Greater Mage Armour'],
    4: ['Greater Invisibility','Orb of Force'],
    6: ['Spectral Dragon','Heartfreeze','Analyse Dweomer']
  };
  // Libris Mortis (p. 28): Mother Cyst grants access to the entire family.
  // Prepared casters can prepare these without consulting a spellbook.
  const level13 = {7: ['Waves of Exhaustion','Greater Teleport','Sword of Darkness']};
  const titanAcquisitions = {2: ['Mirror Image','Heroics'],5: ['Wall of Stone','Greater Blink','Dimension Jumper'],6: ['Disintegrate','Planar Binding','Freezing Fog']};
  // Historical spellings retained from the user's 21 November export.
  const previousExport={2:['Earth bind'],3:['Fly'],4:['Ray reflection','Assay spell resistance','Dimension anchor','Ray Deflection'],
    6:['Greater Dispel Magic'],7:['Magnificent Mansion','Energy Immunity']};
  // Confirmed selections across levels 14–18; do not add merely suggested spells.
  const level14to18={2:['Whirling Blade','Wraithstrike'],7:['Awaken Undead','Limited Wish'],
    8:['Greater Planar Binding','Avascular Mass'],9:['Wish','Time Stop','Foresight','Unname']};
  // Approved level-19 additions use the campaign's established prestige-class spellbook convention.
  const level19Additions={9:['Plague of Undead','Gate']};
  // Confirmed campaign convention: two level-20 spell choices plus five paid, copied scrolls.
  const level20Choices={9:['Absorption','Reaving Dispel']};
  const purchased9={9:['Effulgent Epuration','Teleportation Circle','Astral Projection','Shapechange',"Mage's Disjunction"]};
  const freedomAcquisition={9:['Freedom']};
  const cyst = {
    1: ['Necrotic Awareness'],
    2: ['Necrotic Cyst','Necrotic Scrying'],
    3: ['Necrotic Bloat'],
    4: ['Necrotic Domination'],
    5: ['Necrotic Burst'],
    6: ['Necrotic Eruption'],
    7: ['Necrotic Tumor'],
    8: ['Necrotic Empowerment'],
    9: ['Necrotic Termination']
  };
  // Schools only when established confidently; blank entries remain editable.
  const schools = {
    'Resistance':'Abjuration','Acid Splash':'Conjuration','Detect Poison':'Divination','Detect Magic':'Divination',
    'Read Magic':'Divination','Ghost Sound':'Illusion','Disrupt Undead':'Necromancy','Touch of Fatigue':'Necromancy',
    'Mage Hand':'Transmutation','Mending':'Transmutation','Message':'Transmutation','Open/Close':'Transmutation',
    'Arcane Mark':'Universal','Prestidigitation':'Universal',
    'Mage Armour':'Conjuration','Shield':'Abjuration','Ray of Enfeeblement':'Necromancy',
    'Protection from Good':'Abjuration','Identify':'Divination','Grease':'Conjuration',
    'Silent Image':'Illusion','Benign Transposition':'Conjuration','Nerveskitter':'Transmutation','Backbiter':'Necromancy',
    'False Life':'Necromancy','Glitterdust':'Conjuration','Command Undead':'Necromancy',
    'See Invisibility':'Divination','Spectral Hand':'Necromancy',
    'Bands of Steel':'Conjuration','Dispel Magic':'Abjuration','Undead Torch':'Necromancy','Haste':'Transmutation','Stinking Cloud':'Conjuration',
    'Greater Mage Armour':'Conjuration','Animate Dead':'Necromancy','Enervation':'Necromancy',
    'Dimension Door':'Conjuration','Fear':'Necromancy','Greater Invisibility':'Illusion',
    'Orb of Force':'Conjuration','Magic Jar':'Necromancy','Waves of Fatigue':'Necromancy',
    'Overland Flight':'Transmutation','Teleport':'Conjuration','Create Undead':'Necromancy',
    'Animate Dread Warrior':'Necromancy','Spectral Dragon':'Necromancy','Heartfreeze':'Necromancy','Analyse Dweomer':'Divination',
    'Necrotic Cyst':'Necromancy','Necrotic Scrying':'Necromancy','Necrotic Bloat':'Necromancy',
    'Necrotic Domination':'Necromancy','Necrotic Awareness':'Necromancy',
    'Necrotic Burst':'Necromancy','Necrotic Eruption':'Necromancy',
    'Necrotic Tumor':'Necromancy','Necrotic Empowerment':'Necromancy',
    'Necrotic Termination':'Necromancy',
    'Mirror Image':'Illusion','Heroics':'Transmutation','Wall of Stone':'Conjuration',
    'Greater Blink':'Transmutation','Dimension Jumper':'Conjuration','Disintegrate':'Transmutation',
    'Planar Binding':'Conjuration','Freezing Fog':'Conjuration',
    'Waves of Exhaustion':'Necromancy','Greater Teleport':'Conjuration','Sword of Darkness':'Necromancy',
    'Earth bind':'Transmutation','Fly':'Transmutation','Assay spell resistance':'Divination',
    'Dimension anchor':'Abjuration','Ray Deflection':'Abjuration','Greater Dispel Magic':'Abjuration',
    'Magnificent Mansion':'Conjuration','Energy Immunity':'Abjuration',
    'Whirling Blade':'Transmutation','Wraithstrike':'Transmutation','Awaken Undead':'Necromancy',
    'Limited Wish':'Universal','Greater Planar Binding':'Conjuration','Avascular Mass':'Necromancy',
    'Wish':'Universal','Time Stop':'Transmutation','Foresight':'Divination','Unname':'Necromancy',
    'Plague of Undead':'Necromancy','Gate':'Conjuration',
    'Absorption':'Abjuration','Reaving Dispel':'Abjuration',
    'Freedom':'Abjuration','Effulgent Epuration':'Abjuration','Teleportation Circle':'Conjuration',
    'Astral Projection':'Necromancy','Shapechange':'Transmutation',"Mage's Disjunction":'Abjuration'
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const make = (map,status,source) => Object.entries(map).flatMap(([level,items]) => items.map(name=>({
    id: `s-${level}-${slug(name)}`, name, level: Number(level), school: schools[name] || '', status, source,
    casting:'', components:'', range:'', duration:'', save:'', description:'', notes:'', favorite:false
  })));
  window.STARTER_SPELLS = [
    ...make(original,'spellbook','Level 11 spellbook ledger'),
    ...make(recorded,'spellbook','Post-lich preparation sheet (transcription not separately verified)'),
    ...make(level13,'spellbook','Level 13 advancement: ordinary selections and Master Specialist 8 expansion'),
    ...make(titanAcquisitions,'spellbook','Purchased scroll / Boccob\'s Blessed Book · 23 Eleasis 1373 DR pre-Orathion'),
    ...make(previousExport,'spellbook','21 Nov user export / Ray Deflection transcription; names may need verification'),
    ...make(level14to18,'spellbook','Confirmed level-14 through level-18 spellbook additions'),
    ...make(level19Additions,'spellbook','Level 19 campaign-approved spellbook additions; no daily preparation automatically changed'),
    ...make(level20Choices,'spellbook','Level 20 campaign-approved choices: Absorption, Reaving Dispel'),
    ...make(purchased9,'spellbook','18 Marpenoth 1375 DR · five purchased ninth-circle scrolls transcribed into Blessed Book'),
    ...make(freedomAcquisition,'spellbook','19 Marpenoth 1375 DR · one purchased Freedom scroll transcribed; second scroll retained'),
    ...make(cyst,'cyst','Mother Cyst feat (Libris Mortis p. 28; no spellbook required)')
  ];
  // Accurate 3.5e reference fields for the two newly approved 9th-level spells.
  const level19Details={
    'Plague of Undead':{
      components:'V, S, M (black sapphire worth 100 gp)',
      casting:'1 standard action',range:'Close (25 ft. + 5 ft./2 caster levels)',
      target:'One or more corpses within range',duration:'Instantaneous',
      save:'None',sr:'No',detailsSource:'Spell Compendium p. 158',
      description:'Animates available bones or corpses into skeletons or zombies at maximum hit points. A casting creates up to 4 HD per caster level; creatures share the animate dead control pool. Corpsecrafter improves qualifying undead. Requires 100 gp of black sapphire.'
    },
    'Gate':{
      components:'V, S, XP (only when calling a creature)',
      casting:'1 standard action',range:'Medium (100 ft. + 10 ft./caster level)',
      target:'Effect: interdimensional connection or called extraplanar creature',duration:'Concentration, up to 1 round/level, or instantaneous (calling)',
      save:'None',sr:'No',detailsSource:'Player’s Handbook v.3.5, Gate',
      description:'Creates a precise portal between planes for travel, or calls extraplanar creatures subject to Gate’s restrictions. Calling incurs a 1,000 XP cost; portal travel alone has no XP cost.'
    }
  };
  const level20SpellDetails={
  "Freedom": {casting:"1 standard action",components:"V, S",range:"Close (25 ft. + 5 ft./2 levels)",target:"One creature",duration:"Instantaneous",save:"Will negates (harmless)",sr:"Yes (harmless)",detailsSource:"Player's Handbook v3.5; 3.5 SRD",description:"Releases a creature from movement restrictions including temporal stasis, imprisonment, maze, paralysis, petrification, stunning and slow. If ending imprisonment or maze, the caster must know the creature and cast at the relevant location. Does not automatically grant immunity against repeated null-time field saves."},
  "Absorption": {
    "casting": "1 standard action",
    "components": "V, S",
    "range": "Personal",
    "target": "You",
    "duration": "Until expended or 10 minutes/level",
    "save": "None",
    "sr": "No",
    "detailsSource": "Complete Arcane p. 96; Spell Compendium",
    "description": "Stores 1d4+6 spell levels from ranged spells or spell-like abilities specifically targeting you; does not stop area, touch or effect spells. Stored power can fund prepared spells without expending their preparations. A spell exceeding remaining absorption is only partly absorbed."
  },
  "Reaving Dispel": {
    "casting": "1 standard action",
    "components": "V, S",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "One caster, creature or object; or a 20-ft.-radius burst",
    "duration": "Instantaneous",
    "save": "See text",
    "sr": "No",
    "detailsSource": "Spell Compendium p. 169",
    "description": "Enhanced dispel with caster-level check capped at +20 (Spell Compendium version). On a targeted dispel or counterspell, may seize and redirect successfully dispelled spell effects. Identify each target effect with Spellcraft DC 25 + spell level; unrecognized spells can be dangerous to steal. Area dispel effects cannot be reaved."
  },
  "Effulgent Epuration": {
    "casting": "1 standard action",
    "components": "V, S",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "target": "Effect: one magic-absorbing sphere per caster level",
    "duration": "1 round/level",
    "save": "Will negates (harmless)",
    "sr": "Yes (harmless)",
    "detailsSource": "Spell Compendium p. 78",
    "description": "Creates a silver sphere per caster level around one creature. Each sphere can negate one spell or spell-like ability directly targeting the protected creature, then disappears. Beneficial targeted spells may be permitted through. Area spells and untargeted effects bypass the protection. Spheres can be shifted to another creature as a standard action."
  },
  "Teleportation Circle": {
    "casting": "10 minutes",
    "components": "V, M (amber dust worth 1,000 gp)",
    "range": "0 ft.",
    "target": "Effect: 5-ft.-radius teleportation circle on a surface",
    "duration": "10 minutes/level (D)",
    "save": "None",
    "sr": "Yes",
    "detailsSource": "Player's Handbook v3.5; 3.5 SRD",
    "description": "Places a magical circle that sends creatures entering it to one fixed destination as greater teleport; destination must be on the same plane and adequately known. Can be made permanent separately with permanency. Amber dust worth 1,000 gp is consumed on each casting."
  },
  "Astral Projection": {
    "casting": "30 minutes",
    "components": "V, S, M (jacinth 1,000 gp plus silver bar 5 gp per person)",
    "range": "Touch",
    "target": "You plus one additional willing creature touched per two caster levels",
    "duration": "See text; until dismissed or disrupted",
    "save": "None",
    "sr": "Yes (harmless)",
    "detailsSource": "Player's Handbook v3.5; 3.5 SRD",
    "description": "Projects astral forms of caster and consenting companions; original bodies remain in suspended animation. Astral copies can travel through the Astral Plane to other planes. Destruction of an astral body usually returns the creature, but severing the silver cord kills it. The followers remain dependent on the caster."
  },
  "Shapechange": {
    "casting": "1 standard action",
    "components": "V, S, F (jade circlet worth 1,500 gp; reusable)",
    "range": "Personal",
    "target": "You",
    "duration": "10 minutes/level (D)",
    "save": "None",
    "sr": "No",
    "detailsSource": "Player's Handbook v3.5; 3.5 SRD",
    "description": "Assume a familiar nonunique creature form from Fine to Colossal with up to your caster level in HD (maximum 25 HD), including incorporeal forms. Gain its extraordinary and supernatural abilities while losing your own supernatural abilities; change form once per round as a free action at the permitted moment. A jade circlet is required."
  },
  "Mage's Disjunction": {
    "casting": "1 standard action",
    "components": "V",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "target": "Area: 40-ft.-radius burst of magical effects and items",
    "duration": "Instantaneous",
    "save": "Will negates (objects)",
    "sr": "No",
    "detailsSource": "Player's Handbook v3.5; 3.5 SRD",
    "description": "Ends magical effects in a burst and can permanently disenchant magic items that fail their Will saves; caster-carried/touched items are excluded. Has a 1%-per-caster-level chance to destroy an antimagic field. Disjoining an artifact can permanently cost spellcasting and attract powerful attention. Use cautiously around valuable loot."
  }
};
  for(const spell of window.STARTER_SPELLS){
    const detail=level19Details[spell.name] || level20SpellDetails[spell.name];
    if(detail && spell.level===9 && spell.status==='spellbook')Object.assign(spell,detail);
  }
  window.PREFIGHT_ACQUISITION_JOURNAL = "23 Eleasis 1373 DR · BEFORE ORATHION — Eight scrolls bought at standard minimum caster level and transcribed over eight separate 24-hour periods before the existing 16:30 battle checkpoint. 2nd: Mirror Image, Heroics (150 gp each); 5th: Wall of Stone, Greater Blink, Dimension Jumper (1,125 gp each); 6th: Disintegrate, Planar Binding, Freezing Fog (1,650 gp each). Total 8,625 gp deducted from previous 271,517 gp 4 sp 8 cp liquid treasury; revised liquid treasury 262,892 gp 4 sp 8 cp. All eight entered in Malzareth's previously owned Boccob's Blessed Book (37 pages, no additional magic ink cost). Scrolls consumed. Spellcraft DCs 17/20/21, passed with established modifier. Fighter 15+ arms fragment required for each Heroics casting; one acquired with procurement for immediate use, no fixed extra gp price. This adds spells KNOWN, not magically prepared spells or unspent slots. Do not rewind active encounter or reset daily consumables. The 245,000 gp contract escrow remains contingent on victory; Orathion's hoard and equipment unvalued. Earlier protective Greater Spell Immunity scrolls have already been consumed in preparation.";
  window.LEVEL13_JOURNAL = "25 Mirtul 1373 DR, 19:00 — Dordrien Crypts. Wizard 5 / Master Specialist 8, LA +0, ECL 13, XP 78,674 / 91,000 (+675 since 77,999). Rolled 9 on d12; maximum HP 104. Last HP before advancement 95 +17 temporary; rest/preparation not yet reconciled. New spells: Greater Teleport and Sword of Darkness (ordinary), Waves of Exhaustion (Expanded Spellbook); Necrotic Tumor via Mother Cyst. 10 skill points pending. Liquid treasury 11,367 gp 9 sp 8 cp; pending sales 3,510 gp; projected 14,877 gp 9 sp 8 cp. Gems 7,200 gp (including 10 black onyx, 3 diamonds, 3 bloodstones), ordinary valuables 1,695 gp, unallocated magic 13,720 gp; subtotal 33,982.98 gp includes liquid, not extra cash. Force: 24 operational (6 living, 18 undead), 3 dread warriors, 7 zombies; 3 prisoners and 1 rescued patient. Exploration secured; rest/advancement decisions pending. Earlier: Brokk released; Edric, Maerith, Garran and Vesryn restored (6,000 gp total); lich LA fully bought off.";
  window.LEVEL18_JOURNAL = "Level 18: Wizard 5 / Master Specialist 10 / Abjurant Champion 3, 150 HP (d12 roll 10), BAB +10/+5, effective wizard casting 18. Quicken Spell feat. Foresight and Unname learned. Level 17 Wish and Time Stop; level 16 Whirling Blade and Wraithstrike; level 15 Greater Planar Binding and Avascular Mass; level 14 Awaken Undead and Limited Wish. Truespeak 1 rank costs two cross-class skill points, eight points unspent. Unname requires a researched personal truename and a successful pronunciation check. Existing battle preparations and resources are not reset.";
  window.LEVEL19_JOURNAL = "Level 19: Wizard 5 / Master Specialist 10 / Abjurant Champion 4. Lich d12 HP roll 10; maximum HP 160. Two Wish spells had increased natural Intelligence 26→28, with Headband +6 for total INT 34. Skills: 8 pending level-18 points and 11 new level-19 points allocated to Concentration, Spellcraft, Knowledge (arcana), Intimidate, Knowledge (the planes) and Truespeak. Campaign spellbook convention grants Plague of Undead and Gate as two new ninth-level inscriptions. No preparation, item charges, current HP or earned XP totals are fabricated.";
  window.DEFAULT_SLOTS = [5,8,8,8,8,7,7,7,7,6];
  // Latest documented preparation, not a claim about current unused slots.
  window.STARTER_PREPARATION = {
    0: ['Message','Ghost Sound','Mage Hand','Detect Magic'],
    1: ['Shield','Shield','Nerveskitter','Nerveskitter','Benign Transposition','Silent Image'],
    2: ['False Life','Glitterdust','Glitterdust','Necrotic Cyst','Command Undead','See Invisibility','Spectral Hand','Necrotic Scrying'],
    3: ['Necrotic Bloat','Bands of Steel','Bands of Steel','Haste','Greater Mage Armour','Dispel Magic','Dispel Magic'],
    4: ['Necrotic Domination','Animate Dead','Enervation','Greater Invisibility','Dimension Door','Orb of Force'],
    5: ['Overland Flight','Teleport','Teleport','Magic Jar','Waves of Fatigue'],
    6: ['Spectral Dragon','Heartfreeze','Analyse Dweomer']
  };
})();