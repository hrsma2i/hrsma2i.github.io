self.addEventListner('install', function(e) {
	console.log('[ServiceWorker] Install');
});

self.addEventListner('activate', function(e){
	console.log('[ServiceWorker] Activate');
});

self.addEventListner('fetch', function(e) {});