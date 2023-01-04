<script setup lang="ts">
import { ref, useSlots } from 'vue';
import Uploader from './Internal/Uploader.vue';

const props = withDefaults(
  defineProps<{ size?: 'sm' | 'md' | 'lg'; limit?: number }>(),
  { size: 'md', limit: 1 },
);

const slots = useSlots();

const files = ref<File[]>([]);
const dragging = ref<boolean>(false);

function handlefiles(files: File[]) {
  dragging.value = false;
}
</script>

<template>
  <Uploader
    v-model="files" :limit="limit" @input="handlefiles" @drop="handlefiles" @dragenter="dragging = true"
    @dragleave="dragging = false"
  >
    <template #facade>
      <div role="button" tabindex="0" class="facade" :class="{ dragging, sm: size === 'sm', lg: size === 'lg' }">
        <div>
          <div class="label">
            <slot v-if="slots.label" name="label" />
            <div v-else class="default-label-content">
              <i i-youcan-import />
              <div>Browse your computer</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Uploader>
</template>

<style scoped>
.facade {
  display: grid;
  border-radius: 4px;
  padding: 12px 16px;
  place-items: center;
  box-shadow: var(--shadow-xs);
  background-color: var(--gray-50);
  border: 1px solid var(--gray-100);
}

.facade.sm {
  max-width: 148px;
  min-height: 148px;
}

.facade.lg {
  min-height: 148px;
}

.facade:hover,
.facade.dragging {
  background-color: var(--gray-100);
}

.facade:active,
.facade:focus {
  outline: none;
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-xs-brand);
}

.facade.dragging {
  background: var(--gray-100);
}

.label i {
  color: var(--brand-500);
}

.default-label-content {
  gap: 8px;
  display: flex;
  align-items: center;
  font: var(--text-sm-regular);
}

.facade.sm .default-label-content {
  flex-direction: column;
}
</style>
