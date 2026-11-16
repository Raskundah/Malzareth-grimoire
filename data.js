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
    'Silent Image':'Illusion','Benign Transposition':'Conjuration','Nerveskitter':'Transmutation',
    'False Life':'Necromancy','Glitterdust':'Conjuration','Command Undead':'Necromancy',
    'See Invisibility':'Divination','Spectral Hand':'Necromancy',
    'Dispel Magic':'Abjuration','Haste':'Transmutation','Stinking Cloud':'Conjuration',
    'Greater Mage Armour':'Conjuration','Animate Dead':'Necromancy','Enervation':'Necromancy',
    'Dimension Door':'Conjuration','Fear':'Necromancy','Greater Invisibility':'Illusion',
    'Orb of Force':'Conjuration','Magic Jar':'Necromancy','Waves of Fatigue':'Necromancy',
    'Overland Flight':'Transmutation','Teleport':'Conjuration','Create Undead':'Necromancy',
    'Animate Dread Warrior':'Necromancy','Heartfreeze':'Necromancy','Analyse Dweomer':'Divination',
    'Necrotic Cyst':'Necromancy','Necrotic Scrying':'Necromancy','Necrotic Bloat':'Necromancy',
    'Necrotic Domination':'Necromancy','Necrotic Awareness':'Necromancy',
    'Necrotic Burst':'Necromancy','Necrotic Eruption':'Necromancy',
    'Necrotic Tumor':'Necromancy','Necrotic Empowerment':'Necromancy',
    'Necrotic Termination':'Necromancy'
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const make = (map,status,source) => Object.entries(map).flatMap(([level,items]) => items.map(name=>({
    id: `s-${level}-${slug(name)}`, name, level: Number(level), school: schools[name] || '', status, source,
    casting:'', components:'', range:'', duration:'', save:'', description:'', notes:'', favorite:false
  })));
  window.STARTER_SPELLS = [
    ...make(original,'confirmed','Level 11 spellbook ledger'),
    ...make(recorded,'recorded','Post-lich preparation sheet'),
    ...make(cyst,'cyst','Mother Cyst feat (Libris Mortis p. 28; no spellbook required)')
  ];
  window.DEFAULT_SLOTS = [5,8,8,7,6,6,5];
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