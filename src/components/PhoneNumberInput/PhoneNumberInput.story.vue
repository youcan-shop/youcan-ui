<script setup lang="ts">
import { ref } from 'vue';
import PhoneNumberInput from './PhoneNumberInput.vue';

const items = [{ label: 'Test 1', value: 't1' }, { label: 'Test 2', icon: 'i-tabler:home', value: 't2' }];
const selectedItem = ref();

const dialCode = ref('t1');
</script>

<template>
  <Story>
    <Variant title="Default">
      <ComboPhoneNumberInputBox v-model="selectedItem" :items="items" />
      Selected item: {{ selectedItem }}
    </Variant>
    <Variant title="With placeholder">
      <PhoneNumberInput
        v-model="selectedItem" v-model:dial-code="dialCode" :items="items"
        placeholder="Custom placeholder"
      />
      Selected item: {{ dialCode }} {{ selectedItem }}
    </Variant>
  </Story>
</template>
