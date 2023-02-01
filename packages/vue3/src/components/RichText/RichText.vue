<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { onBeforeUnmount } from 'vue';
import Underline from '@tiptap/extension-underline';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Underline,
    HorizontalRule,

  ],
});

onBeforeUnmount(() => {
  editor.value?.destroy();
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
  heading: (level: Level) => editor.value?.chain().focus().toggleHeading({ level }).run(),
  ul: () => editor.value?.chain().focus().toggleBulletList().run(),
  ol: () => editor.value?.chain().focus().toggleOrderedList().run(),
//   iframe: (url: string) => editor.value?.chain().focus().setIframe({ src: url }).run(),
};

const run = (action: string) => toolbar[action]();
</script>

<template>
  <h1>Hello</h1>
  <div>
    <div v-for="el in Object.keys(toolbar)" :key="el" @click="run(el)">
      {{ el }}
    </div>
  </div>
  <EditorContent :editor="editor" />
</template>
