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

function replaceIcons(customIcons: { [key: string]: any }): void {
  const icons = Quill.import('ui/icons');
  icons.undo = '';
  icons.redo = '';
  icons.customImage = '';
  for (const key in icons) {
    // eslint-disable-next-line no-prototype-builtins
    if (customIcons.hasOwnProperty(key)) {
      icons[key] = customIcons[key];
    }
  }
}

function undoChange() {
  quill.value?.history.undo();
}

function redoChange() {
  quill.value?.history.redo();
}

// function customImageInsert() {
//   const fileInput = document.querySelector('.ql-image') as HTMLInputElement;
//   const toolbar = document.querySelector('.ql-toolbar');

//   if (!fileInput) {
//     const newFileInput = document.createElement('input');
//     newFileInput.type = 'file';
//     newFileInput.accept = 'image/*';
//     newFileInput.className = 'ql-image';

//     toolbar?.appendChild(newFileInput);
//     newFileInput.click();

//     newFileInput.onchange = function (event) {
//       const files = (event.target as HTMLInputElement).files;
//       const range = quill.value?.getSelection(true);
//       if (files && files.length > 0 && range) {
//         const file = files[0];
//         const reader = new FileReader();
//         reader.onload = function () {
//           const imageDataUrl = reader.result as string;
//           quill.value?.insertEmbed(range.index, 'image', imageDataUrl, Quill.sources.USER);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//   }
//   else {
//     fileInput.click();
//   }
// }

function insertImageHandler(event: any) {
  const files = event.target.files;
  const range = quill.value?.getSelection(true);
  if (files && files.length > 0 && range) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const imageDataUrl = reader.result;
      if (imageDataUrl && typeof imageDataUrl === 'string') {
        quill.value?.insertEmbed(range.index, 'image', imageDataUrl, Quill.sources.USER);
        quill.value?.insertText(range.index + 1, '\n', Quill.sources.USER);
        quill.value?.setSelection(range.index + 3, 0, Quill.sources.USER);
      }
      else {
        console.error('Failed to read image data.');
      }
    };
    reader.readAsDataURL(file);
  }
}

function addFileInputToToolbar(toolbar: any) {
  const newFileInput = document.createElement('input');
  newFileInput.type = 'file';
  newFileInput.accept = 'image/*';
  newFileInput.className = 'ql-image';
  newFileInput.addEventListener('change', insertImageHandler);
  toolbar.appendChild(newFileInput);
  newFileInput.click();
}

function customImageInsert() {
  const fileInput = document.querySelector('.ql-image') as HTMLInputElement;
  const toolbar = document.querySelector('.ql-toolbar');

  if (!fileInput) {
    addFileInputToToolbar(toolbar);
  }
  else {
    fileInput.click();
  }
}

const editorConfig = {
  modules: {
    toolbar: {
      container: props.toolbar,
      handlers: {
        undo: undoChange,
        redo: redoChange,
        customImage: customImageInsert,
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
    // SET EDITOR DIRECTION
    if (document.dir === 'rtl') {
      quill.value.format('direction', 'rtl');
      quill.value.format('align', 'right');
    }
    // STYLING COLOR PICKER DROPDOWN
    const elementToAppendTo = document.querySelectorAll('.ql-picker-item[data-value="transparent"]');
    elementToAppendTo.forEach((element) => {
      const redLineSpan = document.createElement('span');
      redLineSpan.classList.add('red-line');
      element.appendChild(redLineSpan);
    });
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
