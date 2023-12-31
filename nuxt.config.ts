// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    target: 'static'
  },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'tailwindcss',
  ],
  css: [
    '~/assets/styles/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  telemetry: true,
  pages: true,
});
