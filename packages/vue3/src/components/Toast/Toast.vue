<script setup lang="ts">
import type { ToastType } from './types';

const props = defineProps({
  type: {
    type: String as () => ToastType,
    default: 'neutral',
  },
  hasIcon: {
    type: Boolean,
    default: true,
  },
  canClose: {
    type: Boolean,
    default: true,
  },
  hasActions: {
    type: Boolean,
    default: false,
  },
  primaryButton: String,
  secondaryButton: String,
  closeAfter: Number,
});

const emit = defineEmits(['clickPrimaryButton', 'clickSecondaryButton', 'close']);

if (typeof props.closeAfter !== 'undefined' && typeof props.closeAfter === 'number') {
  setTimeout(() => {
    emit('close');
  }, props.closeAfter);
}

const closeToast = () => {
  emit('close');
};
</script>

<template>
  <div class="toast-block">
    <div class="main">
      <div v-if="hasIcon" class="icon-block" :class="[type]">
        <i
          class="icon" :class="{
            'i-tabler:alert-circle error': type === 'error',
            'i-tabler:alert-triangle warning': type === 'warning',
            'i-tabler:circle-check success': type === 'success',
            'i-tabler:info-circle neutral': type === 'neutral',
          }"
        />
      </div>
      <div class="content-container">
        <span class="title" :class="[type]">
          <slot name="title">
            Example: Short toast title
          </slot>
        </span>
        <span class="description">
          <slot name="description">
            Example: Short description using toast.
          </slot>
        </span>
      </div>
      <!-- Close button -->
      <button v-if="canClose" class="close-button" @click="() => closeToast()">
        <i class="i-tabler:x" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.toast-block {
  width: 396px;
  display: flex;
  padding: 12px 12px 16px;
  gap: 8px;
  flex-direction: column;
  background-color: var(--base-white);
  border-radius: 8px;
  position: relative;
  padding: 16px;
  border: 1px solid #F3F3F6;
  border-left: 4px solid var(--green-600);

  .icon-block {
    display: flex;

    .icon {
      width: 20px;
      height: 20px;

      &.error {
        color: #E3262D;
      }

      &.success {
        color: var(--green-600);
      }
    }

    &.error {
      background-color: #FFEBEB;
      border-color: #FFF5F5;
    }

    &.success {
      background-color: #E6F7E6;
      border-color: #E6F7E6;
    }
  }

  .close-button {
    width: max-content;
    position: absolute;
    cursor: pointer;
    top: 8px;
    right: 16px;
    padding: 8px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: background 150 ease-in-out;
    outline: none;
    user-select: none;
    background: transparent;
    border: 1px solid transparent;
    color: #6E7487;

    [dir='rtl'] & {
      right: unset;
      left: 16px;
    }

    .icon {
      width: 18px;
      height: 18px;
    }

    &:hover {
      background: #F3F3F6;
    }
  }

  .main {
    display: flex;
    gap: 10px;

    .header {
      display: flex;
      column-gap: 10px;
    }

    .content-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .title {
        color: #6E7487;
        font: var(--text-sm-medium);

        &.success {
          color: var(--green-600);
        }
      }

      .description {
        font: var(--text-sm-regular);
        color: var(--gray-900);
      }
    }

    .actions-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>
