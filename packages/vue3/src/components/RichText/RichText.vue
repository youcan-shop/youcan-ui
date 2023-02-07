<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { onBeforeUnmount, reactive, watch } from 'vue';
import Underline from '@tiptap/extension-underline';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Color from '@tiptap/extension-color';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TertiaryButton from '../Button/TertiaryButton.vue';
import { Dropdown } from '..';
import type { DropdownItemArray } from '../Dropdown/types';
import SecondaryButton from '../Button/SecondaryButton.vue';
import InsertTable from './internal/Table.vue';
import { TextStyleExtended } from './extensions/textstyle';
import Colors from './internal/Color.vue';
import handleDropEvent from './handleDrop';

const props = defineProps<{
  modelValue: string
  uploadImageHandler: (file: File) => Promise<string | null>
}>();

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    emit('update:modelValue', html);
  },
  editorProps: {
    handleDrop: (view, event, slice, moved) => handleDropEvent(view, event, slice, moved, props.uploadImageHandler),
  },
  extensions: [
    StarterKit,
    Underline,
    HorizontalRule,
    TextStyleExtended,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
    }),
    Highlight.configure({ multicolor: true }),
    Color.configure({
      types: ['textStyle'],
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    Image.configure({
      allowBase64: true,
    }),
    Link.configure({
      openOnClick: false,
    }),
  ],
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

const fontSizes: DropdownItemArray = (() => {
  const _items = [];
  for (let i = 8; i < 100; i++) {
    if (i % 2 === 0) {
      _items.push({ label: String(i), value: i });
    }
  }
  return _items;
})();

const textAlignment = [
  { icon: 'i-youcan-text-align-left', label: 'left', value: 'left' },
  { icon: 'i-youcan-text-align-center', label: 'center', value: 'center' },
  { icon: 'i-youcan-text-align-right', label: 'right', value: 'right' },
  { icon: 'i-youcan-text-align-justify', label: 'justify', value: 'justify' },
];

const setLink = () => {
  const previousUrl = editor?.value!.getAttributes('link').href;
  const url = window.prompt('URL', previousUrl);

  if (url === null) { return; }

  if (url === '') {
    editor?.value!
      .chain()
      .focus()
      .extendMarkRange('link')
      .unsetLink()
      .run();

    return;
  }

  // update link
  editor?.value!
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run();
};

const _toolbar: Record<string, Record<string, any>> = reactive({
  bold: {
    type: 'TertiaryButton',
    icon: 'i-youcan-text-bolder',
    action: () => editor.value?.chain().focus().toggleBold().run(),

  },
  italic: {
    type: 'TertiaryButton',
    icon: 'i-youcan-text-italic',
    action: () => editor.value?.chain().focus().toggleItalic().run(),
  },
  underline: {
    type: 'TertiaryButton',
    icon: 'i-youcan-text-underline',
    action: () => editor.value?.chain().focus().setUnderline().run(),
  },
  strike: {
    type: 'TertiaryButton',
    icon: 'i-youcan-text-strikethrough',
    action: () => editor.value?.chain().focus().toggleStrike().run(),
  },
  textSize: {
    type: 'Dropdown',
    items: fontSizes,
    model: fontSizes[0],
  },
  textAlign: {
    type: 'Dropdown',
    items: textAlignment,
    model: textAlignment[0],
  },
  code: {
    type: 'TertiaryButton',
    icon: 'i-youcan-code',
    action: () => editor.value?.chain().focus().toggleCodeBlock().run(),
  },
  hr: {
    type: 'TertiaryButton',
    icon: 'i-youcan-minus',
    action: () => editor.value?.chain().focus().setHorizontalRule().run(),
  },
  undo: {
    type: 'TertiaryButton',
    icon: 'i-youcan-arrow-bend-up-left',
    action: () => editor.value?.chain().focus().undo().run(),
  },
  redo: {
    type: 'TertiaryButton',
    icon: 'i-youcan-arrow-bend-up-right',
    action: () => editor.value?.chain().focus().redo().run(),
  },
  highlight: {
    type: 'Colors',
    model: '#000000',
    icon: 'i-youcan-paint-bucket',
  },
  color: {
    type: 'Colors',
    model: '#000000',
    icon: 'i-youcan-eyedropper-sample',
  },
  table: {
    type: 'table',
    model: { rows: '2', cols: '2' },
  },
  clear: {
    type: 'SecondaryButton',
    label: 'clear formatting',
    action: () => editor.value?.chain().focus().clearNodes().unsetAllMarks().run(),
  },
  ol: {
    type: 'TertiaryButton',
    icon: 'i-youcan-list-numbers',
    action: () => editor.value?.chain().focus().toggleOrderedList().run(),
  },
  ul: {
    type: 'TertiaryButton',
    icon: 'i-youcan-list-numbers',
    action: () => editor.value?.chain().focus().toggleBulletList().run(),
  },
  link: {
    type: 'TertiaryButton',
    icon: 'i-youcan-link-simple',
    action: setLink,
  },
});

// Update text size
watch(_toolbar.textSize, (newValue) => {
  editor.value?.commands.setFontSize(String(newValue.model.value));
});

// Update text alignment
watch(_toolbar.textAlign, (newValue) => {
  editor.value?.chain().focus().setTextAlign(newValue.model.value).run();
});

// highlight color
watch(_toolbar.highlight, (newValue) => {
  editor.value?.chain().focus().toggleHighlight({ color: newValue.model.toLowerCase() }).run();
});

// text color
watch(_toolbar.color, (newValue) => {
  editor.value?.commands.setColor(newValue.model.toLowerCase());
});

function insertTable(data: Record<string, string>) {
  const { rows, cols } = data;
  editor.value?.chain().focus().insertTable({ rows: Number(rows), cols: Number(cols), withHeaderRow: true }).run();
}

const toolbar: Record<string, (_?: any) => void> = {
  bold: () => editor.value?.chain().focus().toggleBold().run(),
  italic: () => editor.value?.chain().focus().toggleItalic().run(),
  strike: () => editor.value?.chain().focus().toggleStrike().run(),
  code: () => editor.value?.chain().focus().toggleCodeBlock().run(),
  underline: () => editor.value?.chain().focus().setUnderline().run(),
  hr: () => editor.value?.chain().focus().setHorizontalRule().run(),
  clearMarks: () => editor.value?.chain().focus().unsetAllMarks().run(),
  clearNodes: () => editor.value?.chain().focus().clearNodes().run(),
  undo: () => editor.value?.chain().focus().undo().run(),
  redo: () => editor.value?.chain().focus().redo().run(),
  // heading: (level: Level) => editor.value?.chain().focus().toggleHeading({ level }).run(),
  ul: () => editor.value?.chain().focus().toggleBulletList().run(),
  ol: () => editor.value?.chain().focus().toggleOrderedList().run(),

//   iframe: (url: string) => editor.value?.chain().focus().setIframe({ src: url }).run(),
};

const run = (action: string) => toolbar[action]();
</script>

<template>
  <div class="rich-text-editor">
    <div v-for="(el, i) in Object.values(_toolbar)" :key="i">
      <TertiaryButton v-if="el.type === 'TertiaryButton'" icon-position="only" size="sm" @click="el.action()">
        <template #icon>
          <i :class="`${el.icon}`" />
        </template>
      </TertiaryButton>
      <Dropdown v-if="el.type === 'Dropdown'" v-model="el.model" :items="el.items" placeholder="" />
      <Colors v-if="el.type === 'Colors'" v-model="el.model" :icon="el.icon" />
      <InsertTable v-if="el.type === 'table'" v-model="el.model" @insert="insertTable" />
      <SecondaryButton v-if="el.type === 'SecondaryButton'" size="sm" @click="el.action()">
        {{ el.label }}
      </SecondaryButton>
    </div>
  </div>
  <EditorContent :editor="editor" />
</template>

<style lang="scss">
.rich-text-editor{
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  display: flex;
}
.ProseMirror {
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid var(--gray-100);
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: var(--gray-50);
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: var(--gray-100);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: var(--gray-100);
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>
