<template>
  <span class="inline-flex items-baseline overflow-hidden relative leading-tight">
    <template v-for="(char, index) in characters" :key="index">
      <span v-if="isDigit(char)" class="inline-block overflow-hidden relative" style="height: 1em;">
        <Motion :initial="{ y: '0%' }" :animate="{ y: isVisible ? `-${parseInt(char) * 10}%` : '0%' }" :transition="{
          duration: props.duration,
          delay: props.delay + (index * 0.1),
          ease: [0.45, 0.05, 0.55, 0.95]
        }" class="flex flex-col">
          <span v-for="n in 10" :key="n" class="inline-block h-[1em] leading-[1em]">
            {{ n - 1 }}
          </span>
        </Motion>
      </span>
      <span v-else class="inline-block h-[1em] leading-[1em]">
        {{ char }}
      </span>
    </template>

    <!-- Dummy observer target -->
    <span ref="target" class="absolute inset-0 pointer-events-none opacity-0"></span>
  </span>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { Motion } from 'motion-v';

interface Props {
  targetValue: number;
  duration?: number;
  delay?: number;
  decimals?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: .5,
  delay: 0,
  decimals: 0,
});

const target = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const characters = computed(() => {
  return props.targetValue.toLocaleString('id-ID', {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  }).split('');
});

const isDigit = (char: string) => /^\d$/.test(char);

onMounted(() => {
  const targetEl = target.value;
  if (!targetEl) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      // We don't disconnect if we want it to re-animate or just leave it
      // But for jackpot, once is usually enough
      observer.disconnect();
    }
  }, { threshold: 0.1 });

  observer.observe(targetEl);
});
</script>

<style scoped>
/* Ensure the numeric spans take up full height of their container for alignment */
.leading-tight {
  line-height: 1.25;
}
</style>