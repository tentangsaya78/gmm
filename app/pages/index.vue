<template>
  <div>
    <Hero2 />
    <Products />
    <Sec3 />
    <Layanan />
    <CariCabang />

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl lg:text-5xl font-extrabold text-[#113B1F]">
              <Counter :target-value="2005" />
            </div>
            <div class="mt-2 text-gray-700 font-semibold uppercase tracking-wider text-sm">Sejak Tahun</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-extrabold text-[#113B1F]">
              <Counter :target-value="50" />+
            </div>
            <div class="mt-2 text-gray-700 font-semibold uppercase tracking-wider text-sm">Cabang Indonesia</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-extrabold text-[#113B1F]">
              <Counter :target-value="10000" />+
            </div>
            <div class="mt-2 text-gray-700 font-semibold uppercase tracking-wider text-sm">Unit Terjual</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-extrabold text-[#113B1F]">
              <Counter :target-value="100" />%
            </div>
            <div class="mt-2 text-gray-700 font-semibold uppercase tracking-wider text-sm">Purna Jual</div>
          </div>
        </div>
      </div>
    </section>

    <News />
  </div>
</template>

<script lang="ts" setup>
import Sec3 from '~/components/sec3.vue';



</script>

<style></style>