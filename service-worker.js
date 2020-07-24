/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/blog2020/05/15/ArrayBuffer/index.html","75ca13c182c4b438bed0d980f5a11c52"],["/blog2020/05/28/Http--超文本传输协议/index.html","11dc60af4bab05fca8e859ad1bb7c0e1"],["/blog2020/05/28/Markdown/index.html","693c1833afc676e695c1f13f749701f2"],["/blog2020/05/29/koa-洋葱模型/index.html","017f6069ff103644ec97c881bb9deeb1"],["/blog2020/05/29/lodash/index.html","541b3218b99eb448b515a174a417de98"],["/blog2020/06/10/CSS预处理器/index.html","e0faed24c71a8157a6dd60e1e02c7dda"],["/blog2020/06/16/Typescript高级类型、范型/index.html","a2e03fe39da6604b74a9c89c8f5dd627"],["/blog2020/07/02/websocket/index.html","ac833d30e139a279f99d40ac349243e0"],["/blog2020/07/02/webworker/index.html","aa5292e57930898f62d1bb209193f57e"],["/blog2020/07/21/closure/index.html","6099990487f0b87a131a954700c85685"],["/blogarchives/2020/05/index.html","5d36516b93bbcace42feacfe2e8044ae"],["/blogarchives/2020/06/index.html","7062fd473fec5bde682132699585523b"],["/blogarchives/2020/07/index.html","12efe7eb6e11631e3c456e89e00939ac"],["/blogarchives/2020/index.html","f20792136b146a2854b4b34a3c803e5f"],["/blogarchives/index.html","6a83a8f65d927c51402838bcb2cd2c77"],["/blogcategories/pieces/index.html","8c350e811f910fef4df27e970a56d910"],["/blogcss/index.css","c653c72f1ca9f363e8fc288614111af0"],["/blogcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/blogimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blogimg/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/blogimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blogimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blogimg/light.jpg","8d2ca2f148fa457fe11e58e6901b128d"],["/blogimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blogimg/pwa/android-chrome-192x192.png","07717e435b22cc430c60d02b06001d62"],["/blogimg/pwa/android-chrome-512x512.png","cce5857d54d62444d85970a63ae640cb"],["/blogimg/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/blogimg/pwa/favicon-16x16.png","71561042f26fc0b30cb43a9471c75122"],["/blogimg/pwa/favicon-32x32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/blogimg/pwa/maskable_icon.png","d7ae03d73fd5ae369762a48162e1e7e3"],["/blogimg/pwa/mstile-150x150.png","6704c93a7cbb5b541f1e084f892caffc"],["/blogimg/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/blogindex.html","581bf8453290684a347625b0c068182a"],["/blogjs/main.js","9ae2856869433ab1770b105c639b7710"],["/blogjs/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/blogjs/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/blogjs/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/blogjs/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/blogjs/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/blogjs/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/blogjs/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/blogjs/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/blogjs/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/blogjs/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/blogjs/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/blogsw.js","aab507c2f7ed6258e7a8781994e27d67"],["/blogtags/ArrayBuffer/index.html","7970ddc91143c1a437ad6ac8dd010574"],["/blogtags/deno/index.html","fa9065e782406ea9e494aa9fac557c00"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







