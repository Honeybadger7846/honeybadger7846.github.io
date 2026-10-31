// Offline support: pages are fetched network-first, everything else
// (hashed JS/CSS, icons, wasm) is served from the cache and refreshed in the background.
const CACHE = 'venue-map-studio-v17';
// The app's own folder (e.g. /<repo>/ on GitHub Pages), so it works from any path.
const ROOT = self.registration.scope;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll([ROOT])));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  const store = (res) => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(request, copy));
    }
    return res;
  };
  if (request.mode === 'navigate') {
    e.respondWith(fetch(request).then(store).catch(() => caches.match(request).then((r) => r || caches.match(ROOT))));
    return;
  }
  e.respondWith(
    caches.match(request).then((cached) => {
      const fresh = fetch(request).then(store);
      return cached || fresh;
    }),
  );
});
