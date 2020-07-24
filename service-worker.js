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

var precacheConfig = [["/blog2020/05/15/ArrayBuffer/index.html","aa53a18214f529da3b710a4cdd918295"],["/blog2020/05/28/Http--超文本传输协议/index.html","fe82be33e7ed4b4d107efefb96e6579d"],["/blog2020/05/28/Markdown/index.html","8a3043bec24e62954992061749a86ea6"],["/blog2020/05/29/koa-洋葱模型/index.html","7c9652fecb8e21042e84936a8dec4e62"],["/blog2020/05/29/lodash/index.html","8a0cd87b7a4a41d0bfb0aad5de0550a2"],["/blog2020/06/10/CSS预处理器/index.html","87c61daf88b759f14103d77f97c6f450"],["/blog2020/06/16/Typescript高级类型、范型/index.html","e715a1b020dfbf01aa64711092648524"],["/blog2020/07/02/websocket/index.html","8312d09cad761d6f1dc96135049c190d"],["/blog2020/07/02/webworker/index.html","541df3073cdd4b0ed229a34439097f17"],["/blog2020/07/21/closure/index.html","0743bed636ce22cca50c39180c0caa81"],["/blogarchives/2020/05/index.html","9e2acaaa02307d251451f98f0a23d276"],["/blogarchives/2020/06/index.html","c2d22f6d1844e4b0e8374971dd0aa4f2"],["/blogarchives/2020/07/index.html","4dab7351d4f2df2245c4a0c0d837d959"],["/blogarchives/2020/index.html","3a18a6d8cb44aa96d21c421f92acba02"],["/blogarchives/index.html","e58be974b20f535a9aec4b17660584a7"],["/blogcategories/pieces/index.html","096ea082ceb5b4c43c86f15da03fd6f3"],["/blogcss/index.css","c653c72f1ca9f363e8fc288614111af0"],["/blogcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blogimg/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/blogimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blogimg/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/blogimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blogimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blogimg/light.jpg","8d2ca2f148fa457fe11e58e6901b128d"],["/blogimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blogindex.html","c49579f761b835052f8cef31768d5e2d"],["/blogjs/main.js","9ae2856869433ab1770b105c639b7710"],["/blogjs/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/blogjs/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/blogjs/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/blogjs/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/blogjs/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/blogjs/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/blogjs/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/blogjs/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/blogjs/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/blogjs/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/blogjs/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/blogtags/ArrayBuffer/index.html","a98b3ed58fc40a6938e0761e2ba87882"],["/blogtags/deno/index.html","ad19fb6165faf2ea7db112856fb5d4ba"]];
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







