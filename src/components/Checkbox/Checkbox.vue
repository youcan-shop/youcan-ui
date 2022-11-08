<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['input']);

const inputValue = ref(props.value);

watchEffect(() => {
  emit('input', inputValue.value);
});
</script>

<template>
  <label class="checkbox-container">
    <input
      v-model="inputValue"
      class="checkbox-input"
      type="checkbox"
    >
    <span class="checkmark" />
  </label>
</template>

<style scoped lang="scss">
.checkbox-container {
  display: block;
  position: relative;
  cursor: pointer;

  &:hover {
    .checkbox-input ~ .checkmark {
      background-color: #f4f4f4;
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
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 1px solid #D8D8EB;
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

  .checkbox-input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid #B83375;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .checkbox-input:checked ~ .checkmark {
    background-color: #fff;
  }
}
</style>
