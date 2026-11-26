// Removes the service worker and caches that the Gatsby site installed.
self.addEventListener(`install`, () => self.skipWaiting())

self.addEventListener(`activate`, event => {
  const uninstall = async () => {
    const names = await caches.keys()
    await Promise.all(names.map(name => caches.delete(name)))
    await self.registration.unregister()
    for (const client of await self.clients.matchAll({ type: `window` })) {
      // Awaiting the navigation could block activation.
      void client.navigate(client.url)
    }
  }
  event.waitUntil(uninstall())
})
