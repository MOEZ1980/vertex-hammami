
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {
      body: event.data ? event.data.text() : ""
    };
  }

  const title = data.title || "VERTEX HAMMAMI";

  const options = {
    body: data.body || "Nuova prenotazione ricevuta!",
    icon: "/logo.jpg",
    badge: "/logo.jpg",
    tag: data.tag || "vertex-booking",
    renotify: true,
    data: {
      url: data.url || "/admin-mobile-v2.html"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = new URL(
    event.notification.data?.url || "/admin-mobile-v2.html",
    self.location.origin
  ).href;

  event.waitUntil(
    self.clients.openWindow(url)
  );
});
