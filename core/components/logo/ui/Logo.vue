<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 80,
  },
  width: {
    type: Number,
    default: 80,
  },
});
</script>

<template>
  <NuxtImg :height :width src="/images/logo.svg" />
</template>
