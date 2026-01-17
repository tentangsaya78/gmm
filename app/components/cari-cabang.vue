<template>
  <div class="pb-20">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-6 items-end rounded-xl p-6 bg-primary/10 min-h-[360px]">
        <div class="lg:col-span-5">

          <h4 class="mb-3">Temukan Cabang & Service Center terdekat di kota Anda</h4>
          <UInputMenu v-model="selectedOffice" :items="offices" label-key="city" size="xl" :trailing="false"
            trailing-icon="ic:sharp-search" placeholder="Pilih kota..." class="w-full max-w-[800px] ">
            <template #trailing>
              <UButton v-if="selectedOffice" icon="i-lucide-x" size="xs" color="neutral" variant="ghost"
                aria-label="Clear selection" @click.stop="clearValue" />
            </template>

            <template #item-label="{ item }">
              <div class="flex flex-col">
                <span class="font-medium">{{ item.city }}</span>
                <span class="text-xs text-muted">{{ item.office_type }} - {{ item.company_name }}</span>
              </div>
            </template>
          </UInputMenu>
        </div>

        <div class="lg:col-span-1">
          <UButton icon="i-lucide-phone" size="xl">
            Hubungi Kami
          </UButton>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <Teleport to="body">
      <Transition enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div v-if="selectedOffice" class="fixed inset-0 bg-black/60 flex flex-col justify-center items-center p-6 z-50"
          @click.self="clearValue">
          <motion :initial="{ scale: 0, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.3, ease: 'easeOut' }"
            class="max-w-[600px] w-full p-6 rounded-xl bg-white relative shadow-xl">
            <!-- Close Button -->
            <button type="button"
              class="absolute top-4 right-4 cursor-pointer text-2xl text-red-500 hover:text-red-600 transition-colors"
              aria-label="Close modal" @click="clearValue">
              <UIcon name="ic:round-close" />
            </button>

            <!-- Header -->
            <div class="pr-8">
              <h4 class="text-xl font-semibold">{{ selectedOffice.office_type }}</h4>
              <p class="text-lg font-medium text-gray-700">{{ selectedOffice.company_name }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ selectedOffice.city }}</p>
            </div>

            <hr class="border-gray-200 my-4" />

            <!-- Address -->
            <div class="mb-4">
              <h5 class="font-semibold text-sm text-gray-600 mb-2 flex items-center gap-2">
                <UIcon name="ic:baseline-location-on" />
                Alamat
              </h5>
              <div v-if="selectedOffice.address" class="text-gray-800">
                <p>{{ selectedOffice.address }}</p>
                <UButton trailing-icon="mdi:map-marker" class="mt-2" size="xs"> Lihat Peta</UButton>
              </div>
              <div v-else-if="selectedOffice.addresses" class="text-gray-800 space-y-1">
                <p v-for="(addr, idx) in selectedOffice.addresses" :key="idx">{{ addr }}</p>
              </div>
              <p v-else class="text-gray-400 italic">Alamat tidak tersedia</p>
            </div>

            <hr class="border-gray-200 my-4" />

            <!-- Contact Information -->
            <div class="space-y-3">
              <h5 class="font-semibold text-sm text-gray-600 mb-2">Kontak</h5>

              <!-- Mobile Phones -->
              <div v-if="selectedOffice.phones?.mobile?.length" class="space-y-2">
                <div v-for="(phone, idx) in selectedOffice.phones.mobile" :key="`mobile-${idx}`"
                  class="flex items-center gap-2 text-sm">
                  <UIcon name="ic:baseline-phone-iphone" class="text-gray-600" />
                  <a :href="`tel:${phone.replace(/\s/g, '')}`"
                    class="font-medium text-primary hover:text-green-800 hover:underline">
                    {{ phone }}
                  </a>
                </div>
              </div>

              <!-- Landline Phones -->
              <div v-if="selectedOffice.phones?.landline?.length" class="space-y-2">
                <div v-for="(phone, idx) in selectedOffice.phones.landline" :key="`landline-${idx}`"
                  class="flex items-center gap-2 text-sm">
                  <UIcon name="ic:baseline-local-phone" class="text-gray-600" />
                  <a :href="`tel:${phone.replace(/\s/g, '')}`"
                    class="font-medium text-primary hover:text-green-800 hover:underline">
                    {{ phone }}
                  </a>
                </div>
              </div>

              <!-- No Contact Info -->
              <p v-if="!selectedOffice.phones?.mobile?.length && !selectedOffice.phones?.landline?.length"
                class="text-gray-400 italic text-sm">
                Informasi kontak tidak tersedia
              </p>
            </div>
          </motion>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
const { offices } = useCabang();
const selectedOffice = ref(null);

function clearValue() {
  selectedOffice.value = null;
}

// Optional: Handle escape key to close modal
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedOffice.value) {
      clearValue();
    }
  };

  window.addEventListener('keydown', handleEscape);

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});



</script>
