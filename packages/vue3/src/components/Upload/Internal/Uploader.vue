<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ limit?: number }>(), { limit: 1 });

const emit = defineEmits(['dragenter', 'dragleave', 'input', 'drop']);

const facade = ref();
const input = ref<HTMLInputElement>();

function addfiles(files: File[]) {
  emit('input', files);
}

function handledrop(e: DragEvent) {
  const files = Array.from(e.dataTransfer?.files ?? []);

  emit('drop', files);
  addfiles(files);
}

function handleinput(_e: Event) {
  const files = Array.from(input.value!.files ?? []);

  emit('drop', files);
  addfiles(files);
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
