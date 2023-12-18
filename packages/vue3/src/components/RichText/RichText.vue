<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
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
import Tooltip from '../Tooltip/Tooltip.vue';
import InsertTable from './internal/Table.vue';
import { TextStyleExtended } from './extensions/textstyle';
import Colors from './internal/Colors/Color.vue';
import handleDropEvent from './handleDrop';
import Iframe from './extensions/iframe';
import EmojiPicker from './internal/Emojis/EmojiPicker.vue';
import CharacterPicker from './internal/SpecialCharacters/CharacterPicker.vue';
import toolbar from './toolbar';
import Indent from './extensions/indent';

const props = withDefaults(
  defineProps<{
    modelValue: string
    dir?: string
    uploadImageHandler: (file: File) => Promise<string | null>
  }>(),
  {
    dir: 'ltr',
  },
);

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    emit('update:modelValue', html);
  },
  editorProps: {
    handleDrop: (view, event, slice, moved) =>
      handleDropEvent(view, event, slice, moved, props.uploadImageHandler),
  },
  extensions: [
    StarterKit,
    Underline,
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
    Indent,
  ],
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

function insertTable(data: Record<string, string>) {
  const { rows, cols } = data;
  editor.value
    ?.chain()
    .focus()
    .insertTable({ rows: Number(rows), cols: Number(cols), withHeaderRow: true })
    .run();
}

function insertEmoji(emoji: string) {
  editor.value?.commands.insertContent(emoji);
}

function insertCharacter(character: string) {
  editor.value?.commands.insertContent(character);
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

// Update heading
watch(_toolbar.heading, (newValue) => {
  editor.value?.chain().focus().toggleHeading(newValue.model.value).run();
});

// highlight color
watch(_toolbar.highlight, (newValue) => {
  editor.value
    ?.chain()
    .focus()
    .toggleHighlight({ color: newValue.model.toLowerCase() })
    .run();
});

// text color
watch(_toolbar.color, (newValue) => {
  editor.value?.commands.setColor(newValue.model.toLowerCase());
});
const isFullScreen = ref(false);

const toggleFullScreen = () => {
  const element = document.documentElement;
  const requestFullScreen = element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen;
  const exitFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;

  (isFullScreen.value ? exitFullScreen : requestFullScreen)?.call(isFullScreen.value ? document : element);
  isFullScreen.value = !isFullScreen.value;
};

const handleFullScreenChange = () => {
  isFullScreen.value = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
};

onMounted(() => {
  ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
    document.addEventListener(event, handleFullScreenChange);
  });
});
</script>

<template>
  <div :class="{ 'full-screen': isFullScreen }" class="rich-text-editor">
    <div class="tool-bar">
      <TertiaryButton icon-position="only" size="sm" @click="toggleFullScreen">
        <template #icon>
          <i class="i-youcan:corners-out" />
        </template>
      </TertiaryButton>
      <div class="divider" />
      <div v-for="(el, i) in Object.values(_toolbar)" :key="i" class="element">
        <Tooltip :label="el.tooltip">
          <TertiaryButton
            v-if="el.type === 'TertiaryButton'"
            icon-position="only"
            size="sm"
            @click="el.action()"
          >
            <template #icon>
              <i :class="`${el.icon}`" />
            </template>
          </TertiaryButton>
          <Dropdown
            v-if="el.type === 'Dropdown'"
            v-model="el.model"
            :items="el.items"
            placeholder=""
          />
          <Colors v-if="el.type === 'Colors'" v-model="el.model" :icon="el.icon" />
          <InsertTable
            v-if="el.type === 'table'"
            v-model="el.model"
            @insert="insertTable"
          />
          <SecondaryButton
            v-if="el.type === 'SecondaryButton'"
            size="sm"
            @click="el.action()"
          >
            {{ el.label }}
          </SecondaryButton>
          <EmojiPicker
            v-if="el.type === 'EmojiPicker'"
            :icon="el.icon"
            @select="insertEmoji"
          />
          <CharacterPicker
            v-if="el.type === 'CharacterPicker'"
            :icon="el.icon"
            @select="insertCharacter"
          />
        </Tooltip>
        <div v-if="el.divider === true" class="divider" />
      </div>
    </div>
    <EditorContent class="editor-content" :editor="editor" :style="{ direction: dir }" />
  </div>
</template>

<style lang="scss">
.rich-text-editor {
  display: flex;
  box-sizing: border-box;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
}

.tool-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid var(--gray-200);
  justify-self: center;
}

/* Change Icon color */
.tool-bar > .icon i {
  color: var(--gray-700);
}

.rich-text-editor:focus-within {
  outline: 1px solid var(--brand-500) !important;
}

.editor-content {
  padding: 10px;
  overflow-y: auto;
}

.rich-text-editor .tool-bar {
  width: 100%;
  padding: 8px;
  gap: 8px;
}

.ProseMirror {
  /* stylelint-disable-line */
  min-height: 173px;
  max-height: 100%;
  overflow-y: auto;
  outline: none;

  table {
    width: 100%;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    border-collapse: collapse;

    td,
    th {
      position: relative;
      box-sizing: border-box;
      min-width: 1em;
      padding: 3px 5px;
      border: 2px solid var(--gray-200);
      vertical-align: top;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      background-color: var(--gray-50);
      font-weight: bold;
      text-align: left;
    }

    .selectedCell::after {
      /* stylelint-disable-line */
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: var(--gray-100);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      top: 0;
      right: -2px;
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
  /* stylelint-disable-line */
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
}

pre {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--base-black);
  color: var(--base-white);
  font-family: JetBrainsMono, monospace;

  code {
    padding: 0;
    background: none;
    color: inherit;
    font-size: 0.8rem;
  }
}

.full-screen {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.divider {
  width: 1px;
  background-color: var(--gray-200);
  height: 35px;
}

.element {
  display: flex;
  gap: 8px;
}
</style>
