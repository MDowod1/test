self.addEventListener("install", event => {
  console.log("Service Worker: zainstalowany");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker: aktywny");
});

self.addEventListener("fetch", event => {
  // Proste proxy – na start nic nie cachujemy
});
