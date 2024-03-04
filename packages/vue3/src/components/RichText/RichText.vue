<script lang="ts" setup>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { computed, onMounted, ref } from 'vue';
import Quill from 'quill';
import type { RichTextProps } from './types';
import customIcons from './ToolbarIcons';
import { toolbarOptions } from './EditorToolbar';

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
const quill = ref<Quill | null>(null);

const replaceIcons = (customIcons: { [key: string]: any }): void => {
  const icons = Quill.import('ui/icons');
  icons.undo = '';
  icons.redo = '';
  for (const key in icons) {
    // eslint-disable-next-line no-prototype-builtins
    if (customIcons.hasOwnProperty(key)) {
      icons[key] = customIcons[key];
    }
  }
};

const undoChange = () => {
  quill.value?.history.undo();
};

const redoChange = () => {
  quill.value?.history.redo();
};

const editorConfig = {
  modules: {
    toolbar: {
      container: props.toolbar,
      handlers: {
        undo: undoChange,
        redo: redoChange,
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
  if (props.disabled) {
    quill.value?.disable();
  }
  if (editor.value) {
    replaceIcons(customIcons);
    // INITIATING QUILL
    quill.value = new Quill(editor.value, editorConfig);
    // WATCHING EDITOR CHANGE
    quill.value.on('text-change', () => {
      if (quill.value) {
        model.value = quill.value.root.innerHTML;
      }
    });
    // ACCEPTING ALL TYPES OF IMAGES
    const insertImage = document.querySelector('.ql-image');
    insertImage?.addEventListener('click', () => {
      const input = document.querySelector('input.ql-image');
      if (input) {
        input.setAttribute('accept', 'image/*');
      }
    });
    // SET EDITOR DIRECTION
    if (document.dir === 'rtl') {
      quill.value.format('direction', 'rtl');
      quill.value.format('align', 'right');
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
  width: 250px;
  padding: 5px;
}

.ql-snow .ql-picker.ql-expanded .ql-picker-options#ql-picker-options-1 {
  width: 250px;
  padding: 5px;
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item {
  width: 30px;
  height: 30px;
  border-radius: 8px;
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: unset;
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
