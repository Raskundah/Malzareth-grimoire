/* Factual 3.5 spell headers checked against Sor/Wiz level and school
 * in the user's own Spell Bible compilation. No source prose is reproduced.
 * Existing higher-confidence SRD fields take precedence. */
(() => {
'use strict';
const FACTS={
 "Resistance": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 minute",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Acid Splash": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One missile of acid",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes"
 },
 "Detect Poison": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels) Target or Area: One creature, one object, or a 5-ft. cube",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Detect Magic": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "60 ft.",
  "target": "Area: Cone-shaped emanation",
  "duration": "Concentration, up to 1 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Read Magic": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "10 min./level By means of read magic, you can decipher magical"
 },
 "Ghost Sound": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Illusory sounds",
  "duration": "1 round/level (D)",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "Disrupt Undead": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes"
 },
 "Touch of Fatigue": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 round/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Mage Hand": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: Nonmagical, unattended object weighing up to 5 lb.",
  "duration": "Concentration",
  "save": "None",
  "sr": "No"
 },
 "Mending": {
  "components": "V, S",
  "casting": "1 action",
  "range": "10 ft.",
  "target": "Target: One object of up to 1 pound",
  "duration": "Instantaneous",
  "save": "Will negates (harmless, object)",
  "sr": "Yes (harmless, object)"
 },
 "Message": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Targets: One creature/level",
  "duration": "10 min./level",
  "save": "None",
  "sr": "No"
 },
 "Open/Close": {
  "components": "V, S, F",
  "casting": "1 action1006",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: Portal or object that can be opened or closed",
  "duration": "Instantaneous",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Arcane Mark": {
  "components": "V, S",
  "casting": "1 action",
  "range": "0 ft.",
  "target": "Effect: One personal rune or mark, all of which must fit within 1 ft. square",
  "duration": "Permanent",
  "save": "None",
  "sr": "No"
 },
 "Prestidigitation": {
  "components": "V, S",
  "casting": "1 action",
  "range": "10 ft. Target, Effect, or Area: See text",
  "duration": "1 hour",
  "save": "None",
  "sr": "No"
 },
 "Mage Armour": {
  "components": "V, S, F",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 hour/level (D)",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Shield": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Ray of Enfeeblement": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "1 minute/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Protection from Good": {
  "components": "V, S, M, F",
  "casting": "1 action",
  "range": "Touch",
  "target": "Targets: Up to one creature/four levels touched",
  "duration": "10 minutes/level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Identify": {
  "components": "V, S, M/DF",
  "casting": "8 hours",
  "range": "Touch",
  "target": "Targets: Up to 1 touched object per level",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Grease": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels) Target or Area: One object or a 10-ft. x 10-ft. square",
  "duration": "1 round/level (D)",
  "save": "See text",
  "sr": "No"
 },
 "Silent Image": {
  "components": "V, S, F",
  "casting": "1 action",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Effect: Visual figment that cannot extend beyond four 10- ft. cubes + one 10-ft. cube/level (S)",
  "duration": "Concentration",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "Benign Transposition": {
  "components": "V",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: Two willing creatures of up to Large size",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Nerveskitter": {
  "components": "V, S",
  "casting": "1 immediate action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "1 round",
  "save": "None (harmless)",
  "sr": "Yes"
 },
 "Backbiter": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One weapon",
  "duration": "1 round/level or until discharged",
  "save": "Will negates; see text",
  "sr": "Yes (object)"
 },
 "False Life": {
  "components": "V, S, M",
  "casting": "1 full round",
  "range": "Touch",
  "target": "Target: Living creature touched",
  "duration": "1 hour/level or until discharged (see text)",
  "save": "Will negates (harmless)",
  "sr": "Yes"
 },
 "Glitterdust": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Creatures and objects within 10-ft. spread",
  "duration": "1 round/level",
  "save": "Will negates (blinding only)",
  "sr": "Yes"
 },
 "Command Undead": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One undead creature",
  "duration": "One day/level",
  "save": "Will negates; see text",
  "sr": "Yes"
 },
 "See Invisibility": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Cone",
  "duration": "10 minutes/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Spectral Hand": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One spectral hand",
  "duration": "1 minute/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Bands of Steel": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: One creature",
  "duration": "1 round/level",
  "save": "Reflex partial482",
  "sr": "No"
 },
 "Dispel Magic": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level) Target or Area: One spellcaster, creature, or object; or 30-ft.-radius burst",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Undead Torch": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One corporeal undead",
  "duration": "1 round/level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Haste": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "1 round/level",
  "save": "Fortitude negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Stinking Cloud": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Cloud that spreads in 30-ft. radius, 20 ft. high",
  "duration": "1 round/level",
  "save": "Fortitude negates (see text)",
  "sr": "Yes"
 },
 "Animate Dead": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Targets: One or more corpses touched",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Enervation": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Ray of negative energy",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes"
 },
 "Dimension Door": {
  "components": "V",
  "casting": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Target: You and touched objects or other touched willing creatures",
  "duration": "Instantaneous",
  "save": "None and Will negates (object)",
  "sr": "No"
 },
 "Fear": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: Cone",
  "duration": "1 round/level",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Magic Jar": {
  "components": "V, S, F",
  "casting": "1 action",
  "range": "Medium (100 ft.+10 ft./level)",
  "target": "Target: One creature",
  "duration": "1 hour/level or until you return to your body",
  "save": "Will negates (see text)",
  "sr": "Yes"
 },
 "Waves of Fatigue": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "30 ft.",
  "target": "Area: Cone-shaped burst",
  "duration": "Instantaneous",
  "save": "No",
  "sr": "Yes"
 },
 "Overland Flight": {
  "components": "V, S",
  "range": "Personal",
  "target": "Target: You"
 },
 "Teleport": {
  "components": "V",
  "casting": "1 standard action",
  "range": "Personal and touch",
  "target": "Target: You and touched objects or other touched willing creatures",
  "duration": "Instantaneous",
  "save": "None and Will negates (object)",
  "sr": "No"
 },
 "Create Undead": {
  "components": "V, S, M",
  "casting": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One corpse",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Animate Dread Warrior": {
  "components": "V, S, M, XP",
  "casting": "10 minutes",
  "range": "Touch",
  "target": "Target: One humanoid corpse",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Greater Invisibility": {
  "components": "V, S",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Target: You or creature touched; Targets: Any number of creatures, no two of which can be more than 180 ft. apart",
  "duration": "1 round/level (D)"
 },
 "Orb of Force": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One orb of force",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Spectral Dragon": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One spectral dragon",
  "duration": "Concentration, up to 1 round/level",
  "save": "See text",
  "sr": "Yes"
 },
 "Heartfreeze": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Analyse Dweomer": {
  "components": "V, S, F",
  "casting": "8 hours",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One object or creature",
  "duration": "1 round/level (D)",
  "save": "See text",
  "sr": "No"
 },
 "Waves of Exhaustion": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "60 ft.",
  "target": "Area: Cone-shaped burst",
  "duration": "Instantaneous",
  "save": "No",
  "sr": "Yes"
 },
 "Sword of Darkness": {
  "components": "V, S, M",
  "target": "Effect: Black blade of negative energy You shatter the sword in your hand against a stone, bringing into"
 },
 "Mirror Image": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Personal (see text)",
  "target": "Target: You",
  "duration": "1 minute/level Several illusory duplicates of you pop into being, making it"
 },
 "Heroics": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "10 minutes/level",
  "save": "None",
  "sr": "Yes"
 },
 "Wall of Stone": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Stone wall whose area is up to one 5-ft. square/level (S)",
  "duration": "Instantaneous",
  "save": "See text",
  "sr": "No"
 },
 "Greater Blink": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You"
 },
 "Dimension Jumper": {
  "components": "V",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You and objects touched",
  "duration": "1 round/level You whisk yourself from place to place with a word."
 },
 "Disintegrate": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Ray",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Planar Binding": {
  "components": "V",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: Creatures with up to 200 total hit points within a 15- ft.-radius sphere917",
  "duration": "See text",
  "save": "None",
  "sr": "Yes"
 },
 "Freezing Fog": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Fog spreads in a 20-ft. radius, 20 ft. high",
  "duration": "1 minute/level",
  "save": "Reflex partial; see text",
  "sr": "No"
 },
 "Fly": {
  "components": "V, S, F/DF",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "10 minutes/level",
  "save": "None",
  "sr": "Yes (harmless)"
 },
 "Assay spell resistance": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level Finishing the spell, your eyes glow with a pale blue radiance, and"
 },
 "Dimension anchor": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Ray",
  "duration": "1 minute/level",
  "save": "None",
  "sr": "Yes (object)"
 },
 "Ray Deflection": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 minute/level",
  "save": "None",
  "sr": "No"
 },
 "Greater Dispel Magic": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "24 hours",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Magnificent Mansion": {
  "components": "V, S, F",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Extradimensional mansion, up to three 10-ft. cubes/level (S)",
  "duration": "2 hours/level",
  "save": "None",
  "sr": "No"
 },
 "Energy Immunity": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "24 hours",
  "save": "None",
  "sr": "Yes (harmless)"
 },
 "Whirling Blade": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "60 ft.",
  "target": "Effect: 60-ft. line",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Wraithstrike": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Awaken Undead": {
  "components": "M, S, V, XP",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: All mindless undead within a circle 25 ft. in radius + 5 ft./2 levels",
  "duration": "Permanent (D)",
  "save": "None (harmless)",
  "sr": "Yes (harmless)"
 },
 "Limited Wish": {
  "components": "V, S, XP",
  "casting": "1 action",
  "range": "See text Target, Effect, or Area: See text",
  "duration": "See text",
  "save": "None",
  "sr": "Yes"
 },
 "Greater Planar Binding": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Your mount touched",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes (harmless)"
 },
 "Avascular Mass": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "See text",
  "save": "Fortitude partial and Reflex negates; see text",
  "sr": "Yes"
 },
 "Wish": {
  "components": "V, XP",
  "casting": "1 action",
  "range": "See text Target, Effect, or Area: See text",
  "duration": "See text",
  "save": "See text",
  "sr": "Yes"
 },
 "Time Stop": {
  "components": "V",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: You"
 },
 "Foresight": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Personal or touch",
  "target": "Target: See text",
  "duration": "10 minutes/level",
  "save": "None or Will negates (harmless)",
  "sr": "No"
 },
 "Unname": {
  "components": "V, S, T",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: One creature with an Intelligence score of 3 or higher",
  "duration": "Instantaneous",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Necrotic Awareness": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "60 ft.",
  "target": "Area: Cone-shaped emanation717",
  "duration": "Concentration, up to 1 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Necrotic Cyst": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Living creature touched",
  "duration": "Instantaneous",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Necrotic Scrying": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Unlimited",
  "target": "Effect: Cyst-bearer serves as magical sensor",
  "duration": "1 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Necrotic Bloat": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: Living creature with necrotic cyst",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Necrotic Domination": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal Target: You",
  "duration": "1 roun"
 },
 "Necrotic Burst": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: Living creature with necrotic cyst",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "No"
 },
 "Necrotic Eruption": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: Living creature with necrotic cyst and all creatures in 20 ft. radius spread",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "No"
 },
 "Necrotic Tumor": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: Living creature with necrotic cyst719",
  "duration": "One day/level or permanent",
  "save": "Fortitude partial",
  "sr": "No"
 },
 "Necrotic Empowerment": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level You call upon the mother cyst that your body hosts,"
 },
 "Necrotic Termination": {
  "components": "V, S, F, XP",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: Living creature with necrotic cyst",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "No"
 },
 "Banishment": {
  "components": "V, S, F",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One or more extraplanar creatures, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Sequester": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: One creature or object (up to a 2-ft. cube/level) touched",
  "duration": "1 day/level (D)",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Spell Turning": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "Until expended or 10 minutes/level Spells (and spell-like effects) targeted against you rebound"
 },
 "Drawmij’s Instant Summons": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "See text",
  "target": "Target: One object weighing up to 10 lb. whose longest dimension is 6 ft. or less",
  "duration": "Permanent until discharged",
  "save": "None",
  "sr": "No"
 },
 "Phase Door": {
  "components": "V",
  "casting": "1 action",
  "range": "Touch",
  "target": "Effect: Ethereal 5 ft. × 8 ft. opening, 1 ft./level deep",
  "duration": "One usage/two levels",
  "save": "None",
  "sr": "No"
 },
 "Plane Shift": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched, or up to eight willing creatures joining hands",
  "duration": "Instantaneous",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Teleport Object": {
  "range": "Touch",
  "target": "Target: One touched object of up to 50 lb./level and 3 cu. ft./level",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Greater Arcane Sight": {
  "components": "V, S, M, F",
  "casting": "1 minute",
  "range": "Personal",
  "target": "Target: You",
  "duration": "Instantaneous An augury can tell you whether a"
 },
 "Greater Scrying": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Creature touched Duration: 1 minute or until discharged",
  "save": "None",
  "sr": "Yes"
 },
 "Vision": {
  "components": "V, S, M, XP",
  "casting": "1 action As legend lore, except vision works more quickly but"
 },
 "Mass Invisibility": {
  "components": "V, S, M",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Targets: Any number of creatures, no two of which can be more than 180 ft. apart"
 },
 "Project Image": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One shadow duplicate",
  "duration": "1 round/level (D)",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "Greater Shadow Conjuration": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "See text",
  "target": "Effect: See text",
  "duration": "See text",
  "save": "Will disbelief (if interacted with)",
  "sr": "Yes"
 },
 "Simulacrum": {
  "components": "V, S, M, XP",
  "casting": "12 hours",
  "range": "Touch",
  "target": "Effect: One duplicate creature",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Control Undead": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: Up to 2 HD of undead creatures/level, no two of which can be more than 30 ft. apart",
  "duration": "1 minute/level",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Finger of Death": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One living creature",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Control Weather": {
  "components": "V, S",
  "casting": "10 minutes; see text",
  "range": "2 miles",
  "target": "Area: 2-mile-radius circle, centered on you; see text",
  "duration": "4d12 hours; see text",
  "save": "None",
  "sr": "No"
 },
 "Ethereal Jaunt": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level (D) You become ethereal, along with your equipment."
 },
 "Reverse Gravity": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Up to one 10-ft. cube/2 levels (S)",
  "duration": "1 round/level (D)",
  "save": "None (see text)",
  "sr": "No"
 },
 "Statue": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 hour/level (D)",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Dimensional Lock": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: 15-ft.-radius emanation centered on a point in space",
  "duration": "1 day/level",
  "save": "None",
  "sr": "Yes"
 },
 "Mind Blank": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "1 day",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Prismatic Wall": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Wall 4 ft./level wide × 2 ft./level high",
  "duration": "10 minutes/level",
  "save": "See text",
  "sr": "See text"
 },
 "Protection from Spells": {
  "components": "V, S, M, F",
  "casting": "1 action",
  "range": "Touch",
  "target": "Targets: Up to one creature/four levels touched",
  "duration": "10 minutes/level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Incendiary Cloud": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Cloud spreads 30 ft. wide and 20 ft. high",
  "duration": "1 round/level",
  "save": "Reflex half (see text)",
  "sr": "Yes (see text)"
 },
 "Maze": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "See text",
  "save": "None",
  "sr": "No"
 },
 "Trap the Soul": {
  "components": "V, S, M",
  "casting": "1 action or see text",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "Permanent (see text)",
  "save": "See text",
  "sr": "Yes (see text)"
 },
 "Discern Location": {
  "components": "V, S, DF",
  "casting": "10 minutes",
  "range": "Unlimited",
  "target": "Target: One creature or object",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Moment of Prescience": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You1080"
 },
 "Greater Prying Eyes": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: You plus one willing creature per three levels, no two of which can be more than 30 ft. apart",
  "duration": "10 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Scintillating Pattern": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Colorful lights in a 20-ft.-radius spread",
  "duration": "Concentration + 2 rounds",
  "save": "None",
  "sr": "Yes"
 },
 "Screen": {
  "components": "V, S",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 30-ft. cube/level (S)",
  "duration": "1 day",
  "save": "None or Will disbelief (if interacted with) (see text)",
  "sr": "No"
 },
 "Greater Shadow Evocation": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Targets: Up to one touched creature/level",
  "duration": "1 hour/level (D)",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Clone": {
  "components": "V, S, M, F",
  "casting": "10 minutes",
  "range": "0 ft.",
  "target": "Effect: One clone",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Create Greater Undead": {
  "components": "V, S, M",
  "casting": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One corpse",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Horrid Wilting": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Targets: Living creatures, no two of whom can be more than 60 ft. apart",
  "duration": "Instantaneous",
  "save": "Fortitude half",
  "sr": "Yes"
 },
 "Symbol of Death": {
  "components": "V, S, M",
  "casting": "10 minutes",
  "range": "0 ft.; see text",
  "target": "Effect: One symbol",
  "duration": "See text",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Iron Body": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: You"
 },
 "Polymorph Any Object": {
  "components": "V, S, M/DF",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature or object",
  "duration": "See text",
  "save": "Will negates (object) (see text)",
  "sr": "Yes (object)"
 },
 "Temporal Stasis": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "Permanent",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Antimagic Ray": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature or object",
  "duration": "1 round/level",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Greater Dispelling Screen": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 100-ft.-radius emanation",
  "duration": "1 round/level (D)",
  "save": "None; see text",
  "sr": "Yes"
 },
 "Ghost Trap": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "5 ft./level",
  "target": "Area: 5 ft./level-radius emanation centered on you",
  "duration": "1 minute/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Hide from Dragons": {
  "components": "S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Targets: One creature touched/two levels",
  "duration": "10 minutes/level (D)",
  "save": "Will negates (harmless)",
  "sr": "Yes"
 },
 "Ironguard": {
  "components": "V, S, F, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 round/level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Planar Bubble": {
  "components": "V, S, M/DF",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Area: 10-ft.-radius emanation from touched creature",
  "duration": "10 min./level",
  "save": "Will negates (harmless)",
  "sr": "No"
 },
 "Call Kolyarut": {
  "components": "V, S, DF, XP",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One called kolyarut",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Dragon Ally": {
  "components": "V, XP",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)1302 Effect: One called dragon of 15 HD or less",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Stun Ray": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "1d4+1 rounds; see text",
  "save": "Fortitude partial; see text",
  "sr": "Yes"
 },
 "Solipsism": {
  "components": "V",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: One creature",
  "duration": "1 round/level (D)1397",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Arrow of Bone": {
  "components": "V, S, M",
  "casting": "10 minutes1398",
  "range": "Touch",
  "target": "Target: One projectile or thrown weapon touched",
  "duration": "1 hour/level or until discharged",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Avasculate": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Barghest’s Feast": {
  "components": "V, S, M",
  "casting": "1 round",
  "range": "Touch",
  "target": "Target: Corpse touched",
  "duration": "Instantaneous",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Energy Ebb": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "1 round/level",
  "save": "Fortitude partial; see text",
  "sr": "Yes"
 },
 "Evil Glare": {
  "components": "V, S, DF",
  "casting": "1 standard action",
  "range": "30 feet",
  "target": "Target: Living creatures",
  "duration": "1 round/level; see text",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Kiss of the Vampire": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level Drawing upon the powers of unlife, you give yourself abilities"
 },
 "Animate Breath": {
  "components": "S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level You imbue the energy of your breath weapon with"
 },
 "Bite of the Werebear": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level With an inhuman roar, your face extends and expands, and your"
 },
 "Body of War": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You"
 },
 "Brilliant Aura": {
  "target": "Targets: Weapons carried by one creature/2 levels, no two of which are more than 30 ft. apart",
  "duration": "1 round/level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Elemental Body": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level You can transform your body into a particular type of"
 },
 "Energy Transformation Field": {
  "components": "V, S, M, XP",
  "casting": "4 rounds",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 40-ft.-radius spread",
  "duration": "Permanent",
  "save": "None",
  "sr": "Yes"
 },
 "Glass Strike": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature or 4 cubic ft. of material",
  "duration": "1 hour/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Greater Stone Shape": {
  "components": "V, S, DF",
  "casting": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: Three pebbles, no two of which are more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Synostodweomer": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: One of your spells"
 },
 "Spell Engine": {
  "components": "V, S, M, XP",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: 5-ft.-radius magical wheel",
  "duration": "See text",
  "save": "None",
  "sr": "Yes (see text)"
 },
 "Wall of Greater Dispel Magic": {
  "components": "V, S, DF",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Cloud spreads in a 30-ft. radius, 20 ft. high",
  "duration": "1 round/level",
  "save": "See text",
  "sr": "Yes"
 },
 "Fierce Pride of the Beastlands": {
  "components": "V, S",
  "casting": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Two or more summoned creatures, no two of which can be more than 30 ft. apart",
  "duration": "10 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Greater Plane Shift": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Area: 10-ft.-radius emanation centered on you",
  "duration": "1 round/level",
  "save": "None",
  "sr": "No"
 },
 "Shifting Paths": {
  "components": "V, S",
  "casting": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: 1-mile radius + 1 mile/level",
  "duration": "1 hour/level",
  "save": "Will disbelief (if interacted with)",
  "sr": "Yes"
 },
 "Superior Invisibility": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal or touch",
  "target": "Target: You or a creature or object weighing no more than 100 lb./level",
  "duration": "1 minute/level (D)",
  "save": "Will negates (harmless)",
  "sr": "No"
 },
 "Greater Bestow Curse": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "Permanent",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Blackfire": {
  "components": "V, S, M",
  "casting": "1 standard action496",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Ray",
  "duration": "1 round/level",
  "save": "Fortitude negates and Reflex negates; see text",
  "sr": "Yes"
 },
 "Heart of Stone": {
  "components": "V, S, F, XP",
  "casting": "1 hour",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 year You exchange your own living heart for a finely crafted"
 },
 "Skeletal Guard": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: One or more finger bones",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Veil of Undeath": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "10 min./level You gain many of the traits common to undead creatures.721"
 },
 "Excavate": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One 5-ft.-by-5-ft. opening, 1 ft./level deep",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Flensing": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One corporeal creature; see text",
  "duration": "Up to 4 rounds; see text",
  "save": "Fortitude partial; see text",
  "sr": "Yes"
 },
 "Ghostform": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level (D) You assume a visible, incorporeal form like that of a"
 },
 "Mass Make Manifest": {
  "components": "V, S, M",
  "target": "Area: 25-ft.-radius emanation centered on a point in space",
  "save": "None You toss a handful of copper dust into the air, and it clings to"
 },
 "Greater Stunning Breath": {
  "components": "V, S, M/DF",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: 20-ft.-radius emanation centered on a point in space",
  "duration": "1 round/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Energy Absorption": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 hour/level or until expended",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Choking Cobwebs": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Dusty webs in a 10-ft.-radius spread",
  "duration": "1 minute/level (D)",
  "save": "Fortitude partial",
  "sr": "No"
 },
 "Necrotic Curse": {
  "components": "V, S, M",
  "casting": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 20-ft.-radius emanation",
  "duration": "1 hour/level",
  "save": "None",
  "sr": "Yes"
 },
 "Retributive Enervation": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You"
 },
 "Greater Seed of Undeath": {
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 40-ft.-radius emanation Every creature in the area briefly takes on a corpselike appearance,"
 },
 "Adamantine Wings": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 hour/level (D) or until expended You feel an instant of searing pain from your back, which swiftly"
 },
 "Unicorn Heart": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 hour/level (D) or until expended Your heart beats with the power of the unicorn."
 },
 "Mysterious Redirection": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "5 rounds or until expended Your foe’s attacks mysteriously veer toward other targets."
 },
 "Deadly Lahar": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "60 ft.",
  "target": "Area: Cone-shaped spread",
  "duration": "Instantaneous",
  "save": "Reflex partial",
  "sr": "No"
 },
 "Touch of the Graveborn": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Targets: Creature or creatures touched (up to one/3 levels)",
  "duration": "Instantaneous",
  "save": "Fortitude partial or Will negates",
  "sr": "Yes"
 },
 "Dreaded Form of the Eye Tyrant": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level (D) Your body withers away to dust, leaving only a floating head,"
 },
 "Unyielding Form of Inevitable Death": {
  "components": "V, S",
  "casting": "1 swift action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level (D) Your flesh turns into solid onyx, and your muscled fists crackle"
 },
 "Greater Luminous Assassin": {
  "components": "V, S, F",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One summoned assassin",
  "duration": "1 round/level",
  "save": "None",
  "sr": "No"
 },
 "Pulse of Hate": {
  "components": "V, S, M/DF",
  "casting": "1 standard action",
  "range": "20 ft.",
  "target": "Area: 20-ft.-radius emanation centered on you",
  "duration": "1 round/level",
  "save": "Will half",
  "sr": "Yes"
 },
 "Mass Animalistic Power": {
  "components": "V, S, M",
  "casting": "1 standard action Range: Personal",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: You",
  "duration": "1 round/level With a crystalline tinkling, your body transforms into a figure"
 },
 "As the Frost": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level With a crystalline tinkling, your body transforms into a figure of"
 },
 "Chain Dispel": {
  "components": "V, S, M/DF",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One or more creatures, no two of which are more than 30 ft. apart",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Plague": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One living creature/level, no two of which are more than 30 ft. apart",
  "duration": "1 round/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Greater Celerity": {
  "components": "V",
  "casting": "1 immediate action",
  "range": "Personal",
  "target": "Target: You",
  "duration": "Instantaneous You borrow a slice of time from the fut"
 },
 "Greater Glacial Ward": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "10 ft.",
  "target": "Area: 10-ft.-radius spherical emanation, centered on you",
  "duration": "1 round/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Ice Castle": {
  "components": "V, S, F",
  "casting": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Fortress of ice and snow",
  "duration": "24 hours",
  "save": "No",
  "sr": "No"
 },
 "Fimbulwinter": {
  "components": "V, S, XP",
  "casting": "10 minutes (see text)",
  "range": "1 mile/level",
  "target": "Area: 1 mile/level radius, centered on you",
  "duration": "4d12 weeks",
  "save": "None",
  "sr": "No"
 },
 "Truename Binding": {
  "components": "V, S, T, XP",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels); see lesser planar binding text",
  "target": "Target: One elemental or outsider of CR 10 or less",
  "duration": "Instantaneous",
  "save": "Will negates",
  "sr": "No"
 },
 "Truename Dispel": {
  "components": "V, S, T",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: One creature",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Ritual of Renaming": {
  "components": "V, S, T, XP",
  "casting": "1 hour",
  "range": "Touch",
  "target": "Target: One willing creature with a Intelligence score of 3 or higher",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes (harmless)"
 },
 "Waterspout": {
  "components": "V, S, DF",
  "casting": "1 full round",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Effect: Cylinder 10 ft. wide and 80 ft. tall",
  "duration": "1 round/level",
  "save": "Reflex negates",
  "sr": "No"
 },
 "Mordenkainen’s Capable Caravel": {
  "components": "V, S, F",
  "casting": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ship plus extradimensional space, up to three 10- ft. cubes/level (S)",
  "duration": "1 day/2 levels (D)",
  "save": "None",
  "sr": "No"
 },
 "Wall of Eyes": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: A wall whose area is up to one 5-ft. square/level (S) (see text)",
  "duration": "Instantaneous",
  "save": "Will negates (see text)",
  "sr": "No"
 },
 "Fiendish Clarity": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Personal",
  "target": "Target: You",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Eye of the Beholder": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Personal",
  "target": "Target: Caster",
  "duration": "1 round/level One of the caster’s eyes grows out of her head on an"
 },
 "Phantasmal Thief": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One object",
  "duration": "1 round/level",
  "save": "None",
  "sr": "No"
 },
 "Gutwrench": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One living creature",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Steal Life": {
  "components": "V, S",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One living humanoid",
  "duration": "Concentration",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Soul’s Treasure Lost": {
  "components": "V, S, M",
  "casting": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "Instantaneous",
  "save": "Fortitude negates (object)",
  "sr": "Yes"
 },
 "Mass Adept Spirit": {
  "components": "V, S",
  "casting": "1 standard action Range: Touch Target: Creature touched",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "duration": "1 hour/level or until discharged",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Incarnum Bladestorm": {
  "components": "V, S, M",
  "casting": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Cylinder (20 ft. radius, 40 ft. high)",
  "duration": "1 round/level",
  "save": "Will half",
  "sr": "No"
 },
 "Open Lesser Chakra": {
  "components": "V",
  "casting": "1 action",
  "range": "20 ft.",
  "target": "Targets: One creature/level in a 20-ft.-radius burst centered on you",
  "duration": "1 minute/level",
  "save": "None",
  "sr": "Yes (harmless)"
 },
 "Mass Guardian Spirit": {
  "components": "V, S, DF",
  "casting": "1 standard action Range: Touch Target: Creature touched",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "duration": "1 hour/level or until discharged",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Soulbanned Zone": {
  "components": "V, S",
  "casting": "1 standard action",
  "range": "Touch",
  "target": "Area: 40-ft. radius emanating from the touched point",
  "duration": "10 minutes/level (D)",
  "save": "None",
  "sr": "No"
 }
};
let fieldsCopied=0;
for(const spell of window.STARTER_SPELLS||[]){
 const record=FACTS[spell.name];if(!record)continue;
 for(const key of ['casting','components','range','target','duration','save','sr']){
  if(!spell[key]&&record[key]){spell[key]=record[key];fieldsCopied++;}
 }
 if(spell.detailsSource!=='3.5 SRD (OGL)')
  spell.detailsSource='Sourcebook stat block (Spell Bible cross-check)';
}
window.SPELL_FACT_AUDIT={revision:1,matched:Object.keys(FACTS).length,fieldsCopied};
})();