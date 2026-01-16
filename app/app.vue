<template>
  <div>
  <Navbar />
    <NuxtPage/>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>