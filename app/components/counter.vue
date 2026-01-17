<script setup lang="ts">
import { animate, useMotionValue, useTransform, RowValue } from "motion-v"
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  targetValue: number
  duration?: number
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2,
  delay: 0
})

const count = useMotionValue(0)

// Format the motion value with Indonesian locale (dots as thousands separators)
const formatted = useTransform(() => {
  return Math.round(count.get()).toLocaleString('id-ID')
})

const target = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

let controls: any

const startAnimation = () => {
  controls = animate(count, props.targetValue, {
    duration: props.duration,
    delay: props.delay,
    ease: "easeOut"
  })
}

onMounted(() => {
  const targetEl = target.value
  if (!targetEl) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      startAnimation()
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  observer.observe(targetEl)
})

onUnmounted(() => {
  controls?.stop()
})
</script>

<template>
  <span ref="target" class="inline-flex items-center">
    <!-- RowValue will animate the characters of the formatted string -->
    <RowValue :value="formatted" />
  </span>
</template>

<style scoped></style>
