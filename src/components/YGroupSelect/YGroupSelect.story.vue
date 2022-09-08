<script setup lang="ts">
import YGroupSelect from './YGroupSelect.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';
</script>

<template>
  <Story>
    <YGroupSelect
      :items="[
        {
          label: 'painer bread',
          value: '1',
        },
        {
          label: 'painer bread',
          value: '1',
        },
        {
          label: 'painer bread',
          value: '1',
        },
        {
          label: 'painer bread',
          value: '1',
        },
        {
          label: 'painer bread',
          value: '1',
        },
        {
          label: 'painer bread',
          value: '1',
        },
        {
          icon: 'i-tabler-home',
          label: 'Select option',
          value: '2',
        },
      ]"
    />
  </Story>
</template>
