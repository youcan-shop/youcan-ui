<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { MediaInput, UploadedMedia } from '~/components';

const attachments = ref<File[]>([]);
const limit = 7;

const deleteFile = (index: number) => {
  const override = attachments.value.filter((el, i) => i !== index);
  attachments.value = override;
};
</script>

<template>
  <div class="container">
    <div class="files-grid">
      <UploadedMedia
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(index)"
      />
    </div>
    <MediaInput v-model="attachments" :limit="limit" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
}

.files-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
  margin-bottom: 60px;
}
</style>
