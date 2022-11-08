<script setup lang="ts">
import '~/assets/main.css';
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
import PasswordInput from '~/components/PasswordInput/PasswordInput.vue';
import Button from '~/components/Button/Button.vue';
import Checkbox from '~/components/Checkbox/Checkbox.vue';

const inputValue = ref('hello');
const isChecked = ref(false);
</script>

<template>
  <div>
    <Input v-model="inputValue" type="text" placeholder="Placeholder" />
    <PasswordInput v-model="inputValue" placeholder="Placeholder" :password-hidden="true" />
    <span>{{ inputValue }}</span>
    <div>
      <Input v-model="inputValue" type="text" placeholder="Placeholder" />
      <span>{{ inputValue }}</span>
    </div>
    <div>
      <Button>
        <span>Continue</span>
      </Button>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
      <Checkbox v-model="isChecked" />
      <span>Hello</span>
    </div>
  </div>
</template>
