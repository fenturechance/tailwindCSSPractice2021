<template>
  <div class="home">
    <!-- p-6 // padding: 1.5rem -->
    <!-- max-w-sm // max-width: 24rem -->
    <!-- bg-white // background-color: rgba(255,255,255,var(--tw-bg-opacity)); -->
    <!-- rounded-xl // border-radius: .75rem; -->
    <!-- shadow-md // --tw-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06); -->
    <!-- flex // display: flex; -->
    <!-- items-center // align-items: center; -->
    <!-- flex-shrink-0 // flex-shrink: 0; -->
    <!-- w-12 // width: 3rem -->
    <!-- h-12 // height: 3rem -->
    <!-- text-xl // font-size: 1.25rem; line-height: 1.75rem; -->
    <!-- font-medium // font-weight: 500; -->
    <!-- text-black // --tw-text-opacity: 1; color: rgba(0,0,0,var(--tw-text-opacity)); -->
    <!-- text-gray-500 // --tw-text-opacity: 1; color: rgba(107,114,128,var(--tw-text-opacity)); -->
    <!-- space-x-4 // .space-x-4>:not([hidden])~:not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(1rem * var(--tw-space-x-reverse)); margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); } -->
    <div class="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class=" flex-shrink-0">
        <img class=" h-12 w-12" src="https://fakeimg.pl/12x12/eeeeee">
      </div>
      <div>
        <div class=" text-xl font-medium text-black">聊天呦</div>
        <div class=" text-gray-500">你有新訊息</div>
      </div>
    </div>
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
</style>
