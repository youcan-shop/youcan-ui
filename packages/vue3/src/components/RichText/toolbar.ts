/* eslint-disable no-alert */
// @unocss-include

import type { Editor } from '@tiptap/vue-3';
import type { ShallowRef } from 'vue';
import { reactive } from 'vue';
import type { DropdownItemArray } from '../Dropdown/types';

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

export default function (editor: ShallowRef<Editor | undefined>): Record<string, Record<string, any>> {
  return reactive({
    bold: {
      tooltip: 'Bold (ctrl+B)',
      type: 'TertiaryButton',
      icon: 'i-youcan-text-bolder',
      action: () => editor.value?.chain().focus().toggleBold().run(),
    },
    italic: {
      tooltip: 'Italic (ctrl+I)',
      type: 'TertiaryButton',
      icon: 'i-youcan-text-italic',
      action: () => editor.value?.chain().focus().toggleItalic().run(),
    },
    underline: {
      tooltip: 'Underline (ctrl+U)',
      type: 'TertiaryButton',
      icon: 'i-youcan-text-underline',
      action: () => editor.value?.chain().focus().setUnderline().run(),
    },
    strike: {
      tooltip: 'Strikethrough (ctrl+shift+X)',
      type: 'TertiaryButton',
      icon: 'i-youcan-text-strikethrough',
      action: () => editor.value?.chain().focus().toggleStrike().run(),
    },
    color: {
      tooltip: 'Text color',
      type: 'Colors',
      model: '#000000',
      icon: 'i-youcan-eyedropper-sample',
    },
    highlight: {
      tooltip: 'Background color',
      type: 'Colors',
      model: '#000000',
      icon: 'i-youcan-paint-bucket',
    },
    fontSize: {
      tooltip: 'Font size',
      type: 'Dropdown',
      items: fontSizes,
      model: fontSizes[0],
    },
    textAlign: {
      tooltip: 'Text alignment',
      type: 'Dropdown',
      items: textAlignment,
      model: textAlignment[0],
    },
    ol: {
      tooltip: 'Ordered list',
      type: 'TertiaryButton',
      icon: 'i-youcan-list-numbers',
      action: () => editor.value?.chain().focus().toggleOrderedList().run(),
    },
    ul: {
      tooltip: 'Unordered list',
      type: 'TertiaryButton',
      icon: 'i-youcan-list-numbers',
      action: () => editor.value?.chain().focus().toggleBulletList().run(),
    },
    undo: {
      tooltip: 'Undo',
      type: 'TertiaryButton',
      icon: 'i-youcan-arrow-bend-up-left',
      action: () => editor.value?.chain().focus().undo().run(),
    },
    redo: {
      tooltip: 'Redo',
      type: 'TertiaryButton',
      icon: 'i-youcan-arrow-bend-up-right',
      action: () => editor.value?.chain().focus().redo().run(),
    },
    emoji: {
      tooltip: 'Insert emojis',
      type: 'EmojiPicker',
      icon: 'i-youcan-smiley-sticker',
    },
    link: {
      tooltip: 'Insert link',
      type: 'TertiaryButton',
      icon: 'i-youcan-link-simple',
      action: () => {
        const previousUrl = editor?.value?.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) {
          return;
        }

        if (url === '') {
          return editor?.value!.chain().focus().extendMarkRange('link').unsetLink().run();
        }

        editor?.value!.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
      },
    },
    hr: {
      tooltip: 'Insert divider',
      type: 'TertiaryButton',
      icon: 'i-youcan-minus',
      action: () => editor.value?.chain().focus().setHorizontalRule().run(),
    },
    table: {
      tooltip: 'Insert table',
      type: 'table',
      model: { rows: '2', cols: '2' },
    },
    code: {
      tooltip: 'Code',
      type: 'TertiaryButton',
      icon: 'i-youcan-code',
      action: () => editor.value?.chain().focus().toggleCodeBlock().run(),
    },
    image: {
      tooltip: 'Insert image',
      type: 'TertiaryButton',
      icon: 'i-youcan-image',
      action: () => {
        const url = window.prompt('URL');
        if (url) {
          editor.value?.chain().focus().setImage({ src: url }).run();
        }
      },
    },
    embed: {
      tooltip: 'Embed video',
      type: 'TertiaryButton',
      icon: 'i-youcan-video-camera',
      action: () => {
        const url = window.prompt('URL');

        if (url) {
          editor.value?.chain().focus().setIframe({ src: url }).run();
        }
      },
    },
    clear: {
      tooltip: 'Clear formatting',
      type: 'SecondaryButton',
      label: 'clear formatting',
      action: () => editor.value?.chain().focus().clearNodes().unsetAllMarks().run(),
    },
  });
}
