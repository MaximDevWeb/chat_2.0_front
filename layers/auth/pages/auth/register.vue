<script setup lang="ts">
import { useRegisterStore } from "~/layers/auth/stores/registerStore";
import { useRegisterServices } from "~/layers/auth/services/registerServices";
import { registerSchema } from "~/layers/auth/validators/registerValid";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Страница регистрации",
});

const { state } = useRegisterStore();
const { onSubmit, pending } = useRegisterServices();
</script>

<template>
  <p class="mb-4 text-2xl">Регистрация</p>

  <UForm :state :schema="registerSchema" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput placeholder="darth_vader@sith.com" v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password">
      <UInput
        type="password"
        placeholder="Vader_sithLord66"
        v-model="state.password"
      />
    </UFormGroup>

    <UFormGroup label="Повторите пароль" name="password_confirm">
      <UInput
        type="password"
        placeholder="Vader_sithLord66"
        v-model="state.password_confirm"
      />
    </UFormGroup>

    <UButton block type="submit" :loading="pending">Регистрация</UButton>
  </UForm>

  <div class="mt-6 text-sm flex justify-between">
    <span>
      Вспомнили пароль?
      <NuxtLink class="link" to="/auth">Войти</NuxtLink>
    </span>
  </div>
</template>
