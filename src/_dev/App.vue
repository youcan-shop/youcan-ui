<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
import TextInput from '~/components/TextInput/TextInput.vue';
import '~/assets/main.scss';

const inputValue = ref('hello');
</script>

<template>
  <div>
    <Input v-model="inputValue" type="text" placeholder="Placeholder" />
    <span>{{ inputValue }}</span>
    <TextInput v-model="inputValue" placeholder="Placeholder" />
    <span>{{ inputValue }}</span>
  </div>
</template>
