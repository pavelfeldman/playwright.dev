/**
 * Copyright 2018 Google Inc. All rights reserved.
 * Modifications copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"33184ca32ed0de64fa63dfa6c80cb2af","url":"all.css"},{"revision":"8750ef8097f7a2ad51a1e74748bbb4b6","url":"index.html"},{"revision":"c9d15703a357eb93236a1386a7a346c8","url":"main.js"}]);

// This is needed to make SPA to work offline.
// workbox.routing.registerNavigationRoute("index.html");
const handler = workbox.precaching.createHandlerBoundToURL('/index.html');
const navigationRoute = new workbox.routing.NavigationRoute(handler);
workbox.routing.registerRoute(navigationRoute);

// Cache common github images (e.g. pptr logo).
workbox.routing.registerRoute(/^https:\/\/user-images\.githubusercontent\.com\/.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');