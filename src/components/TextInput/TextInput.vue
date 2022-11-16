<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue']);
const inputValue = ref(props.modelValue);

const onInput = (value: string) => {
  inputValue.value = value;

  emit('update:modelValue', inputValue.value);
};
</script>

<template>
  <Input :model-value="inputValue" type="text" class="input" :placeholder="placeholder" v-bind="$attrs"
    @update:model-value="onInput" />
</template>
