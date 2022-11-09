<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const props = defineProps<{
  disabled?: boolean
  value?: string
}>();

const emit = defineEmits(['click']);
const selected = ref(props.value);
watchEffect(() => selected.value = props.value);
</script>

<template>
  <button class="dropdown-input" @click="emit('click')">
    {{ selected }}
  </button>
</template>

<style scoped lang="scss">
  .dropdown-input {
    position: relative;
    display: block;
    background: white url('~/assets/chevron-down.svg') no-repeat;
    background-position: right 0.75rem center;
    color: var(--typo-color);
    width: 100%;
    max-width: 460px;
    height: 56px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 16px;
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;

    [dir="rtl"] & {
      background-position: left 0.75rem center;
    }

  }
</style>
