<template>
  <div class="pt-40 pb-20 bg-primary text-white flex flex-col gap-10">

    <div class="flex flex-wrap justify-center gap-6">

      <div class="">
        <div class="flex items-end gap-2">
          <span class="text-3xl lg:text-6xl font-bold">
            <Counter :targetValue="20" />
          </span>
          <span>Th</span>
        </div>
        <h4 class=" text-white text-2xl">Kami Berdiri</h4>
      </div>


      <div class="">
        <div class="flex items-end gap-2">
          <span class="text-3xl lg:text-6xl font-bold">
            <Counter :targetValue="30" />
          </span>
          <span>Cabang</span>
        </div>
        <h4 class=" text-white text-2xl">Di wilayah Indonesia</h4>
      </div>

      <div class="">
        <div class="flex items-end gap-2">
          <span class="text-3xl lg:text-6xl font-bold">
            <Counter :targetValue="1400" />
          </span>
          <span>Unit</span>
        </div>
        <h4 class="text-white text-2xl">Dijual</h4>
      </div>

    </div>


    <UMarquee :pause-on-hover="true" :duration="100"
      :ui="{ root: 'before:from-primary after:from-primary [--duration:30s]', wrapper: 'border-0' }">
      <div v-for="product in products">
        <div class="p-6 bg-white/10 rounded-xl max-w-[300px] group opacity-65 hover:opacity-100">
          <img :src="product.image" alt="" class="max-w-64 object-contain hover:scale-110 transition-all duration-200">
          <h4 class="text-xl font-medium mb-3">{{ product.name }}</h4>
          <p class="text-sm font-medium">{{ product.description }}</p>
        </div>

      </div>
    </UMarquee>
  </div>
</template>

<script lang="ts" setup>
const products = [
  {
    name: 'Product 1',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 2',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 3',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 4',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 5',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 6',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 7',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 8',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 9',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 10',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 11',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },
  {
    name: 'Product 12',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.',
    image: '/images/dump-truck.png'
  },

]
</script>

<style></style>