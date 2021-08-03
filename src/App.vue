<template>
  <div class="home">
    <div class="bg-white dark:bg-black h-48">
      <button @click="changeMode">change</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const changeMode = () => {
      document.documentElement.classList.add('dark')
    }
    return {
      changeMode
    }
  }
}
</script>