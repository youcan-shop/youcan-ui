<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
import '~/assets/main.scss';

const inputString = ref('');
</script>

<template>
  <Input v-model="inputString" input-type="text" :has-help="true" hint="Subtle input hint" placeholder="Placeholder text" :is-error="false" label="Label" input-icon="i-tabler-home" />
  <p>Input: {{ inputString }}</p>
</template>
