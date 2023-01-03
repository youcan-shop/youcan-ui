<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import {
  Input,
} from '~/components';
import DropdownPrefix from '~/components/Input/prefixes/DropdownPrefix.vue';

const inputModel = ref();
</script>

<template>
  <div>
    <Input v-model="inputModel" :error="true" style="max-width:360px;" placeholder="Placeholder text">
      <template #prefix>
        <DropdownPrefix />
      </template>
      <template #icon>
        <i i-youcan-link />
      </template>
    </Input>

    value: {{ inputModel }}
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
