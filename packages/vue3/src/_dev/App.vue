<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { FileInput, UploadedFile } from '~/components';

const attachment = ref<File | null>(null);

const uploadFile = (file: File[]) => {
  attachment.value = file[0];
};
const deleteFile = () => {
  attachment.value = null;
};
</script>

<template>
  <div class="container">
    <UploadedFile
      v-if="attachment"
      :file="attachment"
      error="selected file is more than 2M"
      @delete="deleteFile"
    />
    <div class="file-input">
      <FileInput @input="uploadFile" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-height: 140px;
  row-gap: 10px;
}
</style>
