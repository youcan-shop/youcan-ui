<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { PrimaryButton, Tooltip } from '~/components';

const randomPosition = () => {
  const positions = ['left', 'right', 'top', 'bottom'];

  return positions[Math.floor(Math.random() * 4)];
};
const positionsArray = Array.from({ length: 300 }, () => randomPosition());
</script>

<template>
  <div>
    <div class="container">
      <Tooltip v-for="(position, index) in positionsArray" :key="index" :position="position" label="here is the Tooltip ? here is the Tooltip">
        <label style="background: red;">
          <PrimaryButton>
            Tooltip {{ position }}
          </PrimaryButton>
        </label>
      </Tooltip>
      <Tooltip position="left" label="here is the Tooltip ? here is the Tooltip">
        <label class="label">
          position is left but we should disable right left when no space to show tooltip
        </label>
      </Tooltip>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  width: max-content;
  gap: 60px;
  max-width: 100%;
  background-color: var(--gray-50);
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 150px);
  height: 50px;
  margin-bottom: 20px;
  background: red;
  color: var(--base-white);
  font: var(--text-md-regular);
}
</style>
