<template>
  <div class="max-w-scren-md mx-auto px-6 mb-10">
  <h2 class="text-3xl lg:text-4xl font-semibold" v-html="title"></h2>
    <p class="text-muted">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
 type Props = {
   title: string,
   description: string
 }

 const { title, description } = defineProps<Props>()
</script>

<style>

</style>