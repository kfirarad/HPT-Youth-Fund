<script setup lang="ts">
const { handler } = defineProps<{
  handler: Function;
}>();

const handleClick = (e) => {
  if (handler) {
    e.preventDefault();
    handler.call(this, e);
  }
};
</script>
<template>
  <button
    @click="handleClick"
    class="my-5 border-2 border-blue-500 hover:bg-blue-500 rounded py-2 px-10 hover:text-white shadow-md hover:shadow-lg transition-all"
  >
    לתמיכה בפרוייקט
  </button>
</template>
