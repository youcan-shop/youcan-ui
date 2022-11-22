<script setup lang="ts">
import { computed } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue']);
const inputValue = computed(() => props.modelValue);

const onInput = (value: string) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <Input :model-value="inputValue" type="text" class="input" :placeholder="placeholder" v-bind="$attrs"
    @update:model-value="onInput" />
</template>
