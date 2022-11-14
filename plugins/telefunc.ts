export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    nuxtApp.hooks.hook('app:rendered', async () => {
      const { config } = await import('telefunc')
      config.telefuncUrl = '/api/_telefunc'
    })
  }

  if (process.client) {
    nuxtApp.hooks.hook('app:created', async () => {
      const { config } = await import('telefunc/client')
      config.telefuncUrl = '/api/_telefunc'
    })
  }
})
