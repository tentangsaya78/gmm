<template>
  <div class="container pb-20">

    <SectionTitle class="text-center" title="Jaringan Layanan Kami"
      description="Temukan Cabang & Service Center terdekat di kota Anda" />
    <div id="map-section" class="relative group h-[450px] rounded-xl overflow-hidden">
      <!-- Search Bar Overlay -->
      <div class="absolute top-4 right-0 z-1000 w-full max-w-sm px-4 ">
        <UInputMenu v-model="selectedOffice" :items="offices" :trailing="false" label-key="city"
          placeholder="Cari cabang..." size="lg" class="shadow-2xl w-full" :ui="{
            base: 'bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-primary ml-8',
          }">
          <template #trailing>
            <UButton v-if="selectedOffice" icon="i-lucide-x" size="xs" color="neutral" variant="ghost"
              aria-label="Clear selection" @click.stop="clearValue" />
          </template>
          <template #item-label="{ item }">
            <div class="flex flex-col">
              <span class="font-medium">{{ item.city }}</span>
              <span class="text-xs text-gray-500">{{ item.office_type }}</span>
            </div>
          </template>
        </UInputMenu>
      </div>

      <LMap ref="mapRef" style="height: 100%" :zoom="zoom" :center="center" :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base" name="OpenStreetMap" />

        <template v-for="office in validOffices" :key="office.city">
          <LMarker v-if="office.lat && office.lng" :lat-lng="[office.lat, office.lng]" @click="selectedOffice = office">
            <LPopup :options="{ offset: [0, -20] }">
              <div class="min-w-[200px] p-1">
                <div class="font-bold text-primary mb-1">{{ office.company_name }}</div>
                <div class="text-xs font-semibold mb-1">{{ office.office_type }} - {{ office.city }}</div>
                <div class="text-[10px] leading-tight text-gray-600 mb-2">{{ office.address }}</div>
                <div v-if="office.phones?.mobile?.length" class="flex items-center gap-1 text-[10px]">
                  <UIcon name="i-lucide-phone" class="w-3 h-3" />
                  <span>{{ office.phones.mobile[0] }}</span>
                </div>
              </div>
            </LPopup>
          </LMarker>
        </template>
      </LMap>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { offices, selectedOffice } = useCabang()
const clearValue = () => {
  selectedOffice.value = null
}
const mapRef = ref<any>(null)
const zoom = ref(5)
const center = ref<[number, number]>([-2.5, 118])

const validOffices = computed(() => offices.filter(o => o.lat !== null && o.lng !== null))

// Watch for selection changes to move the map
watch(selectedOffice, (newOffice) => {
  if (newOffice && newOffice.lat && newOffice.lng) {
    center.value = [newOffice.lat, newOffice.lng]
    zoom.value = 14

    // If map instance is available, use flyTo for smoother transition
    if (mapRef.value?.leafletObject) {
      mapRef.value.leafletObject.flyTo([newOffice.lat, newOffice.lng], 14, {
        duration: 2
      })
    }
  } else if (!newOffice) {
    // Reset view if selection cleared
    center.value = [-2.5, 118]
    zoom.value = 5
  }
})
</script>