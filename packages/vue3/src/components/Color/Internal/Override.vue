<script setup lang="ts">
import { computed } from 'vue';
import type { OverrideProps } from './types';
import Input from '~/components/Input/Input.vue';

const props = withDefaults(
  defineProps<OverrideProps>(),
  { color: '' },
);

const emit = defineEmits(['overridecolor']);

const model = computed({
  get: () => props.color,
  set: (value: string) => emit('overridecolor', value.startsWith('#') ? value : `#${value}`),
});
</script>

<template>
  <div class="override">
    <Input v-model="model" class="value/" />
  </div>
</template>
