<script setup lang="ts">
import '~/assets/main.css';
import { ref } from 'vue';
import {
  Checkbox,
  DropDown,
  Loading,
  Note,
  PasswordInput,
  PrimaryButton,
  StoreSlugInput,
  TextInput,
} from '~/components';

const inputValue = ref('hello');
const isChecked = ref(false);

const items = [{ label: 'Test 1' }, { label: 'Test 2', icon: 'i-tabler:home' }];
</script>

<template>
  <div>
    <TextInput v-model="inputValue" type="text" placeholder="Placeholder" />
    {{ inputValue }}
    <PasswordInput v-model="inputValue" placeholder="Placeholder" :password-hidden="true" />
    <span>{{ inputValue }}</span>
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
      <Checkbox v-model="isChecked" />
      <span>Hello</span>
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

    <DropDown :items="items" />
  </div>
</template>

<style scoped>
.input-container {
  width: 65%;
}
</style>
