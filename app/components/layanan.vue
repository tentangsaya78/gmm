<template>
  <div>
    <div class="container py-10">
     <div class="flex flex-wrap justify-between items-center">
       <img v-for="img in logo" :src="img" alt="" class="h-12 w-auto">
     </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  const layanan = [
    {
      title:'Layanan Industri',
      description:'Semua unit PT Gaya Makmur Mobil sangat cocok di Industri Pertambangan, Perkebunan, Kehutanan, Logistik, Konstruksi, dsb',
    }
  ]
</script>

<style>

</style>