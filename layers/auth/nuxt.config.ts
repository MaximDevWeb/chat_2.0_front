// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    baseURL: process.env.AUTH_BASE_URL,
    provider: {
      type: "local",
      pages: {
        login: "/auth",
      },
      token: {
        signInResponseTokenPointer: "/data/accessToken",
        maxAgeInSeconds: 10 * 24 * 60 * 60,
      },
      sessionDataType: {
        email: "string",
      },
    },
  },
});
