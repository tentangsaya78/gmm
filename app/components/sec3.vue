<template>
  <div>
    <div
      class="bg-gradient-to-t from-green-700 to-primary text-white bg-center overflow-x-hidden  pb-20 relative border-0 h-full">
      <div class="max-w-screen-lg mx-auto px-6">
        <UTabs color="secondary" variant="link" :items="items" class="w-full" :ui="{
          list: 'text-white border-white/20',
          trigger: 'grow !text-white data-[state=active]:!text-yellow-400',
        }" label="white/60">
          <template #content="{ item }">
            <motion :initial="{ x: 100, opacity: 0 }" :animate="{ x: 0, opacity: 1 }" :transition="{ duration: 0.2 }">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-10">
                <div class="relative pl-10 pb-10">
                  <div class="rounded-xl bg-[#1c913d] bg-opacity-30 p-6 min-h-[340px] h-full max-w-[380px]">
                    <h4 class="text-3xl lg:text-4xl font-bold">{{ item.label }}</h4>
                  </div>
                  <img :src="item.image" alt=""
                    class="absolute -bottom-5 -left-5 max-w-[400px] h-auto object-contain" />
                </div>
                <div>
                  <p class="lg:text-xl text-green-100">{{ item.description }}</p>
                  <UButton size="xl" class="max-w-max px-6 mt-4" color="secondary">
                    Lihat Produk</UButton>
                </div>
              </div>
            </motion>
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion } from "motion-v";

const items = [
  {
    label: "Dump Truck",
    description:
      "GM Mobil memiliki tipe Dump Truck dengan varian horse power, pay load dan spesifikasi yang sesuai dengan kebutuhan operasional customer, dump truck kami cocok untuk sektor pertambangan, konstruksi, perkebunan, oil & gas maupun forestry. Dump truck kami memiliki Horse Power bervariatif dengan konfigurasi 4×4, 6×4 dan 8×4 dengan torsi mesin yang besar dan irit bahan bakar.",
    image: "/images/dump-truck.png",
  },
  {
    label: "Mixer Truck",
    description:
      "GM Mobil menawarkan Mixer Truck yang dirancang khusus sehingga dapat bermanuver dengan baik pada jalan-jalan sempit di daerah perkotaan maupun di perdesaan, dengan konfigurasi 4×2 dan 6×4.",
    image: "/images/mixer-truck.png",
  },
  {
    label: "Tractor Head",
    description:
      "Kami memiliki tipe Tractor Head dengan sistem penggerak roda belakang, dengan konfigurasi 4×2 dan 6×4 dengan fungsi sebagai penarik trailer, baik jenis container trailers, tank trailers, heavy duty trailer,cargo trailer, low bed tariler, tipper atau side dump trailers. Cocok untuk industri transporter cargo, mining, oil & gas, heavy duty transport dll.",
    image: "/images/tractor-head.png",
  },
  {
    label: "Cargo Truck",
    description:
      "Dengan mengedepankan kualitas, keselamatan, daya tahan dan kenyamanan mengemudi kami memiliki tipe truck cargo untuk angkutan logistik atau transporter cargo dengan konfigurasi 4×4, 6×2, 6×4 dan 8×4.",
    image: "/images/cargo-truck.png",
  },
];


</script>
<style scoped>
:deep(.marquee) {
  border: none !important;
  outline: none !important;
}

:deep([data-marquee]) {
  border: none !important;
}

:deep([class*="overlay"]) {
  display: none !important;
}
</style>
