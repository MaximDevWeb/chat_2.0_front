<script setup lang="ts">
import { useEmailVerifyServices } from "~/layers/auth/services/emailVerifyServices";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Подтверждение email",
});

const { send, status } = useEmailVerifyServices();

onMounted(() => {
  send();
});
</script>

<template>
  <p class="mb-4 text-2xl text-center">Подтверждение почты</p>

  <div class="text-center" v-if="status === 'pending'">
    <UIcon
      class="w-12 h-12 text-blue-500 animate-spin"
      name="i-heroicons-arrow-path"
    />

    <p class="mt-4">Идет проверка почты...</p>
  </div>

  <div class="text-center" v-if="status === 'error'">
    <UIcon
      class="w-12 h-12 text-red-500"
      name="i-heroicons-exclamation-triangle"
    />

    <p class="mt-4">Произошла ошибка, повторите попытку позже.</p>
  </div>
</template>
