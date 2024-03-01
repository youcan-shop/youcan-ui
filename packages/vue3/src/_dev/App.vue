<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';
// import type { ToolbarOption } from '~/components/RichText/types';

const content = ref();
// const toolbarOptions: ToolbarOption[][] = [
//   ['bold'],
//   ['italic'],
//   ['strike'],
//   //   [{ color }],
//   [{ background: [] }],
//   [{ align: [] }],
//   [{ list: 'ordered' }],
//   [{ list: 'bullet' }],
//   [{ indent: '-1' }],
//   [{ indent: '+1' }],
//   ['code-block'],
// ];
</script>

<template>
  <div class="container">
    <div class="test">
      <!-- <RichText v-model="content" :toolbar="toolbarOptions" /> -->
      <RichText v-model="content" />
    </div>

    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.test {
  margin: 30px;
}

.container {
  width: 100%;
}
</style>
