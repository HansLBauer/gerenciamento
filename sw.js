const CACHE='nova-veneza-shell-e39e0f2c7823';
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(["./","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./assets/index-BixYfvEJ.css","./assets/index-CGJhmVNg.js","./assets/index-D5Ks2k_p.js"])));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]));});
// Cache somente arquivos públicos do aplicativo. Nunca armazenar APIs, pacientes ou senhas.
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
 if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).catch(()=>caches.match('./')));return;}
 if(/\/(assets|icons|data)\//.test(url.pathname)){event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;})));}
});
self.addEventListener('push',event=>{let message={title:'USF Nova Veneza',body:'Há uma atualização na sua agenda.'};try{if(event.data)message={...message,...event.data.json()};}catch{}event.waitUntil(self.registration.showNotification(message.title,{body:message.body,icon:'./icons/icon-192.png',badge:'./icons/icon-192.png',tag:message.tag||'agenda',data:{url:'./'},requireInteraction:true}));});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(clients=>{const own=clients.find(c=>c.url.startsWith(self.registration.scope));return own?own.focus():self.clients.openWindow(self.registration.scope);}));});
