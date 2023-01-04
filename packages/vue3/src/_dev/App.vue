<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import {
  FileInput,
} from '~/components';
import UploadedFile from '~/components/Upload/Internal/UploadedFile.vue';

const fileArr = ref<File[]>([]);

function handleinput(files: File[]) {
  files.forEach(f => fileArr.value.push(f));
}

function deletefile(file: File) {
  // naive deletion
  fileArr.value = fileArr.value.filter(f => f.name !== file.name);
}
</script>

<template>
  <div>
    <FileInput size="md" @input="handleinput">
      <template #label>
        Upload :)
      </template>
    </FileInput>
    <div class="files">
      <UploadedFile v-for="file in fileArr" :key="file.name" :file="file" :progress="50" @delete="deletefile(file)" />
    </div>
    <div class="files">
      <UploadedFile v-for="file in fileArr" :key="file.name" :file="file" error=":(" @delete="deletefile(file)" />
    </div>
    <div class="files">
      <UploadedFile v-for="file in fileArr" :key="file.name" :file="file" @delete="deletefile(file)" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
