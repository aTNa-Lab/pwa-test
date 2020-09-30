/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/pwa-test/precache-manifest.8941fb7c5827335e4867592708cfebb9.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/pwa-test/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){var n=["/src/pages/offline.html","/src/pages/404.html"];self.addEventListener("install",(function(e){console.log("Attempting to install service worker and cache static assets"),e.waitUntil(caches.open("pages-cache-v2").then((function(e){return e.addAll(n)})))})),self.addEventListener("activate",(function(e){console.log("Activating new service worker...");var t=["pages-cache-v2"];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===t.indexOf(e))return caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){console.log("Fetch event for ",e.request.url),e.respondWith(caches.match(e.request).then((function(t){return t?(console.log("Found ",e.request.url," in cache"),t):(console.log("Network request for ",e.request.url),fetch(e.request).then((function(t){return 404===t.status?caches.match("pages/404.html"):caches.open("pages-cache-v2").then((function(n){return n.put(e.request.url,t.clone()),t}))})))})).catch((function(e){return console.log("Error, ",e),caches.match("pages/offline.html")})))}))}]);