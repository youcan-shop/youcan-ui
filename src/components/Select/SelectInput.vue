<script setup lang="ts">
const props = defineProps({

});
</script>

<template>
  <Input class="dropdown-input" @click="emit('click')">
    <span>Please select an option</span>
    <i class="i-tabler:chevron-down" />
  </Input>
</template>

<style scoped lang="scss">
  .dropdown-input {
    background: #fff;
    cursor: pointer;
    border: 1px solid #e7ecf5;
    border-radius: 3px;
    color: #333;
    display: block;
    font-size: .8em;
    padding: 6px;
    min-width: 250px;
    max-width: 250px;
    &:hover {
      background: #f8f8fa;
    }
  }
</style>
