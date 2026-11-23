/* Network-first while online; cached grimoire remains available offline.
   The old cache-first strategy could indefinitely serve outdated spell lists
   on installed phones even after GitHub Pages had published new files. */
const CACHE = 'malzareth-grimoire-cache-v18';
const ASSETS = [
  './','./index.html','./styles.css','./data.js','./bulk-level78.js','./slots.js','./app.js',
  './manifest.webmanifest','./icons/grimoire.svg','./dice.js','./skills.js','./sheet-data.js','./sheet.js','./spell-reference.js','./spell-details.js','./spell-facts.js','./combat.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Bypass the browser's HTTP cache when installing a new app version.
    await cache.addAll(ASSETS.map(path => new Request(path, {cache:'reload'})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith('malzareth-grimoire-cache-') && name !== CACHE)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin ||
      !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  event.respondWith((async () => {
    try {
      // Check published files on each online visit, but keep them offline too.
      const response = await fetch(request, {cache:'no-cache'});
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
      }
      return response;
    } catch (error) {
      return await caches.match(request) ||
        (request.mode === 'navigate' ? await caches.match('./index.html') : null) ||
        Response.error();
    }
  })());
});
