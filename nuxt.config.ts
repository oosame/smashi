// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: [400, 500, 600, 700, 800, 900],
      Almarai: [400, 500, 600, 700, 800, 900],
    },
  },
  ssr: false,
});
