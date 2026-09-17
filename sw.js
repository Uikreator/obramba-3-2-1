// Obramba 3:2:1 — servisni delavec
// Omogoča namestitev na domači zaslon in delovanje brez povezave.
// Ob vsaki novi različici igre povečaj številko RAZLICICA.
var RAZLICICA = "obramba321-v1";
var DATOTEKE = ["./", "./obramba-321.html", "./manifest.json", "./ikona-192.png", "./ikona-512.png"];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(RAZLICICA).then(function(c){
    return c.addAll(DATOTEKE).catch(function(){ /* posamezna datoteka lahko manjka */ });
  }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(k){
    return Promise.all(k.filter(function(x){ return x !== RAZLICICA; })
                       .map(function(x){ return caches.delete(x); }));
  }).then(function(){ return self.clients.claim(); }));
});

// najprej omrežje, da posodobitve pridejo takoj; predpomnilnik je rezerva
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(o){
      var kopija = o.clone();
      caches.open(RAZLICICA).then(function(c){ c.put(e.request, kopija); });
      return o;
    }).catch(function(){ return caches.match(e.request); })
  );
});
