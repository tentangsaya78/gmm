<template>
  <div>
    <div class="container py-20">
      <SectionTitle title="Layanan Kami"
        description="Unit FAW Trucks sudah berstandar Euro 5 yang tentu memenuhi syarat standarisasi Euro 4."
        class="text-center" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
        <div
          class="rounded-xl p-6 bg-gray-100 min-h-[400px] lg:min-h-[500px] relative overflow-hidden text-white flex flex-col justify-end"
          v-for="(item, index) in layanan">
          <motion :while-in-view="{ y: 0, opacity: 1 }" :initial="{ y: 100, opacity: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 50 }" class="relative z-20">
            <h4 class="text-2xl lg:text-3xl font-bold">{{ item.title }}</h4>
            <p class="text-xl mt-4 text-gray-300">{{ item.description }}</p>
          </motion>

          <motion :while-in-view="{ filter: 'blur(0px)', opacity: 1 }" :initial="{ filter: 'blur(10px)', opacity: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 50 }"
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-900/80 to-transparent z-10">

          </motion>
          <img :src="item.img" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
        </div>
      </div>

      <div class="flex flex-wrap justify-center lg:justify-between items-center gap-6 max-w-screen-lg  mx-auto">
        <img v-for="img in logo" :src="img" alt="" class=" h-10 lg:h-12 w-auto">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const layanan = [
  {
    title: "Layanan Industri",
    description: "Semua unit PT Gaya Makmur Mobil sangat cocok di Industri Pertambangan, Perkebunan, Kehutanan, Logistik, Konstruksi, dsb",
    img: "/images/layanan-industri.webp"
  },
  {
    title: "Layanan Purna Jual",
    description: "Setiap penjualan dari GMM selalu didukung oleh layanan purna jual yang maksimal sebagai bentuk komitmen GMM untuk memberikan pelayanan yang terbaik dan berkualitas. Maka dari itu, GMM selalu menyediakan berbagai macam suku cadang dan didukung oleh mekanik yang berpengalaman untuk memenuhi kebutuhan pelanggan GMM yang setia.",
    img: "/images/layanan-purna-jual.webp"
  },
  {
    title: "REMAN Center",
    description: "Benefit yang sangat menguntungkan untuk para pengguna truk FAW sekalian dengan REMAN Center ini. Terlebih dari segi biaya. #SobatGaya sangat bisa menghemat biaya dalam hal maintenance truk FAW.",
    img: "/images/reman-center.webp"
  },
  {
    title: "GMM Teletech",
    description: "#SobatGaya bisa melakukan banyak hal seperti perencanaan dan pengaturan kerja yang lebih baik, memaksimalkan operasional kendaraan, meminimalkan resiko downtime kendaraan yang akan berujung pada efisiensi bisnis dan keuntungan yang lebih besar.",
    img: "/images/cust-service.webp"
  }
]

const logo = [
  '/images/after-sales.png',
  '/images/turbo.png',
  '/images/gmm-tele.png',
  '/images/euro.png'
]
</script>

<style></style>