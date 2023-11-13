<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { MultiselectDropdown } from '~/components';

const desiredLanguages = ref([]);

const languages = [
  { label: 'Arabic', value: 1 },
  { label: 'English', value: 2 },
  { label: 'German', value: 3 },
];
</script>

<template>
  <MultiselectDropdown
    v-model="desiredLanguages"
    :searchable="true"
    :items="languages"
    label="Desired languages"
    icon="i-youcan-translate"
  />
</template>
