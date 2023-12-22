<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { EditorContent, VueNodeViewRenderer, useEditor } from '@tiptap/vue-3';
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
import Youtube from '@tiptap/extension-youtube';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import TertiaryButton from '../Button/TertiaryButton.vue';
import { Dropdown } from '..';
import SecondaryButton from '../Button/SecondaryButton.vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import CodeBlock from './internal/CodeBlock.vue';
import InsertTable from './internal/Table.vue';
import { TextStyleExtended } from './extensions/textstyle';
import Colors from './internal/Colors/Color.vue';
import handleDropEvent from './handleDrop';
import Iframe from './extensions/iframe';
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
const lowlight = createLowlight(common);

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }: any) => {
    const html = editor.getHTML();
    emit('update:modelValue', html);
  },
  editorProps: {
    handleDrop: (view: any, event: any, slice: any, moved: any) =>
      handleDropEvent(view, event, slice, moved, props.uploadImageHandler),
  },
  extensions: [
    StarterKit.configure({
      codeBlock: false,
    }),
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
    Youtube.configure({
      controls: false,
    }),
    CodeBlockLowlight.extend({
      addNodeView() {
        return VueNodeViewRenderer(CodeBlock);
      },
    }).configure({ lowlight }),
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

function insertRow(position: string) {
  const chain = editor.value?.chain().focus();

  if (chain) {
    position === 'before' ? chain.addRowBefore() : chain.addRowAfter();
    chain.run();
  }
}
function insertColumn(position: string) {
  const chain = editor.value?.chain().focus();

  if (chain) {
    position === 'before' ? chain.addColumnBefore() : chain.addColumnAfter();
    chain.run();
  }
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
  const requestFullScreen = element.requestFullscreen;
  const exitFullScreen = document.exitFullscreen;

  (isFullScreen.value ? exitFullScreen : requestFullScreen)?.call(isFullScreen.value ? document : element);
  isFullScreen.value = !isFullScreen.value;
};

const handleFullScreenChange = () => {
  isFullScreen.value = !!(document.fullscreenElement);
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
      <Tooltip label="Fullscreen" position="right">
        <TertiaryButton icon-position="only" size="sm" @click="toggleFullScreen">
          <template #icon>
            <i class="i-youcan:corners-out" />
          </template>
        </TertiaryButton>
      </Tooltip>
      <div class="divider" />
      <div v-for="(el, i) in Object.values(_toolbar)" :key="i" class="element">
        <Tooltip :label="el.tooltip" position="right">
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
            @insert-row="insertRow"
            @insert-column="insertColumn"
          />
          <SecondaryButton
            v-if="el.type === 'SecondaryButton'"
            size="sm"
            @click="el.action()"
          >
            {{ el.label }}
          </SecondaryButton>
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
  position: relative;
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
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  font: var(--text-md-regular);
}

.rich-text-editor .tool-bar {
  padding: 8px;
  gap: 8px;
}

/* stylelint-disable-next-line selector-class-pattern */
.ProseMirror {
  /* stylelint-disable-line */
  height: 100%;
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

    /* stylelint-disable-next-line selector-class-pattern */
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

/* stylelint-disable-next-line selector-class-pattern */
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

  .hljs-comment,
  .hljs-quote {
    color: #616161;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-attribute,
  .hljs-tag,
  .hljs-regexp,
  .hljs-link,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #f98181;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .hljs-built_in,
  .hljs-number,
  .hljs-meta,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params {
    color: #fbbc88;
  }

  .hljs-string,
  .hljs-symbol,
  .hljs-bullet {
    color: #b9f18d;
  }

  .hljs-title,
  .hljs-section {
    color: #faf594;
  }

  .hljs-keyword,
  .hljs-selector-tag {
    color: #70cff8;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: 700;
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
  height: 35px;
  background-color: var(--gray-200);
}

.element {
  display: flex;
  gap: 8px;
}
</style>
