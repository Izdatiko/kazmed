// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/sass/main.scss"],
  modules: ["nuxt-viewport", "nuxt-swiper", 'nuxt-anchorscroll'],
  plugins: ["plugins/autoAnimate.js"],
})
