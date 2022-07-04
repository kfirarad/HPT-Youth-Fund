<script setup lang="ts">
const { project } = defineProps(["project"]);
const { id, title, image, description, target, raised } = project;
const linkTo = { path: `/project/${id}`, hash: "#a" };

const progress = (raised / target) * 100;
</script>
<template>
  <NuxtLink :href="linkTo">
    <div class="lg:max-w-1/3 rounded overflow-hidden shadow-lg hover:shadow-xl">
      <img class="w-full" :src="image" :alt="title" />
      <div class="px-6 py-4">
        <ProgressBar :value="progress" />
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="w-full flex"></div>
      <div class="w-full flex justify-center mb-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 m-auto"
        >
          לתמיכה בפרוייקט
        </button>
      </div>
    </div>
  </NuxtLink>
</template>
