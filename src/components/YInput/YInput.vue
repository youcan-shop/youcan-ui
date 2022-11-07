<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});

const inputValue = ref('');
const focus = ref(false);

const handleInput = (e: any) => {
  inputValue.value = e.target.value;
};

const handleFocus = () => {
  focus.value = true;
};
</script>

<template>
  <div class="y-input">
    <div class="y-input__container" :class="{ focus }">
      <input
        class="y-input__inner"
        :placeholder="placeholder"
        :type="type"
        :value="inputValue"
        @input="handleInput"
        @focus="handleFocus"
      >
      <h1>{{ inputValue }}</h1>
    </div>
  </div>
</template>
