<template>
  <div class="home">
    <!-- py-2 // padding-top: 0.5rem; padding-bottom: 0.5rem; -->
    <!-- px-4 // padding-left: 1rem; padding-right: 1rem; -->
    <!-- font-semibold // font-weight: 600; -->
    <!-- rounded-lg // border-radius: 0.5rem; -->
    <!-- shadow-md // --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); -->
    <!-- text-white //--tw-text-opacity: 1; color: rgba(255, 255, 255, var(--tw-text-opacity)) -->
    <!-- bg-green-500 // --tw-bg-opacity: 1; background-color: rgba(16, 185, 129, var(--tw-bg-opacity)) -->
    <!-- hover:bg-green-700 //.hover\:bg-green-700:hover { --tw-bg-opacity: 1; background-color: rgba(4, 120, 87, var(--tw-bg-opacity)); } -->
    <button class="btn btn-green">Click</button>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
