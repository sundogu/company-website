importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/24696c304329304b0e40.js",
    "revision": "1c3cc01764d5819265c56d6ef7ebcaae"
  },
  {
    "url": "/_nuxt/2572977ee4807cc92354.js",
    "revision": "ab65db988189037497546c87397106b5"
  },
  {
    "url": "/_nuxt/58e91c248e326d17e399.js",
    "revision": "7a7e92f9131f17ff1dedbdc39b849c49"
  },
  {
    "url": "/_nuxt/85a70d6e796d6e8c19ec.js",
    "revision": "009250ce4779697690893f5632a840c9"
  },
  {
    "url": "/_nuxt/95cba49b1bfe25b0b850.js",
    "revision": "b929eb47fa7c1922c4c2e285c701a86c"
  },
  {
    "url": "/_nuxt/9e545b621ea471a0987c.js",
    "revision": "ba3afb2093150ec3659dcc8e17695b1e"
  },
  {
    "url": "/_nuxt/b921edd3cccb8a0f8c84.js",
    "revision": "22240070bfdfbc7434ab36a5db9bd598"
  },
  {
    "url": "/_nuxt/c6d8af811b29c8e2a00c.js",
    "revision": "a4c15ca1608e0fb12db11463358b145e"
  },
  {
    "url": "/_nuxt/ccd9d37c967aa1aebd06.js",
    "revision": "dfdcd9b49a999ab81b3a011ef39620eb"
  },
  {
    "url": "/_nuxt/e04e0cc1892c65395ba7.js",
    "revision": "8179a70828ddda04aa6ef64898b02582"
  },
  {
    "url": "/_nuxt/e363fcca21ad482820c7.js",
    "revision": "81f04f836d49ecd9c8ae06c741196b5c"
  },
  {
    "url": "/_nuxt/e84b85b7fd7a36ca2f11.js",
    "revision": "e758322924ebc2957d52acadf567cf25"
  },
  {
    "url": "/_nuxt/f2a1db58b5cb28b19d08.js",
    "revision": "9ce0e237aeeea792ce88bb636605349f"
  },
  {
    "url": "/_nuxt/fac5421a60660db35395.js",
    "revision": "0c02db9cb021f57c91e0ee32b5376ab4"
  }
], {
  "cacheId": "systemweb-twentynineteen",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
