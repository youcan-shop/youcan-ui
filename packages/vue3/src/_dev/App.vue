<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Dropdown, MultiselectDropdown, PrimaryButton } from '~/components';

const category = ref(null);

const desiredLanguages = ref([]);

const hasError = ref(false);

const items = [
  { label: 'Shoes', value: 1 },
  { label: 'Cosmetics', value: 2 },
  { label: 'Gym', value: 3 },
];

const languages = [
  { label: 'Arabic', value: 1 },
  { label: 'English', value: 2 },
  { label: 'German', value: 3 },
];
</script>

<template>
  <div class="dropdown-container">
    <Dropdown
      v-model="category"
      searchable
      :items="items"
      placeholder="Select category"
      :error="hasError"
    />

    <MultiselectDropdown
      v-model="desiredLanguages"
      :searchable="true"
      :items="languages"
      label="Desired languages"
      icon="i-youcan-translate"
      :error="hasError"
    />

    <PrimaryButton @click="hasError = !hasError">
      Submit form
    </PrimaryButton>
  </div>
</template>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  row-gap: 40px;
  padding-top: 40px;
}
</style>
