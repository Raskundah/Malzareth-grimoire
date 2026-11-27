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


const REFERENCE={"vara":{"Feats":[["Superior Initiative","Epic Level Handbook / SRD","Passive: +8 initiative, replacing Improved Initiative; with Dex 14 the recorded total is +10, or +15 with Nerveskitter."],["Improved Initiative","PHB","Prerequisite for Superior Initiative; its +4 does not stack with Superior Initiative."],["Weapon Focus / Greater Weapon Focus","PHB","Each grants +1 attack with chosen greatsword; total +2."],["Weapon Specialization / Greater Weapon Specialization","PHB","Each grants +2 weapon damage with greatsword; total +4."],["Melee Weapon Mastery (slashing)","PHB II","Adds +2 attack and +2 damage with qualifying slashing melee weapons, stacking with weapon-specific focus/specialization."],["Power Attack","PHB / Epic SRD","Choose penalty before attacks, lasting until next turn; maximum effective BAB 21. Two-handed attacks gain twice penalty as damage. No bonus for light weapons except listed exceptions."],["Shock Trooper","Complete Warrior","Heedless Charge shifts Power Attack penalty to AC on qualifying charge (at least −5 Power Attack). Also permits directed bull rush and domino rush tactical options."],["Leap Attack","Complete Adventurer / errata","Qualifying charge with at least 10 ft horizontal jump and ending in threat range enhances Power Attack damage. Apply published errata and agreed campaign multiplication separately; an ordinary flying charge does not qualify."],["Combat Brute","Complete Warrior","Momentum Swing rewards Power Attack of at least 5 on round after a charge; two-handed damage multiplier becomes 3. Sundering Cleave and Advancing Blows are additional tactical options."],["Robilar’s Gambit","PHB II","At start of your action adopt stance: enemy melee attacks against you gain +4 attack and damage; each such attack provokes your AoO after it resolves, subject to available AoOs."],["Combat Reflexes","PHB","Additional AoOs equal to Dex bonus; can make AoOs while flat-footed. With Dex +2, normally up to 3 per round."],["Weapon Supremacy","PHB II","Chosen weapon: +4 against disarm; wield in grapple; +5 on one attack after first in a full attack; substitute natural 10 for one attack once per round; +1 AC while wielding it. Check exact weapon."]],"Class features":[["Fighter 20","PHB","Eleven fighter bonus feats by level 20 (1st and every even level); individual selections still need full reconciliation. Proficient with all simple/martial weapons, all armor and shields."],["Spiritual Lion Totem — Pounce","Complete Champion p.46","Ex; replaces Barbarian fast movement. Full attack after a legal charge, including flying charges with legal movement. Unlimited uses. Charge +2 attack, −2 AC; Haste adds one attack."],["Rage","PHB","1/day; +4 Str/Con, +2 morale Will, −2 AC. With Con 26 lasts 11 rounds. Increases HP by 42 at level 21. Fatigued when it ends; use only permitted actions/skills during rage."],["Half-orc","PHB / SRD","Darkvision 60 ft; orc blood; racial ability adjustments already incorporated in recorded ability scores."],["Epic progression","Epic SRD","Level 21 +1 epic attack, +0 epic saves; four iteratives from pre-epic BAB +20. Fifteen action points on level-up; action dice highest of 3d6."]],"Magic items":[["+5 Soulfire mithral full plate","Book of Exalted Deeds / DMG","Full plate +8 armor, enhancement +5; mithral reduces armor category, weight and check penalty, raises max Dex. Soulfire protects against death spells/effects, energy drain and negative-energy effects; check exceptions. AC calculation still needs other active gear."],["Belt of Giant Strength +6","DMG","Continuous +6 enhancement to Strength, already included in recorded Str 25. Does not stack with another enhancement to Str."],["Amulet of Health +6","DMG","Continuous +6 enhancement to Constitution; already reflected in Con 22 and HP."],["Ring of Protection +5","DMG","Continuous +5 deflection AC, applies to touch AC and flat-footed AC."],["Ring of Freedom of Movement","DMG","Continuous freedom of movement: move/attack normally despite applicable magical movement restrictions; automatically succeeds at relevant grapple escape checks. Not blanket immunity to all stasis effects."],["Winged Vest","Magic Item Compendium p.195","Swift activation, 5/day; fly speed 60 ft (good) for 5 rounds. Haste normally raises this to 90 ft. Track each use."],["Armbands of Might","Magic Item Compendium / Complete Adventurer","+2 on Strength checks and Strength-based skill checks; +2 melee damage when using Power Attack with penalty at least −2."],["Horned Helm","Magic Item Compendium","Provides a gore attack and extra damage on a charge; consult exact entry for attack sequence and charge damage before rolling."],["Gloves of Fortunate Striking","Magic Item Compendium","Once/day reroll an attack roll as an immediate action; must use second result. Confirm activation timing before use."],["Boots of Speed","DMG","Free activation; Haste up to 10 rounds/day, nonconsecutive. Does not stack with another Haste."],["+4 Unholy Greatsword","DMG","Retained weapon: +4 enhancement attack/damage; +2d6 against good creatures, evil-aligned for DR. Do not assume it is the separate main +5 weapon."],["Main greatsword","Campaign combat record","+5 enhancement was used in combat, but the exact complete weapon record is missing. Do not merge with the +4 unholy weapon without confirmation."]]},"sylrissa":{"Feats":[["Lingering Damage","Epic SRD","Requires sneak attack +8d6 and Crippling Strike. Repeat sneak attack damage on next turn; per-hit splitting interaction and exclusion of item dice are campaign rulings. Track per target; do not repeat Strength damage."],["Precise Shot","PHB","Removes −4 penalty for shooting into melee; does not grant ranged flanking."],["Point Blank Shot","PHB","Within 30 ft, +1 attack and damage with ranged weapons."],["Rapid Shot","PHB","Full attack with one additional ranged attack at highest bonus; all attacks take −2. Stacks with Haste extra attack."],["Rapid Reload (light crossbow)","PHB","Reload chosen light crossbow as a free action; permits iterative attacks. Reload still provokes AoOs."],["Crossbow Sniper","PHB II","Add half Dex bonus to crossbow damage (+4 currently); extends qualifying sneak attack/skirmish range to 60 ft. Requires Weapon Focus with chosen crossbow."],["Weapon Focus (light crossbow)","PHB","+1 attack with selected crossbow. Inferred from Crossbow Sniper prerequisite and prior attack calculation; verify feat record."],["Darkstalker","Lords of Madness","Special-sense creatures must make relevant detection checks against Hide/Move Silently instead of automatically detecting her; also allows flanking creatures with all-around vision."],["Adaptive Style","Tome of Battle","Full-round action to change readied maneuvers; recovery interaction per campaign ruling/FAQ. Normal Swordsage recovery is full-round for one expended maneuver."],["Improved Initiative","PHB","Passive +4 initiative; previously recorded; exact complete initiative remains subject to other bonuses."]],"Class features":[["Rogue sneak attack","PHB","8d6 at Rogue 16. Target must be denied Dex to AC or flanked, and ranged attacks within allowed range. Concealment and immunity can block it; precision damage not multiplied on criticals."],["Trapfinding","PHB","Search can locate high-DC traps including magical traps; Disable Device can disarm magic traps. Can use high success margin to bypass a trap where applicable."],["Evasion / Uncanny Dodge","PHB","Evasion: no damage on successful Reflex half save in light/no armor. Uncanny Dodge retains Dex to AC when flat-footed or attacked by invisible attacker (not immobilized); Improved Uncanny Dodge limits flanking."],["Trap Sense +5","PHB","Rogue 16: +5 Reflex saves against traps and +5 dodge AC against trap attacks."],["Crippling Strike","PHB","Rogue special ability: 2 Strength damage per successful sneak attack against susceptible targets. Other Rogue special ability selection (Rogue 10/13/16) requires audit."],["Swordsage — Quick to Act / Discipline Focus","Tome of Battle","At Swordsage 4 Quick to Act +1 initiative. Discipline focus grants associated Weapon Focus at 1 and insightful strikes at 4 for selected discipline; confirm selections."],["Swordsage — AC bonus","Tome of Battle","From Swordsage 2, add Wisdom bonus to AC when in light armor, unencumbered and not using shield; applies to touch/flat-footed; lost when immobilized or helpless."],["Maneuvers and stances","Tome of Battle","Swordsage 4: 9 maneuvers known, 5 readied, 2 stances. Initiator level 12 (4 + floor(17/2)). Max maneuver level 6. Recover one as full-round action or use Adaptive Style. Stances changed as swift action."],["Assassin’s Stance","Tome of Battle","Shadow Hand stance (3rd): +2d6 sneak attack while active."],["Pearl of Black Doubt","Tome of Battle","Diamond Mind stance (3rd): +2 dodge AC per missed melee attack against you, cumulative until start of next turn."],["Hit-and-Run Tactics","Drow of the Underdark p.58","Fighter 1 alternative: give up heavy armor/tower shields; +2 initiative, +Dex modifier competence bonus to weapon damage vs flat-footed foes within 30 ft (+9). Still receives Fighter bonus feat."],["Drow","Monster Manual","Darkvision 120 ft; light blindness; +2 racial Will vs spells/SLAs; racial spell-like abilities and spell resistance; exact lesser/full drow profile and LA-buyoff application need audit. Do not auto-apply SR until confirmed."],["Epic progression","Epic SRD","Pre-epic BAB +15, epic +1, only three iteratives; +0 epic saves at 21. Action points 15."]],"Magic items":[["+5 Splitting Deadly Precision light crossbow","Champions of Ruin / Magic Item Compendium","+5 enhancement, Deadly Precision +1d6 on sneak attack; Splitting +3 equivalent makes two identical projectiles with independent attack rolls (Precise Shot required). Commissioned, paid; confirm delivery. +9 total equivalent."],["Greater Truedeath Crystal","Magic Item Compendium","Against undead: +1d6 damage, ghost touch, permits critical hits and sneak attacks. Greater crystal needs +3 actual enhancement. Only one augment crystal on weapon at a time."],["Greater Demolition Crystal","Magic Item Compendium","Against constructs: +1d6 damage, treat weapon as adamantine for DR, permits critical hits/sneak attacks. Requires +3 actual enhancement. Switch with Truedeath as needed."],["Celestial Armor","DMG","+3 chainmail, +8 armor AC, max Dex +8, armor check −2, treated as light armor; fly 1/day. Verify Swordsage Wisdom AC applicability."],["Gloves of Dexterity +6","DMG","Continuous +6 enhancement Dex; included in Dex 29."],["Amulet of Health +6","DMG","Continuous +6 enhancement Con; included in Con 18."],["Ring of Protection +5","DMG","Continuous +5 deflection AC, including touch and flat-footed AC."],["Rogue’s Vest","Magic Item Compendium","Adds 1d6 sneak attack damage and bonuses to stealth/reflex-related checks; exact secondary bonuses to confirm in book before applying."],["Belt of Battle","Magic Item Compendium","+2 competence initiative; 3 charges/day. Swift action: 1 charge move action, 2 standard, 3 full-round. Extra action must be used immediately."],["Scout’s Headband","Magic Item Compendium p.132","+2 competence Spot; 3 charges/day for visual effects, including darkvision, see invisibility and true seeing. Verify charge cost and duration before activating."],["Goggles of Foefinding","Magic Item Compendium","Ignores AC bonus from ordinary cover when making attacks; not total cover. Does not grant line of sight or ignore concealment."],["Boots of Speed","DMG","Free activation; 10 rounds/day Haste, nonconsecutive."],["Cloak of Resistance +5","DMG","Continuous +5 resistance to saves; not cumulative with other resistance bonuses."],["Ring of Counterspells","DMG","Stores one spell of 1st–6th level; automatically counters that spell when cast upon wearer, consuming stored spell. Current spell unknown."],["Bracers of Murder","Drow of the Underdark","+2 profane attack/damage vs flat-footed targets; reroll sneak attack dice showing 1 (keep second result). Increases death attack DC if relevant."]],"Maneuvers":[["Cloak of Deception","Shadow Hand 2","Swift boost: greater invisibility until end of current turn; special senses can still negate benefits."],["Shadow Blade Technique","Shadow Hand 1","Standard melee strike: roll twice, choose result; selecting lower successful roll grants extra 1d6 cold damage."],["Shadow Garrote","Shadow Hand 3","Standard ranged touch strike, range 60 ft; 5d6 damage, Fortitude save or flat-footed until start of next turn. Check target immunities."],["Shadow Stride","Shadow Hand 5","Move action teleport up to 50 ft; line of sight/effect and destination requirements apply."],["Strength Draining Strike","Shadow Hand 3","Standard melee strike; inflicts Strength damage with Fortitude partial. Ability-damage immunity applies."],["Hand of Death","Shadow Hand 4","Standard melee touch strike against flat-footed target; Fortitude or paralysis 1d3 rounds. Check living target restrictions."],["Bloodletting Strike","Shadow Hand 5","Standard melee strike, Constitution damage with Fortitude partial; check immunity."],["Sudden Leap","Tiger Claw 1","Swift jump movement based on Jump check; can provoke AoOs; useful for repositioning."],["Bonesplitting Strike","Stone Dragon 4","Standard melee strike with Constitution damage; requires ground contact. Prior prerequisite discrepancy remains open."]]},"voss":{"Feats":[["Epic Spellcasting","Epic SRD","24 Spellcraft and 24 Knowledge (religion), 9th-level divine spells. Two epic divine spells/day, only after development; Spellcraft check per spell."],["Persistent Spell","Complete Arcane","Eligible fixed/personal range spells last 24 hours; +6 slot adjustment; excludes instantaneous/discharge effects. Verify each spell’s eligibility."],["Divine Metamagic (Persistent Spell)","Complete Divine / errata","Apply selected metamagic to eligible divine spell without raising slot; expend 1 + adjustment rebuke attempts (7 for Persistent)."],["Divine Defiance","Fiendish Codex II","Spend a turn/rebuke attempt to counterspell as immediate action; must identify spell and have appropriate counterspell. Competes with other immediate/swift actions."]],"Class features":[["Cleric spellcasting","PHB","Effective ordinary spell progression 20 (Cleric 15 + Paragnostic Apostle 5); base caster level 21 with Hierophant. Wisdom determines bonus slots and DC. Prepare divine spells from class list, including one domain slot per level 1–9."],["Spontaneous inflict","PHB","Evil cleric may exchange prepared nondomain spells for appropriate inflict spells; does not spontaneously convert to cures. Negative energy heals undead."],["Rebuke / command undead","PHB","Cleric 15 base turning level before gear; roll turning check and damage as usual; commanded HD limit applies. Daily attempts 3 + Cha modifier plus equipment/feats; exact Charisma and total pool unknown."],["Magic domain","PHB","Use spell-trigger and completion items as wizard of half cleric level (minimum 1); combine with actual wizard levels if any. Domain spells include Identify, Dispel Magic and Mage's Disjunction."],["Death domain","PHB","Death touch 1/day: melee touch on living target, roll 1d6 per cleric level; if total equals/exceeds current HP it dies. Domain spell list includes Death Ward, Slay Living, Destruction."],["Paragnostic Apostle — Penetrating Insight","Complete Champion","Recorded choice: improves checks to overcome spell resistance and dispel magic; verify exact bonus/conditions from source before rolling."],["Paragnostic Apostle — Mind over Matter","Complete Champion","Recorded choice: spells granting armor bonuses grant +2 additional armor bonus. Other three Knowledge Is Power selections not recovered."],["Hierophant — Divine Reach","DMG / SRD","Su; touch-range divine spells at 30 ft, ranged touch attack if required. May select a second time for 60 ft. No extra slot or daily usage. Hierophant advances caster level, not ordinary slots."],["Human / epic progression","PHB / Epic SRD","Human bonus feat and skill points; +1 epic attack, +0 epic saves at 21. Pre-epic BAB +13 derived from Cleric 15 (+11) and Apostle 5 (+2)."]],"Magic items":[["+5 Soulfire mithral full plate","Book of Exalted Deeds / DMG","+13 armor AC from +5 full plate; mithral improves armor category/max Dex/check penalty; Soulfire protects from death spells/effects, energy drain and negative energy effects."],["+5 Animated Shield","DMG","Shield floats to protect wielder after command activation, freeing both hands; +5 enhancement on underlying shield bonus. Exact base shield type not confirmed."],["Circlet of Wisdom +6 / Rapid Casting","Magic Item Compendium + campaign combined item","+6 enhancement Wis; Rapid Casting has 3 charges/day to speed eligible low-level spells. Verify charge expenditure and spell level before use."],["Belt of Battle / Constitution +6","Magic Item Compendium + combined item","+6 enhancement Con, +2 competence initiative; 3 charges/day as swift action: move (1), standard (2), full-round (3)."],["Ring of Protection +5","DMG","+5 deflection AC, including touch and flat-footed AC."],["Nightstick","Libris Mortis","+4 daily turn/rebuke uses. Do not stack multiple copies without a campaign ruling."],["Reliquary Holy Symbol","Magic Item Compendium","One extra daily turn/rebuke use per qualifying condition (Knowledge religion 5 ranks, Improved Turning, divine feat); known religion ranks and divine feat provide two; Improved Turning unverified."],["Ring of Enduring Arcana","Complete Mage","+4 effective caster level for resisting dispel checks against your spells; does not improve actual caster level for other purposes."],["Tunic of Steady Spellcasting","Magic Item Compendium","+5 competence Concentration."],["Scepter of the Netherworld","Libris Mortis","+3 effective turning/rebuking level while held; does not provide extra daily attempts."],["Prayer Bead of Karma","DMG","Once daily, +4 caster level for divine spells for 10 minutes after activation. Voss CL 21 → 25 while active."],["Third Eye Clarity","Magic Item Compendium","Once/day immediate action to negate confusion, daze, fascination or stun as specified; use when affected, check exact timing."],["Cloak of Resistance +5","DMG","+5 resistance to saves; confirmed later gear record, use +5 rather than +3 pending local edit reconciliation."],["Tome of Understanding +3","DMG","48 hours reading within six days; +3 inherent Wis, not cumulative with existing inherent bonus. Reading in progress; Wis remains 28 until complete."]],"Support spells (not prepared)":[["Mass Conviction","Spell Compendium","3rd; morale bonus to saves, +5 at CL 18+; 10 min/level. Does not stack with Rage's morale Will bonus."],["Recitation","Spell Compendium","4th; luck bonus attacks, AC, saves; +3 for worshippers of same deity, +2 for other allies; round/level."],["Righteous Wrath of the Faithful","Spell Compendium","5th; melee attacks/damage morale bonus and extra highest-bonus attack; extra attack does not stack with Haste."],["Heal / Harm","PHB","6th; Heal up to 150 HP and removes listed conditions, Harm heals undead as Heal. Divine Reach up to 30 ft."],["Freedom of Movement / Death Ward","PHB","4th; preventative protection against movement restrictions and death/energy drain respectively. Divine Reach applicable."],["Greater Dispel Magic / Divine Defiance","PHB / Fiendish Codex II","6th; remove enemy spell buffs or counterspell; Divine Defiance changes timing at cost of rebuke use."],["Delay Death / Mass Resurgence","Spell Compendium","4th immediate rescue from HP-loss death; 3rd allows additional saves against eligible effects. Check exact targets and timing."],["Greater Spell Immunity / Superior Resistance","PHB / Spell Compendium","8th selective spell immunity against eligible spells; 6th +6 resistance saves for 24 hours. Resistance bonuses do not stack."]]}};
const AUDIT={"vara":"Prior level-20 record: Fort +24, Ref +13, Will +14 (no new epic save at 21). Rage/temporary buffs separate. Main greatsword identity and armor/AC, speed, full ranks and all feat slots need verification.","sylrissa":"Level-20 saves +16/+30/+15 carry into 21. Initiative can be derived provisionally: Dex +9, Improved Initiative +4, Quick to Act +1, Belt of Battle +2 competence, Hit-and-Run +2 = +18 if equipped and confirmed. Crossbow attack/damage conditional; source sheet AC and exact feat/skill list missing. Splitting delivery remains unconfirmed. Bonesplitting prerequisite audit outstanding.","voss":"Recovered level-20 save variants +18/+10/+25 with +3 cloak or +20/+12/+27 with +5. Later record confirms +5 cloak, so use latter unless edited. Level-18 AC 36 / touch 16 / flat-footed 35 is historical, not guaranteed at 21. Spell preparation and daily rebuke count are unknown; level-20 skill allocation reconstructed."};
Object.assign(SEEDS.vara,{fort:24,ref:13,will:14});Object.assign(SEEDS.voss,{fort:20,ref:12,will:27,bab:13});SEEDS.vara.resources.find(x=>x.name==='Winged Vest activation').max=5;SEEDS.vara.resources.find(x=>x.name==='Winged Vest activation').left=5;
const KEY='ashen-crown-companion-folios-v1';
const clone=x=>JSON.parse(JSON.stringify(x));
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const validId=id=>own(SEEDS,id);
const safe=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const n=(x)=>x===''||x==null?null:Number(x);
const bounded=(x,min,max)=>Number.isFinite(x)?Math.min(max,Math.max(min,Math.trunc(x))):null;
const empty=()=>({version:1,auditRevision:2,active:'malzareth',characters:clone(SEEDS)});
function normalize(raw){
 if(!raw||raw.version!==1||!raw.characters||typeof raw.characters!=='object')throw Error('Invalid party backup');
 const next=empty();
 for(const id of Object.keys(SEEDS)){
  const src=raw.characters[id]; if(!src||typeof src!=='object'||Array.isArray(src))throw Error('Missing character '+id);
  const base=next.characters[id];
  for(const k of Object.keys(base)){
   if(!own(src,k))continue;
   if(Array.isArray(base[k])){
    if(!Array.isArray(src[k])||src[k].length>500)throw Error('Invalid list '+k);
    if(k==='resources'||k==='spells')base[k]=src[k].map(r=>{if(!r||typeof r.name!=='string')throw Error('Invalid resource');return {name:r.name.slice(0,200),max:bounded(n(r.max),0,999),left:bounded(n(r.left),0,999),...(k==='spells'?{level:bounded(n(r.level),0,9),notes:String(r.notes??'').slice(0,1000)}:{})};});
    else if(k==='moves')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),ready:!!r.ready,spent:!!r.spent}));
    else if(k==='lingering')base[k]=src[k].map(r=>({name:String(r.name??'').slice(0,200),damage:bounded(n(r.damage),0,100000)??0}));
   }else if(typeof base[k]==='number'||base[k]===null)base[k]=bounded(n(src[k]),-100000,1000000000);
   else if(typeof src[k]==='string')base[k]=src[k].slice(0,30000);
  }
 }
 if((raw.auditRevision||0)<2){for(const [id,vals] of Object.entries({vara:{fort:24,ref:13,will:14},voss:{fort:20,ref:12,will:27,bab:13}})){for(const [key,val] of Object.entries(vals))if(next.characters[id][key]===null)next.characters[id][key]=val;}const vest=next.characters.vara.resources.find(x=>x.name==='Winged Vest activation');if(vest&&vest.max===1){vest.left=vest.left===null?null:Math.min(5,vest.left+4);vest.max=5;}}next.active=validId(raw.active)?raw.active:'malzareth';
 return next;
}
let state=empty(), loadError='';
try{const old=localStorage.getItem(KEY);if(old)state=normalize(JSON.parse(old));}catch(e){loadError='Saved companion data could not be read. It has not been overwritten. Export or recover it before editing.';}
const app=document.querySelector('#app'); if(!app)return;
const bar=document.createElement('section');bar.className='party-switcher';bar.setAttribute('aria-label','Select character');
bar.innerHTML='<label for="party-select">Character</label> <select id="party-select"><option value="malzareth">Malzareth Vhane</option>'+Object.keys(SEEDS).map(id=>'<option value="'+id+'">'+safe(SEEDS[id].name)+'</option>').join('')+'</select><button type="button" class="btn btn-small btn-outline" id="party-export">Export companion backup</button><button type="button" class="btn btn-small btn-outline" id="party-import">Import companion backup</button><input type="file" id="party-file" accept=".json,application/json" hidden><p class="muted small" id="party-status" role="status" aria-live="polite"></p>';
app.querySelector('.site-header').after(bar);
const panel=document.createElement('section');panel.id='party-folio';panel.hidden=true;bar.after(panel);
const style=document.createElement('style');style.textContent=
'.party-switcher{display:flex;gap:.55rem;align-items:center;flex-wrap:wrap;margin:1rem 0;padding:.75rem;border:1px solid #776a85;border-radius:.7rem}.party-switcher label{font-weight:700}.party-switcher select{max-width:100%;min-width:12rem}.party-switcher p{flex-basis:100%;margin:0}.party-mode #app>.hero,.party-mode #app>.status-grid,.party-mode #app>.main-grid,.party-mode #header-add,.party-mode .mobile-nav{display:none!important}#party-folio[hidden]{display:none!important}#party-folio{padding-bottom:2rem}#party-folio .party-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(125px,1fr));gap:.7rem}#party-folio label{display:flex;flex-direction:column;gap:.25rem;font-size:.86rem}#party-folio input,#party-folio textarea{width:100%;box-sizing:border-box}#party-folio textarea{min-height:8rem;resize:vertical}#party-folio .party-box{border:1px solid #776a85;border-radius:.7rem;padding:1rem;margin:.8rem 0}#party-folio .party-row{display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;margin:.5rem 0}#party-folio .party-row label{flex:1;min-width:80px}#party-folio .party-row button{flex-shrink:0}#party-folio .party-roll{white-space:pre-wrap;min-height:2rem;font-weight:600}#party-folio details>summary{cursor:pointer;font-weight:700}#party-folio button{min-height:36px}#party-folio .party-note{color:inherit;opacity:.85;font-size:.88rem}';
style.textContent+=' .party-tabs{display:flex;flex-wrap:wrap;gap:.45rem;margin:1rem 0}.party-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.5rem;margin:1rem 0}.party-summary>div{padding:.7rem;border:1px solid #776a85;border-radius:.55rem;min-width:0}.party-summary small,.party-summary strong{display:block;overflow-wrap:anywhere}.party-reference{border-bottom:1px solid #776a8560;padding:.7rem 0}.party-reference p{margin:.45rem 0;line-height:1.55}.party-reference summary{cursor:pointer}.party-box[hidden]{display:none!important}@media(max-width:480px){.party-summary{grid-template-columns:repeat(2,minmax(0,1fr))}}';document.head.append(style);
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
const activeTabs={vara:'Combat',sylrissa:'Combat',voss:'Combat'};
function render(){
 const id=state.active;document.body.classList.toggle('party-mode',id!=='malzareth');panel.hidden=id==='malzareth';if(panel.hidden)return;
 const c=state.characters[id];const resourceRows=(arr,kind)=>arr.map((r,i)=>'<div class="party-row"><label>Name<input data-list="'+kind+'" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label>'+(kind==='spells'?'<label>Level<input type="number" min="0" max="9" data-list="'+kind+'" data-i="'+i+'" data-key="level" value="'+safe(r.level)+'"></label>':'')+'<label>Remaining<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="left" value="'+safe(r.left)+'" placeholder="?"></label><label>Maximum<input type="number" min="0" data-list="'+kind+'" data-i="'+i+'" data-key="max" value="'+safe(r.max)+'" placeholder="?"></label><button type="button" class="btn btn-small btn-outline" data-act="spend" data-list="'+kind+'" data-i="'+i+'">Use</button><button type="button" class="btn btn-small btn-outline" data-act="remove" data-list="'+kind+'" data-i="'+i+'">Remove</button>'+(kind==='spells'?'<label>Notes<input data-list="'+kind+'" data-i="'+i+'" data-key="notes" value="'+safe(r.notes)+'"></label>':'')+'</div>').join('');
 panel.innerHTML='<div class="section-header"><div><p class="eyebrow">THE ASHEN CROWN · COMPANION FOLIO</p><h2>'+safe(c.name)+'</h2><p class="muted">'+safe(c.classes)+' · '+safe(c.role)+'</p></div></div><p class="party-note">Independent local save. Blank numbers are unknown, not zero. Edits save on change; export a companion backup separately from Malzareth’s original backup.</p>'+
 '<div class="party-box"><h3>Vitals &amp; combat</h3><div class="party-grid">'+numberFields.map(([k,l])=>numInput(k,l,c[k])).join('')+'</div><div class="party-row"><button type="button" class="btn btn-outline" data-act="damage">Apply damage</button><button type="button" class="btn btn-outline" data-act="heal">Heal</button><input type="number" min="0" id="party-hp-change" placeholder="HP amount" aria-label="HP amount" style="max-width:110px"><button type="button" class="btn btn-outline" data-act="ap">Spend action point</button><button type="button" class="btn btn-outline" data-act="rest">Reset daily resources</button></div></div>'+
 '<div class="party-box"><h3>Dice &amp; attacks</h3><div class="party-row">'+check('Initiative',c.initiative)+check('Fortitude',c.fort)+check('Reflex',c.ref)+check('Will',c.will)+check('Attack',c.attack)+'<button type="button" class="btn btn-outline" data-act="actiondice">Action dice (3d6 highest)</button></div><div class="party-row">'+textInput('damage','Damage expression',c.damage)+'<button type="button" class="btn btn-accent" data-act="weapondamage">Roll damage</button></div><div class="party-row"><label>Custom check name<input id="party-check-name" placeholder="e.g. Hide or Spellcraft"></label><label>Modifier<input id="party-check-mod" type="number" step="1" placeholder="Enter modifier"></label><button type="button" class="btn btn-outline" data-act="custom">Roll d20</button><label>Any dice expression<input id="party-dice" placeholder="2d6+4"></label><button type="button" class="btn btn-outline" data-act="dice">Roll</button></div><div class="party-roll" role="status" aria-live="polite" id="party-roll-result"></div></div>'+
 '<div class="party-box"><h3>Daily resources</h3>'+resourceRows(c.resources,'resources')+'<button type="button" class="btn btn-outline" data-act="add" data-list="resources">Add resource</button></div>'+
 (id==='sylrissa'?'<div class="party-box"><h3>Maneuvers &amp; lingering damage</h3><p class="party-note">Choose the actual readied maneuvers before combat (maximum per class record to verify). Adaptive Style recovery follows its normal action requirements.</p>'+c.moves.map((r,i)=>'<div class="party-row"><span>'+safe(r.name)+'</span><label>Readied<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="ready" '+(r.ready?'checked':'')+'></label><label>Expended<input type="checkbox" data-list="moves" data-i="'+i+'" data-key="spent" '+(r.spent?'checked':'')+'></label></div>').join('')+'<button type="button" class="btn btn-outline" data-act="recover">Recover maneuvers</button><h4>Lingering Damage (next turn)</h4>'+c.lingering.map((r,i)=>'<div class="party-row"><label>Target<input data-list="lingering" data-i="'+i+'" data-key="name" value="'+safe(r.name)+'"></label><label>Core sneak damage<input type="number" min="0" data-list="lingering" data-i="'+i+'" data-key="damage" value="'+safe(r.damage)+'"></label><button type="button" class="btn btn-outline" data-act="remove" data-list="lingering" data-i="'+i+'">Clear applied</button></div>').join('')+'<button type="button" class="btn btn-outline" data-act="add" data-list="lingering">Record qualifying hit</button><p class="party-note">Pending total: '+c.lingering.reduce((a,r)=>a+r.damage,0)+'</p></div>':'')+
 (id==='voss'?'<div class="party-box"><h3>Divine preparation</h3><p class="party-note">No exact prepared list recovered. Enter prepared spells, count, level and notes; suggested spells appear in tactics below. This is a manual tracker, not an automatic cleric slot calculator.</p>'+resourceRows(c.spells,'spells')+'<button type="button" class="btn btn-outline" data-act="add" data-list="spells">Add prepared spell</button></div>':'')+
 '<div class="party-box"><h3>Character records</h3><div class="party-grid">'+textInput('name','Name',c.name)+textInput('race','Race',c.race)+textInput('alignment','Alignment',c.alignment)+textInput('classes','Class progression',c.classes)+textInput('role','Role',c.role)+'</div>'+textarea('feats','Feats',c.feats)+textarea('features','Class features &amp; rules',c.features)+textarea('gear','Equipment / inventory',c.gear)+textarea('skills','Skills (ranks / modifiers)',c.skills)+textarea('tactics','Tactical reference',c.tactics)+textarea('notes','Audit / campaign notes',c.notes)+'</div>';
 const tabs=['Combat','Resources','Abilities','Equipment','Skills & notes','Audit'];
 const nav=document.createElement('div');nav.className='party-tabs';nav.setAttribute('role','group');nav.setAttribute('aria-label','Character sheet sections');
 nav.innerHTML=tabs.map(t=>'<button type="button" class="btn btn-small btn-outline" data-party-tab="'+safe(t)+'">'+safe(t)+'</button>').join('');
 panel.querySelector('.section-header').after(nav);
 const boxes=[...panel.querySelectorAll(':scope > .party-box')];
 const setBox=(b,t)=>{b.dataset.partySection=t;};
 boxes.forEach(b=>{const heading=b.querySelector('h3')?.textContent||'';setBox(b,/Vitals|Dice/.test(heading)?'Combat':/Daily resources|Maneuvers &|Divine preparation/.test(heading)?'Resources':'Skills & notes');});
 const box=(title,tab,html)=>{const b=document.createElement('section');b.className='party-box';setBox(b,tab);b.innerHTML='<h3>'+safe(title)+'</h3>'+html;panel.append(b);return b;};
 for(const [group,entries] of Object.entries(REFERENCE[id])){
  const tab=group==='Magic items'?'Equipment':group==='Support spells (not prepared)'?'Resources':'Abilities';
  box(group,tab,entries.map(([name,source,desc])=>'<details class="party-reference"><summary>'+safe(name)+'</summary><p class="muted small">'+safe(source)+'</p><p>'+safe(desc)+'</p></details>').join(''));
 }
 box('Stat verification','Audit','<p>'+safe(AUDIT[id])+'</p><p>Campaign snapshot: 24 Marpenoth 1375 DR, level 21. Recovered saves are historical totals, not recomputed temporary buffs. Blank inputs remain unverified. Current HP and used resources are independent local session data.</p><p>'+safe(c.notes)+'</p>');
 const quick=document.createElement('div');quick.className='party-summary';quick.innerHTML=[['HP',c.hp==null?'?':c.hp+' / '+(c.maxHP??'?')],['XP',c.xp??'?'],['AC',c.ac??'?'],['Action points',c.ap??'?']].map(([k,v])=>'<div><small>'+safe(k)+'</small><strong>'+safe(v)+'</strong></div>').join('');nav.before(quick);
 const records=boxes.find(b=>b.querySelector('h3')?.textContent==='Character records');
 if(records){const equip=records.querySelector('[data-field="gear"]')?.closest('label');if(equip){const b=box('Editable inventory','Equipment','');b.append(equip);}const feats=records.querySelector('[data-field="feats"]')?.closest('label'),features=records.querySelector('[data-field="features"]')?.closest('label');const b=box('Editable feat and feature notes','Abilities','<p class="party-note">Reference cards describe the recorded build; use these fields to record new or changed selections.</p>');if(feats)b.append(feats);if(features)b.append(features);}
 function showTab(t){activeTabs[id]=t;for(const b of panel.querySelectorAll('[data-party-section]'))b.hidden=b.dataset.partySection!==t;for(const b of nav.querySelectorAll('button')){const selected=b.dataset.partyTab===t;b.setAttribute('aria-pressed',String(selected));b.classList.toggle('btn-accent',selected);b.classList.toggle('btn-outline',!selected);}}
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-party-tab]');if(b)showTab(b.dataset.partyTab);});showTab(activeTabs[id]||'Combat');
}
select.addEventListener('change',()=>{state.active=select.value;save();render();});
panel.addEventListener('change',e=>{const t=e.target,c=state.characters[state.active];if(!c)return;if(t.dataset.field){const k=t.dataset.field;if(!own(c,k))return;c[k]=t.type==='number'?bounded(n(t.value),-100000,1000000000):t.value;save();if(['initiative','fort','ref','will','attack'].includes(k))render();}else if(t.dataset.list){const arr=c[t.dataset.list],r=arr?.[Number(t.dataset.i)];if(!r||!own(r,t.dataset.key))return;const k=t.dataset.key;r[k]=t.type==='checkbox'?t.checked:t.type==='number'?bounded(n(t.value),0,100000):t.value;save();if(t.dataset.list==='lingering')render();}});
panel.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const c=state.characters[state.active];if(!c)return;const output=msg=>{const el=panel.querySelector('#party-roll-result');if(el)el.textContent=msg;};try{
 if(b.dataset.roll){if(b.dataset.mod==='')return;const d=rollDie(20),m=Number(b.dataset.mod);output(b.dataset.roll+': '+d+' '+(m<0?'− '+Math.abs(m):'+ '+m)+' = '+(d+m));return;}
 const a=b.dataset.act,kind=b.dataset.list,i=Number(b.dataset.i),arr=c[kind];if(!a)return;
 if(a==='dice'){output(rollExpr(panel.querySelector('#party-dice').value));return;}
 if(a==='weapondamage'){output(rollExpr(c.damage));return;}
 if(a==='custom'){const mod=n(panel.querySelector('#party-check-mod').value);if(!Number.isFinite(mod))throw Error('Enter the verified modifier');const d=rollDie(20);output((panel.querySelector('#party-check-name').value||'Check')+': '+d+' + ('+mod+') = '+(d+mod));return;}
 if(a==='actiondice'){const ds=Array.from({length:3},()=>rollDie(6));output('Action dice: '+ds.join(', ')+' → '+Math.max(...ds)+' (spend AP separately)');return;}
 if(a==='damage'||a==='heal'){const amount=bounded(n(panel.querySelector('#party-hp-change').value),0,100000);if(amount===null||c.hp===null)throw Error('Enter a valid HP amount and current HP');if(a==='damage'){const absorb=Math.min(Math.max(c.tempHP||0,0),amount);c.tempHP=(c.tempHP||0)-absorb;c.hp-=amount-absorb;}else{if(c.maxHP===null)throw Error('Enter maximum HP first');c.hp=Math.min(c.maxHP,c.hp+amount);}}
 else if(a==='ap'){if(c.ap==null||c.ap<=0)throw Error('No recorded action points remaining');c.ap--;}
 else if(a==='rest'){if(!confirm('Reset tracked daily resources and prepared spell counts? HP and action points will not be changed.'))return;for(const r of [...c.resources,...c.spells])if(r.max!=null)r.left=r.max;}
 else if(a==='recover'){if(!confirm('Recover readied maneuvers after the appropriate recovery action?'))return;for(const r of c.moves)if(r.ready)r.spent=false;}
 else if(a==='add'&&Array.isArray(arr)){arr.push(kind==='lingering'?{name:'',damage:0}:kind==='spells'?{name:'',level:null,left:1,max:1,notes:''}:{name:'',left:null,max:null});}
 else if(a==='remove'&&Array.isArray(arr)){if(!confirm('Remove this entry?'))return;arr.splice(i,1);}
 else if(a==='spend'&&Array.isArray(arr)){if(!arr[i]||arr[i].left==null||arr[i].left<=0)throw Error('Enter remaining uses or resource exhausted');arr[i].left--;}
 else return;save();render();
 }catch(err){output(err.message);status(err.message);}
});
q('#party-export').addEventListener('click',()=>{const raw=loadError?localStorage.getItem(KEY):JSON.stringify(state,null,2);const url=URL.createObjectURL(new Blob([raw??''],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ashen-crown-companions-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
q('#party-import').addEventListener('click',()=>q('#party-file').click());
q('#party-file').addEventListener('change',async e=>{try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('Backup too large');const next=normalize(JSON.parse(await file.text()));if(!confirm('Replace the three local companion records? Malzareth’s grimoire is unaffected.'))return;const old=localStorage.getItem(KEY);if(old)localStorage.setItem(KEY+'-pre-import',old);localStorage.setItem(KEY,JSON.stringify(next));state=next;loadError='';select.value=state.active;render();status('Companion backup imported. Previous data retained in pre-import backup.');}catch(err){status('Import failed: '+err.message);}finally{e.target.value='';}});
if(loadError)status(loadError);else {try{const raw=localStorage.getItem(KEY);if(raw&&(JSON.parse(raw).auditRevision||0)<2){localStorage.setItem(KEY+'-pre-audit-v2',raw);save();}}catch(e){status('Audit backup failed; export your companion records.');}}render();
})();