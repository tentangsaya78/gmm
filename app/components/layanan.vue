<template>
  <div>
    <div class="container py-20">
       <SectionTitle title="Layanan Kami" description="Unit FAW Trucks sudah berstandar Euro 5 yang tentu memenuhi syarat standarisasi Euro 4." class="text-center" />

       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
        <div class="rounded-xl p-6 bg-gray-100" v-for="item in layanan">
          <h4 class="text-2xl lg:text-3xl font-bold">{{ item.title }}</h4>
          <p class="text-xl mt-4">{{ item.description }}</p>
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
    title:"Layanan Industri",
    description:"Semua unit PT Gaya Makmur Mobil sangat cocok di Industri Pertambangan, Perkebunan, Kehutanan, Logistik, Konstruksi, dsb",
  },
  {
    title:"Layanan Purna Jual",
    description:"Setiap penjualan dari GMM selalu didukung oleh layanan purna jual yang maksimal sebagai bentuk komitmen GMM untuk memberikan pelayanan yang terbaik dan berkualitas. Maka dari itu, GMM selalu menyediakan berbagai macam suku cadang dan didukung oleh mekanik yang berpengalaman untuk memenuhi kebutuhan pelanggan GMM yang setia.",
  },
  {
    title:"REMAN Center",
    description:"Benefit yang sangat menguntungkan untuk para pengguna truk FAW sekalian dengan REMAN Center ini. Terlebih dari segi biaya. #SobatGaya sangat bisa menghemat biaya dalam hal maintenance truk FAW."
  },
  {
    title:"GMM Teletech",
    description:"#SobatGaya bisa melakukan banyak hal seperti perencanaan dan pengaturan kerja yang lebih baik, memaksimalkan operasional kendaraan, meminimalkan resiko downtime kendaraan yang akan berujung pada efisiensi bisnis dan keuntungan yang lebih besar."
  }
]

const logo = [
    '/images/after-sales.png',
    '/images/turbo.png',
    '/images/gmm-tele.png',
    '/images/euro.png'
  ]
</script>

<style>

</style>