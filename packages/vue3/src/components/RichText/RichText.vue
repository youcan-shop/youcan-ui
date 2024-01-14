<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import FroalaEditor from 'froala-editor';
import { RichTextConfig } from './config';
import type { RichTextProps } from './types';

const props = withDefaults(defineProps<RichTextProps>(), {
  lang: 'en',
});
const emit = defineEmits(['update:modelValue']);
const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

FroalaEditor.DefineIcon('bold', { NAME: 'star' });

FroalaEditor.DefineIcon('clear', { NAME: 'remove', SVG_KEY: 'remove' });
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
    <froala id="edit" v-model:value="model" tag="textarea" :config="config" />
  </div>
</template>
