<template>
  <div class="pt-40 pb-20 bg-primary text-white flex flex-col gap-10">

    <div class="flex flex-wrap justify-center gap-6 lg:gap-12 px-6 pb-10">
      <div v-for="(value, index) in stats" class="flex flex-col justify-center">
        <div class="flex items-end justify-start">
          <span class="text-3xl lg:text-6xl font-bold text-white/70">
            <Counter :targetValue="value.value" :duration="10" :delay="index * 0.2" />
          </span>
          <span class="text-white/70 text-sm" v-html="value.suffix"></span>
        </div>
        <h4 class="  text-xl font-bold text-white/70">{{ value.label }}</h4>
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

const stats = [
  {
    label: "Telah Berdiri",
    value: 20,
    suffix: "Th"
  },
  {
    label: "di Indonesia",
    value: 30,
    suffix: "Cabang"
  },
  {
    label: "Unit Terjual",
    value: 3400,
    suffix: "<span class='text-6xl text-white/70 font-bold'>+</span> Unit"
  },
]
</script>

<style></style>