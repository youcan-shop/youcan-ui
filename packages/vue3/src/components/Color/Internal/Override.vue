<script setup lang="ts">
import { computed } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = withDefaults(
  defineProps<{ color: string }>(),
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

