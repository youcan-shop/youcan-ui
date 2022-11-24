<script setup lang="ts">
import '~/assets/main.css';
import { ref } from 'vue';
import {
  Checkbox,
  ComboBox,
  Dropdown,
  Loading,
  Note,
  PasswordInput,
  PhoneNumberInput,
  PrimaryButton,
  StoreSlugInput,
  TextInput,
} from '~/components';

const inputValue = ref('hello');
const isChecked = ref(false);

const items = [{ label: 'Test 1', value: 't1' }, { label: 'Test 2', icon: 'i-tabler:home', value: 't2' }];
const selectedDropdownValue = ref('');
const selectedPhoneNumberValue = ref('');
const passwordInput = ref('');
</script>

<template>
  <div>
    <TextInput v-model="inputValue" type="text" placeholder="Placeholder" />
    {{ inputValue }}
    <PasswordInput v-model="passwordInput" placeholder="Placeholder" :password-hidden="true" />
    <span>Password: {{ passwordInput }}</span>
    <div class="input-container">
      <StoreSlugInput v-model="inputValue" type="text" placeholder="Placeholder" />
      <span>{{ inputValue }}</span>
      <div>
        <PrimaryButton>
          <span>Continue</span>
        </PrimaryButton>
      </div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
      <Checkbox id="gg" v-model="isChecked" />
      <label for="gg">Hello</label>
    </div>
    <Loading />
    <Note>
      <template #icon>
        <i class="icon i-tabler-mail-opened" />
      </template>
      <template #content>
        <p>Don't forget to check your inbox, we have sent a link to verify your account.</p>
      </template>
    </Note>

    <Dropdown v-model="selectedDropdownValue" :items="items" />
    <span>Selected item: {{ selectedDropdownValue }}</span>

    <ComboBox v-model="selectedDropdownValue" :items="items" />
    <span>Selected item: {{ selectedDropdownValue }}</span>

    <PhoneNumberInput v-model="selectedPhoneNumberValue" :items="items" dial-code="t1" />
    <span>Selected item: {{ selectedPhoneNumberValue }}</span>
  </div>
</template>

<style scoped>
.input-container {
  width: 65%;
}
</style>
