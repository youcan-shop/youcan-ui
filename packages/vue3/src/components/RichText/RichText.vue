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
import SecondaryButton from '../Button/SecondaryButton.vue';
import InsertTable from './internal/Table.vue';
import { TextStyleExtended } from './extensions/textstyle';
import Colors from './internal/Color.vue';
import handleDropEvent from './handleDrop';
import Iframe from './extensions/iframe';
import EmojiPicker from './internal/Emojipicker.vue';
import Tooltip from './internal/Tooltip.vue';
import toolbar from './toolbar';

const props = defineProps<{
  modelValue: string
  uploadImageHandler: (file: File) => Promise<string | null>
}>();

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.modelValue,
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
      inline: true,
    }),
    Link.configure({
      openOnClick: false,
    }),
    Iframe,
  ],
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

function insertTable(data: Record<string, string>) {
  const { rows, cols } = data;
  editor.value?.chain().focus().insertTable({ rows: Number(rows), cols: Number(cols), withHeaderRow: true }).run();
}

function insertEmoji(emoji: string) {
  editor.value?.commands.insertContent(emoji);
}

const _toolbar = toolbar(editor);

// Update text size
watch(_toolbar.fontSize, (newValue) => {
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
</script>

<template>
  <div class="rich-text-editor">
    <div class="tool-bar">
      <div v-for="(el, i) in Object.values(_toolbar)" :key="i">
        <Tooltip :label="el.tooltip">
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
          <EmojiPicker v-if="el.type === 'EmojiPicker'" :icon="el.icon" @select="insertEmoji" />
        </Tooltip>
      </div>
    </div>
    <EditorContent class="editor-content" :editor="editor" />
  </div>
</template>

<style lang="scss">
.rich-text-editor {
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  overflow: hidden;
}

.tool-bar{
  border: 1px solid var(--gray-100);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
}

/* Change Icon color */
.tool-bar > icon i {
  color: var(--gray-700)
}

.rich-text-editor:focus-within {
  outline:1px solid var(--brand-500) !important;
}

.editor-content{
  padding: 10px;
}

.rich-text-editor .tool-bar {
  width: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
}

.ProseMirror {
  min-height: 173px;
  max-height: 100%;
  overflow-y: auto;
  outline: none;

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
}
</style>
