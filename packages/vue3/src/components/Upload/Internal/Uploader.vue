<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{ modelValue: File[]; limit?: number }>(),
  { limit: 1 },
);

const emit = defineEmits([
  'update:modelValue',
  'dragenter',
  'dragleave',
  'drop',
]);

const facade = ref();
const input = ref<HTMLInputElement>();

function addFile(file: File) {
  emit('update:modelValue', [...props.modelValue, file]);
}

function handledrop(e: DragEvent) {
  const files = Array.from(e.dataTransfer?.files ?? []);
  files.forEach((file) => {
    addFile(file);
    emit('drop', file);
  });
}

function handleinput(_e: Event) {
  const files = Array.from(input.value!.files ?? []);
  files.forEach((file) => {
    addFile(file);
    emit('drop', file);
  });
}

function handledragenter(e: DragEvent) {
  emit('dragenter', e);
}

function handledragleave(e: DragEvent) {
  emit('dragleave', e);
}

function handlekeypress(e: KeyboardEvent) {
  if ([' ', 'Spacebar', 'Enter'].includes(e.key)) {
    input.value!.click();
  }
}

function handleclick(_e: MouseEvent) {
  input.value!.click();
}
</script>

<template>
  <div
    class="dropzone"
    @dragleave.prevent="handledragleave"
    @dragenter.prevent="handledragenter"
    @drop.prevent="handledrop"
    @click="handleclick"
    @keypress="handlekeypress"
  >
    <input
      ref="input"
      hidden
      type="file"
      :multiple="props.limit > 1"
      @input="handleinput"
    >
    <slot ref="facade" name="facade" @drop.prevent />
  </div>
</template>

<style scoped>
</style>
