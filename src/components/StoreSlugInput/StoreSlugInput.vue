<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  slugSuffix: {
    type: String,
    default: '.youcan.shop',
  },
  placeholder: {
    type: String,
  },
});

const emit = defineEmits(['input']);

const slugSuffix = ref(props.slugSuffix);
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
