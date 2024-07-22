<script lang="ts" setup>
import { computed } from 'vue';
import type { AvatarProps } from '~/types';

const props = defineProps<AvatarProps>();

const initialsText = computed(() => props.initials?.substring(0, 2));
</script>

<template>
  <button class="avatar-container" :class="[`avatar-${size}`, { clickable }]">
    <div class="avatar">
      <img v-if="source" :src="source" alt="" srcset="">
      <span v-else class="initials">
        <span v-if="initials">{{ initialsText }}</span>
        <i v-else class="i-youcan-user" />
      </span>
      <a v-if="url" :href="url" />
    </div>
  </button>
</template>

<style scoped>
.avatar-container {
  --size: 56px;
  --icon-size: 26px;
  --font: var(--text-xl-medium);

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  gap: 10px;
}

.avatar-container.avatar-xs {
  --size: 24px;
  --icon-size: 13px;
  --font: var(--text-xs-medium);
}

.avatar-container.avatar-sm {
  --size: 32px;
  --icon-size: 16px;
  --font: var(--text-sm-medium);
}

.avatar-container.avatar-md {
  --size: 40px;
  --icon-size: 20px;
  --font: var(--text-md-medium);
}

.avatar-container.avatar-lg {
  --size: 48px;
  --icon-size: 23px;
  --font: var(--text-lg-medium);
}

.avatar-container.avatar-xxl {
  --size: 64px;
  --font: var(--display-xs-medium);
}

.avatar-container .avatar {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  transition: opacity 150ms ease-in-out;
  border: 1px solid transparent;
  border-radius: 50%;
  opacity: 1;
  background-color: var(--brand-50);
}

.avatar-container.clickable .avatar {
  cursor: pointer;
}

.avatar-container.clickable .avatar:hover {
  opacity: 0.9;
}

.avatar-container.clickable:focus .avatar {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-red);
}

.avatar-container .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
}

.avatar-container .avatar .initials {
  color: var(--brand-500);
  font: var(--font);
  text-transform: uppercase;
}

.avatar-container .avatar img,
.avatar-container .avatar .initials {
  position: relative;
  z-index: 1;
}

.avatar-container .avatar .initials i {
  width: var(--icon-size);
  height: var(--icon-size);
}

.avatar-container .avatar a[href] {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
