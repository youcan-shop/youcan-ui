<script setup lang="ts">
import TagItem from './TagItem.vue';

const xxx = {
  label: 'Label',
  hexColour: '#FF45DD',
};
</script>

<template>
  <div>
    <TagItem v-model="xxx" />
  </div>
</template>

<style scoped>

</style>
