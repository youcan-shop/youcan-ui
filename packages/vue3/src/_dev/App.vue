<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';
import type { ToolbarButtonsType } from '~/components/RichText/types';

const content1 = ref('');
const content2 = ref('');

const license1 = ref('license-key-fr');
const license2 = ref('license-key-ar');

const error = ref(false);
const quickInsert = ref(false);

const customToolbar: ToolbarButtonsType = {
  text: ['fullscreen', 'bold', 'italic', 'backgroundColor', 'fontSize', 'paragraphFormat'],
  paragraph: ['formatOL', 'formatUL', 'outdent', 'indent'],
  misc: ['undo', 'redo'],
  rich: ['insertTable', 'insertLink', 'insertHR', 'codeView', 'clear'],
};
</script>

<template>
  <div class="container">
    <RichText v-model="content1" :error="error" lang="fr" :license="license1" :quick-insert="quickInsert" />
    <RichText v-model="content2" :error="error" lang="ar" :license="license2" :toolbar="customToolbar" :quick-insert="quickInsert" />
    <RichText v-model="content2" :error="error" lang="en" :license="license2" :toolbar="customToolbar" :quick-insert="quickInsert" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 5%;
  gap: 20px;
}
</style>
