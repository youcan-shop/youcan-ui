<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  value: string
  type: string
  placeholder?: string
}>();

const emit = defineEmits(['input']);

const inputValue = ref(props.value);
const inputType = computed(() => props.type);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  inputValue.value = target.value;

  emit('input', inputValue.value);
};
</script>

<template>
  <input :value="inputValue" :type="inputType" class="input" v-bind="$attrs" @input="onInput">
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 6px 12px;
  outline: none;
  font-weight: 400;
  letter-spacing: 2%;
  line-height: 19.2px;
}

.input::placeholder {
  color: var(--placeholder-color);
}
</style>
