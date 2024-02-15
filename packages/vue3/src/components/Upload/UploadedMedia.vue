<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { UploadedMediaProps } from './types';
import { isUrl } from './utils';
import {
  PrimaryDestructiveButton,
  Spinner,
  TertiaryButton,
  Thumbnail,
} from '~/components';

const props = withDefaults(defineProps<UploadedMediaProps>(), {
  errorText: 'Invalid URL',
});
const emit = defineEmits(['delete']);

const isFile = computed(() => {
  if (props.file instanceof File && (props.file.type.startsWith('image/') || props.file.type.startsWith('video/'))) {
    return true;
  }

  return false;
});

const isVideo = ref(isFile.value && (props.file as File).type.startsWith('video/'));

const fileName = computed(() => {
  if (isFile.value) {
    return (props.file as File).name;
  }

  return '';
});

const dataUrl = ref('');
const previewing = ref(false);
const popupBody = ref();
const loading = ref(false);
const error = ref<boolean>(false);

const togglePreview = (override = !previewing.value) => previewing.value = override;

const setValues = (video = true) => {
  isVideo.value = video;
  loading.value = false;
  dataUrl.value = (props.file as string);
  error.value = false;
};

const urlType = (url: string) => {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    setValues(false);
  };
  img.onerror = () => {
    const video = document.createElement('video');
    video.src = url;
    video.onloadstart = () => {
      setValues();
    };
    video.onerror = () => {
      error.value = true;
    };
  };
};

const getUrl = () => {
  if (isFile.value) {
    const file = (props.file as File);
    isVideo.value = file.type.startsWith('video/');
    dataUrl.value = window.URL.createObjectURL(file);
  }
  else if (typeof props.file === 'string') {
    loading.value = true;
    if (isUrl(props.file)) {
      urlType(props.file);
    }
    else {
      error.value = true;
    }
  }
};

onClickOutside(popupBody, () => togglePreview(false));

const handleKeypress = (event: KeyboardEvent) => {
  if (previewing.value && event.key === 'Escape') {
    togglePreview(false);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeypress);
  getUrl();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeypress);
});

watch(() => props.file, getUrl);
</script>

<template>
  <div tabindex="0" class="file" :class="[{ loading }, { error }]">
    <template v-if="!error">
      <div v-if="isVideo" class="video-cover">
        <video v-if="isFile" :src="dataUrl" />
        <iframe v-else :src="`${dataUrl}?controls=0`" frameborder="0" />
      </div>
      <div v-else>
        <Thumbnail class="preview" :alt="fileName" :src="dataUrl" size="large" />
      </div>
      <div class="actions">
        <Spinner v-if="loading" color="var(--base-white)" />
        <template v-else>
          <TertiaryButton
            tabindex="0" class="action toggle-preview" size="md" icon-position="only" :rounded-full="true"
            type="button" @click="togglePreview(true)"
          >
            <template #icon>
              <i v-if="isVideo" class="i-youcan-play" />
              <i v-else class="i-youcan-eye" />
            </template>
          </TertiaryButton>

          <PrimaryDestructiveButton
            tabindex="0" class="action" size="md" icon-position="only" :rounded-full="true" type="button"
            @click="() => emit('delete')"
          >
            <template #icon>
              <i class="i-youcan-trash" />
            </template>
          </PrimaryDestructiveButton>
        </template>
      </div>
    </template>
    <div v-else class="error-text">
      {{ errorText }}
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="previewing" class="popup">
          <TertiaryButton
            tabindex="0" class="action" size="md" icon-position="only" :rounded-full="true"
            type="button" @click="togglePreview(false)"
          >
            <template #icon>
              <i class="i-youcan:x" />
            </template>
          </TertiaryButton>
          <div ref="popupBody" class="popup-body">
            <div v-if="isVideo" class="video-container">
              <video v-if="isFile" :src="dataUrl" controls autoplay />
              <iframe v-else :src="`${dataUrl}?autoplay=1`" frameborder="0" />
            </div>
            <img v-else :src="dataUrl" :alt="fileName">
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.file {
  position: relative;
  box-sizing: border-box;
  width: 240px;
  height: 240px;
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.file.error {
  border: 1px solid var(--red-500);
}

.error-text {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: var(--red-500);
  font: var(--text-sm-medium);
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: var(--base-black);
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-cover {
  width: 100%;
  height: 100%;
}

.video-cover iframe,
.video-cover video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actions {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-inline-start: auto;
  border-radius: 8px;
  background: linear-gradient(0deg, rgb(0 0 0 / 24%), rgb(0 0 0 / 24%)), url(".jpg");
}

.actions .action {
  cursor: pointer;
}

.actions .action.toggle-preview {
  background-color: var(--base-white);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.actions .action.toggle-preview:hover {
  background-color: var(--gray-50);
}

.file:is(:hover, :focus, :active, .loading) .actions {
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--focus-sm-brand);
}

.actions .icon-remove {
  color: var(--red-500);
  cursor: pointer;
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
  width: 44px;
  height: 44px;
}

.popup {
  display: grid;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgb(0 0 0 / 24%), rgb(0 0 0 / 24%)), url(".jpg");
  cursor: pointer;
}

.popup-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  max-width: 95vw;
  max-height: 90vh;
}

.popup img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.popup .action {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: var(--base-white);
}

.popup .action:hover {
  background-color: var(--gray-50);
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active {
  animation: fade 0.3s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.3s reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
