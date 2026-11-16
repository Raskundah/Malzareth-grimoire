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

Edit `data.js` to change the source lists for newly opened browsers. **Existing browsers preserve their saved progress** in `localStorage`. Version 2 automatically adds the six newly included Mother Cyst spells to older local saves without resetting prepared spells, notes or custom edits. Future changes to default lists generally require a manual reset after exporting a backup. For routine additions, edit the spellbook *inside the app* instead.

## Mobile updates and cached versions

The v5 service worker uses **network-first** fetching when online, including the dice module. Previously,
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

Version 5 retains the Mother Cyst defaults and migrates existing
local saves, retaining custom spells, preparation, cast state and notes. It also migrates existing record statuses into two categories, and adds an editable DC formula and local presets.
Existing spellbook data remains local to the browser/app that created it.

## Requirements and limitations

- Entirely client-side, with no online sync, accounts or database.
- Browser data can be erased by clearing site data or switching browsers/devices; **make regular JSON backups**.
- This is a campaign ledger, **not an authoritative transcription of rulebook text**. Spell rules/effects can be added to each entry as you check your D&D books.
- The initial save DCs are set for the campaign's recorded Intelligence 30 and necromancy feats. If the character's statistics change, update the UI's hard-coded save DC reference in `index.html`/`app.js` in a future revision.
- Works best on recent Chrome, Edge, Safari, and Firefox; browser support for PWA installation varies.