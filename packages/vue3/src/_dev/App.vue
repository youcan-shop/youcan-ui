<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, PrimaryDestructiveButton, SecondaryButton, SecondaryDestructiveButton, TertiaryButton } from '~/components';

const isChecked = ref(false);
</script>

<template>
  <div class="container">
    <PrimaryButton>
      Primary Button
    </PrimaryButton>
    <SecondaryButton>
      Secondary Button
    </SecondaryButton>
    <TertiaryButton>
      Tertiary Button
    </TertiaryButton>
    <PrimaryDestructiveButton>
      Destructive Primary Button
    </PrimaryDestructiveButton>
    <SecondaryDestructiveButton>
      Destructive Secondary Button
    </SecondaryDestructiveButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
