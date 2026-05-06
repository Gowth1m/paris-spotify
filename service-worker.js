const CACHE_NAME = 'pari-spotify-v3';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force the new version to take over immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
    .then(() => self.clients.claim()) // Force all open tabs to use the new version
  );
});

self.addEventListener('fetch', event => {
  // Bypass Service Worker for external images/APIs to prevent CORS caching bugs
  if (event.request.url.startsWith('http') && !event.request.url.startsWith(self.location.origin) && !event.request.url.includes('cdnjs')) {
    return; // Let the browser handle external requests normally
  }

  // Network First strategy for everything: ensures updates push through instantly!
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});