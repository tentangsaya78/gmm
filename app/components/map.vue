<template>
  <div class="container pb-20">

    <SectionTitle class="text-center" title="Jaringan Layanan Kami"
      description="Temukan Cabang & Service Center terdekat di kota Anda" />
    <div id="map-section" class="relative group h-[450px] rounded-xl overflow-hidden">
      <LMap ref="mapRef" style="height: 100%" :zoom="zoom" :center="center" :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base" name="OpenStreetMap" />

        <template v-for="office in validOffices" :key="office.city">
          <LMarker v-if="office.lat && office.lng" :lat-lng="[office.lat, office.lng]" @click="selectedOffice = office">
            <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
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

const iconWidth = ref(40)
const iconHeight = ref(15)

const iconUrl = computed(() => '/icon.png')
const iconSize = computed(() => [iconWidth.value, iconHeight.value])

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