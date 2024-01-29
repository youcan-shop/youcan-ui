<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import FroalaEditor from 'froala-editor';
import { richTextConfig } from './richTextConfig';
import type { RichTextProps } from './types';
import iconDefinitions from './iconDefinition';

const props = withDefaults(defineProps<RichTextProps>(), {
  lang: 'en',
  quickInsert: true,
});
const emit = defineEmits(['update:modelValue']);
const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
const config = ref();
const loading = ref(true);

// SET YOUCAN ICONS TEMPLATE
FroalaEditor.DefineIconTemplate('youcan_icons', '<i class="i-youcan:[NAME]"></i>');
FroalaEditor.DefineIconTemplate('youcan_icons_align', '<i class="i-youcan:text-[NAME]"></i>');

FroalaEditor.ICON_DEFAULT_TEMPLATE = 'youcan_icons_align';

iconDefinitions.forEach(({ key, name, template }) => {
  const iconConfig = { NAME: name, ...(template ? { template } : { template: 'youcan_icons' }) };
  FroalaEditor.DefineIcon(key, iconConfig);
});

// CREATE CLEAR EDITOR COMMAND
FroalaEditor.RegisterCommand('clear', {
  title: 'Clear HTML',
  focus: false,
  undo: true,
  refreshAfterCallback: true,
  callback() {
    this.html.set('');
    this.events.focus();
  },
});

const setEditorConfig = () => {
  const { lang, license, toolbar, quickInsert } = props;
  const { text, paragraph, misc, rich } = toolbar;

  // SET LANGUAGE AND LICENSE KEY
  richTextConfig.language = lang;
  richTextConfig.key = license;
  richTextConfig.quickInsertEnabled = quickInsert;

  // SET TOOLBAR BUTTONS
  richTextConfig.toolbarButtons = [...text, ...paragraph, ...misc, ...rich];

  // SET TOOLBAR BUTTONS MD, SM, XS
  ['MD', 'SM', 'XS'].forEach((size) => {
    const sizeConfig = richTextConfig[`toolbarButtons${size}` as keyof typeof richTextConfig];

    if (sizeConfig && typeof sizeConfig === 'object') {
      (sizeConfig as any).moreText.buttons = text;
      (sizeConfig as any).moreParagraph.buttons = paragraph;
      (sizeConfig as any).moreMisc.buttons = misc;
      (sizeConfig as any).moreRich.buttons = rich;
    }
  });

  // SET CONFIG
  config.value = richTextConfig;
};

onMounted(() => {
  loading.value = false;
  setEditorConfig();
});
</script>

<template>
  <div v-if="!loading" class="editor" :class="{ error }">
    <froala v-model:value="model" tag="textarea" :config="config" />
  </div>
</template>

<style>
.fr-box.fr-basic .fr-element.fr-view {
  font: var(--text-sm-regular);
}

.editor {
  --border: 1px solid var(--gray-200);
  --shadow: var(--shadow-xs-gray);
  --border-radius: 10px;

  max-width: 100%;
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.editor.error {
  --border: 1px solid var(--red-500);
  --shadow: var(--focus-shadow-xs-red);
  --border-radius: 10px;
}

.editor:focus-within {
  --border: 1px solid var(--brand-500);
  --shadow: var(--focus-shadow-xs-brand);
  --border-radius: 10px;
}
</style>
