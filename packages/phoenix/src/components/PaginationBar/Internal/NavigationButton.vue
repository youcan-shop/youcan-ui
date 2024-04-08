<script setup lang="ts">
import { computed } from 'vue';
import type { NavigationButtonProps } from '~/types';
import { PrimaryButton, SecondaryButton } from '~/components';

const props = defineProps<NavigationButtonProps>();

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
