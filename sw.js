var C='aae-trampolins-v1';
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','./index.html','./data/state.json'])}).catch(function(){}))});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;var key=u.origin+u.pathname;
 e.respondWith(fetch(r).then(function(res){if(res&&res.ok){var cp=res.clone();caches.open(C).then(function(c){c.put(key,cp)})}return res}).catch(function(){return caches.match(key).then(function(m){return m||(r.mode==='navigate'?caches.match(u.origin+u.pathname.replace(/[^/]*$/,'')+'index.html'):undefined)||Response.error()})}))});
