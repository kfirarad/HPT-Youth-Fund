<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
const data = ref("");
onMounted(() => {
  const params = new URL(window.document.location.toString()).searchParams;
  const responseCode = params.get("ResponseCode");
  data.value = responseCode === "0" ? "SUCCESS" : "ERROR";
  parent?.window.postMessage(data.value, `${window.location.origin}`);
});
</script>

<template>
  {{ data }}
</template>
