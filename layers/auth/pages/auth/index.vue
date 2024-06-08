<script setup lang="ts">
import { loginSchema } from "~/layers/auth/validators/loginValid";
import { useLoginStore } from "~/layers/auth/stores/loginStore";
import { useLoginService } from "~/layers/auth/services/loginServices";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Страница авторизации",
});

const { state } = useLoginStore();
const { onSubmit, pending } = useLoginService();
</script>

<template>
  <p class="mb-4 text-2xl">Вход в чат</p>

  <UForm :schema="loginSchema" :state class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput placeholder="obivan@djedai.com" v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password">
      <UInput
        type="password"
        placeholder="C_3po_Droid"
        v-model="state.password"
      />
    </UFormGroup>

    <UButton block type="submit" :loading="pending">Войти</UButton>
  </UForm>

  <div class="mt-6 text-sm flex justify-between">
    <span>
      Впервые на сайте?
      <NuxtLink class="link" to="/auth/register">Регистрация</NuxtLink>
    </span>
  </div>
</template>
