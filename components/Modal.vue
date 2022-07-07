<script setup>
const props = defineProps(["isOpen", "closeModal", "title"]);

const { isOpen, closeModal } = toRefs(props);
</script>

<template>
  <div
    class="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 p-4 flex items-center justify-center z-10"
    @click="closeModal()"
    v-if="isOpen"
  />
  <div
    v-if="isOpen"
    class="min-w-1/2 min-h-1/2 max-w-screen max-h-screen z-20 top-1/2 left-1/2 fixed rounded-lg bg-white -translate-x-1/2 -translate-y-1/2 overflow-hidden"
  >
    <div class="min-w-1/2 max-w-screen">
      <div
        class="min-h-full items-center justify-center p-4 text-center flex flex-col"
      >
        <h3 class="text-lg font-medium leading-6 text-gray-900 text-right">
          {{ title }}
        </h3>
        <div class="mt-2 max-h-screen">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
