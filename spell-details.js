/* The Ashen Crown — cited 3.5e spell field supplement.
 * CORE supplies factual metadata from the OGL 3.5 SRD (not copied descriptions).
 * SUPPLEMENT is original, concise paraphrase; non-SRD numerical fields are
 * intentionally unfilled unless confirmed. Never overwrite the player's edits. */
(() => {
'use strict';
const CORE={
 "Resistance": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 minute",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Acid Splash": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: One missile of acid",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Detect Poison": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Detect Magic": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "60 ft.",
  "target": "Area: Cone-shaped emanation",
  "duration": "Concentration, up to 1 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Read Magic": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Personal",
  "target": "Target: You",
  "duration": "10 min./level",
  "save": "",
  "sr": ""
 },
 "Ghost Sound": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Illusory sounds",
  "duration": "1 round/level (D)",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "Disrupt Undead": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes"
 },
 "Touch of Fatigue": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 round/level",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Mage Hand": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One nonmagical, unattended object weighing up to 5 lb.",
  "duration": "Concentration",
  "save": "None",
  "sr": "No"
 },
 "Mending": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "10 ft.",
  "target": "Target: One object of up to 1 lb.",
  "duration": "Instantaneous",
  "save": "Will negates (harmless, object)",
  "sr": "Yes (harmless, object)"
 },
 "Message": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Targets: One creature/level",
  "duration": "10 min./level",
  "save": "None",
  "sr": "No"
 },
 "Open/Close": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: Object weighing up to 30 lb. or portal that can be opened or closed",
  "duration": "Instantaneous",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Arcane Mark": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "0 ft.",
  "target": "Effect: One personal rune or mark, all of which must fit within 1 sq. ft.",
  "duration": "Permanent",
  "save": "None",
  "sr": "No"
 },
 "Prestidigitation": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "10 ft.",
  "target": "",
  "duration": "1 hour",
  "save": "See text",
  "sr": "No"
 },
 "Mage Armour": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 hour/level (D)",
  "save": "Will negates (harmless)",
  "sr": "No"
 },
 "Shield": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 min./level (D)",
  "save": "",
  "sr": ""
 },
 "Ray of Enfeeblement": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray",
  "duration": "1 min./level",
  "save": "None",
  "sr": "Yes"
 },
 "Identify": {
  "casting": "1 hour",
  "components": "V, S, M/DF",
  "range": "Touch",
  "target": "Targets: One touched object",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Grease": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "",
  "duration": "1 round/level (D)",
  "save": "See text",
  "sr": "No"
 },
 "Silent Image": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Effect: Visual figment that cannot extend beyond four 10-ft. cubes + one 10-ft. cube/level (S)",
  "duration": "Concentration",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "False Life": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 hour/level or until discharged; see text",
  "save": "",
  "sr": ""
 },
 "Glitterdust": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Creatures and objects within 10-ft.-radius spread",
  "duration": "1 round/level",
  "save": "Will negates (blinding only)",
  "sr": "No"
 },
 "Command Undead": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One undead creature",
  "duration": "One day/level",
  "save": "Will negates; see text",
  "sr": "Yes"
 },
 "See Invisibility": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Personal",
  "target": "Target: You",
  "duration": "10 min./level (D)",
  "save": "",
  "sr": ""
 },
 "Spectral Hand": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One spectral hand",
  "duration": "1 min./level (D)",
  "save": "None",
  "sr": "No"
 },
 "Dispel Magic": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Haste": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One creature/level, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level",
  "save": "Fortitude negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Stinking Cloud": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Cloud spreads in 20-ft. radius, 20 ft. high",
  "duration": "1 round/level",
  "save": "Fortitude negates; see text",
  "sr": "No"
 },
 "Animate Dead": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Touch",
  "target": "Targets: One or more corpses touched",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Enervation": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Ray of negative energy",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "Yes"
 },
 "Dimension Door": {
  "casting": "1 standard action",
  "components": "V",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Target: You and touched objects or other touched willing creatures",
  "duration": "Instantaneous",
  "save": "None and Will negates (object)",
  "sr": "No and Yes (object)"
 },
 "Fear": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "30 ft.",
  "target": "Area: Cone-shaped burst",
  "duration": "1 round/level or 1 round; see text",
  "save": "Will partial",
  "sr": "Yes"
 },
 "Magic Jar": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Target: One creature",
  "duration": "1 hour/level or until you return to your body",
  "save": "Will negates; see text",
  "sr": "Yes"
 },
 "Waves of Fatigue": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "30 ft.",
  "target": "Area: Cone-shaped burst",
  "duration": "Instantaneous",
  "save": "No",
  "sr": "Yes"
 },
 "Overland Flight": {
  "casting": "",
  "components": "V, S",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 hour/level",
  "save": "",
  "sr": ""
 },
 "Teleport": {
  "casting": "1 standard action",
  "components": "V",
  "range": "Personal and touch",
  "target": "Target: You and touched objects or other touched willing creatures",
  "duration": "Instantaneous",
  "save": "None and Will negates (object)",
  "sr": "No and Yes (object)"
 },
 "Create Undead": {
  "casting": "1 hour",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One corpse",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Greater Invisibility": {
  "casting": "",
  "components": "V, S",
  "range": "",
  "target": "Target: You or creature touched",
  "duration": "1 round/level (D)",
  "save": "Will negates (harmless)",
  "sr": ""
 },
 "Analyse Dweomer": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One object or creature per caster level",
  "duration": "1 round/level (D)",
  "save": "None or Will negates; see text",
  "sr": "No"
 },
 "Waves of Exhaustion": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "60 ft.",
  "target": "Area: Cone-shaped burst",
  "duration": "Instantaneous",
  "save": "No",
  "sr": "Yes"
 },
 "Mirror Image": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Personal; see text",
  "target": "Target: You",
  "duration": "1 min./level (D)",
  "save": "",
  "sr": ""
 },
 "Wall of Stone": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Stone wall whose area is up to one 5-ft. square/level (S)",
  "duration": "Instantaneous",
  "save": "See text",
  "sr": "No"
 },
 "Disintegrate": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Ray",
  "duration": "Instantaneous",
  "save": "Fortitude partial (object)",
  "sr": "Yes"
 },
 "Planar Binding": {
  "casting": "",
  "components": "V, S",
  "range": "",
  "target": "Targets: Up to three elementals or outsiders, totaling no more than 12 HD, no two of which can be more than 30 ft. apart when they appear",
  "duration": "",
  "save": "",
  "sr": ""
 },
 "Fly": {
  "casting": "1 standard action",
  "components": "V, S, F/DF",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 min./level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Magnificent Mansion": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Extradimensional mansion, up to three 10-ft. cubes/level (S)",
  "duration": "2 hours/level (D)",
  "save": "None",
  "sr": "No"
 },
 "Limited Wish": {
  "casting": "1 standard action",
  "components": "V, S, XP",
  "range": "See text",
  "target": "",
  "duration": "See text",
  "save": "None; see text",
  "sr": "Yes"
 },
 "Greater Planar Binding": {
  "casting": "",
  "components": "V, S",
  "range": "",
  "target": "Targets: Up to three elementals or outsiders, totaling no more than 18 HD, no two of which can be more than 30 ft. apart when they appear.",
  "duration": "",
  "save": "",
  "sr": ""
 },
 "Wish": {
  "casting": "1 standard action",
  "components": "V, XP",
  "range": "See text",
  "target": "",
  "duration": "See text",
  "save": "See text",
  "sr": "Yes"
 },
 "Time Stop": {
  "casting": "1 standard action",
  "components": "V",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1d4+1 rounds (apparent time); see text",
  "save": "",
  "sr": ""
 },
 "Foresight": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Personal or touch",
  "target": "Target: See text",
  "duration": "10 min./level",
  "save": "None or Will negates (harmless)",
  "sr": "No or Yes (harmless)"
 },
 "Banishment": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: One or more extraplanar creatures, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Sequester": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Touch",
  "target": "Target: One willing creature or object (up to a 2-ft. cube/level) touched",
  "duration": "One day/level (D)",
  "save": "None or Will negates (object)",
  "sr": "No or Yes (object)"
 },
 "Spell Turning": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Personal",
  "target": "Target: You",
  "duration": "Until expended or 10 min./level",
  "save": "",
  "sr": ""
 },
 "Phase Door": {
  "casting": "1 standard action",
  "components": "V",
  "range": "0 ft.",
  "target": "Effect: Ethereal 5 ft. by 8 ft. opening, 10 ft. deep + 5 ft. deep per three levels",
  "duration": "One usage per two levels",
  "save": "None",
  "sr": "No"
 },
 "Plane Shift": {
  "casting": "1 standard action",
  "components": "V, S, F",
  "range": "Touch",
  "target": "Target: Creature touched, or up to eight willing creatures joining hands",
  "duration": "Instantaneous",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Teleport Object": {
  "casting": "",
  "components": "",
  "range": "Touch",
  "target": "Target: One touched object of up to 50 lb./level and 3 cu. ft./level",
  "duration": "",
  "save": "Will negates (object)",
  "sr": "Yes (object)"
 },
 "Greater Scrying": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "",
  "target": "",
  "duration": "1 hour/level",
  "save": "",
  "sr": ""
 },
 "Vision": {
  "casting": "1 standard action",
  "components": "V, S, M, XP",
  "range": "",
  "target": "",
  "duration": "",
  "save": "",
  "sr": ""
 },
 "Mass Invisibility": {
  "casting": "",
  "components": "V, S, M",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Targets: Any number of creatures, no two of which can be more than 180 ft. apart",
  "duration": "",
  "save": "",
  "sr": ""
 },
 "Project Image": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: One shadow duplicate",
  "duration": "1 round/level (D)",
  "save": "Will disbelief (if interacted with)",
  "sr": "No"
 },
 "Simulacrum": {
  "casting": "12 hours",
  "components": "V, S, M, XP",
  "range": "0 ft.",
  "target": "Effect: One duplicate creature",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Control Undead": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Targets: Up to 2 HD/level of undead creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 min./level",
  "save": "Will negates",
  "sr": "Yes"
 },
 "Finger of Death": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One living creature",
  "duration": "Instantaneous",
  "save": "Fortitude partial",
  "sr": "Yes"
 },
 "Control Weather": {
  "casting": "10 minutes; see text",
  "components": "V, S",
  "range": "2 miles",
  "target": "Area: 2-mile-radius circle, centered on you; see text",
  "duration": "4d12 hours; see text",
  "save": "None",
  "sr": "No"
 },
 "Ethereal Jaunt": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 round/level (D)",
  "save": "",
  "sr": ""
 },
 "Reverse Gravity": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: Up to one 10-ft. cube per two levels (S)",
  "duration": "1 round/level (D)",
  "save": "None; see text",
  "sr": "No"
 },
 "Statue": {
  "casting": "1 round",
  "components": "V, S, M",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "1 hour/level (D)",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Dimensional Lock": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Area: 20-ft.-radius emanation centered on a point in space",
  "duration": "One day/level",
  "save": "None",
  "sr": "Yes"
 },
 "Mind Blank": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "24 hours",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Prismatic Wall": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Wall 4 ft./level wide, 2 ft./level high",
  "duration": "10 min./level (D)",
  "save": "See text",
  "sr": "See text"
 },
 "Protection from Spells": {
  "casting": "1 standard action",
  "components": "V, S, M, F",
  "range": "Touch",
  "target": "Targets: Up to one creature touched per four levels",
  "duration": "10 min./level",
  "save": "Will negates (harmless)",
  "sr": "Yes (harmless)"
 },
 "Incendiary Cloud": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Medium (100 ft. + 10 ft./level)",
  "target": "Effect: Cloud spreads in 20-ft. radius, 20 ft. high",
  "duration": "1 round/level",
  "save": "Reflex half; see text",
  "sr": "No"
 },
 "Maze": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "See text",
  "save": "None",
  "sr": "Yes"
 },
 "Trap the Soul": {
  "casting": "1 standard action or see text",
  "components": "V, S, M, (F); see text",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature",
  "duration": "Permanent; see text",
  "save": "See text",
  "sr": "Yes; see text"
 },
 "Discern Location": {
  "casting": "10 minutes",
  "components": "V, S, DF",
  "range": "Unlimited",
  "target": "Target: One creature or object",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Moment of Prescience": {
  "casting": "1 standard action",
  "components": "V, S",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 hour/level or until discharged",
  "save": "",
  "sr": ""
 },
 "Scintillating Pattern": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Effect: Colorful lights in a 20-ft.-radius spread",
  "duration": "Concentration + 2 rounds",
  "save": "None",
  "sr": "Yes"
 },
 "Screen": {
  "casting": "10 minutes",
  "components": "V, S",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Area: 30-ft. cube/level (S)",
  "duration": "24 hours",
  "save": "None or Will disbelief (if interacted with); see text",
  "sr": "No"
 },
 "Clone": {
  "casting": "10 minutes",
  "components": "V, S, M, F",
  "range": "0 ft.",
  "target": "Effect: One clone",
  "duration": "Instantaneous",
  "save": "None",
  "sr": "No"
 },
 "Horrid Wilting": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Long (400 ft. + 40 ft./level)",
  "target": "Targets: Living creatures, no two of which can be more than 60 ft. apart",
  "duration": "Instantaneous",
  "save": "Fortitude half",
  "sr": "Yes"
 },
 "Symbol of Death": {
  "casting": "10 minutes",
  "components": "V, S, M",
  "range": "0 ft.; see text",
  "target": "Effect: One symbol",
  "duration": "See text",
  "save": "Fortitude negates",
  "sr": "Yes"
 },
 "Iron Body": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Personal",
  "target": "Target: You",
  "duration": "1 min./level (D)",
  "save": "",
  "sr": ""
 },
 "Polymorph Any Object": {
  "casting": "1 standard action",
  "components": "V, S, M/DF",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "target": "Target: One creature, or one nonmagical object of up to 100 cu. ft./level",
  "duration": "See text",
  "save": "Fortitude negates (object); see text",
  "sr": "Yes (object)"
 },
 "Temporal Stasis": {
  "casting": "1 standard action",
  "components": "V, S, M",
  "range": "Touch",
  "target": "Target: Creature touched",
  "duration": "Permanent",
  "save": "Fortitude negates",
  "sr": "Yes"
 }
};
const SUPPLEMENT={
 "Earth bind": "Forces a flying creature downward and prevents further flight if it fails its saving throw. Natural and magical flight are both affected under the spell's conditions.",
 "Fly": "The creature flies at a speed of 60 feet (40 feet in medium or heavy armour) with good manoeuvrability. It can ascend and descend and must land before the spell expires or descend safely during the closing rounds.",
 "Ray reflection": "Envelops the caster in a ray-reflecting ward, potentially turning incoming ray attacks back toward their origin. Check the original spell version before relying on its exact duration or exceptions.",
 "Assay spell resistance": "Gain a substantial bonus on caster-level checks to overcome the spell resistance of one designated creature. This improves spell penetration but does not remove any saving throw.",
 "Dimension anchor": "A ranged touch ray prevents a struck creature or object from escaping by teleportation or most planar travel while the anchor lasts. It does not stop ordinary movement.",
 "Greater Dispel Magic": "A stronger dispel that attempts to remove ongoing spells, suppress magic items, or counterspell; unlike Dispel Magic, its dispel check uses a higher caster-level cap.",
 "Magnificent Mansion": "Opens a portal to a furnished extradimensional dwelling stocked for guests. The entrance is concealed from casual notice, and the accommodation persists while the spell lasts.",
 "Energy Immunity": "Protects the subject completely against one specified energy type. Unlike Resist Energy, the spell negates damage of the chosen type rather than absorbing a limited amount per attack.",
 "Antimagic Ray": "A ranged touch ray wraps one creature in an antimagic field. The subject's magic and carried effects are suppressed while the effect operates, subject to the spell's specific limits.",
 "Greater Dispelling Screen": "Creates a magical screen that attempts to dispel active effects carried through it. Its dispel check applies to qualifying effects crossing the ward, not every spell in the area.",
 "Ghost Trap": "Creates a region in which incorporeal or ethereal creatures lose some of their usual ability to evade material attackers. Consult its interaction with ghost touch and manifested creatures.",
 "Hide from Dragons": "Shrouds the recipients from dragons' attempts to detect them. It is a specialized concealment rather than a guarantee against every dragon attack.",
 "Ironguard": "Enchants the recipient so metal passes harmlessly through them under the spell's restrictions. It does not necessarily protect against nonmetallic parts of weapons or every special attack.",
 "Planar Bubble": "Surrounds a creature with an area reproducing the environmental traits of its native plane. Useful where planar conditions are dangerous or confer important advantages.",
 "Call Kolyarut": "Calls a kolyarut inevitable from the lawful planes to serve under the spell's terms. The creature's task and any required payment or obligations must be resolved as the spell specifies.",
 "Dragon Ally": "Calls a dragon to negotiate service. Type, strength, and compensation are restricted by the spell; the summoned dragon is not automatically a permanent servant.",
 "Stun Ray": "An offensive ray intended to stun a single creature; a saving throw can lessen the condition. Apply spell resistance and the precise successful-save duration from the published spell.",
 "Solipsism": "Implants a profoundly subjective illusion in a creature's perception of reality. The target's reactions to the supposed world are constrained by the spell's mind-affecting rules.",
 "Arrow of Bone": "Enchant an arrow or bolt with deadly necromancy. A creature struck by the projectile may die on a failed Fortitude save, subject to the spell's other protections.",
 "Avasculate": "A ray tears blood vessels from a living victim, sharply reducing its remaining hit points. The target may be stunned on a failed save; creatures lacking a circulatory system may be unaffected.",
 "Barghest’s Feast": "Destroys or consumes a corpse in a fashion that makes returning the deceased to life significantly harder. The spell has special consequences for attempts at resurrection.",
 "Energy Ebb": "Drains a victim's life energy over time with mounting negative levels. The duration, allowed saves and interaction with creatures immune to energy drain matter.",
 "Evil Glare": "Grants a baleful gaze that can paralyse living creatures you focus upon. Gaze-use limits and the targets' saving throws determine its practical effect.",
 "Kiss of the Vampire": "Temporarily empowers the caster with several vampire-like supernatural abilities, such as draining energy and adopting gaseous form. This is a spell effect, not an actual vampire template.",
 "Animate Breath": "Turns a dragon's breath weapon into an independently acting elemental-like manifestation. The effect depends on the breath weapon's energy and the casting dragon's statistics.",
 "Bite of the Werebear": "Infuses the caster with bear-like strength and resilience along with natural attacks. The bonuses are enhancement effects, so they must be checked for stacking.",
 "Body of War": "Transforms the caster into a mighty warforged-like combat form, trading normal spellcasting and equipment use for physical strength and construct-style defenses while transformed.",
 "Brilliant Aura": "Bathes designated weapons in radiance that allows certain attacks to ignore armour and shield protection. Its limits follow brilliant energy weapon rules.",
 "Elemental Body": "Changes the caster into a creature with elemental traits, protections and physical adjustments. The particular elemental version determines benefits and vulnerabilities.",
 "Energy Transformation Field": "A stationary magical field absorbs spell energy cast into it, using accumulated power to activate a preset spell when its threshold is reached. It is not free automatic spellcasting.",
 "Glass Strike": "Transmutes a creature or object into glass, creating a dramatic immobilising or destructive effect. The target's resistances and its capacity to withstand transformation matter.",
 "Spell Matrix": "Stores a chosen spell within a magical matrix for release later under the matrix's triggering rules. The stored spell must be provided separately when establishing the effect.",
 "Greater Stone Shape": "Reshapes a considerably larger quantity of stone than Stone Shape. The new form is limited by the material's volume and the usual restrictions on fine detail.",
 "Synostodweomer": "Converts arcane spell energy into healing, sacrificing prepared magical power to restore hit points. The exact conversion and permitted targets are stated in the source.",
 "Energy Absorption": "Ward yourself against energy attacks; the spell can absorb incoming energy and offer reactive protection. Track the spell's pool and discharge mechanism as written.",
 "Choking Cobwebs": "Fills an area with supernatural sticky strands that hamper movement and suffocate trapped creatures. Treat the web, escape rules and damage separately.",
 "Necrotic Curse": "Places a harmful necromantic curse that interferes with a subject's vitality or recovery. The specified triggers, save and duration must be checked before use.",
 "Retributive Enervation": "Places a necromantic ward that punishes attackers with negative levels when its conditions are met. Its activation and number of levels are limited.",
 "Greater Seed of Undeath": "Imbues creatures with necromancy so that a creature dying under the spell can rise as an undead servant. Its control capacity and creature limits still apply.",
 "Adamantine Wings": "Creates tough metallic wings used to defend and attack. The wings can also aid aerial movement or shield the caster within the spell's restrictions.",
 "Unicorn Heart": "Grants the subject traits associated with the unicorn, including enhanced mobility and magical protection. Benefits end when the spell expires.",
 "Greater Luminous Assassin": "Summons a much more dangerous luminous assassin to pursue a creature you designate. The assassin's pursuit and attack abilities follow the spell rather than your usual summon list.",
 "Pulse of Hate": "Radiates harmful hatred that injures or debilitates creatures near the caster. Targets and frequency of its pulses are defined by the spell.",
 "Mass Animalistic Power": "Enhances multiple creatures with physical ability bonuses derived from animalistic power. Enhancement bonuses do not stack with other enhancements to the same score.",
 "As the Frost": "Changes the caster into a frost-infused being with defensive and cold-related capabilities. The transformation grants defined benefits and limitations, not blanket cold immunity.",
 "Greater Glacial Ward": "Raises a strong protective field of cold magic. The ward's interaction with fire and its defensive radius are governed by Frostburn.",
 "Ice Castle": "Raises a substantial magically conjured castle from ice, creating shelter and fortification. Its dimensions, duration and defensive qualities depend on caster level.",
 "Truename Binding": "Uses the personal truename of an extraplanar creature to bind or compel it. The caster must know that specific truename and satisfy the spell's special requirements.",
 "Waterspout": "Creates a powerful rotating column of water that can seize creatures and move through its area. Its effects depend on where it is placed and the spell's movement rules.",
 "Wall of Eyes": "Conjures a disturbing wall covered in eyes that can see and react to creatures around it. The barrier's sight, attacks and hit points are controlled by its spell text.",
 "Fiendish Clarity": "Reveals hidden truths through a fiendish divination, giving the caster supernatural insight. Its information scope is limited by the published spell.",
 "Eye of the Beholder": "Temporarily supplies beholder-like eye powers to the caster. These are limited manifestations rather than the complete abilities of a real beholder.",
 "Mass Adept Spirit": "Grants incarnum-based aid to several allies, strengthening their capacity to channel or use soulmeld energy. The actual bonuses depend on their incarnum features.",
 "Incarnum Bladestorm": "Creates an offensive burst of soulstuff shaped into spectral blades. The effect interacts with essentia and creatures affected by incarnum.",
 "Open Lesser Chakra": "Opens a creature's lesser chakra for an incarnum bind, allowing a soulmeld or applicable effect to occupy that chakra. Existing bind restrictions still apply.",
 "Spell Engine": "Allows the wizard to exchange currently prepared spells for different spells already present in their spellbook, within the ritual's stringent time and level limits.",
 "Wall of Greater Dispel Magic": "Forms a barrier of dispelling magic. Creatures and effects passing through risk losing active spells based on a heightened dispel check.",
 "Fierce Pride of the Beastlands": "Calls a pride of celestial predators from the Beastlands. They appear together and follow the summoning spell's limited service and duration.",
 "Greater Plane Shift": "Transports travellers between planes with greater precision than ordinary Plane Shift. Access to the destination and allowed travellers remain subject to the spell.",
 "Shifting Paths": "Creates illusory pathways that confuse travellers about which route they follow. The illusion alters apparent navigation rather than permanently reshaping the terrain.",
 "Superior Invisibility": "Gives a subject exceptional concealment that resists many means of detecting invisible creatures. It does not make the target wholly immune to divination.",
 "Greater Bestow Curse": "Inflicts a significantly stronger curse than Bestow Curse, with severe ability or combat consequences. Remove Curse alone may not always remove it.",
 "Blackfire": "Ignites a victim with dark supernatural flame that can spread to nearby creatures. The spell's damage and spreading conditions require distinct checks.",
 "Heart of Stone": "Replaces the caster's living heart with a magical stone heart, granting exceptional resilience under its special preparation and maintenance requirements.",
 "Skeletal Guard": "Conjures or animates a defensive formation of skeletons to protect a designated place or creature. Their number and control are bounded by the spell.",
 "Veil of Undeath": "Temporarily takes on an undead-like state, granting many immunities without necessarily changing the creature's underlying type. Check each immunity individually.",
 "Excavate": "Magically removes and moves a large volume of earth or stone, opening passages or pits. The spell's allowed materials and structural consequences limit the excavation.",
 "Flensing": "Strips flesh from a living target through sustained necromantic-like transmutation. Damage or other penalties continue under its saving throw conditions.",
 "Ghostform": "Makes the caster incorporeal for a limited time. The spell changes attacks, movement and equipment interaction while subject to the full incorporeal rules.",
 "Mass Make Manifest": "Forces multiple ethereal creatures into physical interaction with the Material Plane. Affected creatures may resist and retain other traits.",
 "Greater Stunning Breath": "Empowers a breath weapon so creatures struck may be stunned. The breath's normal damage applies separately from the added condition.",
 "Mysterious Redirection": "An abjuration that redirects qualifying hostile magic away from its intended subject. Redirection is restricted by the types of effects it can intercept.",
 "Deadly Lahar": "Conjures an avalanche-like volcanic mudflow that sweeps through an area, burying or damaging those caught in its path. Terrain determines the aftermath.",
 "Touch of the Graveborn": "Empowers the caster's touch with draining necromancy associated with the grave. The effect is delivered by contact and subject to its per-target restrictions.",
 "Dreaded Form of the Eye Tyrant": "Transforms the caster into a terrifying beholder-like combat form. It grants specified eye and movement capabilities, not unrestricted access to every beholder power.",
 "Unyielding Form of Inevitable Death": "Transforms the caster into a powerful inevitable-inspired form that is exceptionally difficult to stop. The granted abilities replace ordinary form capabilities as stated.",
 "Chain Dispel": "Dispel magic leaps from an initial target to additional targets, attempting to strip ongoing effects. Each target and dispel check obeys the spell's chain rules.",
 "Plague": "Inflicts pestilence on multiple targets. Disease effects, incubation and saves are determined by the specific plague chosen under the spell.",
 "Greater Celerity": "Take an immediate full-round action outside your normal initiative turn; you become dazed on your next turn. The cost is significant even if you avoid the danger that prompted it.",
 "Fimbulwinter": "Creates prolonged supernatural winter over an enormous territory. Its cold, snow and seasonal effects follow caster-level scaling and the spell's costly requirements.",
 "Expunge the Supernatural": "Uses a creature's researched personal truename to suppress one of its supernatural abilities. Knowing the truename does not automatically guarantee success.",
 "Truename Dispel": "Disrupts spells affecting a creature by speaking its researched personal truename. The dispel attempt uses the spell's special truenaming conditions.",
 "Ritual of Renaming": "Performs a demanding rite to change a creature's personal truename. Knowledge, pronunciation and participation requirements are integral.",
 "Mordenkainen’s Capable Caravel": "Conjures a seaworthy magical vessel that can transport a group across water for an extended journey. The craft's accommodations and permitted sailing conditions are specified in Stormwrack.",
 "Phantasmal Thief": "Creates an unseen magical thief able to steal an object from a target under specific circumstances. It does not freely ignore possession or physical obstacles.",
 "Gutwrench": "Tears vital organs through vile necromancy, causing catastrophic injury or death to a living victim. Fortitude and creature anatomy determine the outcome.",
 "Steal Life": "Drains life from another creature to prolong or restore the caster's youth. The spell is evil and requires a suitable victim under its timing rules.",
 "Soul’s Treasure Lost": "Punishes a victim by severing or damaging its spiritual connection to valued abilities or resources. The specific loss is controlled by the vile spell's saving throw.",
 "Conjure Greater Midnight Construct": "Assembles a powerful construct from incarnum under the caster's control. Available essentia and soulmeld rules influence its performance.",
 "Mass Guardian Spirit": "Places an incarnum-linked guardian influence on multiple allies. Its protective reaction depends on the recipients and the soul-energy supplied.",
 "Soulbanned Zone": "Creates an area that interferes with soulmelds and incarnum abilities. Within its boundaries, appropriate incarnum effects are suppressed."
};
const previousDescriptionById={};
const clean=name=>String(name).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
const fromCore=(name)=>CORE[name]||null;
const fromSupplement=(name)=>SUPPLEMENT[name]||null;
const detailsFor=spell=>{
  const core=fromCore(spell?.name)||{};
  const supplemental=fromSupplement(spell?.name)||'';
  return { ...core, ...(supplemental?{description:supplemental}:{}) };
};
let updated=0;
for(const s of window.STARTER_SPELLS||[]){
  previousDescriptionById[s.id]=s.description||'';
  const details=detailsFor(s);
  for(const [field,value] of Object.entries(details)){
    if(!value)continue;
    const old=s[field]||'';
    const generic=field==='description' && (/^Consult .+ for this spell/.test(old)||!old);
    if(!old||generic){s[field]=value;updated++;}
  }
  s.detailsSource=CORE[s.name]?'3.5 SRD (OGL)':SUPPLEMENT[s.name]?'Paraphrased supplement; check source for precise mechanics':'Existing campaign reference';
}
window.SPELL_DETAIL_AUDIT={revision:1,coreEntries:Object.keys(CORE).length,originalSupplements:Object.keys(SUPPLEMENT).length,updatedFields:updated,previousDescriptionById,detailsFor};
})();