<template>
  <div class="note">
    <div class="icon">
      <slot name="icon" class="icon" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.note {
  --note-background: var(--white);
  --note-border-color: var(--gray-25);
  --note-icon-color: var(--primary-400);
  --note-text-color: var(--gray-700);
  display: flex;
  align-items: center;
  max-width: 540px;
  background: var(--note-background);
  border: 1px solid var(--note-border-color);
  border-radius: 8px;
  padding: 2px 25px;
  gap: 32px;
}

.icon {
  color: var(--note-icon-color);
}

.content {
  color: var(--note-text-color);
  line-height: 22px;
  font-weight: 400;
  font-size: 15px;
}
</style>
