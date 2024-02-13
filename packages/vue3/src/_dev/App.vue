<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Tag } from '~/components';
import type { TagItemValue } from '~/components/Tag/types';

const preferredLanguages = ref<TagItemValue[]>([
  { label: 'English', value: 2 },
]);

const languages = [
  { label: 'Arabic', value: 1 },
  { label: 'English', value: 2 },
  { label: 'German', value: 3 },
  { label: 'French', value: 4 },
  { label: 'Dutch', value: 5 },
  { label: 'Hindi', value: 6 },
];
</script>

<template>
  <div class="container">
    <div>
      <Tag
        v-model="preferredLanguages"
        placeholder="Select programming languages"
        :max="3"
        type="dropdown"
        :items="languages"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.container > div {
  width: 500px;
}
</style>
