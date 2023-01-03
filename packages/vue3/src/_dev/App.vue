<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import {
  Checkbox,
  ColorPicker,
  Input,
  Rating,
  TextArea,
} from '~/components';
import DropdownPrefix from '~/components/Input/prefixes/DropdownPrefix.vue';

const textModel = ref();
const inputModel = ref();
const checkboxModel = ref();
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

  <div>
    <Rating :score="3" />
  </div>

  <div>
    <TextArea v-model="textModel" style="max-width:360px;" placeholder="Placeholder text" />
    value: {{ textModel }}
  </div>

  <div>
    <ColorPicker />
  </div>

  <div>
    <Checkbox v-model="checkboxModel" disabled>
      <template #label>
        What the dog doing
      </template>
    </Checkbox>
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
