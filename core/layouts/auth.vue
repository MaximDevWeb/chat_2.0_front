<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex">
      <div class="flex flex-col justify-center items-center py-8 px-20">
        <Logo />

        <p class="text-2xl mt-2">Simple<span class="font-bold">Chat</span></p>
      </div>

      <UDivider label="" orientation="vertical" />

      <div class="py-8 px-20 min-w-[500px]">
        <slot />
      </div>
    </div>
  </div>
</template>
