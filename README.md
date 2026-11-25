# Malzareth's Grimoire · The Ashen Crown

A small, offline-ready, mobile-first D&D 3.5 spellbook built with **plain HTML, CSS and JavaScript**. There are no libraries, accounts, logins or build tools.

## Post-Marquis equipment purchases · 25 November 2026

**Player-confirmed checkpoint:** The Seventh Sovereign held **approximately 845,000 gp** after the Marquis; this supersedes the much older 99,817 gp and 262,892 gp checkpoints. Do not add historical balances together. The approximate treasury remaining **before** pricing two custom rod clips is **544,000 gp**. Exact fractional currency is not reconciled.

| Confirmed purchase | Price (gp) | Item state |
|---|---:|---|
| Ring of Spell-Battle (Magic Item Compendium, p.127) | 12,000 | Equipped in combat as ring 2 |
| Staff of Necromancy (DMG, p.244), full 50 charges | 65,000 | Carried, 50/50 |
| Greater Metamagic Rod of Quicken | 170,000 | Carried, 3/day, spells up to 9th level |
| Normal Metamagic Rod of Maximize | 54,000 | Carried, 3/day, spells up to 6th level |
| **Confirmed expenditure** | **301,000** | No sale credits assumed |
| **Estimated remaining** | **544,000** | Before two rod-clip costs |

**Ring policy:** Keep the Ring of Protection +5 as ring 1. Ring of Spell-Battle is worn in ring 2 for combat; the custom Ring of Mortal Guise is retained, unequipped, and can replace Spell-Battle for social/infiltration scenes. No free-action ring swapping is implied.

**Staff charge table:** Cause Fear (1); Ghoul Touch (1); Halt Undead (1); Enervation (**2**); Waves of Fatigue (**2**); Circle of Death (**3**). The staff uses Malzareth's higher caster level and own spell DCs if applicable (D&D 3.5 staff rules). Never calculate Enervation as only 1 charge.

**Rod keychains:** Two custom rod-carrying chains/clips were requested. The price and any action-economy benefit have *not* been agreed, so no gp has been subtracted for them. The published *Wand Bracelet* costs 12,000 gp but only holds items up to 3 lb., while standard rods weigh about 5 lb.; it does not qualify as a RAW rod holder. For now the two accessories are mundane retention-only; do not imply magical quick draw.

**Historical charge warning:** Staff of Transmutation ~44/50; Wand of Orb of Force ~42/50; acid-effect wand ~48/50; Wand of Greater Invisibility ~21/50. These are historical checkpoint counts and were not refreshed or reset. Rod of Undead Mastery is retained, but its doubling of controlled undead HD applies while *held*; swapping to another rod can affect that capacity.

**Voss equipment resolution:** The user confirmed Malrec Voss wears a **Cloak of Resistance +5**. His level-19 saving throws use **Fort +20, Reflex +11, Will +26**. The earlier +3/+5 cloak ambiguity is closed; no new cloak purchase or deduction was recorded.

The v20 save migration updates only recognised older inventory entries, retains existing custom inventory and consumables, and creates a pre-v20 backup. The stored amount is an explicitly **approximate** post-Marquis checkpoint; do not mistake it for an exact coin audit.

## Level 19 advancement · 25 November 2026

Malzareth Vhane is **Wizard 5 / Master Specialist 10 / Abjurant Champion 4**, lich, **160 maximum HP** after rolling 10 on his d12. Natural Intelligence is 28 after two confirmed *Wish* inherent bonuses and the +6 Headband makes total INT **34** (+12). Effective wizard casting level **19**; new Abjurant Champion class feature **Arcane Boost**, BAB **+11/+6/+1**, base Will save improved to +15, Abjurant Armor grants *Shield* **+8 shield AC**. This level grants no general feat or ability-score increase.

The previous 8 unallocated level-18 skill points and new 11 level-19 points were assigned separately, respecting level-18 cap 21 and level-19 cap 22:

| Skill | Previous ranks | Level 18 +points | Level 19 +points | Current ranks |
|---|---:|---:|---:|---:|
| Concentration | 18 | +3 | +1 | 22 |
| Spellcraft | 20 | +1 | +1 | 22 |
| Knowledge (arcana) | 20 | +1 | +1 | 22 |
| Intimidate | 16 | +3 | — | 19 |
| Knowledge (the planes) | 18 | — | +4 (2 ranks cross-class) | 20 |
| Truespeak | 1 | — | +4 (2 ranks cross-class) | 3 |
| **Skill point totals** | | **8** | **11** | |

Standing skill priority for Malzareth at every future level: first raise **Spellcraft**, **Knowledge (arcana)** and **Concentration** toward their current class-skill rank caps, then allocate skill points to **Truespeak** (respecting its cross-class cost and cap). Only after these priorities are addressed should remaining points go to secondary skills. This is a priority order, not automatic reassignment of the already approved level-18/19 allocation.

**Spellbook:** The campaign's established convention of two spellbook additions per arcane prestige-class advancement grants **Plague of Undead** (Spell Compendium, Sor/Wiz 9, Necromancy [Evil]) and **Gate** (Player's Handbook, Sor/Wiz 9, Conjuration). These are spells **known**, not automatically prepared. Plague of Undead consumes 100 gp in black sapphires, raises skeletons/zombies at maximum hit points and shares animate dead's control pool; the Rod of Undead Mastery doubles the controlled HD limit while held, not the single-cast HD limit. Gate only costs 1,000 XP when **calling**, not for planar travel. The automatic two-spell benefit is an established campaign convention, not strict published prestige-class RAW.

The v19 JSON save migration (PWA cache v20) is guarded on all necessary spell and detail scripts. It preserves saved preparations, uses/charges, presets, spell tags, edited spells, journals, money and custom skill ranks unless a rank exactly matches the prior confirmed baseline. It boosts current HP only by the ten new HD points if max HP was exactly 150, retaining existing injury. It does not invent current XP or deduct the two previously cast *Wish* XP costs twice. A browser-local pre-v19 JSON backup is created on normal migration. Local Android data and live deployment must still be verified separately.

## Multi-tag spell filtering · 23 November 2026

The **Spellbook** now has editable, multi-label purpose tags, separate from the RAW spell school and spellbook/Mother Cyst category. Quick filters include **Offensive, Defensive, Buff, Damage, Control, Summon, Negative Energy, Kill, True Name, Undead, Teleportation and Utility**. Expand **More tags and custom tags** for Debuff, Mobility, Divination, Healing, Countermagic, Illusion, Transformation, Creation, Barrier, Planar, Necrotic Cyst, Ritual, custom tags and **Untagged**.

- Select multiple chips. **Any (OR)** returns spells with at least one selected tag; **All (AND)** requires every selected tag.
- Purpose tags combine with the existing search, level, school, spellbook/Mother Cyst and favourites filters.
- The tags on each spell card are clickable filters; the first five display on the card.
- Use **View / edit → Spell purpose tags** to tick multiple labels or enter comma-separated custom labels, then save. **Use catalogue suggestions** is optional, requires confirmation before overwriting nonempty choices, and never silently invents categories for unknown names.
- For the existing catalogue, a conservative curated index covers **214 of 216 spells**. *Adamantine Wings* and *Soul’s Treasure Lost* remain deliberately untagged until their precise functions are reviewed.
- **Save schema v18** adds a `tags: string[]` property per spell. Existing v17/local JSON saves receive seeded labels during the non-destructive migration; already saved explicit tag arrays (including `[]` when a player deliberately clears tags) are preserved. Preparation, casts, presets, spell descriptions, levels and character state are not reset.
- JSON exports/imports include tags; Android/PWA offline cache is **v19** and includes `spell-tags.js`. After publishing, refresh once while online to acquire the update.
- Regression checks: `node --test tests/spell-tags.test.cjs`.

These tags are a **player indexing aid**, not additional D&D spell descriptors or rules adjudications. School, saves, ranges and spell descriptions are still recorded independently.

## Level 18 update · 23 November 2026

- Malzareth: Wizard 5 / Master Specialist 10 / Abjurant Champion 3, lich, 150 HP, INT 30, DEX 18, effective wizard casting 18, caster level 19 general / 21 Necromancy.
- Recorded level 14–18 additions: Awaken Undead, Limited Wish, Greater Planar Binding, Avascular Mass, Whirling Blade, Wraithstrike, Wish, Time Stop, Foresight, Unname. Quicken Spell and Combat Casting are included in the feat record.
- One cross-class Truespeak rank at a cost of two skill points is allocated. Eight level-18 skill points remain open. Unname requires a researched personal truename and a Truespeak check.
- The missing records from the user's 21 November JSON export were merged into the catalogue, retaining spelling uncertainties. Existing preparations, presets, edited spells, inventory, journal and consumables are preserved during migration. The app does not invent earned XP, current cash or a new in-game date. The final v12 migration also upgrades the confirmed Cloak of Resistance +5 and Amulet of Natural Armour +3, adds the Orange Prism Ioun Stone, Belt of Battle, Third Eye Clarity, Boots of Speed and fifth-level Pearl of Power, and reconciles standard AC, initiative, and saves only where the previous values match unchanged old gear. The PWA cache is v13. Migration tests confirmed compatibility from v9 and v11 without resetting preparations, presets, personal notes, currency or spent charges.

## Level 7–8 transcription archive · 23 November 2026

Malzareth's previously approved two-year study grants all eligible level-7 and level-8 wizard spells in the approved books, excluding his prohibited **Enchantment** and **Evocation** schools. The standalone `bulk-level78.js` records the class spell lists from the Player's Handbook, Spell Compendium, Complete Mage, Complete Arcane, Libris Mortis, Player's Handbook II, Frostburn, Tome of Magic, Stormwrack, Book of Vile Darkness, and Magic of Incarnum. Names, levels, schools, book provenance, and honest original quick-reference placeholders are included; exact spell text, costly material components and some special casting conditions are intentionally not reproduced. The lists are a catalog of what he learned, not a daily preparation preset.

Version 13 will import **only missing seventh/eighth-level spell records**, leaving local preparations, spent slots, presets, item charges, custom edits and coins unchanged. Migration is gated on the full catalogue being loaded, and the original local JSON is backed up under `ashen-crown-grimoire-v1-pre-v13-backup`. No further transcription cost is applied because the earlier downtime payment is already recorded.

## Features
- Reconstructed campaign spell ledger: 44 original entries, 6 from later post-lich preparation, and all 10 Mother Cyst spells. Two simple categories: Spellbook and Mother Cyst. Original provenance is preserved in each spell's Source field.
- Search, level/status filters, favourites, editable spell descriptions and reference fields.
- Daily preparation for each level, multiple copies of a spell, cast tracking, a one-tap **Rest** action that restores expended spells, and **Unprepare all** with confirmation.
- **Named preparation presets**: save, load and delete custom spell loadouts, plus a built-in preset from the last recorded campaign preparation. Presets are included in JSON backups.
- **Automatic D&D 3.5 daily spell slots** for a wizard specialist: set Intelligence and wizard-equivalent spellcasting level (default: Wizard 5 + Master Specialist 7 = level 12); the tool combines base wizard progression, bonus spells from Intelligence, and one specialist slot for each available spell level. Manual override remains available, and existing custom slot totals are preserved when upgrading.
- **Dynamic save DCs** for each spell's level and school, using adjustable Intelligence and Necromancy bonus (defaults INT 30, bonus +2). These values are potential DCs, applicable only to spells that actually allow a saving throw.
- **Melee/ranged touch attacks and common effect rolls**: dynamically apply attack bonuses, Haste and Spectral Hand, with labelled damage/penalty/temporary HP effects and custom stored roll presets.
- **Spell descriptions**: original concise D&D 3.5 descriptions for all 60 starter spells; personal edits take priority. Spell cards include a one-tap Roll effect shortcut when applicable.
- **Offline three-dimensional dice roller**: animated d4, d6, d8, d10, d12, d20 and d100 visualizations; rolls support up to 10 dice plus a modifier. Random results are generated independently of the animation using the browser's secure randomness; dice visuals are not a physics simulation.
- **Character Folio** (new): mobile-friendly four-section character sheet (Overview, Inventory, Feats & Traits, Audit), seeded from the most recent post-lich sheet and recent campaign events.
- **Combat/vitals:** live HP and temporary HP, damage/recovery buttons, action points, AC/touch/flat-footed AC with Greater Mage Armour/Shield/Haste toggles, BAB, attacks, initiative, saves and lich touch/fear DCs derived from HD and Charisma.
- **Item inventory:** worn, carried, stored and unidentified equipment, quantities, locations, values, weights, magical charges, and quick charge/consumable deduction; Type IV Bag of Holding capacity and known-weight tally. Staff and wand charges can be edited directly.
- **Feats & powers:** nine recorded feats, lich traits, Lesser Tiefling powers and Master Specialist features. Add/edit/delete entries, track limited daily uses and reset those uses on rest.
- **Currency and audit:** separate recent liquid funds and earlier Seventh Sovereign treasury (not additive until reconciled), editable coins, experience and XP threshold, notes for open rulings and a checklist for missing character details.
- **Skills, saving throws and initiative:** roll a labelled d20 check directly from the Dice tab using Malzareth's post-lich skill ledger. Change ranks, situational or item bonuses and relevant ability scores; checks update automatically. Situational quick checks include Spellcraft when learning Necromancy, scroll Use Magic Device, and the Ring of Mortal Guise.
- **Alacritous Cogitation (Complete Mage p. 37):** choose which level of spell slot to reserve instead of permanently dedicating a sixth-level slot. The reservation blocks normal preparation; choose a known spell of that level or lower, then spend the feat once per day. Rest restores its use; prepared-spell presets also remember the reserved level.
- Private campaign journal.
- Saves locally in your browser. Export/import JSON to back up or transfer data between devices.
- Offline-ready progressive web app (PWA) with a home-screen icon when served from HTTPS or localhost.

**Important:** The later six spells are known from *prepared-spell records*. Four Mother Cyst spells were prepared in the campaign; all ten are now supplied by the Mother Cyst feat (Libris Mortis), whose prepared casters can prepare the spell family without consulting a spellbook. These categories are labelled separately. The initial preparation list is the **last recorded snapshot**, not a guarantee of the current in-game day or unused spell slots. Update it as you play.

## Spell slots and D&D 3.5 rules

From **Notes → Spellcasting settings**, enter the Intelligence score and
wizard-equivalent spellcasting level. The default is level 12 (Wizard 5 +
Master Specialist 7). Daily slots recalculate automatically; an Intelligence
change also updates saving throw DCs.

The default 4th-level calculation is **3 base wizard slots + 2 Intelligence
bonus slots + 1 Necromancy specialist slot = 6**. At effective wizard level
13 and Intelligence 30, this becomes **4 + 2 + 1 = 7**. Level 12 / INT 30
provides 45 daily slots total: `5 / 8 / 8 / 7 / 6 / 6 / 5` for levels 0–6.

Select **D&D 3.5 slot breakdown** to see the base, Intelligence, and
specialist components for each spell level. Uncheck **Automatically calculate
spell slots** to use manual overrides (useful for house rules or other
temporary bonuses). Re-enabling automatic mode restores the calculated
limits. The calculation is based on standard wizard progression through level
20; it does not automatically model other classes, metamagic, domains or
non-standard advancement.

**Existing prepared spells are never silently deleted** when Intelligence or
effective wizard level changes. If a decrease leaves too many spells
prepared, the app displays a warning so you can unprepare the excess.
One slot at each available spell level remains a specialist slot and must be
used for a Necromancy spell; the preparation view warns when no such spell is
prepared at that level.

A previously saved manual slot total that differs from RAW will stay in
manual mode after upgrading. Slot settings, presets and spells remain in
local browser storage and JSON backups.

## Rollable character skills

Open **Dice → Skills & quick checks** to roll d20 checks for Malzareth's recorded skills. Entries are seeded from the latest post-lich character sheet (28 Tarsakh 1373 DR, level 12) including ranks, base totals, racial and item bonuses. Quick buttons include Initiative (+7), Fortitude (+6), Reflex (+9) and Will (+13); special contexts provide Spellcraft +32 to learn Necromancy, Use Magic Device +13 to activate scrolls, and Disguise +15 when Ring of Mortal Guise applies (all at the original stats and ranks).

Use the edit pencil to change ranks or additional item/situational bonuses. INT-based skill checks update when you change Intelligence in Notes; STR, DEX, WIS and CHA can also be edited in Notes → Skill check ability scores. A situational modifier at the top of the skill list applies to the next skill or quick check, without permanently modifying the ledger.

**Trained-only skills without ranks are marked unavailable** until you allocate ranks. *Speak Language* has no d20 check. Bonuses reflect the documented character sheet, and the app does not calculate or enforce a level-up skill-point budget, cross-class restrictions, armor check penalties, or all circumstance modifiers; use the editable modifiers where needed. Natural 1 and natural 20 do not automatically fail/succeed on skill checks under standard D&D 3.5 rules.

Skill edits and ability changes are stored in the same local grimoire backup.

## Alacritous Cogitation

In **Prepared spells**, select the level of the open slot you want to leave for **Alacritous Cogitation**. The starting reservation is level 6, consistent with the latest campaign preparation; you can move it to any level with an available slot, including newly unlocked higher-level spells. A reserved slot is shown separately in the preparation list and cannot hold another prepared spell.

Select a known spell of that level or lower, then press **Cast with feat**. This consumes that reserved slot and the once-per-day feat use. It is a full-round action under *Complete Mage*, page 37. The Rest button makes the feat ready again while keeping the chosen slot reserved. Presets capture the reserved level. The app preserves existing prepared spells even if a level-up correction leaves too few slots, showing an overbooked warning rather than deleting them.

A specialist wizard must still fill one specialist slot per level with a Necromancy spell; the app warns about levels without any prepared Necromancy spell. Track specialist-versus-general spell slots yourself when making choices.

## Character Folio (Version 4)

Choose **Character** in the bottom navigation. Its four internal tabs are:
- **Overview**: name, ancestry, class levels, alignment, XP, ability modifiers, HP, AC and buffs, base attacks, saves, initiative, lich touch DC, speed, DR, conditions, and editable base combat stats.
- **Inventory**: an editable ledger of each item, equipped or stored location, quantity, remaining charges, optional weight/value and notes. Searchable, with quick decrements for expendable potions and charged wands. Coin totals and fortress treasury are separate fields with an explicit non-additive reconciliation warning.
- **Feats & Traits**: all nine feats on the latest character sheet, plus undead, lich, racial and Master Specialist abilities; supports notes, additions/deletions, and limited daily-use counters.
- **Audit**: reviewable, tickable issues from the last character-sheet reconciliation, plus automatically surfaced omissions (unidentified loot, unknown languages and item weights, outstanding XP).

The initial character record is grounded in the latest **Malzareth_Vhane_Updated_Character_Sheet_v3.pdf** and 16 November 2026 campaign developments. Equipment includes Headband of Intellect +4, Ring of Protection +3, Cloak of Resistance +3, Ring of Mortal Guise, Amulet of Natural Armour +2, Staff of Transmutation, recently bought Wand of Orb of Force (CL 7, 50 charges when acquired), and recently bought Type IV Bag of Holding (1,500 lb/250 cubic feet; bag weighs 60 lb). The old Ring of Mind Shielding and unidentified captured gear are recorded as stored/unverified, not equipped.

**Recorded combat starting values:** 95 HP, AC 23 (touch 16, flat-footed 20), initiative +7, BAB +5, Fort +6, Reflex +9, Will +13. The lich touch, paralysis and fear save DCs start at 21. Feats and abilities come from the last approved sheet; there is no additional feat or bonus automatically inferred.

**Wealth caution:** a remaining liquid amount of **11,755 gp, 4 sp, 3 cp** was reported after the recent Suzail shopping, while **35,543 gp** was the previously reported fortress treasury. These have not been proven to be independent balances. They are shown in separate fields and **should not be added together** until reconciled. Black onyx worth 550 gp and the Staff of Transmutation 50 charges are older itemised values and may be stale; the new Wand of Orb of Force was recorded at 50 charges upon purchase.

The new character data is stored in the **same local save and JSON export** as spells, skill edits, and presets. Older version-6 local records receive a default Character Folio without overwriting existing spell preparation, favourites, skill ranks or journal. Changing one item’s equipped flag does **not** automatically update AC, spell slots, saving throws or weapon attack modifiers; adjust those base combat fields and relevant ability scores to reflect gear changes.

### Remaining gaps to verify

The Audit tab tracks the most important omissions. Until reconciled, the application does **not** claim these are settled:
- Lich +4 level adjustment and the campaign's LA buyoff/XP policy; XP 71,975/78,000 is the last printed value, not necessarily today's.
- Whether action points (seven previously noted), liquid money, fortress treasury, black onyx and equipment charges reflect the latest transactions.
- Proper identification/ownership/location of captured scrolls, potions, ceremonial staff, breastplate and documents.
- Full written spellbook transcription; languages and appearance/deity information; remaining weapon profiles, spell resistance (if any), armour-check penalties, and carry weight for items without recorded weights.
- Buff durations and item/feat prerequisite interactions; the specialist Necromancy slot is advisory rather than strictly allocated to an individual tagged slot.
- Campaign-approved skill ranks include four more points than the simple historical skill-point reconstruction; the application does not alter those ranks.

### Updating health or resources

Use **Character → Overview** to apply damage (subtracting temporary HP first), restore hit points or toggle combat buffs. The Haste toggle applies +1 to attack rolls, Reflex saves and dodge AC, and movement speed +30 ft (maximum double), in addition to tracking its availability. Dice-tab quick saving throws and Initiative stay aligned with the Character sheet's live stats. The **Rest** button in Prepared spells restores spell readiness, Alacritous Cogitation and tracked daily powers, **but it does not automatically heal** Malzareth: undead do not benefit from ordinary positive-energy healing effects.

Use **Character → Inventory** to update consumables and item charges. For component stocks such as black onyx tracked by aggregate GP value, edit the stock directly rather than subtracting one item.

## Touch attacks, spell effects and descriptions (Version 5)

Open **Dice → Combat quick rolls** for immediate:
- **Melee touch** (currently +5) and **ranged touch** (currently +8) d20 checks, both calculated from BAB and STR/DEX respectively, plus the Character Folio's situational attack modifiers and Haste. Spectral Hand adds +2 to its melee touch attack when that option is enabled.
- **Common labelled effect rolls**. Examples at level 12: Lich damaging touch 1d8+5; Orb of Force 10d6 force; Wand of Orb of Force CL 7: 7d6 force; Staff Disintegrate CL 13: 26d6 on failed save or 5d6 on successful save; Enervation 1d4 negative levels; Ray of Enfeeblement 1d6+5 Strength penalty; Necrotic Bloat 10d6 (half vile); Undead Torch +2d6 per undead melee hit; False Life 1d10+10 temporary HP; Spectral Hand invests 1d4 HP.
- **Custom saved formulas** (for your own equipment, potions, or additional spells): one term, 1–40 dice, d3/d4/d6/d8/d10/d12/d20/d100 plus a signed modifier such as `2d6+3`. These are included in the existing JSON backup.

Touch attack rolls and damage or other effect rolls are **separate actions**. Rolling damage does not establish a hit, select targets, spend spell slots, deduct charges or apply HP damage; use the relevant Prepared and Inventory controls for those changes. Dice history labels each kind of outcome so non-HP effects such as Strength penalties are not mistaken for damage. Natural 1/20 apply their normal attack-roll rules, but are not automatic successes or failures on damage or skill checks.

The 3D animation is illustrative and uses cryptographic randomness; for `d3`, the display uses a d6 visual while calculating the correct 1–3 result.

**Spellbook** now includes short, original rule summaries for **all 60 starter spells**. The reference notes are drawn from D&D 3.5 rules, and intentionally avoid reproducing full copyrighted spell text. They are a play aid, not definitive rules text. Your own descriptions take precedence. Older browser saves with blank descriptions display reference notes without modifying the underlying empty field, and existing custom descriptions remain untouched. A spell with a supported dice effect also has a **Roll effect** shortcut on its card, which takes you to Dice.

Some rules are edition- and source-specific: this Grimoire uses the Spell Compendium **Undead Torch** (+2d6) rather than the older Magic of Faerûn version (+2d4), and *Animate Dread Warrior* comes from a 3.0 source (Unapproachable East), requiring DM approval under 3.5. Other non-core spells should be checked against the campaign's chosen sourcebook edition.

## Run it locally

Option A — easiest desktop preview: open `index.html` in a browser. Most features work, but the offline worker/PWA install needs a local web server or HTTPS.

Option B — proper local hosting: in this directory run:

```bash
python -m http.server 8000
```

Then browse to **http://localhost:8000/** on that computer. (You can also use `python3`.)

For another device on the same Wi-Fi, you can access `http://YOUR-COMPUTER-IP:8000/` but browser installation/offline features typically require HTTPS or localhost. GitHub Pages solves that.

## Publish via GitHub Pages

1. Create a new GitHub repository, e.g. `malzareth-grimoire`.
2. Upload **everything in this folder** (including `icons/`, `.nojekyll`, `manifest.webmanifest` and `sw.js`) to the repository's **root**, not an enclosing folder.
3. In the repository choose **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**; use `main` and `/(root)`, then **Save**.
5. Your site should be reachable at `https://YOUR-USERNAME.github.io/malzareth-grimoire/` once GitHub publishes it.
6. Open that address on your phone and use its browser's **Add to Home Screen** / **Install app** option, if supported.

GitHub Pages serves the code publicly, but **your edits and journal stay in that browser's local storage**; uploading a new version of the site does not sync your devices. Use **Notes & data → Export backup**, then **Import backup** on your other device.

## Editing the starter record

Edit `data.js` to change the source lists for newly opened browsers. **Existing browsers preserve their saved progress** in `localStorage`. Version 6 preserves earlier migrations and also adds skill editing and the selectable Cogitation reservation without resetting prepared spells, notes or custom edits. Future changes to default lists generally require a manual reset after exporting a backup. For routine additions, edit the spellbook *inside the app* instead.

## Mobile updates and cached versions

The v9 service worker uses **network-first** fetching when online, including the dice, skill, character, combat and spell-reference modules. Previously,
a cache-first worker could keep serving old JavaScript and default spells on an
installed phone. An updated application now rechecks GitHub Pages when online
and still falls back to its local cache offline.

If a phone still shows an old spell list:
1. Ensure the phone has an internet connection.
2. Open the GitHub Pages URL in its normal browser, refresh twice, and search
   for **Necrotic Awareness**.
3. Fully close and reopen any installed home-screen app.
4. If it remains old, export a JSON backup from that exact app/browser before
   clearing website storage. On some platforms the installed app and browser
   use separate local storage.

Version 8 of the saved-data format retains the Mother Cyst defaults and migrates existing
local saves, retaining custom spells, preparation, cast state and notes. It also migrates existing record statuses into two categories, and adds an editable DC formula and local presets.
Existing spellbook data remains local to the browser/app that created it.

## Requirements and limitations

- Entirely client-side, with no online sync, accounts or database.
- Browser data can be erased by clearing site data or switching browsers/devices; **make regular JSON backups**.
- This is a campaign ledger, **not an authoritative transcription of rulebook text**. Spell rules/effects can be added to each entry as you check your D&D books.
- Save DCs and Intelligence-based skill checks update from the current Intelligence score; skill rank and ability-score changes are editable. Additional buffs, special circumstances, armor penalties or unusual class features may need manual adjustments.
- Works best on recent Chrome, Edge, Safari, and Firefox; browser support for PWA installation varies.