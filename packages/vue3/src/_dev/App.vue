<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, StaticStatus } from '~/components';

const status = ref({ label: 'Success', value: 1, color: '#25B86A' });

const statuses = [
  { label: 'What the dog doing', value: 3, color: '#127EE3' },
  { label: 'Error', value: 2, color: '#CC2929' },
  { label: 'Warning', value: 4, color: '#F2990E' },
  { label: 'Success', value: 1, color: '#25B86A' },
];
</script>

<template>
  <div>
    <StaticStatus :status="status" />

    <br>

    <EditableStatus v-model="status" :statuses="statuses" />
  </div>
</template>

<style scoped>

</style>
