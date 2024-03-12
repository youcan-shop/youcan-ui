<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Checkbox } from '~/components';
const isChecked = ref(false);
</script>

<template>
  <div class="form-control">
    <Checkbox v-model="isChecked">
      <template #label>
        Accept terms and conditions
      </template>
    </Checkbox>
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
</style>
