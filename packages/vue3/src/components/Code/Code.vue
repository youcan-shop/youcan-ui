<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import './themes/dark.css';
import './themes/line-numbers.css';
import './languages';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import type { Language } from './types';

const props = withDefaults(defineProps<{
  code?: string
  language?: Language
  showLineNumbers?: boolean
}>(), {
  code: 'const data = 1;',
  language: 'js',
  showLineNumbers: true,
});

const codeRef = ref();

onMounted(() => {
  if (codeRef.value) {
    codeRef.value.innerHTML = codeRef.value.innerHTML.trim();
    Prism.highlightAll();
  }
});
</script>

<template>
  <div>
    <pre :class="[`language-${props.language}`, { 'line-numbers': props.showLineNumbers }]">
      <code ref="codeRef">{{ code }}</code>
    </pre>
  </div>
</template>

<style scoped>
pre code[ref="codeRef"] {
  white-space: pre-line;
}
</style>
