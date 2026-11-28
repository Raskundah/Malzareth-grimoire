/* Companion folios: independent of the original grimoire storage and migration. */
(() => {'use strict';
const SEEDS={
  "vara": {
    "name": "Vara Blackthorn",
    "role": "Shock assault",
    "race": "Half-orc",
    "alignment": "Neutral Evil (provisional)",
    "classes": "Fighter 20 / Spiritual Lion Totem Barbarian 1",
    "level": 21,
    "xp": 211525,
    "maxHP": 270,
    "hp": 270,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": 25,
    "dex": 14,
    "con": 22,
    "int": 10,
    "wis": 12,
    "cha": 8,
    "bab": 20,
    "epic": 1,
    "initiative": 10,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": null,
    "ref": null,
    "will": null,
    "attack": 40,
    "damage": "2d6+21",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. HP and XP are level-21 values; current HP defaults to rested maximum for the new session and is editable. Attack +40 is prior campaign buffed +39 with epic +1; conditional, not unbuffed. Confirm active buffs and weapon profile. Alignment provisional; ability scores are the last stated equipped values. Exact AC/save and skill totals require reconciliation.",
    "feats": "Superior Initiative; Improved Initiative (superseded); Weapon Supremacy; Weapon Focus and Greater Weapon Focus (greatsword); Weapon Specialization and Greater Weapon Specialization; Melee Weapon Mastery; Power Attack; Shock Trooper; Leap Attack; Combat Brute; Robilar’s Gambit; Combat Reflexes. Other feats not fully recovered.",
    "features": "Pounce (Ex): full attack at end of a legal charge; replaces Fast Movement. Rage 1/day: +4 Str/Con, +2 morale Will, −2 AC; 11 rounds with Con 26; +42 HP at level 21. Fatigued afterward. Weapon Supremacy: take 10 on one attack/round; +5 to a later attack in a full attack; other benefits see PHB II. Heedless Charge moves Power Attack penalty to AC; maximum 21 per prior campaign ruling. Leap Attack only on qualifying jump. Robilar’s Gambit: opponents gain +4 attack/damage, retaliatory AoO after attack. Combat Brute: Momentum Swing on round after qualifying charge. Ring of Freedom of Movement; Soulfire.",
    "gear": "+5 Soulfire mithral full plate\nBelt of Giant Strength +6\nAmulet of Health +6\nRing of Protection +5\nRing of Freedom of Movement\nWinged Vest\nArmbands of Might\nHorned Helm\nGloves of Fortunate Striking\nBoots of Speed\n+4 unholy greatsword (retained); main greatsword +5 per combat record, precise properties to verify",
    "skills": "Jump: +2 ranks at 21 (previous total unknown)\nClimb: +1 rank at 21 (previous total unknown)\nSwim: +1 rank at 21 (previous total unknown)",
    "tactics": "Nerveskitter +5 initiative if Malzareth uses it on Vara. Haste gives fifth attack. Charge, Pounce, Shock Trooper; full Power Attack only if accuracy/defence tradeoff is appropriate. Prior buffed raging charge profile +44/+44/+39/+34/+29, conditional. Bless Weapon oil when needed; do not assume active.",
    "resources": [
      {
        "name": "Rage",
        "max": 1,
        "left": 1
      },
      {
        "name": "Winged Vest activation",
        "max": 1,
        "left": 1
      },
      {
        "name": "Boots of Speed rounds",
        "max": 10,
        "left": 10
      }
    ],
    "moves": [],
    "spells": []
  },
  "sylrissa": {
    "name": "Sylrissa Vhaen",
    "role": "Precision execution / infiltration",
    "race": "Drow",
    "alignment": "Unverified",
    "classes": "Rogue 16 / Swordsage 4 / Hit-and-Run Fighter 1",
    "level": 21,
    "xp": 211525,
    "maxHP": 184,
    "hp": 184,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": null,
    "dex": 29,
    "con": 18,
    "int": 16,
    "wis": 12,
    "cha": null,
    "bab": 15,
    "epic": 1,
    "initiative": null,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": 16,
    "ref": 30,
    "will": 15,
    "attack": 35,
    "damage": "1d8+12d6+21",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. Attack +35 and damage are prior conditional campaign estimates for flat-footed target within 30 ft, Haste, Recitation, Rapid Shot; verify gear bonuses and situational modifiers. Saves from level-20 record; full initiative not recovered (+2 Hit-and-Run at 21). Splitting commissioned and paid, not confirmed delivered. HP defaults to rested max. Exact skill totals/known maneuvers need audit.",
    "feats": "Lingering Damage (epic); Precise Shot (Fighter bonus); Crossbow Sniper; Rapid Shot; Rapid Reload; Point Blank Shot; Adaptive Style; Darkstalker; Improved Initiative (recorded earlier); Crippling Strike (Rogue special ability). Other feats pending audit.",
    "features": "Sneak attack 8d6 base; Assassin’s Stance +2d6; Rogue’s Vest +1d6; Deadly Precision +1d6. Crossbow Sniper allows qualifying sneak attacks within 60 ft. Crippling Strike: 2 Str damage on qualifying sneak attacks; does not repeat with Lingering Damage. Hit-and-Run +2 initiative, +9 competence weapon damage vs flat-footed targets within 30 ft. Lingering Damage: record actual core sneak attack damage per qualifying hit, repeat next turn (campaign ruling excludes item bonus dice). Splitting: two separately rolled projectiles per bolt; each eligible for sneak attack in full attack per campaign ruling. Evasion, trapfinding, trap sense, uncanny dodge/improved uncanny dodge, Swordsage discipline focus; verify exact special ability list.",
    "gear": "+5 Deadly Precision light crossbow; Splitting upgrade commissioned (+9 equivalent, 90,000 gp paid)\nGreater Truedeath Crystal\nGreater Demolition Crystal (6,000 gp paid); one augment crystal attached at a time\nCelestial Armor\nGloves of Dexterity +6\nAmulet of Health +6\nRing of Protection +5\nRogue’s Vest\nBelt of Battle\nScout’s Headband\nGoggles of Foefinding\nBoots of Speed\nCloak of Resistance +5\nRing of Counterspells (stored spell unknown)\nBracers of Murder",
    "skills": "Hide: +1 rank at 21 (2 points)\nMove Silently: +1 rank at 21 (2 points)\nJump: +1 rank at 21\nSearch / Disable Device: last recorded 19 ranks; current ranks unverified\nOpen Lock, Tumble, Spot, Listen, Use Magic Device: verify exact ranks",
    "tactics": "Assassin’s Stance for precision damage; Pearl of Black Doubt for defence. Hasted splitting full attack: +35/+35/+35/+30/+25, each doubled (conditional). No ranged flanking by default. Switch crystals for undead/constructs. Check concealment, immunity, range and flat-footed status. Belt of Battle for positioning/full attacks. Track lingering damage separately per target.",
    "resources": [
      {
        "name": "Belt of Battle charges",
        "max": 3,
        "left": 3
      },
      {
        "name": "Boots of Speed rounds",
        "max": 10,
        "left": 10
      }
    ],
    "moves": [
      {
        "name": "Cloak of Deception",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Blade Technique",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Garrote",
        "ready": false,
        "spent": false
      },
      {
        "name": "Shadow Stride",
        "ready": false,
        "spent": false
      },
      {
        "name": "Strength Draining Strike",
        "ready": false,
        "spent": false
      },
      {
        "name": "Hand of Death",
        "ready": false,
        "spent": false
      },
      {
        "name": "Bloodletting Strike",
        "ready": false,
        "spent": false
      },
      {
        "name": "Sudden Leap",
        "ready": false,
        "spent": false
      },
      {
        "name": "Bonesplitting Strike (prerequisite audit)",
        "ready": false,
        "spent": false
      }
    ],
    "spells": [],
    "lingering": []
  },
  "voss": {
    "name": "Malrec Voss",
    "role": "Divine support / counter-magic",
    "race": "Human",
    "alignment": "Neutral Evil",
    "classes": "Cleric 15 / Paragnostic Apostle 5 / Hierophant 1",
    "level": 21,
    "xp": 211425,
    "maxHP": 204,
    "hp": 204,
    "tempHP": 0,
    "ap": 15,
    "maxAP": 15,
    "str": null,
    "dex": null,
    "con": 20,
    "int": 14,
    "wis": 28,
    "cha": null,
    "bab": null,
    "epic": 1,
    "initiative": null,
    "ac": null,
    "touch": null,
    "flat": null,
    "fort": null,
    "ref": null,
    "will": null,
    "attack": null,
    "damage": "",
    "speed": null,
    "notes": "24 Marpenoth 1375 DR. Wisdom 28 until Tome of Understanding +3 is read; expected 31 if no higher inherent bonus. HP defaults to rested max. Exact ability scores, saves, BAB, turning pool, prepared spells and slot totals not recovered; do not infer. Skill ranks reconstructed in level-21 advancement.",
    "feats": "Epic Spellcasting; Divine Metamagic (Persistent Spell); Persistent Spell; Divine Defiance; other feats pending full audit.",
    "features": "Velsharoon; Magic and Death domains. Cleric caster level 21 including Hierophant; Bead of Karma +4 while active. Rebuke/command undead as Cleric 15 before items. Divine Reach: deliver touch-range divine spells at 30 ft (ranged touch attack where required). Divine Defiance: spend rebuke attempt to counterspell as immediate action; appropriate counterspell needed. Divine Metamagic: spend rebuke attempts to apply selected metamagic; Persistent Spell costs 7 attempts. Paragnostic Apostle: Penetrating Insight, Mind over Matter recorded; other selections to verify. Epic Spellcasting: two daily epic divine spells after development; none developed.",
    "gear": "+5 Soulfire mithral full plate\n+5 Animated Shield\nCirclet of Wisdom +6 / Rapid Casting\nBelt of Battle / Constitution +6\nRing of Protection +5\nNightstick\nReliquary Holy Symbol\nRing of Enduring Arcana\nTunic of Steady Spellcasting\nScepter of the Netherworld\nPrayer Bead of Karma\nThird Eye Clarity\nCloak of Resistance +5\nTome of Understanding +3 (reading in progress)",
    "skills": "Concentration: 24 ranks\nSpellcraft: 24 ranks\nKnowledge (religion): 24 ranks\nKnowledge (arcana): 23 ranks\nHeal: 18 ranks\nDecipher Script: 12 ranks\nKnowledge (the planes): 5 ranks",
    "tactics": "Prepare Mass Conviction, Recitation, Freedom of Movement, Death Ward, Righteous Wrath of the Faithful, True Seeing, Greater Spell Immunity where available. Use Divine Defiance or immediate rescue (Delay Death) as appropriate; same immediate action. Heal Vara/Sylrissa or Harm Malzareth through Divine Reach. Mass Resurgence for ongoing effects. Belt of Battle for extra action. Spell list below is suggested, not prepared until entered.",
    "resources": [
      {
        "name": "Belt of Battle charges",
        "max": 3,
        "left": 3
      },
      {
        "name": "Bead of Karma",
        "max": 1,
        "left": 1
      },
      {
        "name": "Epic spells (after development)",
        "max": 2,
        "left": 2
      },
      {
        "name": "Rebuke attempts (verify)",
        "max": null,
        "left": null
      }
    ],
    "moves": [],
    "spells": []
  }
};


const REFERENCE={"vara":{"Feats":[["Superior Initiative","Epic Level Handbook / SRD","Passive: +8 initiative, replacing Improved Initiative; with Dex 14 the recorded total is +10, or +15 with Nerveskitter."],["Improved Initiative","PHB","Prerequisite for Superior Initiative; its +4 does not stack with Superior Initiative."],["Weapon Focus / Greater Weapon Focus","PHB","Each grants +1 attack with chosen greatsword; total +2."],["Weapon Specialization / Greater Weapon Specialization","PHB","Each grants +2 weapon damage with greatsword; total +4."],["Melee Weapon Mastery (slashing)","PHB II","Adds +2 attack and +2 damage with qualifying slashing melee weapons, stacking with weapon-specific focus/specialization."],["Power Attack","PHB / Epic SRD","Choose penalty before attacks, lasting until next turn; maximum effective BAB 21. Two-handed attacks gain twice penalty as damage. No bonus for light weapons except listed exceptions."],["Shock Trooper","Complete Warrior","Heedless Charge shifts Power Attack penalty to AC on qualifying charge (at least −5 Power Attack). Also permits directed bull rush and domino rush tactical options."],["Leap Attack","Complete Adventurer / errata","Qualifying charge with at least 10 ft horizontal jump and ending in threat range enhances Power Attack damage. Apply published errata and agreed campaign multiplication separately; an ordinary flying charge does not qualify."],["Combat Brute","Complete Warrior","Momentum Swing rewards Power Attack of at least 5 on round after a charge; two-handed damage multiplier becomes 3. Sundering Cleave and Advancing Blows are additional tactical options."],["Robilar’s Gambit","PHB II","At start of your action adopt stance: enemy melee attacks against you gain +4 attack and damage; each such attack provokes your AoO after it resolves, subject to available AoOs."],["Combat Reflexes","PHB","Additional AoOs equal to Dex bonus; can make AoOs while flat-footed. With Dex +2, normally up to 3 per round."],["Weapon Supremacy","PHB II","Chosen weapon: +4 against disarm; wield in grapple; +5 on one attack after first in a full attack; substitute natural 10 for one attack once per round; +1 AC while wielding it. Check exact weapon."]],"Class features":[["Fighter 20","PHB","Eleven fighter bonus feats by level 20 (1st and every even level); individual selections still need full reconciliation. Proficient with all simple/martial weapons, all armor and shields."],["Spiritual Lion Totem — Pounce","Complete Champion p.46","Ex; replaces Barbarian fast movement. Full attack after a legal charge, including flying charges with legal movement. Unlimited uses. Charge +2 attack, −2 AC; Haste adds one attack."],["Rage","PHB","1/day; +4 Str/Con, +2 morale Will, −2 AC. With Con 26 lasts 11 rounds. Increases HP by 42 at level 21. Fatigued when it ends; use only permitted actions/skills during rage."],["Half-orc","PHB / SRD","Darkvision 60 ft; orc blood; racial ability adjustments already incorporated in recorded ability scores."],["Epic progression","Epic SRD","Level 21 +1 epic attack, +0 epic saves; four iteratives from pre-epic BAB +20. Fifteen action points on level-up; action dice highest of 3d6."]],"Magic items":[["+5 Soulfire mithral full plate","Book of Exalted Deeds / DMG","Full plate +8 armor, enhancement +5; mithral reduces armor category, weight and check penalty, raises max Dex. Soulfire protects against death spells/effects, energy drain and negative-energy effects; check exceptions. AC calculation still needs other active gear."],["Belt of Giant Strength +6","DMG","Continuous +6 enhancement to Strength, already included in recorded Str 25. Does not stack with another enhancement to Str."],["Amulet of Health +6","DMG","Continuous +6 enhancement to Constitution; already reflected in Con 22 and HP."],["Ring of Protection +5","DMG","Continuous +5 deflection AC, applies to touch AC and flat-footed AC."],["Ring of Freedom of Movement","DMG","Continuous freedom of movement: move/attack normally despite applicable magical movement restrictions; automatically succeeds at relevant grapple escape checks. Not blanket immunity to all stasis effects."],["Winged Vest","Magic Item Compendium p.195","Swift activation, 5/day; fly speed 60 ft (good) for 5 rounds. Haste normally raises this to 90 ft. Track each use."],["Armbands of Might","Magic Item Compendium / Complete Adventurer","+2 on Strength checks and Strength-based skill checks; +2 melee damage when using Power Attack with penalty at least −2."],["Horned Helm","Magic Item Compendium","Grants a secondary natural gore attack dealing 1d8 + half Strength modifier; counts as magical for DR. Secondary attack normally takes −5, reduced by Multiattack if possessed. Can combine with legal full attacks; not a bonus to every charge."],["Gloves of Fortunate Striking","Magic Item Compendium","Once/day immediate action after rolling an attack but before learning success; must use second result. Cannot reroll an attack already rerolled."],["Boots of Speed","DMG","Free activation; Haste up to 10 rounds/day, nonconsecutive. Does not stack with another Haste."],["+4 Unholy Greatsword","DMG","Retained weapon: +4 enhancement attack/damage; +2d6 against good creatures, evil-aligned for DR. Do not assume it is the separate main +5 weapon."],["Main greatsword","Campaign combat record","+5 enhancement was used in combat, but the exact complete weapon record is missing. Do not merge with the +4 unholy weapon without confirmation."]]},"sylrissa":{"Feats":[["Lingering Damage","Epic SRD","Requires sneak attack +8d6 and Crippling Strike. Repeat sneak attack damage on next turn; per-hit splitting interaction and exclusion of item dice are campaign rulings. Track per target; do not repeat Strength damage."],["Precise Shot","PHB","Removes −4 penalty for shooting into melee; does not grant ranged flanking."],["Point Blank Shot","PHB","Within 30 ft, +1 attack and damage with ranged weapons."],["Rapid Shot","PHB","Full attack with one additional ranged attack at highest bonus; all attacks take −2. Stacks with Haste extra attack."],["Rapid Reload (light crossbow)","PHB","Reload chosen light crossbow as a free action; permits iterative attacks. Reload still provokes AoOs."],["Crossbow Sniper","PHB II","Add half Dex bonus to crossbow damage (+4 currently); extends qualifying sneak attack/skirmish range to 60 ft. Requires Weapon Focus with chosen crossbow."],["Weapon Focus (light crossbow)","PHB","+1 attack with selected crossbow. Inferred from Crossbow Sniper prerequisite and prior attack calculation; verify feat record."],["Darkstalker","Lords of Madness","Special-sense creatures must make relevant detection checks against Hide/Move Silently instead of automatically detecting her; also allows flanking creatures with all-around vision."],["Adaptive Style","Tome of Battle","Full-round action to change readied maneuvers; recovery interaction per campaign ruling/FAQ. Normal Swordsage recovery is full-round for one expended maneuver."],["Improved Initiative","PHB","Passive +4 initiative; previously recorded; exact complete initiative remains subject to other bonuses."]],"Class features":[["Rogue sneak attack","PHB","8d6 at Rogue 16. Target must be denied Dex to AC or flanked, and ranged attacks within allowed range. Concealment and immunity can block it; precision damage not multiplied on criticals."],["Trapfinding","PHB","Search can locate high-DC traps including magical traps; Disable Device can disarm magic traps. Can use high success margin to bypass a trap where applicable."],["Evasion / Uncanny Dodge","PHB","Evasion: no damage on successful Reflex half save in light/no armor. Uncanny Dodge retains Dex to AC when flat-footed or attacked by invisible attacker (not immobilized); Improved Uncanny Dodge limits flanking."],["Trap Sense +5","PHB","Rogue 16: +5 Reflex saves against traps and +5 dodge AC against trap attacks."],["Crippling Strike","PHB","Rogue special ability: 2 Strength damage per successful sneak attack against susceptible targets. Other Rogue special ability selection (Rogue 10/13/16) requires audit."],["Swordsage — Quick to Act / Discipline Focus","Tome of Battle","At Swordsage 4 Quick to Act +1 initiative. Discipline focus grants associated Weapon Focus at 1 and insightful strikes at 4 for selected discipline; confirm selections."],["Swordsage — AC bonus","Tome of Battle","From Swordsage 2, add Wisdom bonus to AC when in light armor, unencumbered and not using shield; applies to touch/flat-footed; lost when immobilized or helpless."],["Maneuvers and stances","Tome of Battle","Swordsage 4: 9 maneuvers known, 5 readied, 2 stances. Initiator level 12 (4 + floor(17/2)). Max maneuver level 6. Recover one as full-round action or use Adaptive Style. Stances changed as swift action."],["Assassin’s Stance","Tome of Battle","Shadow Hand stance (3rd): +2d6 sneak attack while active."],["Pearl of Black Doubt","Tome of Battle","Diamond Mind stance (3rd): +2 dodge AC per missed melee attack against you, cumulative until start of next turn."],["Hit-and-Run Tactics","Drow of the Underdark p.58","Fighter 1 alternative: give up heavy armor/tower shields; +2 initiative, +Dex modifier competence bonus to weapon damage vs flat-footed foes within 30 ft (+9). Still receives Fighter bonus feat."],["Drow","Monster Manual","Darkvision 120 ft; light blindness; +2 racial Will vs spells/SLAs; racial spell-like abilities and spell resistance; exact lesser/full drow profile and LA-buyoff application need audit. Do not auto-apply SR until confirmed."],["Epic progression","Epic SRD","Pre-epic BAB +15, epic +1, only three iteratives; +0 epic saves at 21. Action points 15."]],"Magic items":[["+5 Splitting Deadly Precision light crossbow","Champions of Ruin / Magic Item Compendium","+5 enhancement, Deadly Precision +1d6 on sneak attack; Splitting +3 equivalent makes two identical projectiles with independent attack rolls (Precise Shot required). Commissioned, paid; confirm delivery. +9 total equivalent."],["Greater Truedeath Crystal","Magic Item Compendium","Against undead: +1d6 damage, ghost touch, permits critical hits and sneak attacks. Greater crystal needs +3 actual enhancement. Only one augment crystal on weapon at a time."],["Greater Demolition Crystal","Magic Item Compendium","Against constructs: +1d6 damage, treat weapon as adamantine for DR, permits critical hits/sneak attacks. Requires +3 actual enhancement. Switch with Truedeath as needed."],["Celestial Armor","DMG","+3 chainmail, +8 armor AC, max Dex +8, armor check −2, treated as light armor; fly 1/day. Verify Swordsage Wisdom AC applicability."],["Gloves of Dexterity +6","DMG","Continuous +6 enhancement Dex; included in Dex 29."],["Amulet of Health +6","DMG","Continuous +6 enhancement Con; included in Con 18."],["Ring of Protection +5","DMG","Continuous +5 deflection AC, including touch and flat-footed AC."],["Rogue’s Vest","Magic Item Compendium","Continuous +1d6 sneak attack damage, +2 competence Hide and Move Silently, +2 competence Reflex saves. Do not stack with other competence bonuses."],["Belt of Battle","Magic Item Compendium","+2 competence initiative; 3 charges/day. Swift action: 1 charge move action, 2 standard, 3 full-round. Extra action must be used immediately."],["Scout’s Headband","Magic Item Compendium p.132","+2 competence Spot; standard command activation. 3 charges/day: 1 grants darkvision 60 ft for 1 hour; 2 grants see invisibility for 10 minutes; 3 grants true seeing for 1 minute."],["Goggles of Foefinding","Magic Item Compendium","Ignores AC bonus from ordinary cover when making attacks; not total cover. Does not grant line of sight or ignore concealment."],["Boots of Speed","DMG","Free activation; 10 rounds/day Haste, nonconsecutive."],["Cloak of Resistance +5","DMG","Continuous +5 resistance to saves; not cumulative with other resistance bonuses."],["Ring of Counterspells","DMG","Stores one spell of 1st–6th level; automatically counters that spell when cast upon wearer, consuming stored spell. Current spell unknown."],["Bracers of Murder","Drow of the Underdark","+2 profane attack/damage vs flat-footed targets; reroll sneak attack dice showing 1 (keep second result). Increases death attack DC if relevant."]],"Maneuvers":[["Cloak of Deception","Shadow Hand 2","Swift boost: greater invisibility until end of current turn; special senses can still negate benefits."],["Shadow Blade Technique","Shadow Hand 1","Standard melee strike: roll twice, choose result; selecting lower successful roll grants extra 1d6 cold damage."],["Shadow Garrote","Shadow Hand 3","Standard ranged touch strike, range 60 ft; 5d6 damage, Fortitude save or flat-footed until start of next turn. Check target immunities."],["Shadow Stride","Shadow Hand 5","Move action teleport up to 50 ft; line of sight/effect and destination requirements apply."],["Strength Draining Strike","Shadow Hand 3","Standard melee strike; inflicts Strength damage with Fortitude partial. Ability-damage immunity applies."],["Hand of Death","Shadow Hand 4","Standard melee touch strike against flat-footed target; Fortitude or paralysis 1d3 rounds. Check living target restrictions."],["Bloodletting Strike","Shadow Hand 5","Standard melee strike, Constitution damage with Fortitude partial; check immunity."],["Sudden Leap","Tiger Claw 1","Swift jump movement based on Jump check; can provoke AoOs; useful for repositioning."],["Bonesplitting Strike","Stone Dragon 4","Standard melee strike with Constitution damage; requires ground contact. Prior prerequisite discrepancy remains open."]]},"voss":{"Feats":[["Epic Spellcasting","Epic SRD","24 Spellcraft and 24 Knowledge (religion), 9th-level divine spells. Two epic divine spells/day, only after development; Spellcraft check per spell."],["Persistent Spell","Complete Arcane","Eligible fixed/personal range spells last 24 hours; +6 slot adjustment; excludes instantaneous/discharge effects. Verify each spell’s eligibility."],["Divine Metamagic (Persistent Spell)","Complete Divine / errata","Apply selected metamagic to eligible divine spell without raising slot; expend 1 + adjustment rebuke attempts (7 for Persistent)."],["Divine Defiance","Fiendish Codex II","Spend a turn/rebuke attempt to counterspell as immediate action; must identify spell and have appropriate counterspell. Competes with other immediate/swift actions."]],"Class features":[["Cleric spellcasting","PHB","Effective ordinary spell progression 20 (Cleric 15 + Paragnostic Apostle 5); base caster level 21 with Hierophant. Wisdom determines bonus slots and DC. Prepare divine spells from class list, including one domain slot per level 1–9."],["Spontaneous inflict","PHB","Evil cleric may exchange prepared nondomain spells for appropriate inflict spells; does not spontaneously convert to cures. Negative energy heals undead."],["Rebuke / command undead","PHB","Cleric 15 base turning level before gear; roll turning check and damage as usual; commanded HD limit applies. Daily attempts 3 + Cha modifier plus equipment/feats; exact Charisma and total pool unknown."],["Magic domain","PHB","Use spell-trigger and completion items as wizard of half cleric level (minimum 1); combine with actual wizard levels if any. Domain spells include Identify, Dispel Magic and Mage's Disjunction."],["Death domain","PHB","Death touch 1/day: melee touch on living target, roll 1d6 per cleric level; if total equals/exceeds current HP it dies. Domain spell list includes Death Ward, Slay Living, Destruction."],["Paragnostic Apostle — Penetrating Insight","Complete Champion","Recorded choice: +1 on caster-level checks to penetrate spell resistance or dispel another caster’s spell."],["Paragnostic Apostle — Mind over Matter","Complete Champion","Recorded choice: spells granting armor bonuses grant +2 additional armor bonus. Other three Knowledge Is Power selections not recovered."],["Hierophant — Divine Reach","DMG / SRD","Su; touch-range divine spells at 30 ft, ranged touch attack if required. May select a second time for 60 ft. No extra slot or daily usage. Hierophant advances caster level, not ordinary slots."],["Human / epic progression","PHB / Epic SRD","Human bonus feat and skill points; +1 epic attack, +0 epic saves at 21. Pre-epic BAB +13 derived from Cleric 15 (+11) and Apostle 5 (+2)."]],"Magic items":[["+5 Soulfire mithral full plate","Book of Exalted Deeds / DMG","+13 armor AC from +5 full plate; mithral improves armor category/max Dex/check penalty; Soulfire protects from death spells/effects, energy drain and negative energy effects."],["+5 Animated Shield","DMG","Shield floats to protect wielder after command activation, freeing both hands; +5 enhancement on underlying shield bonus. Exact base shield type not confirmed."],["Circlet of Wisdom +6 / Rapid Casting","Magic Item Compendium + campaign combined item","+6 enhancement Wis; 3 charges/day. Swift activation casts an eligible spell normally taking at most a standard action: 1 charge up to 2nd, 2 up to 3rd, 3 up to 4th; spends the actual slot. Shares swift action with Belt of Battle."],["Belt of Battle / Constitution +6","Magic Item Compendium + combined item","+6 enhancement Con, +2 competence initiative; 3 charges/day as swift action: move (1), standard (2), full-round (3)."],["Ring of Protection +5","DMG","+5 deflection AC, including touch and flat-footed AC."],["Nightstick","Libris Mortis","+4 daily turn/rebuke uses. Do not stack multiple copies without a campaign ruling."],["Reliquary Holy Symbol","Magic Item Compendium","One extra daily turn/rebuke use per qualifying condition (Knowledge religion 5 ranks, Improved Turning, divine feat); known religion ranks and divine feat provide two; Improved Turning unverified."],["Ring of Enduring Arcana","Complete Mage","+4 effective caster level for resisting dispel checks against your spells; does not improve actual caster level for other purposes."],["Tunic of Steady Spellcasting","Magic Item Compendium","+5 competence Concentration."],["Scepter of the Netherworld","Libris Mortis","+3 effective turning/rebuking level while held; does not provide extra daily attempts."],["Prayer Bead of Karma","DMG","Once daily, +4 caster level for divine spells for 10 minutes after activation. Voss CL 21 → 25 while active."],["Third Eye Clarity","Magic Item Compendium","Once/day immediate action to negate confusion, daze, fascination or stun as specified; use when affected, check exact timing."],["Cloak of Resistance +5","DMG","+5 resistance to saves; confirmed later gear record, use +5 rather than +3 pending local edit reconciliation."],["Tome of Understanding +3","DMG","48 hours reading within six days; +3 inherent Wis, not cumulative with existing inherent bonus. Reading in progress; Wis remains 28 until complete."]],"Support spells (not prepared)":[["Mass Conviction","Spell Compendium","3rd; morale bonus to saves, +5 at CL 18+; 10 min/level. Does not stack with Rage's morale Will bonus."],["Recitation","Spell Compendium","4th; luck bonus attacks, AC, saves; +3 for worshippers of same deity, +2 for other allies; round/level."],["Righteous Wrath of the Faithful","Spell Compendium","5th; melee attacks/damage morale bonus and extra highest-bonus attack; extra attack does not stack with Haste."],["Heal / Harm","PHB","6th; Heal up to 150 HP and removes listed conditions, Harm heals undead as Heal. Divine Reach up to 30 ft."],["Freedom of Movement / Death Ward","PHB","4th; preventative protection against movement restrictions and death/energy drain respectively. Divine Reach applicable."],["Greater Dispel Magic / Divine Defiance","PHB / Fiendish Codex II","6th; remove enemy spell buffs or counterspell; Divine Defiance changes timing at cost of rebuke use."],["Delay Death / Mass Resurgence","Spell Compendium","4th immediate rescue from HP-loss death; 3rd allows additional saves against eligible effects. Check exact targets and timing."],["Greater Spell Immunity / Superior Resistance","PHB / Spell Compendium","8th selective spell immunity against eligible spells; 6th +6 resistance saves for 24 hours. Resistance bonuses do not stack."]]}};
const VARA_WAR22_REFS=[["Wall of Blades","Tome of Battle p. 70 (Iron Heart 2, counter)","Immediate action, personal; roll an attack with a melee weapon held and use the higher of that result or normal AC against the incoming melee/ranged attack. May decide after learning the enemy attack result. Cannot use when denied Dexterity against the attacker. No maneuver prerequisite."],["White Raven Tactics","Tome of Battle p. 94 (White Raven 3, boost); official 3.5 FAQ p. 75","Swift action; choose another ally within 10 ft. Their initiative changes to yours minus 1; if they already acted they can act again, otherwise their turn moves to the new count. No effect if initiative unchanged. No self-targeting. Requires one White Raven maneuver, met by Leading the Charge (stance counts, p. 44)."],["Mountain Hammer","Tome of Battle pp. 81, 84 (Stone Dragon 2, strike)","Standard action; make one melee attack against a creature or unattended object. On hit add 2d6 damage and bypass DR and hardness. Must be in contact with ground to initiate Stone Dragon maneuvers. No prerequisite in printed text; not a full attack or Pounce."],["Leading the Charge","Tome of Battle p. 92 (White Raven 1, stance)","Swift action to enter or change stance; 60-ft emanation. Allies who can hear Vara and charge within area gain +11 damage at initiator level 11. Include Vara herself under normal self-as-ally rule when eligible; campaign calculator applies to qualifying charge attacks during Pounce. Remains active until changed or ended; not expended."],["Warblade 1 — maneuvers and recovery","Tome of Battle pp. 20–22, 39, 44","Initiator level 11 (Warblade 1 + half of 21 other levels, rounded down), up to 6th-level maneuvers subject to prerequisites. Three known/readied maneuvers, one 1st-level stance. Recover all expended maneuvers as a swift action immediately followed by a melee attack or standard action doing nothing else; cannot initiate a maneuver or change stance during recovery."],["Battle Clarity (Ex)","Tome of Battle p. 22","While not flat-footed, insight bonus to Reflex saves equal to Intelligence bonus (maximum Warblade class level). Int 10 means +0 currently."],["Weapon Aptitude (Ex)","Tome of Battle p. 22","One hour of weapon practice after rest to change weapon choices of eligible weapon-specific feats, subject to prerequisites. Warblade levels also help qualify for fighter-only feats as described by class; existing Fighter 20 qualification is unchanged."]];
const SYL22_REFS=[["Shadow Blink","Tome of Battle p. 78 (Shadow Hand 7)","Swift action, teleport up to 50 ft to an unoccupied destination within line of sight and line of effect, following Shadow Jaunt's rules. Instantaneous; no save or SR. Leaves move and standard actions available, or a full-round action. Expend on use."],["Child of Shadow","Tome of Battle p. 76 (Shadow Hand 1, stance)","Swift to enter; moving at least 10 feet during your turn grants concealment against melee and ranged attacks until your next turn (normally 20% miss chance). Does not grant Hide in Plain Sight. Supernatural. Previously selected at Swordsage 1."],["Pearl of Black Doubt","Tome of Battle p. 64 (Diamond Mind 3, stance)","Selected at Swordsage 5, but requires one known Diamond Mind maneuver. None recovered in the current repertoire; pending prerequisite correction. While active, each melee attack that misses grants +2 cumulative dodge AC against all attacks until start of next turn. Swift to enter."],["Swordsage 5 — Quick to Act","Tome of Battle p. 16, Table 1–2","Quick to Act increases from +1 to +2 initiative. 10 maneuvers known, 6 readied, 3 stances. Initiator level 13 (5 + floor(17/2)), up to seventh-level maneuvers. Epic save +1, epic attack unchanged."]];
const AUDIT={"vara":"Prior level-20 record: Fort +24, Ref +13, Will +14 (no new epic save at 21). Rage/temporary buffs separate. Main greatsword identity and armor/AC, speed, full ranks and all feat slots need verification. Known armor components alone: 10 base +13 armor +2 Dex +5 deflection +1 Weapon Supremacy when wielding chosen greatsword = 31 AC (conditional estimate, before other modifiers).","sylrissa":"Level-20 saves +16/+30/+15 carry into 21. Initiative can be derived provisionally: Dex +9, Improved Initiative +4, Quick to Act +1, Belt of Battle +2 competence, Hit-and-Run +2 = +18 if equipped and confirmed. Crossbow attack/damage conditional; source sheet AC and exact feat/skill list missing. Known components imply 10 +8 armor +8 capped Dex +5 deflection +1 Wisdom (Swordsage conditions) = 32 AC, touch 24, denied-Dex AC 24 before additional gear; ordinary flat-footed AC retains Dex through Uncanny Dodge; estimate only. Splitting delivery remains unconfirmed. Bonesplitting prerequisite audit outstanding.","voss":"Recovered level-20 save variants +18/+10/+25 with +3 cloak or +20/+12/+27 with +5. Later record confirms +5 cloak, so use latter unless edited. Level-18 AC 36 / touch 16 / flat-footed 35 is historical, not guaranteed at 21. Spell preparation and daily rebuke count are unknown; level-20 skill allocation reconstructed."};
Object.assign(SEEDS.vara,{fort:24,ref:13,will:14});Object.assign(SEEDS.voss,{fort:20,ref:12,will:27,bab:13});SEEDS.vara.resources.find(x=>x.name==='Winged Vest activation').max=5;SEEDS.vara.resources.find(x=>x.name==='Winged Vest activation').left=5;
const KEY='ashen-crown-companion-folios-v1';
const clone=x=>JSON.parse(JSON.stringify(x));
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const validId=id=>own(SEEDS,id);
const safe=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const n=(x)=>x===''||x==null?null:Number(x);
const bounded=(x,min,max)=>Number.isFinite(x)?Math.min(max,Math.max(min,Math.trunc(x))):null;

const SKILL_LIST=[
 ['Balance','dex',true,false],['Bluff','cha',false,false],['Climb','str',true,false],['Concentration','con',false,false],['Craft','int',false,false],['Decipher Script','int',false,true],['Diplomacy','cha',false,false],['Disable Device','int',false,true],['Disguise','cha',false,false],['Escape Artist','dex',true,false],['Forgery','int',false,false],['Gather Information','cha',false,false],['Handle Animal','cha',false,true],['Heal','wis',false,false],['Hide','dex',true,false],['Intimidate','cha',false,false],['Jump','str',true,false],['Knowledge (arcana)','int',false,true],['Knowledge (dungeoneering)','int',false,true],['Knowledge (local)','int',false,true],['Knowledge (nature)','int',false,true],['Knowledge (nobility)','int',false,true],['Knowledge (religion)','int',false,true],['Knowledge (the planes)','int',false,true],['Listen','wis',false,false],['Move Silently','dex',true,false],['Open Lock','dex',false,true],['Ride','dex',false,false],['Search','int',false,false],['Sense Motive','wis',false,false],['Sleight of Hand','dex',true,true],['Spellcraft','int',false,true],['Spot','wis',false,false],['Survival','wis',false,false],['Swim','str',true,false],['Tumble','dex',true,true],['Use Magic Device','cha',false,true],['Use Rope','dex',false,false]
];
const skillSeeds={vara:{Jump:[null,'+2 ranks at 21'],Climb:[null,'+1 rank at 21'],Swim:[null,'+1 rank at 21']},sylrissa:{Hide:[null,'+1 rank at 21'],'Move Silently':[null,'+1 rank at 21'],Jump:[null,'+1 rank at 21'],Search:[null,'Historical 19 ranks; current not verified'],'Disable Device':[null,'Historical 19 ranks; current not verified']},voss:{Concentration:[24,'Level-21 reconstructed ledger'],Spellcraft:[24,'Level-21 reconstructed ledger'],'Knowledge (religion)':[24,'Level-21 reconstructed ledger'],'Knowledge (arcana)':[23,'Level-21 reconstructed ledger'],Heal:[18,'Level-21 reconstructed ledger'],'Decipher Script':[12,'Level-21 reconstructed ledger'],'Knowledge (the planes)':[5,'Level-21 reconstructed ledger']}};
const rankValue=x=>Number.isFinite(n(x))?Math.min(99,Math.max(0,Math.round(n(x)*2)/2)):null;
const signed=x=>x===null||!Number.isFinite(x)?'—':(x>=0?'+':'')+x;
const abilityMod=x=>Number.isFinite(x)?Math.floor((x-10)/2):null;
function newSkillRows(id){return SKILL_LIST.map(([name,ability,armor,trained])=>({name,ability,armor,trained,ranks:skillSeeds[id][name]?.[0]??null,extra:0,note:skillSeeds[id][name]?.[1]||'Ranks not recovered'}));}
function newAttackOptions(id){return {enhance:id==='vara'||id==='sylrissa'?5:0,focus:id!=='voss',mastery:id==='vara',specialization:id==='vara',sniper:id==='sylrissa',rapid:false,splitting:false,flat:false,pbs:false,sneak:false,stance:false,bracers:false,vest:false,deadly:false,wrath:false,leading:false,armbands:false,unholy:false,goodTarget:false,power:0,attackExtra:0,damageExtra:0,rangePenalty:0,weapon:'greatsword',mode:'meleeTouch'};}
function skillMath(id,c,r){
 const score=abilityMod(c[r.ability]);const raging=id==='vara'&&c.defense?.rage;
 const ab=score===null?null:score+(raging&&['str','con'].includes(r.ability)?2:0);
 const acp=r.armor?-(Math.max(0,c.skillACP??(id==='sylrissa'?2:id==='voss'&&c.defense?.shield?4:3)))*(r.name==='Swim'?2:1):0;
 let items=0, itemNote=[];
 if(id==='vara'&&r.ability==='str'){items+=2;itemNote.push('Armbands +2');}
 if(id==='sylrissa'&&['Hide','Move Silently'].includes(r.name)){items+=2;itemNote.push('Vest +2');}
 if(id==='sylrissa'&&r.name==='Spot'){items+=2;itemNote.push('Headband +2');}
 if(id==='voss'&&r.name==='Concentration'){items+=5;itemNote.push('Tunic +5');}
 const restricted=raging&&(r.name==='Concentration'||(['cha','dex','int'].includes(r.ability)&&!['Balance','Escape Artist','Intimidate','Ride'].includes(r.name)));
 const total=r.ranks===null||ab===null||(r.trained&&r.ranks<1)||restricted?null:Math.floor(r.ranks)+ab+acp+items+r.extra;
 return {ab,acp,items,itemNote,total,restricted};
}
function liveAttack(id,c){
 const o=c.attackOptions,f=c.defense||{},bab=c.bab,epic=c.epic;
 const melee=id==='vara'||id==='voss'&&o.mode==='meleeTouch',ability=abilityMod(melee?c.str:c.dex);
 if(![bab,epic,ability].every(Number.isFinite))return null;
 const rage=id==='vara'&&f.rage?2:0,enh=id==='voss'?0:o.enhance, focus=o.focus&&id!=='voss'?(id==='vara'?2:1):0,mastery=id==='vara'&&o.mastery?2:0;
 const charge=melee&&f.charge?2:0,luck=f.recitation?(id==='voss'?3:2):0,wrath=melee&&o.wrath?3:0;
 const p=id==='vara'?Math.min(bab+epic,Math.max(0,o.power)):0, heedless=id==='vara'&&f.charge&&p>=5&&f.heedless>=5?Math.min(p,f.heedless):0;
 const pbs=id==='sylrissa'&&o.pbs?1:0,bracers=id==='sylrissa'&&o.flat&&o.bracers?2:0;
 const extra=o.attackExtra-(id==='sylrissa'?Math.max(0,o.rangePenalty):0)-p+heedless;
 const base=ability+rage+enh+focus+mastery+charge+luck+wrath+pbs+bracers+extra;
 const rapid=id==='sylrissa'&&o.rapid,haste=!!f.haste,extraAttack=haste||(melee&&o.wrath);
 let sequence=id==='voss'?[bab+epic+base+Number(haste)]:attackSequence(bab,epic,base,haste,rapid);
 if(extraAttack&&!haste&&id==='vara')sequence.splice(0,0,sequence[0]);
 if(id==='sylrissa'&&o.splitting)sequence=sequence.flatMap(v=>[v,v]);
 let damage=null,precision=0;
 if(id==='vara'){const d=Math.floor(1.5*(ability+rage))+enh+(o.specialization?4:0)+mastery+2*p+(p>=2&&o.armbands?2:0)+wrath+(c.level>=22&&f.charge&&o.leading?11:0)+o.damageExtra;damage='2d6'+(d<0?'-':'+')+Math.abs(d)+(o.unholy&&o.goodTarget?'+2d6':'');}
 if(id==='sylrissa'){const d=enh+(o.sniper?Math.floor(ability/2):0)+pbs+bracers+(o.flat&&o.pbs?ability:0)+o.damageExtra;precision=o.sneak?8+(o.stance?2:0)+(o.vest?1:0)+(o.deadly?1:0):0;damage='1d8'+(precision?'+'+precision+'d6':'')+(d<0?'-':'+')+Math.abs(d);}
 return {sequence,damage,precision,parts:[['Pre-epic BAB',bab],['Epic attack',epic],['Ability',ability],['Rage',rage],['Weapon enhancement',enh],['Weapon focus',focus],['Mastery',mastery],['Charge',charge],['Recitation',luck],['Wrath',wrath],['Point Blank Shot',pbs],['Bracers',bracers],['Haste',Number(haste)],['Rapid Shot',rapid?-2:0],['Power Attack net',-p+heedless],['Other / range',o.attackExtra-(id==='sylrissa'?Math.max(0,o.rangePenalty):0)]].filter(([,v])=>v!==0)};
}

const newScores={sylrissa:{str:13,cha:14},voss:{str:15,dex:11,cha:12}};
const VARA22_CLASS='Fighter 20 / Spiritual Lion Totem Barbarian 1 / Warblade 1';
function advanceVara22(c){
 if(c.level!==21||c.classes!==SEEDS.vara.classes)return false;
 c.level=22;c.classes=VARA22_CLASS;
 if(c.maxHP!==null){c.maxHP+=16;if(c.hp!==null&&c.hp>0)c.hp=Math.min(c.maxHP,c.hp+16);}
 for(const k of ['fort','ref','will'])if(Number.isFinite(c[k]))c[k]+=1;
 c.ap=16;c.maxAP=16;
 for(const name of ['Wall of Blades','White Raven Tactics','Mountain Hammer'])if(!c.moves.some(r=>r.name===name))c.moves.push({name,ready:true,spent:false});
 const note='2 Tarsakh 1376 DR: level 22 Warblade 1 confirmed; d12=10 +6 Con = 16 HP (286 at recorded baseline); +1 epic save each, epic attack unchanged, AP 16. Initiator level 11. Leading the Charge, Wall of Blades, White Raven Tactics, Mountain Hammer. Four skill points pending allocation; suggest +2 Jump / +2 Tumble subject to rank cap 25. XP field is last recorded or locally edited; exact new total not yet recovered (level-22 threshold 231,000).';
 c.notes=(c.notes+'\n'+note).slice(0,30000);
 c.features=c.features.replace('+42 HP at level 21','+44 HP at level 22')+'\nWarblade 1: Battle Clarity (+0 currently), Weapon Aptitude, IL 11, Wall of Blades, White Raven Tactics, Mountain Hammer; Leading the Charge. See Abilities and Resources.';
 c.tactics+='\nLeading the Charge +11 damage on qualifying charge attacks. Wall of Blades to defend against an incoming attack, White Raven Tactics to enable an ally, Mountain Hammer to bypass DR/hardness on a single grounded strike.';
 return true;
}
const SYL22_CLASS='Rogue 16 / Swordsage 5 / Hit-and-Run Fighter 1';
const SYL22_SKILLS=[['Hide',2],['Move Silently',2],['Tumble',2],['Listen',1],['Use Magic Device',1]];
function advanceSyl22(c){
 if(c.level!==21||!c.classes.includes('Rogue 16')||!c.classes.includes('Swordsage 4')||!c.classes.includes('Fighter 1'))return false;
 c.level=22;c.classes=SYL22_CLASS;
 if(c.maxHP!==null){c.maxHP+=10;if(c.hp!==null&&c.hp>0)c.hp=Math.min(c.maxHP,c.hp+10);}
 for(const k of ['fort','ref','will','initiative'])if(Number.isFinite(c[k]))c[k]+=1;
 c.ap=16;c.maxAP=16;
 if(!c.moves.some(m=>m.name==='Shadow Blink'))c.moves.push({name:'Shadow Blink',ready:false,spent:false});
 for(const [name,delta] of SYL22_SKILLS){const row=c.skillRows.find(x=>x.name===name);if(!row)continue;if(row.ranks!==null&&row.ranks+delta<=25){row.ranks+=delta;row.note=(row.note+'; level 22 +'+delta+' approved').slice(0,500);}else row.note=(row.note+'; level 22 +'+delta+' approved, reconcile prior rank / cap before entering total').slice(0,500);}
 c.features=c.features.replace(/Pearl of Black Doubt/g,'Child of Shadow').replace(/Swordsage 4: 9 maneuvers known, 5 readied, 2 stances/g,'Swordsage 5: 10 maneuvers known, 6 readied, 3 stance selections')+'\nSwordsage 5: Quick to Act +2; IL 13; Shadow Blink learned. Prior stances: Child of Shadow and Assassin’s Stance. Pearl of Black Doubt selected at 22, prerequisite pending (one Diamond Mind maneuver; none recovered).';
 c.tactics=c.tactics.replace(/Pearl of Black Doubt for defence/g,'Child of Shadow for mobile defence')+'\nShadow Blink: swift 50-ft teleport, leaving full attack available. Pearl of Black Doubt selected, pending prerequisite correction.';
 c.notes=(c.notes+'\n2 Tarsakh 1376 DR: Swordsage 5, d8=6 +4 Con = 10 HP (194 baseline), +1 epic saves, Quick to Act +1, AP 16. XP exact total not recovered; level 22 threshold 231,000. Child of Shadow and Assassin’s Stance are prior confirmed selections. Pearl of Black Doubt selected, pending one Diamond Mind maneuver prerequisite. Shadow Blink learned; nine prior maneuver records retained. Bonesplitting Strike has two Stone Dragon prerequisites not recovered; do not silently change prior selections. Nine approved skill points: Hide +2, Move Silently +2, Tumble +2, Listen +1, UMD +1 (2 points). Unknown previous ranks remain unknown.').slice(0,30000);
 return true;
}
const VOSS22_CLASS='Cleric 15 / Paragnostic Apostle 5 / Hierophant 2';
const VOSS22_SKILLS=['Concentration','Spellcraft','Knowledge (religion)','Knowledge (arcana)','Heal'];
function advanceVoss22(c){
 if(c.level!==21||!c.classes.includes('Cleric 15')||!c.classes.includes('Paragnostic Apostle 5')||!c.classes.includes('Hierophant 1'))return false;
 c.level=22;c.classes=VOSS22_CLASS;
 if(c.maxHP!==null){c.maxHP+=10;if(c.hp!==null&&c.hp>0)c.hp=Math.min(c.maxHP,c.hp+10);}
 for(const k of ['fort','ref','will'])if(Number.isFinite(c[k]))c[k]+=1;
 c.ap=16;c.maxAP=16;
 for(const name of VOSS22_SKILLS){const row=c.skillRows.find(x=>x.name===name);if(!row)continue;if(row.ranks!==null&&row.ranks+1<=25){row.ranks++;row.note=(row.note+'; level 22 +1 approved').slice(0,500);}else row.note=(row.note+'; level 22 +1 allocated, reconcile previous rank / cap before entering total').slice(0,500);}
 c.features=c.features.replace(/caster level 21 including Hierophant/g,'caster level 22 including Hierophant 2').replace(/at 30 ft \(ranged touch/g,'at 60 ft (ranged touch')+'\nHierophant 2: Divine Reach selected again, extends touch spell delivery to 60 ft. Base caster level 22, Bead of Karma 26 while active, ordinary spell progression 20. No extra ordinary slots or rebuking advancement.';
 c.tactics+='\nDivine Reach now covers 60 ft; deliver eligible touch-range spells to allies without entering melee.';
 c.notes=(c.notes+'\n2 Tarsakh 1376 DR: Hierophant 2 confirmed, second Divine Reach selection. d8 average 4.5 rounded up to 5 +5 Con = 10 HP (214 baseline). +1 epic saves; epic attack unchanged; 16 AP. Five skill points allocated to Concentration, Spellcraft, Knowledge (religion), Knowledge (arcana), Heal (+1 each), subject to previous rank verification. Exact XP total unrecovered; level 22 threshold 231,000. Wisdom and tome status unchanged pending verification.').slice(0,30000);
 return true;
}
const empty=(latest=true)=>{const characters=clone(SEEDS);for(const [id,vals] of Object.entries(newScores))Object.assign(characters[id],vals);for(const [id,c] of Object.entries(characters)){c.defense={weapon:id==='vara',shield:id==='voss',wisdom:id==='sylrissa'};c.skillRows=newSkillRows(id);c.skillACP=null;c.attackOptions=newAttackOptions(id);for(const [k,v] of Object.entries(id==='vara'?{fort:24,ref:13,will:14}:id==='voss'?{fort:20,ref:12,will:27,bab:13}:{}))if(c[k]==null)c[k]=v;}if(latest){advanceVara22(characters.vara);advanceSyl22(characters.sylrissa);advanceVoss22(characters.voss);}return {version:1,auditRevision:7,active:'malzareth',characters};};
function normalize(raw){
 if(!raw||raw.version!==1||!raw.characters||typeof raw.characters!=='object')throw Error('Invalid party backup');
 const next=empty(false);
 for(const id of Object.keys(SEEDS)){
  const src=raw.characters[id]; if(!src||typeof src!=='object'||Array.isArray(src))throw Error('Missing character '+id);
  const base=next.characters[id];
  for(const k of Object.keys(base)){
   if(!own(src,k))continue;
   if(Array.isArray(base[k])){
    if(!Array.isArray(src[k])||src[k].length>500)throw Error('Invalid list '+k);
    if(k==='skillRows'){const rows=new Map(base[k].map(x=>[x.name,x]));for(const r of src[k]){if(!r||typeof r.name!=='string')continue;const name=r.name.slice(0,100),old=rows.get(name);rows.set(name,{name,ability:old?.ability??(['str','dex','con','int','wis','cha'].includes(r.ability)?r.ability:'int'),armor:old?.armor??!!r.armor,trained:old?.trained??!!r.trained,ranks:rankValue(r.ranks),extra:bounded(n(r.extra),-100,100)??0,note:String(r.note??'').slice(0,500)});}base[k]=[...rows.values()];}
    else if(k==='resources'||k==='spells')base[k]=src[k].map(r=>{if(!r||typeof r.name!=='string')throw Error('Invalid resource');return {name:r.name.slice(0,200),max:bounded(n(r.max),0,999),left:bounded(n(r.left),0,999),...(k==='spells'?{level:bounded(n(r.level),0,9),notes:String(r.notes??'').slice(0,1000),slot:['ordinary','domain'].includes(r.slot)?r.slot:'unclassified'}:{})};});
    else if(k==='moves')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),ready:!!r.ready,spent:!!r.spent}));
    else if(k==='lingering')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),damage:bounded(n(r.damage),0,100000)??0}));
   }else if(typeof base[k]==='number'||base[k]===null)base[k]=bounded(n(src[k]),-100000,1000000000);
   else if(typeof src[k]==='string')base[k]=src[k].slice(0,30000);
  }
  if(src.attackOptions&&typeof src.attackOptions==='object'){for(const [k,v] of Object.entries(base.attackOptions)){const x=src.attackOptions[k];if(typeof v==='boolean'&&typeof x==='boolean')base.attackOptions[k]=x;else if(typeof v==='number'&&Number.isFinite(x))base.attackOptions[k]=bounded(x,-100,100);else if(k==='mode'&&['meleeTouch','rangedTouch'].includes(x))base.attackOptions[k]=x;}}
  if(src.defense&&typeof src.defense==='object'){for(const k of ['weapon','shield','wisdom','haste','recitation','rage','charge','barkskin','foresight','trap','pearl','conviction','resistance','denied'])if(typeof src.defense[k]==='boolean')base.defense[k]=src.defense[k];for(const k of ['misses','heedless','acAdjust','touchAdjust','flatAdjust','fortAdjust','refAdjust','willAdjust'])if(Number.isFinite(src.defense[k]))base.defense[k]=bounded(src.defense[k],-100,100);}
 }
 if((raw.auditRevision||0)<3)for(const [id,vals] of Object.entries(newScores))for(const [k,v] of Object.entries(vals))if(next.characters[id][k]==null)next.characters[id][k]=v;
 if((raw.auditRevision||0)<2){for(const [id,vals] of Object.entries({vara:{fort:24,ref:13,will:14},voss:{fort:20,ref:12,will:27,bab:13}})){for(const [key,val] of Object.entries(vals))if(next.characters[id][key]===null)next.characters[id][key]=val;}const vest=next.characters.vara.resources.find(x=>x.name==='Winged Vest activation');if(vest&&vest.max===1){vest.left=vest.left===null?null:Math.min(5,vest.left+4);vest.max=5;}}if((raw.auditRevision||0)<5)advanceVara22(next.characters.vara);if((raw.auditRevision||0)<6)advanceSyl22(next.characters.sylrissa);if((raw.auditRevision||0)<7)advanceVoss22(next.characters.voss);next.active=validId(raw.active)?raw.active:'malzareth';
 return next;
}
let state=empty(), loadError='';
try{const old=localStorage.getItem(KEY);if(old){const parsed=JSON.parse(old);state=normalize(parsed);if((parsed.auditRevision||0)<7){if(!localStorage.getItem(KEY+'-pre-voss22-v7'))localStorage.setItem(KEY+'-pre-voss22-v7',old);localStorage.setItem(KEY,JSON.stringify(state));}}}catch(e){loadError='Saved companion data could not be read. It has not been overwritten. Export or recover it before editing.';}
const app=document.querySelector('#app'); if(!app)return;
const bar=document.createElement('section');bar.className='party-switcher';bar.setAttribute('aria-label','Select character');
bar.innerHTML='<label for="party-select">Character</label> <select id="party-select"><option value="malzareth">Malzareth Vhane</option>'+Object.keys(SEEDS).map(id=>'<option value="'+id+'">'+safe(SEEDS[id].name)+'</option>').join('')+'</select><button type="button" class="btn btn-small btn-outline" id="party-export">Export companion backup</button><button type="button" class="btn btn-small btn-outline" id="party-import">Import companion backup</button><input type="file" id="party-file" accept=".json,application/json" hidden><p class="muted small" id="party-status" role="status" aria-live="polite"></p>';
app.querySelector('.site-header').after(bar);
const panel=document.createElement('section');panel.id='party-folio';panel.hidden=true;bar.after(panel);
const style=document.createElement('style');style.textContent=
'.party-switcher{display:flex;gap:.55rem;align-items:center;flex-wrap:wrap;margin:1rem 0;padding:.75rem;border:1px solid #776a85;border-radius:.7rem}.party-switcher label{font-weight:700}.party-switcher select{max-width:100%;min-width:12rem}.party-switcher p{flex-basis:100%;margin:0}.party-mode #app>.hero,.party-mode #app>.status-grid,.party-mode #app>.main-grid,.party-mode #header-add,.party-mode .mobile-nav{display:none!important}#party-folio[hidden]{display:none!important}#party-folio{padding-bottom:2rem}#party-folio .party-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(125px,1fr));gap:.7rem}#party-folio label{display:flex;flex-direction:column;gap:.25rem;font-size:.86rem}#party-folio input,#party-folio textarea{width:100%;box-sizing:border-box}#party-folio textarea{min-height:8rem;resize:vertical}#party-folio .party-box{border:1px solid #776a85;border-radius:.7rem;padding:1rem;margin:.8rem 0}#party-folio .party-row{display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;margin:.5rem 0}#party-folio .party-row label{flex:1;min-width:80px}#party-folio .party-row button{flex-shrink:0}#party-folio .party-roll{white-space:pre-wrap;min-height:2rem;font-weight:600}#party-folio details>summary{cursor:pointer;font-weight:700}#party-folio button{min-height:36px}#party-folio .party-note{color:inherit;opacity:.85;font-size:.88rem}';
style.textContent+=' .party-native-notice{border:1px solid #776a85;padding:.75rem;margin:.75rem 0;border-radius:.6rem}.party-native-notice[hidden]{display:none!important} .party-tabs{display:flex;flex-wrap:wrap;gap:.45rem;margin:1rem 0}.party-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.5rem;margin:1rem 0}.party-summary>div{padding:.7rem;border:1px solid #776a85;border-radius:.55rem;min-width:0}.party-summary small,.party-summary strong{display:block;overflow-wrap:anywhere}.party-reference{border-bottom:1px solid #776a8560;padding:.7rem 0}.party-reference p{margin:.45rem 0;line-height:1.55}.party-reference summary{cursor:pointer}.party-box[hidden]{display:none!important}@media(max-width:480px){.party-summary{grid-template-columns:repeat(2,minmax(0,1fr))}}';style.textContent+=' .party-stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(108px,1fr));gap:.6rem;margin:.8rem 0}.party-stat-grid>div{border:1px solid #776a85;padding:.65rem;border-radius:.5rem;display:flex;flex-direction:column;gap:.25rem}.party-stat-grid strong{font-size:1.25rem}.party-stat-grid span{font-size:.8rem}.party-check{flex-direction:row!important;align-items:center}.party-check input{width:auto!important}.party-line{display:flex;justify-content:space-between;padding:.25rem 0}.party-skill[hidden]{display:none!important}.party-skill summary strong{float:right}.party-roll-global{position:sticky;top:0;z-index:3;background:#191622}.party-roll-global .party-roll{font-size:.88rem;max-height:10rem;overflow:auto}';document.head.append(style);
const q=s=>bar.querySelector(s), status=t=>q('#party-status').textContent=t;
function save(){if(loadError){status(loadError);return false;}try{localStorage.setItem(KEY,JSON.stringify(state));status('Companion records saved on this device.');return true;}catch(e){status('Save failed: '+e.message+'. Export a backup before closing.');return false;}}
const select=q('#party-select');select.value=state.active;
const rollDie=d=>{const a=new Uint32Array(1);const limit=Math.floor(4294967296/d)*d;do{crypto.getRandomValues(a);}while(a[0]>=limit);return 1+a[0]%d;};
function rollExpr(expr){const s=String(expr).replace(/\s+/g,'').toLowerCase();if(!/^[+-]?(?:\d*d\d+|\d+)(?:[+-](?:\d*d\d+|\d+))*$/.test(s))throw Error('Use e.g. 2d6+21 or 1d8+12d6+21');let total=0,parts=[];for(const term of s.match(/[+-]?(?:\d*d\d+|\d+)/g)){const sign=term[0]==='-'?-1:1;const t=term.replace(/^[+-]/,'');if(t.includes('d')){const [a,b]=t.split('d'),count=Number(a||1),sides=Number(b);if(count<1||count>100||sides<2||sides>10000)throw Error('Dice outside supported range');const dice=Array.from({length:count},()=>rollDie(sides));total+=sign*dice.reduce((x,y)=>x+y,0);parts.push((sign<0?'-':'+')+t+' ['+dice.join(', ')+']');}else{const value=Number(t);if(value>100000)throw Error('Modifier too large');total+=sign*value;parts.push((sign<0?'-':'+')+t);}}return total+' = '+parts.join(' ');}
const numberFields=[['level','Level'],['xp','XP'],['maxHP','Max HP'],['hp','Current HP'],['tempHP','Temporary HP'],['ap','Action points left'],['maxAP','Action point maximum'],['str','Strength'],['dex','Dexterity'],['con','Constitution'],['int','Intelligence'],['wis','Wisdom'],['cha','Charisma'],['bab','Pre-epic BAB'],['epic','Epic attack bonus'],['initiative','Initiative modifier'],['ac','AC'],['touch','Touch AC'],['flat','Flat-footed AC'],['fort','Fortitude'],['ref','Reflex'],['will','Will'],['attack','Attack modifier (edit for buffs)'],['speed','Speed (ft)']];
const numInput=(key,label,value)=>'<label>'+safe(label)+'<input type="number" step="1" data-field="'+key+'" value="'+safe(value)+'" placeholder="Unverified"></label>';
const textInput=(key,label,value)=>'<label>'+safe(label)+'<input type="text" data-field="'+key+'" value="'+safe(value)+'"></label>';
const textarea=(key,label,value)=>'<label>'+safe(label)+'<textarea data-field="'+key+'">'+safe(value)+'</textarea></label>';
const check=(name,mod)=>'<button type="button" class="btn btn-small btn-outline" data-roll="'+safe(name)+'" data-mod="'+safe(mod??'')+'" '+(mod==null?'disabled title="Enter the modifier first"':'')+'>'+safe(name)+(mod==null?' ?':' '+(mod>=0?'+':'')+mod)+'</button>';
// SRD cleric 20 table; domain slots are separate, not interchangeable with ordinary slots.
const clericCapacity=wis=>{const mod=Math.floor((wis-10)/2);return [6,5,5,5,5,5,4,4,4,4].map((base,level)=>{const bonus=level===0||mod<level?0:1+Math.floor((mod-level)/4);return {level,base,bonus,domain:level?1:0,ordinary:base+bonus,dc:10+level+mod};});};
const directSources={'Cleric spellcasting':'https://www.d20srd.org/srd/classes/cleric.htm','Hierophant — Divine Reach':'https://www.d20srd.org/srd/prestigeClasses/hierophant.htm#divineReach','Epic Spellcasting':'https://www.d20srd.org/srd/epic/feats.htm#epicSpellcasting','Superior Initiative':'https://www.d20srd.org/srd/epic/feats.htm#superiorInitiative','Lingering Damage':'https://www.d20srd.org/srd/epic/feats.htm#lingeringDamage'};
// Read-only conditional estimates: never replace recorded AC or attack modifiers.
function armorEstimate(id,c){
 const mod=x=>Number.isFinite(x)?Math.floor((x-10)/2):null;
 const dex=mod(c.dex),wis=mod(c.wis);
 if(dex===null)return null;
 if(id==='vara'){const d=Math.min(dex,3);return {normal:10+13+d+5,touch:10+d+5,denied:10+13+Math.min(d,0)+5,note:'Assumes recorded +5 mithral full plate and +5 protection ring, Medium size, no other modifiers. Add +1 when Weapon Supremacy applies; its exact touch/flat-footed interaction needs PHB II verification.'};}
 if(id==='sylrissa'){if(wis===null)return null;const d=Math.min(dex,8),w=Math.max(0,wis);return {normal:10+8+d+5+w,touch:10+d+5+w,denied:10+8+Math.min(d,0)+5+w,note:'Assumes Celestial Armor, +5 protection ring, light load, no shield, Swordsage Wisdom AC feature applicable. Denied-Dex value is not ordinary flat-footed AC: Uncanny Dodge normally retains Dexterity.'};}
 return null;
}
function defenseTotals(id,c){
 const f=c.defense||{}, dex=Number.isFinite(c.dex)?Math.floor((c.dex-10)/2):null;
 const d=dex===null?null:Math.min(dex,id==='sylrissa'?8:3), w=id==='sylrissa'&&f.wisdom?Math.max(0,abilityMod(c.wis)??0):0;
 const armor=id==='sylrissa'?8:13, shield=id==='voss'&&f.shield?7:0, weapon=id==='vara'&&f.weapon?1:0;
 const dodge=(f.haste?1:0)+(id==='sylrissa'&&f.trap?5:0)+(id==='sylrissa'&&f.pearl&&c.pearlPrerequisite===true?2*Math.max(0,f.misses||0):0);
 const luck=f.recitation?(id==='voss'?3:2):0, insight=f.foresight?2:0, natural=f.barkskin?5:0;
 const power=Math.min(Math.max(0,(c.bab??20)+(c.epic??1)),Math.max(0,c.attackOptions?.power??0));const penalty=(id==='vara'&&f.rage?-2:0)+(f.charge?-2-(id==='vara'&&power>=5&&f.heedless>=5?Math.min(power,f.heedless):0):0);
 const core=15+w+weapon, flatDex=id==='sylrissa'&&!f.denied?d:Math.min(d,0);
 const ac=d===null?null:(c.ac??(core+armor+shield+d)) + (f.denied?Math.min(d,0)-d:0)+(f.denied?0:dodge)+luck+insight+natural+penalty+(f.acAdjust||0);
 const touch=d===null?null:(c.touch??(core+d))+(f.denied?Math.min(d,0)-d:0)+(f.denied?0:dodge)+luck+insight+penalty+(f.touchAdjust||0);
 const flat=d===null?null:(c.flat??(core+armor+shield+(id==='sylrissa'?d:Math.min(d,0))))+(id==='sylrissa'&&f.denied?Math.min(d,0)-d:0)+(id==='sylrissa'&&!f.denied?dodge:0)+luck+insight+natural+penalty+(f.flatAdjust||0);
 const saves=['fort','ref','will'].map(k=>c[k]==null?null:c[k]+luck+(f.resistance?1:0)+Math.max(f.conviction?5:0,k==='will'&&id==='vara'&&f.rage?2:0)+(k==='fort'&&id==='vara'&&f.rage?2:0)+(k==='ref'&&f.haste?1:0)+(k==='ref'&&f.foresight?2:0)+(k==='ref'&&id==='sylrissa'&&f.trap?5:0)+(f[k+'Adjust']||0));
 return {ac,touch,flat,saves};
}
function defenseHTML(id,c){
 const f=c.defense||{}, t=defenseTotals(id,c);
 const toggle=(k,label)=>'<label style="display:flex;flex-direction:row;align-items:center"><input style="width:auto" type="checkbox" data-defense="'+k+'" '+(f[k]?'checked':'')+'>'+safe(label)+'</label>';
 const input=(k,label)=>'<label>'+safe(label)+'<input type="number" data-defense="'+k+'" value="'+safe(f[k]||0)+'"></label>';
 return '<p><strong>AC '+safe(t.ac??'?')+' · Touch '+safe(t.touch??'?')+' · Flat-footed '+safe(t.flat??'?')+'</strong></p><p><strong>Fort '+safe(t.saves[0]??'?')+' · Ref '+safe(t.saves[1]??'?')+' · Will '+safe(t.saves[2]??'?')+'</strong></p><p class="party-note">Calculated from recorded gear unless manual base AC fields are entered above. Manual bases must already include permanent equipment/feature bonuses; equipment toggles only affect calculated bases. Voss heavy shield assumed; saves use historical totals with +5 resistance assumed. Custom adjustments are net non-overlapping bonuses or penalties.</p><div class="party-grid">'+(id==='vara'?toggle('weapon','Weapon Supremacy')+toggle('rage','Rage')+input('heedless','Heedless Charge (5–21)'):id==='sylrissa'?toggle('wisdom','Swordsage Wisdom (light load)')+(c.pearlPrerequisite===true?toggle('pearl','Pearl of Black Doubt'):'<p class="party-note">Pearl of Black Doubt selected; AC bonus disabled until Diamond Mind prerequisite is verified.</p>')+input('misses','Missed melee attacks')+toggle('trap','Trap attack'):toggle('shield','Heavy shield active (assumed)'))+toggle('haste','Haste')+toggle('recitation','Recitation')+toggle('charge','Charging')+toggle('barkskin','Barkskin +5')+toggle('foresight','Foresight')+toggle('denied','Denied Dexterity')+toggle('conviction','Mass Conviction +5')+toggle('resistance','Superior Resistance (+1 over cloak)')+'</div><div class="party-grid">'+['ac','touch','flat','fort','ref','will'].map(k=>input(k+'Adjust',k+' net adjustment')).join('')+'</div><button type="button" class="btn btn-outline" data-act="resetdefense">Reset combat modifiers</button>';
}
function attackSequence(bab,epic,modifier,haste,rapid){
 if(![bab,epic,modifier].every(Number.isFinite)||bab<0||bab>20)return [];
 const top=bab+epic+modifier+(haste?1:0)-(rapid?2:0),count=Math.min(4,Math.max(1,Math.ceil(bab/5)));
 return [...Array(1+Number(haste)+Number(rapid)).fill(top),...Array.from({length:count-1},(_,i)=>top-5*(i+1))];
}

function weaponAudit(id,c){
 const ability=id==='vara'?c.str:c.dex;
 if(![ability,c.bab,c.epic].every(Number.isFinite))return null;
 const mod=Math.floor((ability-10)/2);
 if(id==='vara'){
  const base=c.bab+c.epic+mod+5+2+2;
  const damage=Math.floor(1.5*mod)+5+4+2;
  return {attack:base,damage,sequence:attackSequence(c.bab,c.epic,mod+9,false,false),note:'Conditional +5 greatsword, Weapon Focus and Greater Weapon Focus (+2 attack), Weapon Specialization and Greater Weapon Specialization (+4 damage), slashing Melee Weapon Mastery (+2 attack/damage). No rage, charge, Power Attack, Haste or other buffs. Weapon identity and supplementary feat details still require original-book verification.'};
 }
 if(id==='sylrissa'){
  const base=c.bab+c.epic+mod+5+1;
  const damage=5+Math.floor(mod/2);
  return {attack:base,damage,sequence:attackSequence(c.bab,c.epic,mod+6,true,true),note:'Conditional +5 light crossbow, Weapon Focus (+1, inferred prerequisite), Crossbow Sniper (half Dex to damage). Sequence includes Haste and Rapid Shot; excludes Point Blank Shot, Bracers of Murder, Hit-and-Run, Recitation and precision dice. Splitting delivery and supplementary rules remain unverified.'};
 }
 return null;
}

function attackHTML(id,c){
 const o=c.attackOptions,x=liveAttack(id,c),f=c.defense;
 const toggle=(k,label)=>'<label class="party-check"><input type="checkbox" data-attackopt="'+k+'" '+(o[k]?'checked':'')+'>'+safe(label)+'</label>';
 const input=(k,label,min=-100,max=100)=>'<label>'+safe(label)+'<input type="number" min="'+min+'" max="'+max+'" data-attackopt="'+k+'" value="'+safe(o[k])+'"></label>';
 const opts=id==='vara'?input('enhance','Weapon enhancement',0,10)+toggle('focus','Focus + greater focus')+toggle('mastery','Slashing mastery')+toggle('specialization','Specialization + greater')+input('power','Power Attack',0,(c.bab??20)+(c.epic??1))+toggle('armbands','Armbands of Might')+toggle('wrath','Righteous Wrath')+(c.level>=22?toggle('leading','Leading the Charge (active, +11 charge damage)'):'')+toggle('unholy','Unholy weapon')+toggle('goodTarget','Good-aligned target'):id==='sylrissa'?input('enhance','Weapon enhancement',0,10)+toggle('focus','Weapon Focus')+toggle('sniper','Crossbow Sniper')+toggle('rapid','Rapid Shot')+toggle('splitting','Splitting (confirm delivery)')+toggle('pbs','Within 30 ft / Point Blank Shot')+toggle('flat','Target flat-footed')+toggle('bracers','Bracers of Murder')+toggle('sneak','Qualifying sneak attack')+toggle('stance','Assassin’s Stance')+toggle('vest','Rogue’s Vest')+toggle('deadly','Deadly Precision')+input('rangePenalty','Range penalty (positive)',0,100):'<label>Touch spell attack<select data-attackopt="mode"><option value="meleeTouch" '+(o.mode==='meleeTouch'?'selected':'')+'>Melee touch</option><option value="rangedTouch" '+(o.mode==='rangedTouch'?'selected':'')+'>Ranged touch / Divine Reach ('+(c.level>=22&&c.classes.includes('Hierophant 2')?60:30)+' ft)</option></select></label>';
 return '<p class="party-note">Conditional calculator; original saved attack and damage are not replaced. Weapon assumptions are editable. Haste, Rage, charge, Recitation and Heedless Charge use Defences settings. Select only effects that actually apply. Full-attack rolls do not resolve hit, damage, criticals or DR automatically.</p><div class="party-grid">'+opts+input('attackExtra','Net other attack')+input('damageExtra','Net other damage')+'</div><p>Active shared conditions: '+safe(Object.keys(f).filter(k=>['haste','rage','charge','recitation'].includes(k)&&f[k]).join(', ')||'none')+'</p>'+(id==='vara'&&f.charge&&f.heedless>=5&&f.heedless!==o.power?'<p class="party-note">Heedless amount and Power Attack differ; set both to the actual penalty. Leap Attack and Momentum Swing are not automatically applied.</p>':'')+(x?'<div class="party-stat-grid">'+x.sequence.map((v,i)=>'<div><small>Attack '+(i+1)+'</small><strong>'+signed(v)+'</strong>'+check('Roll '+(i+1),v)+'</div>').join('')+'</div><div class="party-row"><button type="button" class="btn btn-accent" data-act="fullattack">Roll '+(id==='voss'?'touch attack':'full attack')+'</button>'+(x.damage?'<button type="button" class="btn btn-outline" data-act="profiledamage">Roll damage: '+safe(x.damage)+'</button>':'')+'<button type="button" class="btn btn-outline" data-act="resetattack">Reset profile</button></div><details><summary>Attack modifier breakdown</summary>'+x.parts.map(([k,v])=>'<div class="party-line">'+safe(k)+' <strong>'+signed(v)+'</strong></div>').join('')+'</details>':'<p>Missing BAB or ability score; enter a verified value in Combat.</p>')+'<p class="party-note">'+(id==='sylrissa'?'Sneak attack eligibility is manual; Hit-and-Run requires flat-footed within 30 ft. Damage expression includes selected precision dice; Lingering Damage uses actual core dice only.':id==='vara'?'Charge sequence represents Pounce if a legal charge is possible. Additional gore attack, weapon criticals, Leap Attack and situational damage remain manual.':'Divine Reach touch spells use ranged touch where an attack is required; willing allies may not require an attack.')+'</p><p><a href="https://www.d20srd.org/srd/combat/combatStatistics.htm" target="_blank" rel="noopener">SRD attack rules</a> · <a href="https://www.d20srd.org/srd/epic/basics.htm" target="_blank" rel="noopener">Epic progression</a></p>';
}
function skillsHTML(id,c){
 return '<p class="party-note">Rank totals remain blank until recovered. Half-ranks are stored but only whole ranks contribute to skill checks. Set zero only when confirmed; trained-only skills cannot be rolled untrained. Armor check penalty and item effects are conditional on recorded gear; extra is a net adjustment for racial bonuses, synergy, speed and other effects. No automatic +3 class-skill bonus in 3.5.</p><div class="party-row">'+numInput('skillACP','Armor check penalty magnitude (blank = estimate)',c.skillACP)+'<label>Filter skills<input id="party-skill-filter" type="search" placeholder="Search skills"></label></div><div class="party-skill-list">'+c.skillRows.map((r,i)=>{const m=skillMath(id,c,r);return '<details class="party-reference party-skill" data-skill-name="'+safe(r.name.toLowerCase())+'"><summary>'+safe(r.name)+' <strong>'+signed(m.total)+'</strong> '+(m.total===null?'<span class="muted small">'+(m.restricted?'Rage restricted':r.ranks===null?'Ranks unknown':'Unavailable')+'</span>':'')+'</summary><div class="party-grid"><label>Ranks<input type="number" min="0" max="99" step="0.5" data-skillrow="'+i+'" data-skillkey="ranks" value="'+safe(r.ranks)+'" placeholder="Unknown"></label><label>Other net bonus<input type="number" data-skillrow="'+i+'" data-skillkey="extra" value="'+safe(r.extra)+'"></label><div><small>Ability ('+safe(r.ability.toUpperCase())+')</small><strong>'+signed(m.ab)+'</strong></div><div><small>Armor / item</small><strong>'+signed(m.acp)+' / '+signed(m.items)+'</strong></div></div><p class="muted small">'+safe(m.itemNote.join(' · ')||'No automatic item bonus')+(r.trained?' · Trained only':'')+'</p><label>Rank source / notes<input data-skillrow="'+i+'" data-skillkey="note" value="'+safe(r.note)+'"></label>'+check(r.name,m.total)+'</details>';}).join('')+'</div><p><a href="https://www.d20srd.org/srd/skills/usingSkills.htm" target="_blank" rel="noopener">SRD skill checks</a> · <a href="https://www.d20srd.org/srd/skills/skillDescriptions.htm" target="_blank" rel="noopener">Skill descriptions</a></p>';
}

const activeTabs={vara:'Combat',sylrissa:'Combat',voss:'Combat'};

function preparationAudit(spells,wis){
 const capacity=Number.isFinite(wis)?clericCapacity(wis):[];
 const totals=Array.from({length:10},(_,level)=>({level,ordinary:0,domain:0,unclassified:0}));
 const warnings=[];
 for(const r of spells){
  const name=r.name||'Unnamed spell';
  if(!Number.isInteger(r.level)||r.level<0||r.level>9||!Number.isInteger(r.max)||r.max<0){warnings.push(name+': missing or invalid level/prepared count');continue;}
  const slot=['ordinary','domain'].includes(r.slot)?r.slot:'unclassified';
  totals[r.level][slot]+=r.max;
  if(r.left==null||r.left<0||r.left>r.max)warnings.push(name+': remaining count needs review');
  if(slot==='unclassified')warnings.push(name+': classify slot type');
  if(slot==='domain'&&r.level===0)warnings.push(name+': no level-zero domain slot');
 }
 for(const t of totals){const cap=capacity[t.level];if(cap&&t.ordinary>cap.ordinary)warnings.push('Level '+t.level+': ordinary preparations exceed capacity');if(t.domain>(t.level?1:0))warnings.push('Level '+t.level+': domain preparations exceed capacity');}
 return {totals,warnings};
}

const lastRoll={};
function render(){
 const id=state.active;document.body.classList.toggle('party-mode',id!=='malzareth');panel.hidden=id==='malzareth';if(panel.hidden)return;
 const c=state.characters[id];const dt=defenseTotals(id,c);const resourceRows=(arr,kind)=>arr.map((r,i)=>'<div class="party-row"><label>Name<input data-list="'+kind+'" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label>'+(kind==='spells'?'<label>Level<input type="number" min="0" max="9" data-list="'+kind+'" data-i="'+i+'" data-key="level" value="'+safe(r.level)+'"></label><label>Slot<select data-list="'+kind+'" data-i="'+i+'" data-key="slot">'+['unclassified','ordinary','domain'].map(v=>'<option value="'+v+'" '+(v===(r.slot||'unclassified')?'selected':'')+'>'+v+'</option>').join('')+'</select></label>':'')+'<label>Remaining<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="left" value="'+safe(r.left)+'" placeholder="?"></label><label>Maximum<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="max" value="'+safe(r.max)+'" placeholder="?"></label><button type="button" class="btn btn-small btn-outline" data-act="spend" data-list="'+kind+'" data-i="'+i+'">Use</button><button type="button" class="btn btn-small btn-outline" data-act="remove" data-list="'+kind+'" data-i="'+i+'">Remove</button>'+(kind==='spells'?'<label>Notes<input data-list="'+kind+'" data-i="'+i+'" data-key="notes" value="'+safe(r.notes)+'"></label>':'')+'</div>').join('');
 panel.innerHTML='<div class="section-header"><div><p class="eyebrow">THE ASHEN CROWN · COMPANION FOLIO</p><h2>'+safe(c.name)+'</h2><p class="muted">'+safe(c.classes)+' · '+safe(c.role)+'</p></div></div><p class="party-note">Independent local save. Blank numbers are unknown, not zero. Edits save on change; export a companion backup separately from Malzareth’s original backup.</p>'+
 '<div class="party-box"><h3>Vitals &amp; combat</h3><div class="party-grid">'+numberFields.filter(([k])=>!['ac','touch','flat','fort','ref','will','attack'].includes(k)).map(([k,l])=>numInput(k,l,c[k])).join('')+'</div><div class="party-row"><button type="button" class="btn btn-outline" data-act="damage">Apply damage</button><button type="button" class="btn btn-outline" data-act="heal">Heal</button><input type="number" min="0" id="party-hp-change" placeholder="HP amount" aria-label="HP amount" style="max-width:110px"><button type="button" class="btn btn-outline" data-act="ap">Spend action point</button><button type="button" class="btn btn-outline" data-act="rest">Reset daily resources</button></div></div>'+
 '<div class="party-box"><h3>Dice &amp; attacks</h3><div class="party-row">'+check('Initiative',c.initiative)+check('Fortitude',dt.saves[0])+check('Reflex',dt.saves[1])+check('Will',dt.saves[2])+check('Recorded attack',c.attack)+'<button type="button" class="btn btn-outline" data-act="actiondice">Action dice (3d6 highest)</button></div><div class="party-row">'+textInput('damage','Damage expression',c.damage)+'<button type="button" class="btn btn-accent" data-act="weapondamage">Roll damage</button></div><div class="party-row"><label>Custom check name<input id="party-check-name" placeholder="e.g. Hide or Spellcraft"></label><label>Modifier<input id="party-check-mod" type="number" step="1" placeholder="Enter modifier"></label><button type="button" class="btn btn-outline" data-act="custom">Roll d20</button><label>Any dice expression<input id="party-dice" placeholder="2d6+4"></label><button type="button" class="btn btn-outline" data-act="dice">Roll</button></div><div class="party-roll" role="status" aria-live="polite" id="party-roll-result"></div></div>'+
 '<div class="party-box"><h3>Daily resources</h3>'+resourceRows(c.resources,'resources')+'<button type="button" class="btn btn-outline" data-act="add" data-list="resources">Add resource</button></div>'+
 (id==='sylrissa'?'<div class="party-box"><h3>Maneuvers &amp; lingering damage</h3><p class="party-note">Choose the actual readied maneuvers before combat (maximum per class record to verify). Adaptive Style recovery follows its normal action requirements.</p>'+c.moves.map((r,i)=>'<div class="party-row"><span>'+safe(r.name)+'</span><label>Readied<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="ready" '+(r.ready?'checked':'')+'></label><label>Expended<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="spent" '+(r.spent?'checked':'')+'></label></div>').join('')+'<button type="button" class="btn btn-outline" data-act="recover">Recover maneuvers</button><h4>Lingering Damage (next turn)</h4>'+c.lingering.map((r,i)=>'<div class="party-row"><label>Target<input data-list="lingering" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label><label>Core sneak damage<input type="number" min="0" data-list="lingering" data-i="'+i+'" data-key="damage" value="'+safe(r.damage)+'"></label><button type="button" class="btn btn-outline" data-act="remove" data-list="lingering" data-i="'+i+'">Clear applied</button></div>').join('')+'<button type="button" class="btn btn-outline" data-act="add" data-list="lingering">Record qualifying hit</button><p class="party-note">Pending total: '+c.lingering.reduce((a,r)=>a+r.damage,0)+'</p></div>':'')+
 (id==='voss'?'<div class="party-box"><h3>Divine preparation</h3><p class="party-note">No exact prepared list recovered. Enter prepared spells, count, level and notes; suggested spells appear in tactics below. Classify each preparation by slot type. Limits are advisory; existing records are never deleted.</p>'+resourceRows(c.spells,'spells')+'<button type="button" class="btn btn-outline" data-act="add" data-list="spells">Add prepared spell</button></div>':'')+
 '<div class="party-box"><h3>Character records</h3><div class="party-grid">'+textInput('name','Name',c.name)+textInput('race','Race',c.race)+textInput('alignment','Alignment',c.alignment)+textInput('classes','Class progression',c.classes)+textInput('role','Role',c.role)+'</div>'+textarea('feats','Feats',c.feats)+textarea('features','Class features &amp; rules',c.features)+textarea('gear','Equipment / inventory',c.gear)+textarea('skills','Skills (ranks / modifiers)',c.skills)+textarea('tactics','Tactical reference',c.tactics)+textarea('notes','Audit / campaign notes',c.notes)+'</div>';
 const tabs=['Combat','Defences','Attacks','Skills','Resources','Abilities','Equipment','Notes','Audit'];
 const nav=document.createElement('div');nav.className='party-tabs';nav.setAttribute('role','group');nav.setAttribute('aria-label','Character sheet sections');
 nav.innerHTML=tabs.map(t=>'<button type="button" class="btn btn-small btn-outline" data-party-tab="'+safe(t)+'">'+safe(t)+'</button>').join('');
 panel.querySelector('.section-header').after(nav);
 const boxes=[...panel.querySelectorAll(':scope > .party-box')];
 const setBox=(b,t)=>{b.dataset.partySection=t;};
 boxes.forEach(b=>{const heading=b.querySelector('h3')?.textContent||'';setBox(b,/Vitals|Dice/.test(heading)?'Combat':/Daily resources|Maneuvers &|Divine preparation/.test(heading)?'Resources':'Notes');});
 const box=(title,tab,html)=>{const b=document.createElement('section');b.className='party-box';setBox(b,tab);b.innerHTML='<h3>'+safe(title)+'</h3>'+html;panel.append(b);return b;};
 box('Recorded base defences','Defences','<p class="party-note">Edit permanent totals only, before temporary combat buffs. Blank AC uses the conditional equipment estimate below. Recovered save values are historical totals.</p><div class="party-grid">'+numberFields.filter(([k])=>['ac','touch','flat','fort','ref','will'].includes(k)).map(([k,l])=>numInput(k,l,c[k])).join('')+'</div>');
 box('Armour class & saving throw modifiers','Defences',defenseHTML(id,c));
 const defenseBase=defenseTotals(id,{...c,defense:{weapon:c.defense.weapon,shield:c.defense.shield,wisdom:c.defense.wisdom}});
 box('Defence breakdown','Defences','<p class="party-note">Recorded saves are historical totals, not invented component values. Base AC is manual if entered, otherwise a conditional equipment estimate. Change buffs in the section above.</p><div class="party-stat-grid">'+[['AC',defenseBase.ac,dt.ac],['Touch',defenseBase.touch,dt.touch],['Flat-footed',defenseBase.flat,dt.flat],['Fortitude',defenseBase.saves[0],dt.saves[0]],['Reflex',defenseBase.saves[1],dt.saves[1]],['Will',defenseBase.saves[2],dt.saves[2]]].map(([name,base,total],i)=>'<div><small>'+name+'</small><strong>'+safe(total??'?')+'</strong><span>Base '+safe(base??'?')+' · net '+signed(base==null||total==null?null:total-base)+'</span>'+(i>=3?check(name,total):'')+'</div>').join('')+'</div><p>Source: <a href="https://www.d20srd.org/srd/combat/combatStatistics.htm" target="_blank" rel="noopener">SRD combat statistics</a>. Full save-component records are not yet recovered.</p>');
 box('Attack profiles','Attacks',attackHTML(id,c));box('Recorded attack fallback','Attacks','<p class="party-note">Historical conditional attack and damage, independent of calculated profiles. Use only when appropriate to current combat.</p><div class="party-grid">'+numInput('attack','Recorded attack modifier',c.attack)+textInput('damage','Recorded damage expression',c.damage)+'</div><div class="party-row">'+check('Recorded attack',c.attack)+'<button type="button" class="btn btn-outline" data-act="weapondamage">Roll recorded damage</button></div>');
 box('Skill checks','Skills',skillsHTML(id,c));
 if(id==='voss'){
 const rows=Number.isFinite(c.wis)?clericCapacity(c.wis):[];
 const pa=preparationAudit(c.spells,c.wis);box('Preparation audit','Resources','<p>Counts use maximum prepared copies, including expended spells. Unclassified copies are not assigned automatically. Metamagic uses the occupied slot level; domain eligibility still requires manual review.</p><div style="overflow-x:auto"><table><thead><tr><th>Level</th><th>Ordinary</th><th>Domain</th><th>Unclassified</th></tr></thead><tbody>'+pa.totals.map(t=>'<tr><td>'+t.level+'</td><td>'+t.ordinary+'</td><td>'+t.domain+'</td><td>'+t.unclassified+'</td></tr>').join('')+'</tbody></table></div><p>'+safe(pa.warnings.length?pa.warnings.join(' · '):'No recorded count conflicts; this does not establish a complete preparation list.')+'</p>');
 const magicDomain=["Magic Aura","Identify","Dispel Magic","Imbue with Spell Ability","Spell Resistance","Antimagic Field","Spell Turning","Protection from Spells","Mage’s Disjunction"],deathDomain=["Cause Fear","Death Knell","Animate Dead","Death Ward","Slay Living","Create Undead","Destruction","Create Greater Undead","Wail of the Banshee"];
 box('Magic and Death domain choices','Resources','<p>One shared domain slot per spell level, not one per domain. Choose either spell during daily prayer. Domain slots cannot be converted to inflict spells. This reference does not prepare or expend any spells.</p><div style="overflow-x:auto"><table style="width:100%"><thead><tr><th>Level</th><th>Magic</th><th>Death</th></tr></thead><tbody>'+magicDomain.map((name,i)=>'<tr><td>'+(i+1)+'</td><td>'+safe(name)+'</td><td>'+safe(deathDomain[i])+'</td></tr>').join('')+'</tbody></table></div><p>Magic granted power: effective wizard level 7 for spell-trigger/completion devices (half actual cleric 15, rounded down). Death granted power: once daily melee touch against living target, 15d6 compared with current HP; death effect, no save. Divine Reach applies to spells, not this supernatural power.</p><p><a href="https://www.d20srd.org/srd/spellLists/clericDomains.htm" target="_blank" rel="noopener">SRD domain lists and granted powers</a></p>');
 box('Divine spell capacity (derived)','Resources','<p>Effective cleric progression 20; caster level '+(c.level>=22&&c.classes.includes('Hierophant 2')?22:21)+'. Wisdom '+safe(c.wis??'unknown')+'. Domain slots are separate. No spells are automatically prepared. DCs exclude spell-specific modifiers.</p><div style="overflow-x:auto"><table style="width:100%;text-align:center"><thead><tr><th>Level</th><th>Base</th><th>Bonus</th><th>Ordinary</th><th>Domain</th><th>DC</th></tr></thead><tbody>'+rows.map(r=>'<tr>'+[r.level,r.base,r.bonus,r.ordinary,r.domain,r.dc].map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><p><a href="https://www.d20srd.org/srd/classes/cleric.htm" target="_blank" rel="noopener">SRD cleric table and spellcasting rules</a></p>');
 }
 if(id==='vara'&&c.level>=22&&c.classes.includes('Warblade')){box('Warblade maneuvers & stance','Abilities',VARA_WAR22_REFS.map(([name,source,desc])=>'<details class="party-reference"><summary>'+safe(name)+'</summary><p class="muted small">'+safe(source)+'</p><p>'+safe(desc)+'</p></details>').join(''));box('Warblade 1 — encounter resources','Resources','<p>Initiator level 11 · 3 known / 3 readied · 1 stance. Leading the Charge is selected; toggle its active benefit in Attacks. All three maneuvers start readied. Expend on use and recover only after the proper action sequence.</p>'+c.moves.map((m,i)=>'<div class="party-row"><strong>'+safe(m.name)+'</strong><span>'+(!m.ready?'Not readied':m.spent?'Expended':'Ready')+'</span><button type="button" class="btn btn-outline" data-act="waruse" data-i="'+i+'" '+(!m.ready||m.spent?'disabled':'')+'>Expend</button></div>').join('')+'<button type="button" class="btn btn-outline" data-act="recover">Recover all readied maneuvers</button><p class="party-note">Swift action followed by melee attack or standard action with no other activity; no maneuver or stance change during recovery. Wall of Blades and White Raven Tactics compete for immediate/swift actions.</p>');box('Level 22 skill advancement','Skills','<p>Four Warblade skill points available (4 + Int modifier 0). Suggested +2 Jump and +2 Tumble. Prior totals not verified; allocation awaits confirmation. Maximum class-skill rank 25.</p>');}
 if(id==='sylrissa'&&c.level>=22&&c.classes.includes('Swordsage 5')){box('Swordsage 5 — advancement','Abilities',SYL22_REFS.map(([name,source,desc])=>'<details class="party-reference"><summary>'+safe(name)+'</summary><p class="muted small">'+safe(source)+'</p><p>'+safe(desc)+'</p></details>').join(''));box('Stances & maneuver capacity','Resources','<p>Initiator level 13 · 10 known / 6 readied · 3 stance selections. Prior stances: Child of Shadow and Assassin’s Stance. Pearl of Black Doubt selected, pending Diamond Mind prerequisite. Only one stance active at a time. Shadow Blink is known; select it among six readied maneuvers.</p><p>Currently readied: '+c.moves.filter(m=>m.ready).length+' / 6'+(c.moves.filter(m=>m.ready).length>6?' — over capacity; adjust before combat.':'')+'</p><p class="party-note">Bonesplitting Strike also has unresolved Stone Dragon prerequisites. Prior maneuver choices preserved pending reconciliation.</p>');box('Level 22 approved skill increases','Skills','<p>Hide +2, Move Silently +2, Tumble +2, Listen +1, Use Magic Device +1 (cross-class, costs 2). Total 9 points. Known totals increased where within cap; unrecovered totals remain blank with approved deltas in rank notes.</p>');}
 if(id==='voss'&&c.level>=22&&c.classes.includes('Hierophant 2')){box('Hierophant 2 — Divine Reach','Resources','<p><strong>60 ft</strong> touch-spell delivery · caster level <strong>22</strong> (26 with Bead of Karma). Ordinary spell progression 20; 2 epic spells/day after development; rebuking level 15 before item adjustments. No additional slots or daily charges from Hierophant 2.</p><p><a href="https://www.d20srd.org/srd/prestigeClasses/hierophant.htm#divineReach" target="_blank" rel="noopener">3.5 SRD: Divine Reach and caster level</a></p>');box('Level 22 skill allocation','Skills','<p>Five points (2 class +2 Int +1 human); +1 rank each to Concentration, Spellcraft, Knowledge (religion), Knowledge (arcana), Heal. Class-skill cap 25; known ranks adjusted; unknowns or cap conflicts flagged in individual notes.</p>');}
 for(const [group,entries] of Object.entries(REFERENCE[id])){
  const tab=group==='Magic items'?'Equipment':group==='Support spells (not prepared)'?'Resources':'Abilities';
  box(group,tab,entries.filter(([name])=>!(id==='sylrissa'&&['Pearl of Black Doubt','Swordsage — Quick to Act / Discipline Focus','Maneuvers and stances'].includes(name)&&c.level>=22)).map(([name,source,desc])=>{if(id==='voss'&&c.level>=22&&c.classes.includes('Hierophant 2')){if(name==='Cleric spellcasting')desc=desc.replace('base caster level 21','base caster level 22');if(name==='Hierophant — Divine Reach')desc='Su; second selection confirmed: deliver touch-range divine spells up to 60 ft, ranged touch attack where required. No extra slot or daily usage. Hierophant advances caster level, not ordinary slots.';if(name==='Human / epic progression')desc=desc.replace('+0 epic saves at 21','+1 epic saves at 22');if(name==='Prayer Bead of Karma')desc=desc.replace('21 → 25','22 → 26');if(name==='Heal / Harm')desc=desc.replace('30 ft','60 ft');}return '<details class="party-reference"><summary>'+safe(name)+'</summary><p class="muted small">'+safe(source)+(directSources[name]?' · <a href="'+directSources[name]+'" target="_blank" rel="noopener">SRD rule</a>':' · Sourcebook citation; page verification pending')+'</p><p>'+safe(desc)+'</p></details>';}).join(''));
 }
 const estimate=armorEstimate(id,c);
 if(estimate)box('Conditional armor calculation','Audit','<p>Normal AC: <strong>'+estimate.normal+'</strong> · Touch: <strong>'+estimate.touch+'</strong> · Denied Dex: <strong>'+estimate.denied+'</strong></p><p>'+safe(estimate.note)+'</p><p>Calculated from current ability inputs and recorded equipment assumptions; not an authoritative sheet total. <a href="https://www.d20srd.org/srd/combat/combatStatistics.htm" target="_blank" rel="noopener">SRD combat statistics</a> · <a href="https://www.d20srd.org/srd/magicItems/magicArmor.htm" target="_blank" rel="noopener">SRD magic armor</a></p>');
 if(id==='vara'||id==='sylrissa'){
 const ability=id==='vara'?c.str:c.dex;
 if(Number.isFinite(ability)&&Number.isFinite(c.bab)&&Number.isFinite(c.epic)){
 const mod=Math.floor((ability-10)/2)+5;
 const seq=attackSequence(c.bab,c.epic,mod,false,false);
 box('Attack sequence audit','Audit','<p>Illustrative +5 weapon, ability modifier and epic attack only: <strong>'+seq.map(x=>'+'+x).join(' / ')+'</strong></p><p>Excludes weapon feats, situational bonuses, range, Power Attack, Rapid Shot and other effects. Assumes Medium size and +5 weapon; Vara’s exact main weapon and Sylrissa’s Splitting delivery remain unresolved. Haste adds one highest-bonus attack; epic attack does not unlock iteratives. <a href="https://www.d20srd.org/srd/combat/combatStatistics.htm" target="_blank" rel="noopener">SRD attack rules</a></p>');
 }}
 const weapon=weaponAudit(id,c);
 if(weapon)box('Weapon modifier reconciliation','Audit','<p><strong>Conditional attack: '+safe(weapon.attack)+'; weapon damage: '+(id==='vara'?'2d6':'1d8')+' + '+safe(weapon.damage)+'</strong></p><p>Full attack profile: '+weapon.sequence.map(x=>safe(x)).join(' / ')+'</p><p>'+safe(weapon.note)+'</p><p>Core rules: <a href="https://www.d20srd.org/srd/combat/combatStatistics.htm">attack and damage</a> · <a href="https://www.d20srd.org/srd/feats.htm">core feats</a> · <a href="https://www.d20srd.org/srd/epic/basics.htm">epic progression</a>. Read-only estimate; does not replace saved attack or damage fields.</p>');
 box('Stat verification','Audit','<p>'+safe(AUDIT[id])+'</p><p>Base campaign snapshot: 24 Marpenoth 1375 DR; see advancement notes for later changes. Recovered saves are historical totals, not recomputed temporary buffs. Blank inputs remain unverified. Current HP and used resources are independent local session data.</p><p>'+safe(c.notes)+'</p>');
 const quick=document.createElement('div');quick.className='party-summary';quick.innerHTML=[['HP',c.hp==null?'?':c.hp+' / '+(c.maxHP??'?')],['XP',c.xp??'?'],['AC',dt.ac??'?'],['Action points',c.ap??'?']].map(([k,v])=>'<div><small>'+safe(k)+'</small><strong>'+safe(v)+'</strong></div>').join('');nav.before(quick);const rollBox=document.createElement('div');rollBox.className='party-box party-roll-global';rollBox.innerHTML='<div class="party-roll" role="status" aria-live="polite" id="party-global-result">'+safe(lastRoll[id]||'Roll results appear here.')+'</div>';nav.after(rollBox);
 const records=boxes.find(b=>b.querySelector('h3')?.textContent==='Character records');
 if(records){const equip=records.querySelector('[data-field="gear"]')?.closest('label');if(equip){const b=box('Editable inventory','Equipment','');b.append(equip);}const feats=records.querySelector('[data-field="feats"]')?.closest('label'),features=records.querySelector('[data-field="features"]')?.closest('label');const b=box('Editable feat and feature notes','Abilities','<p class="party-note">Reference cards describe the recorded build; use these fields to record new or changed selections.</p>');if(feats)b.append(feats);if(features)b.append(features);}
 function showTab(t){activeTabs[id]=t;for(const b of panel.querySelectorAll('[data-party-section]'))b.hidden=b.dataset.partySection!==t;for(const b of nav.querySelectorAll('button')){const selected=b.dataset.partyTab===t;b.setAttribute('aria-pressed',String(selected));b.classList.toggle('btn-accent',selected);b.classList.toggle('btn-outline',!selected);}}
 panel.querySelector('#party-skill-filter')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();for(const row of panel.querySelectorAll('.party-skill'))row.hidden=!row.dataset.skillName.includes(q);});
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-party-tab]');if(b)showTab(b.dataset.partyTab);});showTab(activeTabs[id]||'Combat');
}
select.addEventListener('change',()=>{state.active=select.value;save();render();});
panel.addEventListener('change',e=>{const t=e.target,c=state.characters[state.active];if(!c)return;if(t.dataset.attackopt){const k=t.dataset.attackopt;if(own(c.attackOptions,k))c.attackOptions[k]=t.type==='checkbox'?t.checked:t.tagName==='SELECT'?t.value:bounded(n(t.value),-100,100)??0;save();render();return;}if(t.dataset.skillrow!==undefined){const idx=Number(t.dataset.skillrow),row=c.skillRows[idx],k=t.dataset.skillkey;if(row&&['ranks','extra','note'].includes(k)){row[k]=k==='note'?t.value:k==='ranks'?rankValue(t.value):bounded(n(t.value),-100,100);if(k==='extra'&&row[k]===null)row[k]=0;const filter=panel.querySelector('#party-skill-filter')?.value||'';save();render();const entry=panel.querySelector('[data-skillrow="'+idx+'"]')?.closest('details');if(entry)entry.open=true;const field=panel.querySelector('#party-skill-filter');if(field){field.value=filter;field.dispatchEvent(new Event('input'));}}return;}if(t.dataset.defense){c.defense[t.dataset.defense]=t.type==='checkbox'?t.checked:bounded(n(t.value),-100,100)??0;save();render();return;}if(t.dataset.field){const k=t.dataset.field;if(!own(c,k))return;c[k]=t.type==='number'?bounded(n(t.value),-100000,1000000000):t.value;save();if(['initiative','fort','ref','will','attack','wis','dex','str','con','int','cha','bab','epic','skillACP','ac','touch','flat'].includes(k))render();else if(['hp','maxHP','xp','ac','ap'].includes(k)){const quick=panel.querySelector('.party-summary');if(quick){const vals=[c.hp==null?'?':c.hp+' / '+(c.maxHP??'?'),c.xp??'?',defenseTotals(state.active,c).ac??'?',c.ap??'?'];quick.querySelectorAll('strong').forEach((el,i)=>el.textContent=vals[i]);}}}else if(t.dataset.list){const arr=c[t.dataset.list],r=arr?.[Number(t.dataset.i)];if(!r||!own(r,t.dataset.key))return;const k=t.dataset.key;r[k]=t.type==='checkbox'?t.checked:t.type==='number'?bounded(n(t.value),0,100000):t.value;save();if(t.dataset.list==='lingering'||t.dataset.list==='spells'||t.dataset.list==='moves')render();}});
panel.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const c=state.characters[state.active];if(!c)return;const output=msg=>{lastRoll[state.active]=msg;for(const el of panel.querySelectorAll('#party-roll-result,#party-global-result'))el.textContent=msg;};try{
 if(b.dataset.roll){if(b.dataset.mod==='')return;const d=rollDie(20),m=Number(b.dataset.mod);output(b.dataset.roll+': '+d+' '+(m<0?'− '+Math.abs(m):'+ '+m)+' = '+(d+m));return;}
 const a=b.dataset.act,kind=b.dataset.list,i=Number(b.dataset.i),arr=c[kind];if(!a)return;
 if(a==='fullattack'){const x=liveAttack(state.active,c);if(!x)throw Error('Enter verified BAB and ability score');output(x.sequence.map((m,j)=>{const d=rollDie(20);return 'Attack '+(j+1)+': '+d+' '+signed(m)+' = '+(d+m)+(d===1?' (natural 1)':d===20?' (natural 20)':'');}).join('\n'));return;}if(a==='profiledamage'){const x=liveAttack(state.active,c);if(!x?.damage)throw Error('No weapon damage profile');output(rollExpr(x.damage));return;}if(a==='resetattack'){c.attackOptions=newAttackOptions(state.active);save();render();return;}if(a==='resetdefense'){c.defense={weapon:state.active==='vara',shield:state.active==='voss',wisdom:state.active==='sylrissa'};save();render();return;}
 if(a==='dice'){output(rollExpr(panel.querySelector('#party-dice').value));return;}
 if(a==='weapondamage'){output(rollExpr(c.damage));return;}
 if(a==='custom'){const mod=n(panel.querySelector('#party-check-mod').value);if(!Number.isFinite(mod))throw Error('Enter the verified modifier');const d=rollDie(20);output((panel.querySelector('#party-check-name').value||'Check')+': '+d+' + ('+mod+') = '+(d+mod));return;}
 if(a==='actiondice'){const ds=Array.from({length:3},()=>rollDie(6));output('Action dice: '+ds.join(', ')+' → '+Math.max(...ds)+' (spend AP separately)');return;}
 if(a==='damage'||a==='heal'){const amount=bounded(n(panel.querySelector('#party-hp-change').value),0,100000);if(amount===null||c.hp===null)throw Error('Enter a valid HP amount and current HP');if(a==='damage'){const absorb=Math.min(Math.max(c.tempHP||0,0),amount);c.tempHP=(c.tempHP||0)-absorb;c.hp-=amount-absorb;}else{if(c.maxHP===null)throw Error('Enter maximum HP first');c.hp=Math.min(c.maxHP,c.hp+amount);}}
 else if(a==='ap'){if(c.ap==null||c.ap<=0)throw Error('No recorded action points remaining');c.ap--;}
 else if(a==='rest'){if(!confirm('Reset tracked daily resources and prepared spell counts? HP and action points will not be changed.'))return;for(const r of [...c.resources,...c.spells])if(r.max!=null)r.left=r.max;}
 else if(a==='waruse'){const m=c.moves[i];if(state.active!=='vara'||!m||!m.ready||m.spent)throw Error('Maneuver is not available');m.spent=true;}
 else if(a==='recover'){if(!confirm('Recover readied maneuvers after the appropriate recovery action?'))return;for(const r of c.moves)if(r.ready)r.spent=false;}
 else if(a==='add'&&Array.isArray(arr)){arr.push(kind==='lingering'?{name:'',damage:0}:kind==='spells'?{name:'',level:null,left:1,max:1,notes:'',slot:'unclassified'}:{name:'',left:null,max:null});}
 else if(a==='remove'&&Array.isArray(arr)){if(!confirm('Remove this entry?'))return;arr.splice(i,1);}
 else if(a==='spend'&&Array.isArray(arr)){if(!arr[i]||arr[i].left==null||arr[i].left<=0)throw Error('Enter remaining uses or resource exhausted');arr[i].left--;}
 else return;save();render();
 }catch(err){output(err.message);status(err.message);}
});
q('#party-export').addEventListener('click',()=>{const raw=loadError?localStorage.getItem(KEY):JSON.stringify(state,null,2);const url=URL.createObjectURL(new Blob([raw??''],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ashen-crown-companions-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
q('#party-import').addEventListener('click',()=>q('#party-file').click());
q('#party-file').addEventListener('change',async e=>{try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('Backup too large');const next=normalize(JSON.parse(await file.text()));if(!confirm('Replace the three local companion records? Malzareth’s grimoire is unaffected.'))return;const old=localStorage.getItem(KEY);if(old)localStorage.setItem(KEY+'-pre-import',old);localStorage.setItem(KEY,JSON.stringify(next));state=next;loadError='';select.value=state.active;render();status('Companion backup imported. Previous data retained in pre-import backup.');}catch(err){status('Import failed: '+err.message);}finally{e.target.value='';}});

/* Level-21 native Malzareth folio migration. Only the known level-20 checkpoint is
   eligible; keep all prepared spells, inventory and custom edits intact. */
const nativeNotice=document.createElement('div');nativeNotice.className='party-box party-native-notice';
bar.after(nativeNotice);
function renderNativeNotice(){
 const st=window.GRIMOIRE?.getState?.(), sh=st?.sheet;
 if(!sh)return;
 const level=sh.identity.characterLevel;
 nativeNotice.hidden=state.active!=='malzareth'||level>=21;
 if(level>=21)return;
 nativeNotice.innerHTML='<p class="muted small">Campaign advancement: Malzareth is level 21, Factotum 1 and Epic Spellcasting. The native folio can apply the confirmed advancement without changing prepared spells or equipment.</p><button class="btn btn-small btn-outline" type="button" id="party-malz-upgrade">Apply confirmed level-21 advancement</button>';
 nativeNotice.querySelector('button').addEventListener('click',applyMalzareth);
}
function applyMalzareth(){
 const api=window.GRIMOIRE,st=api?.getState?.(),sh=st?.sheet;
 if(!sh||sh.identity.characterLevel!==20||sh.combat.maxHP!==168||sh.combat.bab!==12||!sh.identity.characterClass.includes('Abjurant Champion 5')){status('Native sheet does not match the known level-20 checkpoint. No changes made; reconcile level, HP and BAB first.');return;}
 const expected=[['spellcraft',23,24],['knowledge-arcana',23,24],['truespeak',7,21]];
 for(const [id,old,target] of expected){const current=st.skillOverrides?.[id]?.ranks;if(current!==old&&current!==target&&!(id==='truespeak'&&current===8)){status('Custom or missing '+id+' ranks detected. No changes made; reconcile before applying.');return;}}
 if(!confirm('Advance Malzareth to level 21 (180 HP, Factotum 1, Epic Spellcasting, 15 AP, approved skill ranks)? Truespeak is set to 21 from the latest session; the older app recorded 7 instead of 8. Existing prepared spells, gear and charges are preserved.'))return;
 try{
  const raw=localStorage.getItem('ashen-crown-grimoire-v1');
  localStorage.setItem('ashen-crown-grimoire-v1-pre-epic21',raw||JSON.stringify(st));
 }catch(e){status('Backup could not be saved. Advancement cancelled.');return;}
 const feat={id:'epic-spellcasting',name:'Epic Spellcasting',source:'Epic Level Handbook / SRD',effect:'Requires 24 ranks each in Spellcraft and Knowledge (arcana), and 9th-level arcane casting. Two epic arcane spells per day after development; each requires a Spellcraft check against its development DC.',kind:'Epic',notes:'No epic spell developed yet.',usesPerDay:null,usedToday:0};
 const features=[
 ['factotum-inspiration','Inspiration','Factotum 1','2 inspiration points per encounter. Separate from action points. Refresh at encounter start.'],
 ['factotum-insight','Cunning Insight','Factotum 1','Spend 1 inspiration before an attack, damage or save roll: add Intelligence modifier (+12) as a competence bonus. Does not stack with Pale Green Prism competence bonus; normally net +11 on attacks/saves if that +1 is already included. Not a caster-level check bonus.'],
 ['factotum-knowledge','Cunning Knowledge','Factotum 1','Spend 1 inspiration to gain +1 on a ranked skill check, once per day per skill. Bonus equals Factotum class level.'],
 ['factotum-trapfinding','Trapfinding','Factotum 1','Search for traps with DC above 20 and use Disable Device on magical traps.'],
 ['factotum-proficiencies','Factotum proficiencies','Factotum 1','All simple and martial weapons, light armor and shields except tower shields. Arcane spell failure still applies. All skills are class skills for Factotum advancement.'],
 ['epic-attack','Epic attack bonus','Epic level 21','+1 attack and grapple where BAB is referenced, but no extra iterative attacks. Pre-epic BAB remains +12; epic saving throw bonus is +0.'],
 ['epic-capacity','Epic spell capacity','Epic Spellcasting','Two epic spell slots per day; ordinary wizard spell slots and wizard base caster level 20 unchanged. Develop epic spells before casting.']
 ];
 api.updateSheet(sheet=>{
  const c=sheet.combat;
  sheet.identity.characterLevel=21;
  sheet.identity.characterClass='Wizard 5 / Master Specialist 10 / Abjurant Champion 5 / Factotum 1';
  if(sheet.identity.xp===199525||sheet.identity.xp===210525)sheet.identity.xp=210525;
  sheet.identity.xpNext=231000;
  sheet.identity.era='24 Marpenoth 1375 DR · Epic advancement';
  sheet.identity.xpNote='Level 21 advancement: 210,525 XP confirmed in session; custom XP retained if different.';
  c.maxHP=180;if(c.currentHP>0)c.currentHP=Math.min(180,c.currentHP+12);c.actionPoints=15;c.actionNote='15 action points refreshed at level 21. Spend during play; do not refresh at rest.';
  for(const [id,old,target] of expected){const v=st.skillOverrides[id];st.skillOverrides[id]={ranks:target,extra:v?.extra??0};}
  if(!sheet.feats.some(x=>x.id===feat.id||x.name===feat.name))sheet.feats.push(feat);
  for(const [id,name,category,effect] of features)if(!sheet.features.some(x=>x.id===id))sheet.features.push({id,name,category,effect,notes:'',usesPerDay:null,usedToday:0});
  const undead=sheet.features.find(x=>x.id==='undead');if(undead)undead.effect=undead.effect.replace(/20d12 HD \(20th d12 HP roll pending\)/,'21d12 HD (180 maximum HP)');
  const m=sheet.features.find(x=>x.id==='martial-arcanist');if(m)m.effect='Wizard base caster level is at least pre-epic BAB plus epic attack bonus. At level 21: +12 BAB +1 epic attack < wizard CL 20, so no increase.';
  sheet.audit.unshift('Level 21: Factotum 1; Epic Spellcasting; d12=12; 180 HP; Spellcraft and Knowledge arcana 24 ranks; Truespeak 21 per latest session (prior app had 7 rather than 8; reconcile historical one-rank discrepancy). Spellcasting progression remains 20. +1 epic attack, +0 epic saves.');
  if(sheet.currency.gp===660070&&sheet.currency.fortressTreasuryGp===395750){sheet.currency.gp=2031050;sheet.currency.notes='24 Marpenoth 1375 DR: 2,031,050 gp discretionary; separate 395,750 gp war reserve; total liquid 2,426,800 gp after Sylrissa upgrade. Do not add previous checkpoints.';}
 });
 window.refreshGrimoireSheet?.();window.refreshGrimoireSkills?.();window.refreshCombatRolls?.();
 status('Malzareth level-21 advancement saved. Existing spell preparations and inventory preserved.');renderNativeNotice();
}
select.addEventListener('change',renderNativeNotice);
renderNativeNotice();

if(loadError)status(loadError);else {try{const raw=localStorage.getItem(KEY);if(raw&&(JSON.parse(raw).auditRevision||0)<2){localStorage.setItem(KEY+'-pre-audit-v2',raw);save();}}catch(e){status('Audit backup failed; export your companion records.');}}render();
})();