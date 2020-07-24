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

var precacheConfig = [["/blog2020/05/15/ArrayBuffer/index.html","0b244605daf2a8e3022856dd67976b8b"],["/blog2020/05/28/Http--超文本传输协议/index.html","38bd52106d0352f2c04acca5946bdf66"],["/blog2020/05/28/Markdown/index.html","cc2548a26011762a0c8430581e6cd7df"],["/blog2020/05/29/koa-洋葱模型/index.html","fc8c8bfe2a1f60244ddad1465e5a02cd"],["/blog2020/05/29/lodash/index.html","10469c4c6e34f23be90d6f7dea745d27"],["/blog2020/06/10/CSS预处理器/index.html","5d758a816cdefc41e0c0d716790d719e"],["/blog2020/06/16/Typescript高级类型、范型/index.html","61180e644413e4c134d182a81dade7d0"],["/blog2020/07/02/websocket/index.html","f40efdca85a8b4acc7fefb264fe8cdc2"],["/blog2020/07/02/webworker/index.html","c5e7179b1cd4156516fc7d0c6dea1f87"],["/blog2020/07/21/closure/index.html","6596460dc83932e95ce11ddda79670d7"],["/blogarchives/2020/05/index.html","aa45d83a596316a4520777132d13374d"],["/blogarchives/2020/06/index.html","c7b73ede74178a9e66927d119a4c1a2c"],["/blogarchives/2020/07/index.html","e0b67d71dad8a742de6d9157870775c4"],["/blogarchives/2020/index.html","9935eb988e58c6c6edeb769493a4bf5f"],["/blogarchives/index.html","ce4e9b9983569a507d4199752440bb1e"],["/blogcategories/pieces/index.html","348024c58215046f513ba888042d59ba"],["/blogcss/index.css","c653c72f1ca9f363e8fc288614111af0"],["/blogcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/blogimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blogimg/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/blogimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blogimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blogimg/light.jpg","8d2ca2f148fa457fe11e58e6901b128d"],["/blogimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blogimg/pwa/android-chrome-192x192.png","07717e435b22cc430c60d02b06001d62"],["/blogimg/pwa/android-chrome-512x512.png","cce5857d54d62444d85970a63ae640cb"],["/blogimg/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/blogimg/pwa/favicon-16x16.png","71561042f26fc0b30cb43a9471c75122"],["/blogimg/pwa/favicon-32x32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/blogimg/pwa/maskable_icon.png","d7ae03d73fd5ae369762a48162e1e7e3"],["/blogimg/pwa/mstile-150x150.png","6704c93a7cbb5b541f1e084f892caffc"],["/blogimg/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/blogindex.html","3354190085e1f77dcb41352f3dd91f55"],["/blogjs/main.js","9ae2856869433ab1770b105c639b7710"],["/blogjs/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/blogjs/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/blogjs/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/blogjs/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/blogjs/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/blogjs/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/blogjs/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/blogjs/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/blogjs/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/blogjs/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/blogjs/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/blogsw.js","a205e5b967d231f7efdf4ac17ef85668"],["/blogtags/ArrayBuffer/index.html","4a3fddbe550093078949bbdb7751debf"],["/blogtags/deno/index.html","c2eb925e4d1dc0bb698f318f66c3c56c"]];
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







