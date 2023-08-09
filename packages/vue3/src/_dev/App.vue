<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import Checkbox from '~/components/Checkbox/Checkbox.vue';

const model = ref(false);
</script>

<template>
  <div>
    <Checkbox v-model="model" />
    {{ model }}
  </div>
</template>
