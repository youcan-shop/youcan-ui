<template>
  <div class="note">
    <div class="icon">
      <slot name="icon" class="icon">
        <i class="icon i-tabler-mail-opened" />
      </slot>
    </div>
    <div class="content">
      <slot name="content">
        <p>Don't forget to check your inbox, we have sent a link to verify your account.</p>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.note {
  --note-background: var(--base-white);
  --note-border-color: var(--gray-100);
  --note-icon-color: var(--brand-500);
  --note-text-color: var(--gray-700);

  display: flex;
  align-items: center;
  max-width: 540px;
  padding: 2px 25px;
  border: 1px solid var(--note-border-color);
  border-radius: 8px;
  background: var(--note-background);
  gap: 32px;
}

.icon {
  color: var(--note-icon-color);
}

.content {
  color: var(--note-text-color);
  font: var(--text-sm-regular);
}
</style>
