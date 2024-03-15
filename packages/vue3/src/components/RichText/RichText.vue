<script lang="ts" setup>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { computed, onMounted, ref } from 'vue';
import Quill from 'quill';
import type { RichTextProps } from './types';
import customIcons from './internal/icons';
import { toolbarOptions } from './internal/toolbar';
import { customImage, redoChange, undoChange } from './internal/handlers';
import { replaceIcons, styleColorPickerDropdown } from './utils';

const props = withDefaults(
  defineProps<RichTextProps>(),
  {
    disabled: false,
    error: false,
    placeholder: 'Type something...',
    toolbar: () => toolbarOptions,
  },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

const editor = ref<HTMLDivElement | null>(null);
let quill: Quill | null;

const editorConfig = {
  modules: {
    toolbar: {
      container: props.toolbar,
      handlers: {
        undo: () => undoChange(quill),
        redo: () => redoChange(quill),
        image: () => customImage(quill, quill?.getSelection(true)),
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  },
  placeholder: props.placeholder,
  theme: 'snow',
};

onMounted(() => {
  if (props.disabled && quill) {
    quill.disable();
  }

  if (editor.value) {
    replaceIcons(customIcons);
    quill = new Quill(editor.value, editorConfig);

    if (quill) {
      quill.on('text-change', () => {
        if (quill) {
          model.value = quill.root.innerHTML;
        }
      });

      if (document.dir === 'rtl') {
        quill.format('direction', 'rtl');
        quill.format('align', 'right');
      }

      styleColorPickerDropdown();
    }
  }
});
</script>

<template>
  <div class="rich-text" :class="{ error }">
    <div ref="editor" />
  </div>
</template>

<style>
.ql-editor {
  min-height: 100px;
  font: var(--text-sm-regular);
}

.ql-toolbar {
  position: sticky;
  z-index: 9;
  top: 0;
  border-radius: 8px 8px 0 0;
  background-color: var(--base-white);
}

.ql-container {
  border-radius: 0 0 8px 8px;
}

.rich-text {
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  box-shadow: var(--shadow-xs-gray);
}

.rich-text:focus-within {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.rich-text.error {
  border: 1px solid var(--red-500);
  box-shadow: var(--focus-shadow-xs-red);
}

.ql-snow .ql-formats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ql-picker.ql-expanded .ql-picker-options {
  border-radius: 8px;
  box-shadow: var(--shadow-md-gray);
}

.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 8px 8px 8px 6px;
}

.ql-picker-label {
  svg {
    display: none;
  }
}

[data-value="none"] {
  border-color: transparent !important;
}

[data-value="none"]:hover {
  border-color: transparent !important;
}

.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: transparent;
}

.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-toolbar.ql-snow .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow.ql-toolbar .ql-picker-label.ql-active:hover,
.ql-toolbar.ql-snow .ql-formats button:hover,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-picker-options .ql-picker-item:hover {
  color: var(--brand-500);
}

.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: transparent;
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected {
  border-color: var(--brand-500);
}

.ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-0 {
  width: 285px;
  padding: 5px;
}

.ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-1 {
  width: 285px;
  padding: 5px;
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border-color: var(--gray-100);
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: unset;
}

.red-line {
  display: inline-block;
  width: 100%;
  height: 2px;
  transform: rotate(-45deg);
  background-color: red;
}

@media screen and (max-width: 767px) {
  /* Apply the style only when the direction is ltr */
  :dir(ltr) .ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-0 {
    transform: translateX(-50%);
  }

  :dir(rtl) .ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-0 {
    transform: translateX(50%);
  }

  :dir(ltr) .ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-1 {
    transform: translateX(-65%);
  }

  :dir(rtl) .ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-1 {
    transform: translateX(65%);
  }
}
</style>
