<script setup lang="ts">
import { ref } from 'vue';

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

const toggle = ref(false);
const _base_input = ref();

const toggle_onclick = () => {
  toggle.value = !toggle.value;
  if (toggle.value) {
    _base_input.value?.setAttribute('type', 'text');
  }
  else {
    _base_input.value?.setAttribute('type', 'password');
  }
};
</script>

<template>
  <div class="password-style">
    <button @click="toggle_onclick">
      <span v-if="toggle"><i i-tabler-eye style="font-size:60px;" /></span>
      <span v-else><i i-tabler-eye-off /></span>
    </button>

    <input
      ref="_base_input"
      type="password"
      :placeholder="placeholder"
      :value="inputValue"
      class="input"
      v-bind="$attrs"
      @input="onInput"
    >
  </div>
</template>

<style scoped>
.password-style {
    position: relative;
}
.password-style input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 4px 16px;
  outline: none;
  color: var(--placeholder-color);
  font-weight: 400;
}

.password-style input::placeholder {
  color: var(--placeholder-color);
}

/*  enter the button icon inside the input */
.password-style button {
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
