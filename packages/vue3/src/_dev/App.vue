<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import StaticStatus from '../components/Status/StaticStatus.vue';

</script>

<template>
  <div>
    <StaticStatus
      :status="{
        label: 'Test Status',
        color: '#ff0',
        labelColor: '#00f',
      }"
    />
  </div>
</template>
