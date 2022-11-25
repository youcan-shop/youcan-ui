<script setup lang="ts">
import { computed } from 'vue';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  modelValue: string
  type: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const inputValue = computed(() => props.modelValue);
const inputType = computed(() => props.type);

const onInput = ({ target }: Event) => {
  emit('update:modelValue', launder<HTMLInputElement>(target).value);
};

const onfocus = () => emit('focus');
const onblur = () => emit('blur');
</script>

<template>
  <input
    :value="inputValue" :type="inputType" :placeholder="placeholder" class="input" v-bind="$attrs" @input="onInput"
    @focus="onfocus" @blur="onblur"
  >
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 48px;
  border-radius: 8px;
  padding: 0px 16px;
  color: var(--gray-400);
  font-weight: 400;
  letter-spacing: 2%;
  font-size: 14px;
  line-height: 19.2px;
  outline: none;
  transition-property: color, background-color, border-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
}

.input:hover {
  border: 1px solid var(--gray-200);
  box-shadow: 0px 4px 4px var(--black-700);
}

.input:focus {
  border: 1px solid var(--primary-color);
  color: var(--gray-400);
  box-shadow: 0px 4px 4px var(--black-700);
}

.input::placeholder {
  color: var(--placeholder-color);
}
</style>
