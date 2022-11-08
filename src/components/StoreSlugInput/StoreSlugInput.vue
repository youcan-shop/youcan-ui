<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps<{
  value: string
  placeholder?: string
  slugSuffix?: string
}>();

const emit = defineEmits(['input']);

const slugSuffix = ref(props.slugSuffix || '.youcan.shop');
const inputValue = ref(props.value);

const onInput = (emittedValue: string) => {
  emit('input', emittedValue);
};
</script>

<template>
  <div>
    <Input :value="inputValue" type="text" class="input" :placeholder="placeholder" @input="onInput" />
    <span class="slug-suffix">{{ slugSuffix }}</span>
  </div>
</template>
