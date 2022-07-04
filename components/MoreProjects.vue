<script setup lang="ts">
const props = defineProps<{
  projects: [any];
  excludeProjectId: number;
}>();
const { projects, excludeProjectId } = props;
</script>
<template>
  <div>
    <h2 class="m-10 text-3xl text-center">עוד פרוייקטים</h2>
    <div class="w-full flex items-top justify-center align-top">
      <div
        v-for="project in projects.filter((p) => p.id !== excludeProjectId)"
        class="w-1/2 xl:w-1/3 m-3"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>
