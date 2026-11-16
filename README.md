# Malzareth's Grimoire · The Ashen Crown

A small, offline-ready, mobile-first D&D 3.5 spellbook built with **plain HTML, CSS and JavaScript**. There are no libraries, accounts, logins or build tools.

## Features
- Reconstructed campaign spell ledger: 44 original confirmed entries, 6 from subsequent post-lich preparation, and 4 from the Mother Cyst spell family.
- Search, level/status filters, favourites, editable spell descriptions and reference fields.
- Daily preparation for each level, multiple copies of a spell, cast/restored tracking, editable daily slots, and quick clear/reload of the last recorded spell list.
- Private campaign journal.
- Saves locally in your browser. Export/import JSON to back up or transfer data between devices.
- Offline-ready progressive web app (PWA) with a home-screen icon when served from HTTPS or localhost.

**Important:** The later six and four Mother Cyst spells are known from *prepared-spell records*, rather than a confirmed physical spellbook transcription. They are labelled accordingly. The initial preparation list is the **last recorded snapshot**, not a guarantee of the current in-game day or unused spell slots. Update it as you play.

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

Edit `data.js` to change the source lists for newly opened browsers. **Existing browsers preserve their saved progress** in `localStorage`; use “Reset to campaign starting record” after exporting a backup to reload your updated starter record. For routine additions, edit the spellbook *inside the app* instead.

## Requirements and limitations

- Entirely client-side, with no online sync, accounts or database.
- Browser data can be erased by clearing site data or switching browsers/devices; **make regular JSON backups**.
- This is a campaign ledger, **not an authoritative transcription of rulebook text**. Spell rules/effects can be added to each entry as you check your D&D books.
- The initial save DCs are set for the campaign's recorded Intelligence 30 and necromancy feats. If the character's statistics change, update the UI's hard-coded save DC reference in `index.html`/`app.js` in a future revision.
- Works best on recent Chrome, Edge, Safari, and Firefox; browser support for PWA installation varies.