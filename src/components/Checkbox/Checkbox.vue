<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

watchEffect(() => {
  emit('update:modelValue', inputValue.value);
});
</script>

<template>
  <label class="checkbox-container">
    <input v-model="inputValue" class="checkbox-input" type="checkbox">
    <span class="checkmark" />
  </label>
</template>

<style scoped lang="scss">
.checkbox-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:hover {
    .checkbox-input~.checkmark {
      background-color: var(--stormGray-100);
    }
  }

  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--base-White);
    border: 1px solid var(--border-color);
    border-radius: 4px;

    [dir='rtl'] & {
      left: unset;
      right: 0;
    }
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-input:checked~.checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid var(--primary-color);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkbox-input:checked~.checkmark {
    background-color: var(--base-White);
  }
}
</style>
