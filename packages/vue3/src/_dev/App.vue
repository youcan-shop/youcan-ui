<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import RadioGroup from '~/components/Radio/RadioGroup.vue';

const fffg = ref();
</script>

<template>
  <div>
    <RadioGroup v-model="fffg" :items="[{ label: 'sss', value: 222 }, { label: 'xxx', value: 333 }]" name="sss" />
    <div>{{ JSON.stringify(fffg) }}</div>
  </div>
</template>
