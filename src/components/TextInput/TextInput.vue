<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const { value } = defineProps<{
  value: string
  type: string
  placeholder?: string
}>();

const emit = defineEmits(['input']);

const inputValue = ref(value);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  inputValue.value = target.value;

  emit('input', inputValue.value);
};
</script>

<template>
  <Input :value="inputValue" type="text" placeholder="text" v-bind="$attrs" @input="onInput" />
</template>
