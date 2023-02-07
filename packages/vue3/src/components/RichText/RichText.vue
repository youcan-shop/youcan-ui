<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { onBeforeUnmount, reactive, watch } from 'vue';
import Underline from '@tiptap/extension-underline';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import TextAlign from '@tiptap/extension-text-align';
import TertiaryButton from '../Button/TertiaryButton.vue';
import { Dropdown } from '..';
import type { DropdownItemArray } from '../Dropdown/types';
import { TextStyleExtended } from './extensions/textstyle';

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Underline,
    HorizontalRule,
    TextStyleExtended,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
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
    action: editor.value?.chain().focus().setHorizontalRule().run(),
  },
  undo: {
    type: 'TertiaryButton',
    icon: 'i-youcan-arrow-bend-up-left',
    action: editor.value?.chain().focus().undo().run(),
  },
  redo: {
    type: 'TertiaryButton',
    icon: 'i-youcan-arrow-bend-up-right',
    action: editor.value?.chain().focus().redo().run(),
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
  text: () => editor.value?.commands.setFontSize('110'),
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
    </div>
  </div>
  <EditorContent :editor="editor" />
</template>

<style scoped>
.rich-text-editor{
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  display: flex;
}
</style>
