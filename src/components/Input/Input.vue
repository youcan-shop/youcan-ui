<script setup lang="ts">
import { computed, ref } from 'vue';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  modelValue: string
  type: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const inputValue = ref(props.modelValue);
const inputType = computed(() => props.type);

const onInput = ({ target }: Event) => {
  inputValue.value = launder<HTMLInputElement>(target).value;

  emit('update:modelValue', inputValue.value);
};

const onfocus = () => emit('focus');
const onblur = () => emit('blur');
</script>

<template>
  <input :value="inputValue" :type="inputType" :placeholder="placeholder" class="input" v-bind="$attrs" @input="onInput"
    @focus="onfocus" @blur="onblur">
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 400;
  letter-spacing: 2%;
  line-height: 19.2px;
}

.input::placeholder {
  color: var(--placeholder-color);
}
</style>
