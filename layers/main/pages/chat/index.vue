<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const { data } = useAuth();
</script>

<template>This is Chat Index page. {{ data?.email }}</template>
