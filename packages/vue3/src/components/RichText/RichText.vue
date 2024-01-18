<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import FroalaEditor from 'froala-editor';
import { RichTextConfig } from './config';
import type { RichTextProps } from './types';
import iconDefinitions from './iconDefinition';

const props = withDefaults(defineProps<RichTextProps>(), {
  lang: 'en',
});
const emit = defineEmits(['update:modelValue']);
const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

FroalaEditor.DefineIconTemplate('youcan_icons', '<i class="i-youcan:[NAME]"></i>');
FroalaEditor.DefineIconTemplate('youcan_icons_align', '<i class="i-youcan:text-[NAME]"></i>');

FroalaEditor.ICON_DEFAULT_TEMPLATE = 'youcan_icons_align';

iconDefinitions.forEach(({ key, name, template }) => {
  const iconConfig = { NAME: name, ...(template ? { template } : { template: 'youcan_icons' }) };
  FroalaEditor.DefineIcon(key, iconConfig);
});

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

RichTextConfig.language = props.lang;
const config = ref(RichTextConfig);

onMounted(() => {
  config.value.events.initialized();
});
</script>

<template>
  <div id="app">
    <div id="froala-icons" />
    <froala id="edit" v-model:value="model" tag="textarea" :config="config" />
  </div>
</template>

<style>
.myclass {
  --border: 1px solid var(--gray-200);
  --shadow: var(--shadow-xs-gray);

  border: var(--border);
  box-shadow: var(--shadow);
}
</style>
