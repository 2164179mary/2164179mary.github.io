const staticAssets = [
	'index.html',
	'./',
	'',
	'./script/cafe.json',
	'./script/app.js',
	'./script/indexeddb.js',
	'./CSS/fonts/Quesha.ttf',
	'./CSS/index.css',
	'./cafeImages/arca.png',
    './cafeImages/beanstalk_logo.png',
    './cafeImages/Cafe-in-the-Sky-Baguio-Main.png',
    './cafeImages/gossip.jpg',
    './cafeImages/logo.png',
    './cafeImages/sabel.jpg',
    './icons/cashfe-72x72.png',
    './icons/cashfe-96x96.png',
    './icons/cashfe-128x128.png',
    './icons/cashfe-144x144.png',
    './icons/cashfe-152x152.png',
    './icons/cashfe-192x192.png',
    './icons/cashfe-384x384.png',
    './icons/cashfe-512x512.png',
    'manifest.json',
    'sw.js'

];
self.addEventListener('install', async event => {
    const cache = await caches.open('index-static');
    cache.addAll(staticAssets);
});
self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req); 
}