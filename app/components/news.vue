<template>
  <div class="py-20 bg-gray-100">
    <div class="container ">
      <SectionTitle title="Berita" description="Berita Terbaru" class="text-center" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div v-for="item in news" :key="item.title">
          <div class="rounded-xl bg-white h-full group">

            <div class="w-full h-64 object-cover rounded-xl overflow-hidden">
              <img :src="item.img" alt=""
                class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300">
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mt-4 text-sm text-muted">
                <span>
                  <UIcon :name="item.icon" />
                </span>
                <span>{{ item.date }}</span>
              </div>
              <h4 class="text-2xl lg:text-3xl font-bold hover:text-primary duration-200 cursor-pointer">{{ item.title }}
              </h4>
              <p class="text-xl mt-4 text-muted">{{ item.description }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const news = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/mining.jpg",
    date: "2, Januari 2026",
    icon: "heroicons:calendar-days"
  },
  {
    title: "Consectetur adipiscing elit sed do eiusmod tempor incididunt",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    img: "/images/news.jpg",
    date: "15, Desember 2025",
    icon: "heroicons:calendar-days"
  },
  {
    title: "Magna aliqua ut enim ad minim veniam quis nostrud",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    img: "/images/truck.jpg",
    date: "23, November 2025",
    icon: "heroicons:calendar-days"
  }
]

</script>

<style></style>