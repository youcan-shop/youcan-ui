<script setup lang="ts">
import { computed } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = withDefaults(
  defineProps<{ color: string }>(),
  { color: '' },
);

const emit = defineEmits(['overridecolor']);

const model = computed({
  get: () => props.color.substring(1),
  set: (value: string) => emit('overridecolor', `#${value}`),
});
</script>

<template>
  <div class="color-override">
    <Input v-model="model" class="value/" />
  </div>
</template>

<style lang="scss" scoped>
</style>
