<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import {
  PrimaryDestructiveButton,
  TertiaryButton,
  Thumbnail,
} from '~/components';

const props = defineProps<{ file: File; progress?: number; error?: string }>();
const emit = defineEmits(['delete']);

const isImage = computed(() => props.file.type.startsWith('image/'));
const dataUrl = ref<string | null>(null);
const previewing = ref(false);
const togglePreview = (override = !previewing.value) => previewing.value = override;

onMounted(() => {
  Utils.toDataUrl(props.file)
    .then(res => (dataUrl.value = res))
    .catch();
});
</script>

<template>
  <div tabindex="0" class="file">
    <div>
      <Thumbnail class="preview" :alt="file.name" :src="isImage && dataUrl ? dataUrl : undefined" size="large" />
    </div>
    <div class="actions">
      <TertiaryButton tabindex="0" class="action" size="md" icon-position="only" :rounded-full="true" @click="togglePreview(true)">
        <template #icon>
          <i i-youcan-view />
        </template>
      </TertiaryButton>

      <PrimaryDestructiveButton
        tabindex="0" class="action" size="md" icon-position="only" :rounded-full="true"
        @click="emit('delete', file)"
      >
        <template #icon>
          <i i-youcan-remove />
        </template>
      </PrimaryDestructiveButton>
    </div>

    <Teleport v-if="previewing" to="body">
      <div class="popup" @click="() => togglePreview(false)">
        <img :src="dataUrl ?? undefined" :alt="file.name">
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.file {
    width: 240px;
    height: 240px;
    border-radius: 8px;
    position: relative;
    box-shadow: var(--shadow-xs);
    background-color: var(--base-white);
}

.actions {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    border-radius: 8px;
    margin-inline-start: auto;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url(.jpg);
}

.actions .action {
    cursor: pointer;
}

.file:is(:hover, :focus, :active) .actions {
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--focus-sm-brand);
}

.actions .icon-remove {
    cursor: pointer;
    color: var(--red-500);
}

.preview.size-large {
    --size: 240px;
    border-radius: 8px;
}

.preview.size-large:deep(.image) {
    aspect-ratio: 1/1;
    object-fit: cover;
}

.preview:deep(.icon) {
  height: 44px;
  width: 44px;
}

.popup {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    position: absolute;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url(.jpg);
}

.popup img {
    margin: auto;
    max-height: 90vh;
    max-width: 100vw;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}
</style>