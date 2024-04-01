<script setup lang="ts">
import { computed } from 'vue';
import type { NavigationButtonProps } from '~/types';
import Button from '~/components/Button/Button.vue';

const props = defineProps<NavigationButtonProps>();

const isDisabled = computed(() => props.index === '...');
</script>

<template>
  <Button
    v-if="current !== index" size="sm" class="navigation-button" :class="{ active: current === index }"
    :disabled="isDisabled" variant="secondary"
  >
    {{ index }}
  </Button>
  <Button
    v-else size="sm" class="navigation-button" :class="{ active: current === index }"
    :disabled="isDisabled" variant="primary"
  >
    {{ index }}
  </Button>
</template>

<style scoped>
.navigation-button {
  width: 36px;
  height: 36px;
}
</style>
