<script setup lang="ts">
import { Utils } from '@youcan/ui-core';

const props = withDefaults(defineProps<{ modelValue: File[] | undefined; limit?: number }>(), { limit: 1 });

const emit = defineEmits(['update:modelValue']);

const idAttr = Utils.uid('input');

const handleInput = (event: Event) => {
  const target = (event.target as HTMLInputElement);
  let override: File[] = [];
  const { limit } = props;
  if (!target.files?.length) {
    return;
  }

  if (props.modelValue && limit > 1) {
    override = props.modelValue;
    for (let i = 0; i < target.files.length; i++) {
      override.push(target.files[i]);
    }
  }
  else {
    override.push(target.files[0]);
  }
  emit('update:modelValue', override);
  target.value = '';
};
</script>

<template>
  <label :for="idAttr" class="dropzone">
    <input
      :id="idAttr" type="file"
      :multiple="props.limit > 1"
      @change="handleInput"
    >
    <slot name="facade" />
  </label>
</template>

<style scoped lang="scss">
.dropzone {
  position: relative;

  input[type="file"] {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  > * {
    :not(input[type="file"]) {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
