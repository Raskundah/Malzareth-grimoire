/* Simple offline-first cache for the grimoire's static assets. */
const CACHE='malzareth-grimoire-cache-v1';
const ASSETS=['./','./index.html','./styles.css','./data.js','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event => {
  event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('malzareth-grimoire-cache-')&&name!==CACHE).map(name=>caches.delete(name)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});