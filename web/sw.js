/* eslint no-undef: 0 */

(function () {
  const CACHE_NAME = 'cache-name';
  const urlsToCache = [
    '/',
    '/index.html',
    '/style/base.css',
    '/js/app.js'
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
    );
  });
})();
