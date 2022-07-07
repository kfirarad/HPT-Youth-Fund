<script setup lang="ts">
import { TransitionRoot } from "@headlessui/vue";

const { value } = defineProps<{
  value: number;
}>();
</script>
<template>
  <div
    class="w-full bg-gray-200 rounded-full dark:bg-gray-200 border-4 border-gray-200"
  >
    <TransitionRoot
      appear
      :show="true"
      as="template"
      enter="transition-all duration-[3000ms]"
      enter-from="max-w-0 text-opacity-0"
      enter-to="max-w-full"
    >
      <div
        class="bg-blue-500 text-opacity-0 text-xs text-white font-light text-center p-0.5 leading-none rounded-full"
        :style="{ width: value + '%' }"
      >
        {{ Math.round(value) }}%
      </div>
    </TransitionRoot>
  </div>
</template>
