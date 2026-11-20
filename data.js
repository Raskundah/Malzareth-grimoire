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
    'Waves of Exhaustion':'Necromancy','Greater Teleport':'Conjuration','Sword of Darkness':'Necromancy'
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
    ...make(cyst,'cyst','Mother Cyst feat (Libris Mortis p. 28; no spellbook required)')
  ];
  window.LEVEL13_JOURNAL = "25 Mirtul 1373 DR, 19:00 — Dordrien Crypts. Wizard 5 / Master Specialist 8, LA +0, ECL 13, XP 78,674 / 91,000 (+675 since 77,999). Rolled 9 on d12; maximum HP 104. Last HP before advancement 95 +17 temporary; rest/preparation not yet reconciled. New spells: Greater Teleport and Sword of Darkness (ordinary), Waves of Exhaustion (Expanded Spellbook); Necrotic Tumor via Mother Cyst. 10 skill points pending. Liquid treasury 11,367 gp 9 sp 8 cp; pending sales 3,510 gp; projected 14,877 gp 9 sp 8 cp. Gems 7,200 gp (including 10 black onyx, 3 diamonds, 3 bloodstones), ordinary valuables 1,695 gp, unallocated magic 13,720 gp; subtotal 33,982.98 gp includes liquid, not extra cash. Force: 24 operational (6 living, 18 undead), 3 dread warriors, 7 zombies; 3 prisoners and 1 rescued patient. Exploration secured; rest/advancement decisions pending. Earlier: Brokk released; Edric, Maerith, Garran and Vesryn restored (6,000 gp total); lich LA fully bought off.";
  window.DEFAULT_SLOTS = [5,8,8,7,7,6,5,3];
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