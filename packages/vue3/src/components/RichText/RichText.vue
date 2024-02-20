<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import Quill from 'quill';
import type { RichTextProps } from './types';

const props = withDefaults(
  defineProps<RichTextProps>(),
  {
    disabled: false,
    error: false,
  },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
const editorContainer = ref<HTMLDivElement | null>(null);
const quill = ref<Quill | null>(null);

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

  [{ color: [] }, { background: [] }],
  ['code-block'],
  ['link', 'image', 'video'],
];
onMounted(() => {
  if (editorContainer.value) {
    // Custom ICONS including dropdown icons
    const icons = Quill.import('ui/icons');
    icons.bold = '<i class="i-youcan:text-bolder" />';
    icons.align[''] = '<i class="i-youcan:text-align-left" />';
    icons.align.center = '<i class="i-youcan:text-align-center" />';
    icons.align.right = '<i class="i-youcan:text-align-right" />';
    icons.align.justify = '<i class="i-youcan:text-align-justify" />';
    quill.value = new Quill(editorContainer.value, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });

    quill.value.on('text-change', () => {
      if (quill.value) {
        model.value = quill.value.root.innerHTML;
      }
    });
  }
});

// Custom button
const clearContent = () => {
  if (quill.value) {
    quill.value.setText('');
  }
};
</script>

<template>
  <div ref="editorContainer" class="custom-class" />
  <button @click="clearContent">
    Clear Content
  </button>
</template>

<style lang="scss">
@import "../../../node_modules/quill/dist/quill.snow.css";

.ql-toolbar {
  --border: 1px solid var(--gray-200);
  --shadow: var(--shadow-xs-gray);

  border: var(--border);
  border-radius: 8px 8px 0 0;
  box-shadow: var(--shadow);
}

.custom-class {
  border: var(--border);
  border-radius: 0 0 8px 8px;
  box-shadow: var(--shadow);
}

.ql-picker-options {
  border: var(--border);
  border-radius: 8px;
  box-shadow: var(--shadow);
}
</style>
