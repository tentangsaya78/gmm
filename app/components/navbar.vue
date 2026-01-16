<template>
  <div>
    <header
      class="bg-white border border-b border-gray-200 flex flex-col justify-center items-center z-50 "
    >
      <div class="container ">
        <div class="flex items-center justify-between gap-5">
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="logo" class="h-14 w-full" />
          </NuxtLink>

          <nav class="hidden lg:block">
            <ul class="menu flex items-center gap-5 h-[80px]">
              <li
                v-for="menu in menus"
                :key="menu.label"
                class="relative group h-full flex items-center gap-1"
              >
                <NuxtLink
                  :to="menu.to"
                  class="hover:text-primary duration-200 font-semibold"
                  >{{ menu.label }}</NuxtLink
                >
                <span v-if="menu.children" class="group-hover:rotate-180 duration-150 pt-1">
                  <Icon name="ic:round-keyboard-arrow-down" />
                </span>
                <Transition name="fade">
                  <ul
                    class="sub-menu absolute z-50 top-full hidden group-hover:flex flex-col gap-0 duration-200 bg-white w-56 rounded-b-lg border border-gray-200 border-t-0"
                    v-if="menu.children"
                    :class="menu.style"
                  >
                    <li v-for="child in menu.children" :key="child.label" class="text-sm">
                      <NuxtLink
                        :to="child.to"
                        class="hover:text-primary hover:bg-primary/10 duration-200 px-4 py-2 block"
                        >{{ child.label }}</NuxtLink
                      >
                    </li>
                  </ul>
                </Transition>
              </li>
            </ul>
          </nav>

          <div>
            <img src="/images/20tahun.png" class="h-14 w-auto" alt="" />
          </div>

          <button @click="openMenu = !openMenu" class="lg:hidden">
            <Icon name="ic:baseline-menu" />
          </button>
        </div>
        <nav
          v-if="openMenu"
          class="lg:hidden bg-white absolute top-auto left-0 w-full p-6 border-t border-gray-200 z-50"
        >
          <ul class="menu flex flex-col gap-5 ">
            <li v-for="menu in menus" :key="menu.label">
              <NuxtLink :to="menu.to">{{ menu.label }}</NuxtLink>
              <ul class="" v-if="menu.children">
                <li v-for="child in menu.children" :key="child.label">
                  <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
const openMenu = ref(false);
const menus = [
  { label: "Home", to: "/" },
  {
    label: "GMM",
    to: "#",
    children: [
      { label: "Company", to: "/company" },
      { label: "Management", to: "/management" },
      { label: "Dealer", to: "/dealer" },
    ],
  },
  {
    label: "Product",
    to: "/product",
    style:"mega-menu",
    children: [
      { label: "Dump Truck", to: "#" },
      { label: "Mixer Truck", to: "#" },
      { label: "Tractor Head", to: "#" },
      { label: "Cargo Truck", to: "#" },
    ],
  },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];
</script>

<style>
.mega-menu{
  max-width: 800px;
}

</style>
