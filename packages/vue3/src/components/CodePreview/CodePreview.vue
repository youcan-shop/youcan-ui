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
  lang?: Language
  lineNumbers?: boolean
}>(), {
  code: '',
  lang: 'markup',
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
    <pre :class="[`language-${props.lang}`, { 'line-numbers': props.lineNumbers }]">
      <code ref="codeRef">{{ code }}</code>
    </pre>
  </div>
</template>

<style scoped>
pre code[ref="codeRef"] {
  white-space: pre-line;
}
</style>
