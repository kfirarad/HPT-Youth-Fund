<script setup lang="ts">
const { value } = defineProps<{
  value: number;
}>();
</script>
<template>
  <div
    class="w-full bg-gray-200 rounded-full dark:bg-gray-200 border-4 border-gray-200"
  >
    <div
      class="bg-blue-500 text-xs text-white font-light text-center p-0.5 leading-none rounded-full"
      :style="{ width: value + '%' }"
    >
      {{ Math.round(value) }}%
    </div>
  </div>
</template>
