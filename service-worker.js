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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a9ad7186d668528581b6f5f9e578ce8b"
  },
  {
    "url": "favicon.ico",
    "revision": "2aacd73e40d63b6716b68063318c3e7c"
  },
  {
    "url": "index.css",
    "revision": "7fe5a734d1a899cedf0886dd67d9cd83"
  },
  {
    "url": "index.html",
    "revision": "5e1379699d687e49749e2879c8d5d249"
  },
  {
    "url": "index.js",
    "revision": "a5366caa22291351770fa2e175be2db1"
  },
  {
    "url": "README.md",
    "revision": "729ac7c8d90c252c3aadf391074f3868"
  },
  {
    "url": "workbox-config.js",
    "revision": "5fee5a9cf219335a8f572478b432f31f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
