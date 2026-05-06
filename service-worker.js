const CACHE_NAME = 'pari-spotify-v1';
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Bypass Service Worker for external images/APIs to prevent CORS caching bugs
  if (event.request.url.startsWith('http') && !event.request.url.startsWith(self.location.origin) && !event.request.url.includes('cdnjs')) {
    return; // Let the browser handle external requests normally
  }

  // Network first for mp3s so big files don't fail, cache first for app UI/Styling
  if (event.request.url.endsWith('.mp3')) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
  } else {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  }
});