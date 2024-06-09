<script setup lang="ts">
const { signOut } = useAuth();
</script>

<template>
  <div
    class="h-screen w-[250px] bg-slate-100 p-6 flex flex-col justify-between"
  >
    <div>
      <div class="flex items-center gap-2">
        <Logo :width="40" :height="40" />
        <p class="text-xl">Simple<span class="font-bold">Chat</span></p>
      </div>

      <div class="mt-6">items</div>
    </div>

    <div>
      <NuxtLink class="link-menu" to="#" @click.prevent="signOut">
        <Icon size="18" name="i-heroicons-arrow-right-start-on-rectangle" />
        Выйти
      </NuxtLink>
    </div>
  </div>
</template>
