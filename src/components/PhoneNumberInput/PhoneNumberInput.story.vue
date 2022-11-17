<script setup lang="ts">
import { ref } from 'vue';
import PhoneNumberInput from './PhoneNumberInput.vue';

const items = [{ label: 'Test 1', value: 't1' }, { label: 'Test 2', icon: 'i-tabler:home', value: 't2' }];
const selectedItem = ref();
</script>

<template>
  <Story>
    <Variant title="Default">
      <ComboPhoneNumberInputBox v-model="selectedItem" :items="items" />
      Selected item: {{ selectedItem }}
    </Variant>
    <Variant title="With placeholder">
      <PhoneNumberInput v-model="selectedItem" :items="items" placeholder="Custom placeholder" />
      Selected item: {{ selectedItem }}
    </Variant>
  </Story>
</template>
