<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';
import type { ToolbarButtonsType } from '~/components/RichText/types';

const content = ref('');
const error = ref(false);
const license = ref('license-key');
const toolbar: ToolbarButtonsType = {
  text: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', 'fontSize', 'paragraphFormat'],
  paragraph: ['align', 'formatOL', 'formatUL', 'outdent', 'indent'],
  misc: ['undo', 'redo'],
  rich: ['insertTable', 'insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', 'codeView', 'clear'],
};
</script>

<template>
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" type="success" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>
  <div class="container">
    <RichText v-model="content" :error="error" lang="ar" :license="license" :toolbar="toolbar" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 5%;
}
</style>
