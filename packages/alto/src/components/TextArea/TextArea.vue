<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import type { TextAreaProps } from '~/types';

const props = defineProps<TextAreaProps>();

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const attrs = useAttrs();

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div
    :class="{
      'yc-enabled': !attrs.disabled,
      'yc-error': error,
    }" class="yc-wrapper"
  >
    <textarea ref="primitive" v-model="model" class="yc-textarea" v-bind="$attrs" />
  </div>
</template>

<style scoped>
@import "@youcan/styles/textarea";
</style>
