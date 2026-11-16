# Malzareth's Grimoire · The Ashen Crown

A small, offline-ready, mobile-first D&D 3.5 spellbook built with **plain HTML, CSS and JavaScript**. There are no libraries, accounts, logins or build tools.

## Features
- Reconstructed campaign spell ledger: 44 original entries, 6 from later post-lich preparation, and all 10 Mother Cyst spells. Two simple categories: Spellbook and Mother Cyst. Original provenance is preserved in each spell's Source field.
- Search, level/status filters, favourites, editable spell descriptions and reference fields.
- Daily preparation for each level, multiple copies of a spell, cast tracking, a one-tap **Rest** action that restores expended spells, and **Unprepare all** with confirmation.
- **Named preparation presets**: save, load and delete custom spell loadouts, plus a built-in preset from the last recorded campaign preparation. Presets are included in JSON backups.
- **Automatic D&D 3.5 daily spell slots** for a wizard specialist: set Intelligence and wizard-equivalent spellcasting level (default: Wizard 5 + Master Specialist 7 = level 12); the tool combines base wizard progression, bonus spells from Intelligence, and one specialist slot for each available spell level. Manual override remains available, and existing custom slot totals are preserved when upgrading.
- **Dynamic save DCs** for each spell's level and school, using adjustable Intelligence and Necromancy bonus (defaults INT 30, bonus +2). These values are potential DCs, applicable only to spells that actually allow a saving throw.
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

Use **Character → Overview** to apply damage (subtracting temporary HP first), restore hit points or toggle combat buffs. The **Rest** button in Prepared spells restores spell readiness, Alacritous Cogitation and tracked daily powers, **but it does not automatically heal** Malzareth: undead do not benefit from ordinary positive-energy healing effects.

Use **Character → Inventory** to update consumables and item charges. For component stocks such as black onyx tracked by aggregate GP value, edit the stock directly rather than subtracting one item.

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

The v8 service worker uses **network-first** fetching when online, including the dice, skill and character folio modules. Previously,
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

Version 7 of the saved-data format retains the Mother Cyst defaults and migrates existing
local saves, retaining custom spells, preparation, cast state and notes. It also migrates existing record statuses into two categories, and adds an editable DC formula and local presets.
Existing spellbook data remains local to the browser/app that created it.

## Requirements and limitations

- Entirely client-side, with no online sync, accounts or database.
- Browser data can be erased by clearing site data or switching browsers/devices; **make regular JSON backups**.
- This is a campaign ledger, **not an authoritative transcription of rulebook text**. Spell rules/effects can be added to each entry as you check your D&D books.
- Save DCs and Intelligence-based skill checks update from the current Intelligence score; skill rank and ability-score changes are editable. Additional buffs, special circumstances, armor penalties or unusual class features may need manual adjustments.
- Works best on recent Chrome, Edge, Safari, and Firefox; browser support for PWA installation varies.