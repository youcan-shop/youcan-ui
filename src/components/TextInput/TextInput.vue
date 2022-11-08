<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps<{
  value: string
  placeholder?: string
}>();

const emit = defineEmits(['input']);
const inputValue = ref(props.value);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  inputValue.value = target.value;

  emit('input', inputValue.value);
};
</script>

<template>
  <Input :value="inputValue" type="text" class="input" :placeholder="placeholder" @input="onInput" />
</template>