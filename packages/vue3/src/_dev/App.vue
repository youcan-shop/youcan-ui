<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Card, PrimaryButton, TertiaryButton } from '~/components';
</script>

<template>
  <div class="container">
    <Card>
      <template #header>
        <h3>Introducing Themes!</h3>
      </template>
      <template #body>
        <p>
          Introducing themes, a new way to make yourstore stand out and make it
          more attractive towards your existing and potential clients.
        </p>
      </template>
      <template #footer>
        <div class="actions">
          <PrimaryButton>
            <span>Get started</span>
          </PrimaryButton>
          <TertiaryButton>
            <span>Later</span>
          </TertiaryButton>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: auto;
  margin-top: 60px;
}

p {
  margin: 0;
  font: var(--text-sm-medium);
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
}
</style>
