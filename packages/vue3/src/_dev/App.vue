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
    <Input v-model="inputModel" placeholder="Placeholder text">
      <template #prefix>
        <DropdownPrefix />
      </template>
    </Input>

    value: {{ inputModel }}
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  font: var(--text-md-regular);
}
</style>
