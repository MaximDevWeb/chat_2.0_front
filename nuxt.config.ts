// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["./core", "./layers/auth", "./layers/main"],
  modules: ["@nuxt/ui", "@nuxt/image", "@sidebase/nuxt-auth"],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
});
