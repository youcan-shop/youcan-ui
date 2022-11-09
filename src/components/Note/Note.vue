<script setup lang="ts">
</script>

<template>
  <div class="note">
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.note {
  --note-background: var(--white);
  --note-border-color: var(--gray-25);
  display: flex;
  align-items: center;
  width: 540px;
  background: var(--note-background);
  border: 1px solid var(--note-border-color);
  border-radius: 8px;
  padding: 2px 25px;
  gap: 32px;
}

.iconMail {
    color: #B83375;
}

.content {
    color: #444444;
    line-height: 22px;
    font-weight: 400;
    font-size: 15px;
}
</style>
