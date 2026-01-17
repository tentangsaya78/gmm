<template>
  <div>
    <header class="bg-white border border-b border-gray-200 flex flex-col justify-center items-center z-50 ">
      <div class="container ">
        <div class="flex items-center justify-between gap-5">
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="logo" class="h-14 w-full" />
          </NuxtLink>
          <UNavigationMenu :items="menus" class="hidden lg:block py-2.5" :ui="{
            childLinkDescription: 'text-xs text-muted',
            childLinkIcon: 'w-8 h-8',
          }" />

          <div>
            <img src="/images/20tahun.png" class="h-14 w-auto" alt="" />
          </div>

          <button @click="openMenu = !openMenu" class="lg:hidden">
            <Icon name="ic:baseline-menu" />
          </button>
        </div>
        <nav v-if="openMenu"
          class="lg:hidden bg-white absolute top-auto left-0 w-full p-6 border-t border-gray-200 z-50">
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
      { label: "Company", to: "#" },
      { label: "Management", to: "#" },
      { label: "Dealer", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    label: "Product",
    to: "/product",
    style: "mega-menu",
    children: [
      {
        label: "Dump Truck",
        to: "#",
        icon: "mdi:dump-truck",
        description: "GM Mobil memiliki tipe Dump Truck dengan varian horse power."

      },
      {
        label: "Mixer Truck",
        to: "#",
        icon: "hugeicons:tanker-truck",
        description: "GM Mobil menawarkan Mixer Truck yang dirancang khusus"
      },
      {
        label: "Tractor Head",
        to: "#",
        icon: "hugeicons:semi-truck",
        description: "Cocok untuk industri transporter cargo, mining, oil & gas, heavy duty transport dll."
      },
      {
        label: "Cargo Truck",
        to: "#",
        icon: "ph:truck",
        description: "Tipe truck cargo untuk angkutan logistik atau transporter cargo."
      },
    ],
  },
  {
    label: "Layanan",
    to: "#",
    children: [
      {
        label: "Layanan Industri",
        to: "#",
        description: "GM Mobil melayani kebutuhan industri dengan menyediakan berbagai jenis truck sesuai kebutuhan operasional customer"
      },
      {
        label: "Layanan Purna Jual", to: "#",
        description: "Layanan purna jual yang disediakan oleh GM Mobil meliputi"
      },
      {
        label: "REMAN Center", to: "#",
        description: "REMAN Center adalah pusat layanan remanufacturing"
      },
      {
        label: "GMM Teletech", to: "#",
        description: "GMM Teletech adalah pusat layanan telematika"
      },
    ],
  },
  {
    label: "Informasi",
    to: "#",
    children: [
      { label: "Karir", to: "#", icon: "mdi:account-multiple-outline", description: "Bergabunglah dengan tim kami dan bangun karir yang sukses di PT Gaya Makmur Mobil" },
      { label: "News", to: "#", icon: "mdi:newspaper", description: "Informasi terbaru seputar PT Gaya Makmur Mobil" },
    ],
  }
];
</script>

<style>
.mega-menu {
  max-width: 800px;
}
</style>
