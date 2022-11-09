<script setup lang="ts">
import '~/assets/main.css';
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
import PasswordInput from '~/components/PasswordInput/PasswordInput.vue';
import Button from '~/components/Button/Button.vue';
import Checkbox from '~/components/Checkbox/Checkbox.vue';
import StoreSlugInputStoryVue from '~/components/StoreSlugInput/StoreSlugInput.story.vue';
import Note from '~/components/Note/Note.vue';

const inputValue = ref('hello');
const isChecked = ref(false);
</script>

<template>
  <div>
    <Input v-model="inputValue" type="text" placeholder="Placeholder" />
    <PasswordInput v-model="inputValue" placeholder="Placeholder" :password-hidden="true" />
    <span>{{ inputValue }}</span>
    <div class="input-container">
      <StoreSlugInputStoryVue v-model="inputValue" type="text" placeholder="Placeholder" />
      <span>{{ inputValue }}</span>
      <div>
        <Button>
          <span>Continue</span>
        </Button>
      </div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
      <Checkbox v-model="isChecked" />
      <span>Hello</span>
    </div>
    <Note>
      <template #icon>
        <i class="iconMail i-tabler-mail-opened" />
      </template>
      <template #content>
        <p>Don't forget to check your inbox, we have sent  a link to verify your account.</p>
      </template>
    </Note>
  </div>
</template>

<style scoped>
.input-container {
  width: 65%;
}
</style>
