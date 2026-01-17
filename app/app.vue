<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>