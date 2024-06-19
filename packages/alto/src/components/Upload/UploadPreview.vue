<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { isUrl } from './utils';
import type { PreviewProps } from '~/types';
import {
  Button,
  Loader,
  Thumbnail,
} from '~/components';

const props = defineProps<PreviewProps>();

const emit = defineEmits(['delete']);

const isFile = computed(() => {
  return props.file instanceof File && !(props.file.type.startsWith('image/') || props.file.type.startsWith('video/'));
});

const fileName = computed(() => {
  return isFile.value ? (props.file as File).name : '';
});

const isMedia = computed(() => {
  return props.file instanceof File && (props.file.type.startsWith('image/') || props.file.type.startsWith('video/'));
});

const isVideo = ref(isMedia.value && (props.file as File).type.startsWith('video/'));

const dataUrl = ref('');
const previewing = ref(false);
const popupBody = ref();
const loading = ref(false);
const error = ref(props.error);

const togglePreview = (override = !previewing.value) => previewing.value = override;

const setValues = (video = true) => {
  isVideo.value = video;
  loading.value = false;
  dataUrl.value = (props.file as string);
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
      error.value = props.error;
    };
  };
};

const getUrl = () => {
  if (isMedia.value) {
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
      error.value = props.error;
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
  <div v-if="isMedia" tabindex="0" class="media-container" :class="[{ loading }, { error }]">
    <template v-if="!error">
      <div v-if="isVideo" class="video-cover">
        <video v-if="isMedia" :src="dataUrl" />
        <iframe v-else :src="`${dataUrl}?controls=0`" frameborder="0" />
      </div>
      <div v-else>
        <Thumbnail class="preview" :alt="fileName" :src="dataUrl" size="large" />
      </div>
      <div class="actions">
        <Loader v-if="loading" color="var(--base-white)" />
        <template v-else>
          <Button
            tabindex="0" class="action toggle-preview" size="sm" icon-only :rounded="true"
            type="button" variant="tertiary" @click="togglePreview(true)"
          >
            <i v-if="isVideo" class="i-youcan-play" />
            <i v-else class="i-youcan-eye" />
          </Button>
          <Button
            tabindex="0" class="action" size="sm" icon-only :rounded="true" type="button"
            variant="destructive" @click="() => emit('delete')"
          >
            <i class="i-youcan-trash" />
          </Button>
        </template>
      </div>
    </template>
    <div v-else class="error-text">
      {{ props.error }}
      <Button
        tabindex="0" class="action" size="sm" icon-only :rounded="true" type="button"
        variant="destructive" @click="() => emit('delete')"
      >
        <i class="i-youcan-trash" />
      </Button>
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="previewing" class="popup">
          <Button
            tabindex="0" class="action" size="sm" icon-only :rounded="true"
            type="button" variant="tertiary" @click="togglePreview(false)"
          >
            <i class="i-youcan:x" />
          </Button>
          <div ref="popupBody" class="popup-body">
            <div v-if="isVideo" class="video-container">
              <video v-if="isMedia" :src="dataUrl" controls autoplay />
              <iframe v-else :src="`${dataUrl}?autoplay=1`" frameborder="0" />
            </div>
            <img v-else :src="dataUrl" :alt="fileName">
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
  <div v-if="isFile" class="file-container">
    <div class="file-preview">
      <div class="status-icon">
        <i v-if="error" class="icon-error i-youcan-warning-circle" />
        <i v-else-if="progress" class="icon-loading i-youcan-circle-notch" />
        <i v-else class="icon-success i-youcan-check-circle" />
      </div>
      <div class="name">
        {{ fileName }}
      </div>
      <div class="actions">
        <i class="icon-remove i-youcan-trash" @click="() => emit('delete')" />
      </div>
    </div>
    <div v-if="error" class="error error-text">
      {{ props.error }}
    </div>
  </div>
</template>

<style scoped>
.file-container .file-preview {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin: 6px;
  padding: 12px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 8px;
}

.file-container .file-preview .name {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.file-container .file-preview .status-icon .icon-error {
  color: var(--yellow-500);
}

.file-container .file-preview .status-icon .icon-success {
  color: var(--green-500);
}

.file-container .file-preview .status-icon .icon-loading {
  animation: spinner 1200ms linear infinite;
  color: var(--blue-500);
}

.media-container .actions {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-inline-start: auto;
  border-radius: 8px;
  background: linear-gradient(0deg, rgb(0 0 0 / 24%), rgb(0 0 0 / 24%));
}

.media-container .actions .icon-remove {
  color: var(--red-500);
  cursor: pointer;
}

.file-container .file-preview .actions {
  margin-inline-start: auto;
}

.file-container .file-preview .actions .icon-remove {
  color: var(--red-500);
  cursor: pointer;
}

.file-container .error {
  color: var(--red-500);
  font: var(--text-sm-regular);
}

.file-container .error.error-text {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: var(--red-500);
  font: var(--text-sm-medium);
}

.media-container {
  position: relative;
  box-sizing: border-box;
  width: 240px;
  height: 240px;
  margin: 6px;
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.media-container.error {
  border: 1px solid var(--red-500);
}

.media-container .error-text {
  display: flex;
  box-sizing: border-box;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--red-500);
  font: var(--text-sm-medium);
  gap: 10px;
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: var(--base-black);
}

.video-cover iframe,
.video-cover video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.media-container .video-cover {
  width: 100%;
  height: 100%;
}

.popup .action {
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: var(--base-white);
}

.media-container .actions .action {
  cursor: pointer;
}

.media-container .actions .action.toggle-preview {
  background-color: var(--base-white);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.media-container .actions .action.toggle-preview:hover {
  background-color: var(--gray-50);
}

.media-container:is(:hover, :focus, :active, .loading) .actions {
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--focus-sm-brand);
}

.media-container .preview.size-large {
  --size: 240px;

  border-radius: 8px;
}

.media-container .preview.size-large:deep(.image) {
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
  background: linear-gradient(0deg, rgb(0 0 0 / 24%), rgb(0 0 0 / 24%));
}

.popup-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  max-width: 95vw;
  height: 95vh;
  cursor: pointer;
}

.popup img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.popup .action:hover {
  background-color: var(--gray-50);
}

.fade-enter-active {
  animation: fade 0.3s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.3s reverse ease-in-out;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
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
