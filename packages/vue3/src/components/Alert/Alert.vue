<script setup lang="ts">
import { computed, onUnmounted, useSlots } from 'vue';
import type { AlertProps } from '~/types';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';

const props = withDefaults(
  defineProps<AlertProps>(),
  {
    type: 'warning',
    canClose: true,
  },
);

const emit = defineEmits<{
  (e: 'close'): void
}>();

const alertVariant = computed(() => {
  let classList = 'i-youcan-';
  switch (props.type) {
    case 'success':
      classList += 'check-circle';
      break;
    case 'info':
      classList += 'info-1';
      break;
    case 'error':
      classList += 'warning-circle';
      break;
    default:
      classList += 'warning-circle';
      break;
  }

  return `${classList} ${props.type}`;
});

const { title, description } = useSlots();

const handleClose = () => {
  emit('close');
};

let timeOut: ReturnType<typeof setTimeout>;
if (props.closeAfterDuration && typeof props.closeAfterDuration === 'number') {
  timeOut = setTimeout(() => {
    handleClose();
  }, props.closeAfterDuration);
}

onUnmounted(() => {
  clearTimeout(timeOut);
});
</script>

<template>
  <div class="alert-block" :class="[type]">
    <div class="main">
      <div class="icon-block" :class="[type]">
        <i class="icon" :class="alertVariant" />
      </div>
      <div class="content-container">
        <span v-if="title" class="title" :class="[type]">
          <slot name="title" />
        </span>
        <span v-if="description" class="description" :class="[type]">
          <slot name="description" />
        </span>
      </div>
      <!-- Close button -->
      <div v-if="canClose" class="btn">
        <TertiaryButton class="close-button" size="xs" icon-position="only" @click="handleClose">
          <template #icon>
            <i class="i-tabler:x" />
          </template>
        </TertiaryButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert-block {
  --border-left-color: var(--orange-500);

  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 400px;
  max-width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  overflow: hidden;
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-radius: 4px;
  border-color: var(--gray-200);
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 8px;
}

.alert-block::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--border-left-color);
}

.alert-block.success {
  --border-left-color: var(--green-600);
}

.alert-block.info {
  --border-left-color: var(--blue-500);
}

.alert-block.error {
  --border-left-color: var(--red-500);
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
}

.description {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.content-container .description {
  padding-bottom: 4px;
}

.icon {
  width: 18px;
  height: 18px;
  color: var(--orange-500);
}

.icon.success {
  color: var(--green-600);
}

.icon.info {
  color: var(--blue-500);
}

.icon.error {
  color: var(--red-500);
}

.close-button {
  padding: 0;
  color: var(--gray-500);
  cursor: pointer;
}

.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
}

.title {
  font: var(--text-sm-medium);
}

.title.success {
  color: var(--green-600);
}

.title.info {
  color: var(--blue-500);
}

.title.error {
  color: var(--red-500);
}

.title.warning {
  color: var(--orange-500);
}
</style>
