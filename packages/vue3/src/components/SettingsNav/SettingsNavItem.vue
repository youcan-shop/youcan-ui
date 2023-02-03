<script setup lang="ts">
defineProps<{ label: string; icon: string; active?: boolean }>();
</script>

<template>
  <button type="button" :disabled="active" :class="{ active }" class="settings-nav-item">
    <div class="icon">
      <i :class="icon" />
    </div>

    <div class="label">
      {{ label }}
    </div>
  </button>
</template>

<style scoped>
button {
    width: 100%;
    border: none;
}

.settings-nav-item {
    gap: 12px;
    padding: 12px;
    display: flex;
    cursor: pointer;
    align-items: center;
    background-color: var(--base-white);
}

.settings-nav-item .label,
.settings-nav-item .icon {
    color: var(--gray-700);
    font: var(--text-sm-regular);
}

.settings-nav-item:not(.active):hover {
    background-color: var(--gray-50);
}

.settings-nav-item:not(.active):is(:focus, :active) {
    outline: none;
    background-color: var(--gray-100);
}

.settings-nav-item.active {
    cursor: default;
    margin-left: -1px;
    box-shadow: inset 3px 0px 0px 0px var(--brand-500);
}

.settings-nav-item.active .label,
.settings-nav-item.active .icon {
    color: var(--brand-500);
    font: var(--text-sm-medium);
}
</style>
