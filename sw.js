const CACHE_NAME = 'bhopal-info-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch ko bilkul khali chhod de - Install ke liye bas event chahiye
self.addEventListener('fetch', (event) => {});
