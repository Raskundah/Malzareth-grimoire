/* The Ashen Crown: editable, non-rules spell-purpose tags.
 * Curated seed labels, not inferred from spell schools or copied descriptions.
 * Imported and user-edited tag arrays always take precedence over these seeds.
 * Unlisted spells stay untagged rather than receiving speculative rules labels. */
(() => {
  'use strict';
  const REVISION=1;
  const CORE=[
    'Offensive','Defensive','Buff','Damage','Control','Summon',
    'Negative Energy','Kill','True Name','Debuff','Utility','Mobility',
    'Teleportation','Divination','Undead','Healing','Countermagic',
    'Illusion','Transformation','Creation','Barrier','Planar',
    'Necrotic Cyst','Ritual'
  ];
  const PRIMARY=['Offensive','Defensive','Buff','Damage','Control','Summon','Negative Energy','Kill','True Name','Undead','Teleportation','Utility'];
  // Multiple categories are deliberate: e.g. Enervation is offensive,
  // negative energy AND a debuff, not necessarily hit-point damage.
  const GROUPS={
    'Damage':`Acid Splash|Disrupt Undead|Backbiter|Undead Torch|Orb of Force|Spectral Dragon|Disintegrate|Whirling Blade|Stun Ray|Avasculate|Avascular Mass|Arrow of Bone|Blackfire|Deadly Lahar|Fimbulwinter|Flensing|Horrid Wilting|Incendiary Cloud|Energy Ebb|Gutwrench|Heartfreeze|Incarnum Bladestorm|Pulse of Hate|Retributive Enervation|Sword of Darkness|Waterspout|Freezing Fog|Greater Stunning Breath|Prismatic Wall|Necrotic Burst|Necrotic Eruption|Necrotic Termination|Touch of the Graveborn|As the Frost|Choking Cobwebs`,
    'Kill':`Finger of Death|Symbol of Death|Unname|Heartfreeze|Necrotic Termination`,
    'Control':`Grease|Glitterdust|Bands of Steel|Stinking Cloud|Fear|Freezing Fog|Wall of Stone|Wall of Eyes|Reverse Gravity|Maze|Temporal Stasis|Dimensional Lock|Dimension anchor|Earth bind|Evil Glare|Solipsism|Glass Strike|Choking Cobwebs|Shifting Paths|Greater Stunning Breath|Stun Ray|Scintillating Pattern|Energy Transformation Field|Control Weather|Prismatic Wall|Blackfire|Avascular Mass|Sequester|Symbol of Weakness|Waves of Exhaustion|Waves of Fatigue|Necrotic Domination|Necrotic Bloat|Necrotic Tumor|Necrotic Curse|Magic Jar|Greater Bestow Curse|Bestow Greater Curse|Trap the Soul|Soulbanned Zone|Fimbulwinter|Wall of Greater Dispel Magic|Greater Glacial Ward|Ghost Trap`,
    'Debuff':`Ray of Enfeeblement|Touch of Fatigue|Enervation|Retributive Enervation|Energy Ebb|Waves of Exhaustion|Waves of Fatigue|Fear|Symbol of Weakness|Greater Bestow Curse|Bestow Greater Curse|Flensing|Avasculate|Avascular Mass|Evil Glare|Stun Ray|Heartfreeze|Necrotic Cyst|Necrotic Bloat|Necrotic Curse|Necrotic Tumor|Necrotic Domination|Plague|Pulse of Hate|Sword of Darkness|Blackfire|Glitterdust|Grease|Greater Stunning Breath|Solipsism`,
    'Defensive':`Resistance|Mage Armour|Greater Mage Armour|Shield|Protection from Good|False Life|Mirror Image|Greater Blink|Ray Deflection|Ray reflection|Foresight|Energy Immunity|Energy Absorption|Ironguard|Iron Body|Greater Glacial Ward|Mind Blank|Spell Turning|Protection from Spells|Planar Bubble|Ghostform|Ghost Trap|Hide from Dragons|Prismatic Wall|Sequester|Screen|Unyielding Form of Inevitable Death|Veil of Undeath|Mass Guardian Spirit|Brilliant Aura|Greater Celerity|Nerveskitter|Temporal Stasis|Body of War|Heart of Stone|Kiss of the Vampire`,
    'Buff':`Resistance|False Life|Greater Mage Armour|Mage Armour|Shield|Haste|Heroics|Overland Flight|Fly|Greater Invisibility|Mass Invisibility|Superior Invisibility|Wraithstrike|Nerveskitter|Greater Blink|Bite of the Werebear|Body of War|Elemental Body|Iron Body|Mass Animalistic Power|Mass Adept Spirit|Mass Guardian Spirit|Brilliant Aura|Unicorn Heart|Foresight|Moment of Prescience|Energy Immunity|Energy Absorption|Ironguard|Protection from Spells|Planar Bubble|Heart of Stone|Statue|Kiss of the Vampire|Veil of Undeath|Open Lesser Chakra|Ghostform|Spell Matrix|Assay spell resistance|Greater Seed of Undeath|Awaken Undead|Spectral Hand`,
    'Summon':`Summon Monster VII|Summon Monster VIII|Planar Binding|Greater Planar Binding|Call Kolyarut|Dragon Ally|Greater Luminous Assassin|Conjure Greater Midnight Construct|Fierce Pride of the Beastlands`,
    'Negative Energy':`Enervation|Retributive Enervation|Energy Ebb|Steal Life|Touch of the Graveborn|Undead Torch|Kiss of the Vampire|Necrotic Burst|Necrotic Eruption|Necrotic Termination|Arrow of Bone|Waves of Exhaustion`,
    'True Name':`Unname|Truename Binding|Truename Dispel|Ritual of Renaming`,
    'Utility':`Identify|Read Magic|Detect Magic|Detect Poison|Analyse Dweomer|Dispel Magic|Greater Dispel Magic|Mending|Mage Hand|Message|Open/Close|Prestidigitation|Arcane Mark|Wish|Limited Wish|Magnificent Mansion|Mordenkainen’s Magnificent Mansion|Mordenkainen’s Capable Caravel|Ice Castle|Wall of Stone|Greater Stone Shape|Excavate|Greater Scrying|Discern Location|Vision|See Invisibility|Greater Arcane Sight|Greater Prying Eyes|Phantasmal Thief|Sequester|Control Weather|Fimbulwinter|Teleport Object|Drawmij’s Instant Summons|Spell Engine|Spell Matrix|Clone|Simulacrum|Energy Transformation Field|Synostodweomer|Ritual of Renaming|Time Stop|Nerveskitter`,
    'Mobility':`Fly|Overland Flight|Teleport|Greater Teleport|Dimension Door|Dimension Jumper|Benign Transposition|Greater Blink|Ethereal Jaunt|Ghostform|Plane Shift|Greater Plane Shift|Phase Door|Wraithstrike|Unicorn Heart|Greater Celerity|Mordenkainen’s Capable Caravel|Mass Make Manifest`,
    'Teleportation':`Teleport|Greater Teleport|Dimension Door|Dimension Jumper|Benign Transposition|Teleport Object|Phase Door|Plane Shift|Greater Plane Shift`,
    'Divination':`Detect Magic|Detect Poison|Read Magic|Identify|Analyse Dweomer|Greater Arcane Sight|Greater Scrying|Discern Location|Greater Prying Eyes|Vision|See Invisibility|Foresight|Moment of Prescience|Necrotic Awareness|Necrotic Scrying|Fiendish Clarity`,
    'Undead':`Animate Dead|Animate Dread Warrior|Create Undead|Create Greater Undead|Awaken Undead|Command Undead|Control Undead|Greater Seed of Undeath|Skeletal Guard|Veil of Undeath|Undead Torch|Disrupt Undead|Arrow of Bone|Spectral Dragon|Necrotic Cyst|Necrotic Scrying|Necrotic Awareness|Necrotic Bloat|Necrotic Domination|Necrotic Burst|Necrotic Eruption|Necrotic Empowerment|Necrotic Tumor|Necrotic Termination|Touch of the Graveborn|Kiss of the Vampire|Barghest’s Feast`,
    'Healing':`Synostodweomer|Unicorn Heart|Mass Guardian Spirit`,
    'Countermagic':`Dispel Magic|Greater Dispel Magic|Chain Dispel|Greater Dispelling Screen|Wall of Greater Dispel Magic|Antimagic Ray|Spell Turning|Spell Engine|Ray Deflection|Ray reflection|Expunge the Supernatural|Truename Dispel|Assay spell resistance|Protection from Spells|Energy Absorption|Ghost Trap`,
    'Illusion':`Ghost Sound|Silent Image|Mirror Image|Greater Invisibility|Mass Invisibility|Superior Invisibility|Project Image|Screen|Greater Shadow Conjuration|Greater Shadow Evocation|Simulacrum|Phantasmal Thief|Solipsism|Scintillating Pattern|Mysterious Redirection`,
    'Transformation':`Polymorph Any Object|Body of War|Bite of the Werebear|Elemental Body|Iron Body|Statue|Glass Strike|Unyielding Form of Inevitable Death|Dreaded Form of the Eye Tyrant|Eye of the Beholder|As the Frost|Veil of Undeath|Open Lesser Chakra|Mass Animalistic Power|Ghostform|Kiss of the Vampire|Animate Breath|Heart of Stone`,
    'Creation':`Wall of Stone|Ice Castle|Greater Stone Shape|Magnificent Mansion|Mordenkainen’s Magnificent Mansion|Mordenkainen’s Capable Caravel|Simulacrum|Clone|Conjure Greater Midnight Construct|Skeletal Guard|Phantasmal Thief|Excavate|Drawmij’s Instant Summons`,
    'Barrier':`Wall of Stone|Prismatic Wall|Wall of Greater Dispel Magic|Wall of Eyes|Greater Glacial Ward|Dimensional Lock|Ghost Trap|Ironguard|Energy Immunity|Protection from Spells|Planar Bubble|Soulbanned Zone`,
    'Planar':`Plane Shift|Greater Plane Shift|Planar Binding|Greater Planar Binding|Planar Bubble|Call Kolyarut|Dragon Ally|Fierce Pride of the Beastlands|Banishment|Mass Make Manifest|Ghost Trap|Ethereal Jaunt`,
    'Ritual':`Ritual of Renaming|Truename Binding|Truename Dispel|Unname|Clone|Simulacrum|Awaken Undead|Planar Binding|Greater Planar Binding|Wish`
  };
  const seeds=new Map();
  const key=name=>String(name||'').toLocaleLowerCase().replace(/[’']/g,"'").trim();
  for(const [tag,names] of Object.entries(GROUPS))for(const name of names.split('|')){
    const id=key(name);if(!id)continue;
    if(!seeds.has(id))seeds.set(id,new Set());
    seeds.get(id).add(tag);
  }
  // Offensive is an umbrella label. It is not a spell school.
  for(const tags of seeds.values())if(['Damage','Kill','Debuff'].some(t=>tags.has(t)))tags.add('Offensive');
  function normalise(raw) {
    const values=Array.isArray(raw)?raw:typeof raw==='string'?raw.split(/[,\n]/):[];
    const seen=new Set(),result=[];
    for(const value of values){
      let tag=String(value??'').replace(/[<>]/g,'').trim().replace(/\s+/g,' ').slice(0,32);
      if(!tag)continue;
      const known=CORE.find(x=>x.toLocaleLowerCase()===tag.toLocaleLowerCase());
      if(known)tag=known;
      const id=tag.toLocaleLowerCase();if(seen.has(id))continue;
      seen.add(id);result.push(tag);
      if(result.length===16)break;
    }
    return result;
  }
  function tagsFor(spell){
    const tags=[...(seeds.get(key(spell?.name))||[])];
    if(spell?.status==='cyst' && !tags.includes('Necrotic Cyst'))tags.push('Necrotic Cyst');
    return normalise(tags);
  }
  window.SPELL_TAGS={revision:REVISION,core:CORE,primary:PRIMARY,normalise,tagsFor,seededNames:seeds.size};
})();
