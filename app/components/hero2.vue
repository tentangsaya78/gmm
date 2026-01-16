<template>
  <div class="relative">
  <div class="pt-20 pb-42 lg:pb-60 bg-gradient-to-tr from-gray-300 to-gray-50 bg-center overflow-x-hidden ">
     <div class="container">
      <div class="max-w-[800px] mx-auto text-center flex flex-col items-center justify-center gap-6 lg:gap-10 mb-10">
      <Motion :while-in-view="{scale: 1, opacity: 1, filter: 'blur(0px)'}" :initial="{scale: 0, opacity: 0, filter: 'blur(30px)'}" :animate="{scale: 1, opacity: 1, filter: 'blur(0px)'}" :transition="{ duration: 0.8 }">
         <p class="font-semibold mb-3">Agen Pemegang Merek FAW Sejak 2005</p>
          <h1 class="text-4xl lg:text-6xl font-bold text-black">
            Kekuatan Yang Dapat Diandalkan.
          </h1>
      </Motion>
    
          <p class="text-xl font-medium">
            GM Mobil menyediakan truk berkualitas tinggi dari FAW untuk mendukung berbagai
            sektor industri di Indonesia. Bagian dari Gaya Makmur Group.
          </p>
          <div class="flex flex-wrap gap-5">
             <UButton size="xl" class="max-w-max px-6" > Lihat Produk</UButton>
          <UButton size="xl" variant="outline"   class="max-w-max px-6 border-2 " > Hubungi Sales</UButton>
          </div>
      </div>
     </div>
  </div>
   <img src="/images/truck.png" alt="" class="mx-auto w-full max-w-[800px] absolute -bottom-10  md:-bottom-40 lg:-bottom-32 left-0 right-0  z-30">
   </div>
</template>

<script lang="ts" setup>
 import { motion } from "motion-v";
</script>

<style>

</style>