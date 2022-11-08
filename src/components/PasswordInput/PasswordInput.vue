<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const { value } = defineProps<{
  value: string
  placeholder?: string
}>();

const emit = defineEmits(['input']);

const inputValue = ref(value);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  inputValue.value = target.value;

  emit('input', inputValue.value);
};

const isPasswordHidden = ref(false);
const baseInput = ref();

const togglePasswordVisibility = () => {
  isPasswordHidden.value = !isPasswordHidden.value;
  if (isPasswordHidden.value) {
    baseInput.value?.setAttribute('type', 'text');
  }
  else {
    baseInput.value?.setAttribute('type', 'password');
  }
};
</script>

<template>
  <div class="password-input">
    <button @click="togglePasswordVisibility">
      <i :class="isPasswordHidden ? 'i-tabler-eye' : 'i-tabler-eye-off'" />
    </button>

    <Input
      ref="baseInput"
      type="password"
      :placeholder="placeholder"
      v-model
      class="input"
      v-bind="$attrs"
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
