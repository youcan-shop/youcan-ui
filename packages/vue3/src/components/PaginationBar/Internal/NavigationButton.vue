<script setup lang="ts">
import { computed } from 'vue';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';
import PrimaryButton from '~/components/Button/PrimaryButton.vue';

const props = defineProps<{
  current: number
  index: number | string
}>();

const isDisabled = computed(() => props.index === '...');
</script>

<template>
  <SecondaryButton
    v-if="current !== index" size="sm" class="navigation-button" :class="{ active: current === index }"
    :disabled="isDisabled"
  >
    {{ index }}
  </SecondaryButton>
  <PrimaryButton
    v-else size="sm" class="navigation-button" :class="{ active: current === index }"
    :disabled="isDisabled"
  >
    {{ index }}
  </PrimaryButton>
</template>

<style scoped>
.navigation-button {
  width: 36px;
  height: 36px;
}
</style>
