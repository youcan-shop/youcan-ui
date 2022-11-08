<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps<{
  value: string
  placeholder?: string
  passwordHidden: boolean
}>();

const emit = defineEmits(['input']);

const inputValue = ref(props.value);

const onInput = (emitedValue: string) => {
  emit('input', emitedValue);
};

const isPasswordHidden = ref(props.passwordHidden);
const baseInput = ref();
</script>

<template>
  <div class="password-input">
    <button @click="isPasswordHidden = !isPasswordHidden">
      <i :class="isPasswordHidden ? 'i-tabler-eye-off' : 'i-tabler-eye'" />
    </button>

    <Input
      ref="baseInput"
      :type="isPasswordHidden ? 'password' : 'text'"
      :placeholder="placeholder"
      :value="inputValue"
      class="input"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.password-input {
  position: relative;
}
.password-input input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 4px 16px;
  outline: none;
  color: var(--placeholder-color);
  font-weight: 400;
}

.password-input input::placeholder {
  color: var(--placeholder-color);
}

.password-input button {
  position: absolute;
  height: 100%;
  background: none;
  right: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--placeholder-color);
}
</style>
