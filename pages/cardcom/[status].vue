<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

const { path, params = {}, query = {} } = useRoute();
const { ResponseCode = "", Description } = query;
onMounted(() => {
  const data = ResponseCode === "0" ? "SUCCESS" : "ERROR";
  parent.window.postMessage(data, `${window.location.origin}`);
});
</script>

<template></template>
