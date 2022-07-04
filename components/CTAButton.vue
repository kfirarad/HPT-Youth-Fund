<script setup lang="ts">
const { project } = defineProps({
  project: Object,
});
const { id } = project;
const linkTo = { path: `/project/${id}`, hash: "#a" };
</script>
<template>
  <NuxtLink :to="linkTo">
    <button
      class="my-5 border-2 border-blue-500 hover:bg-blue-500 rounded py-2 px-10 hover:text-white shadow-md hover:shadow-lg transition-all"
    >
      לתמיכה בפרוייקט
    </button>
  </NuxtLink>
</template>
