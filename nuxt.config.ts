// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["./core", "./layers/auth", "./layers/profile"],
  modules: ["@nuxt/ui", "@nuxt/image", "@sidebase/nuxt-auth"],

  auth: {
    baseURL: process.env.AUTH_BASE_URL,
    provider: {
      type: "local",
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
});
