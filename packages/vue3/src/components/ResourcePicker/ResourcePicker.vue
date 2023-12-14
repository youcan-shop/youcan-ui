<script setup lang="ts">
import { ref } from 'vue';
import ResourceItem from './Internal/Resource.vue';
import type { PickerProps, Resource } from './types';
import Overlay from '~/components/Overlay/Overlay.vue';
import { Input, PrimaryButton, SecondaryButton, Spinner, TertiaryButton } from '~/components';

withDefaults(defineProps<PickerProps>(), {
  visible: false,
  title: 'Choose resource',
  selectionLabel: 'resources selected',
  confirmLabel: 'Add',
  cancelLabel: 'Cancel',
  isLoading: true,
  emptyStateLabel: 'No resources available',
});

const emit = defineEmits(['update:visible', 'confirm', 'search']);

const selectedResources = ref<Resource[]>([]);
const term = ref('');

const closePicker = () => {
  emit('update:visible', false);
};

const add = () => {
  emit('confirm', selectedResources.value);
};

const handleChange = (resource: Resource, checked: boolean) => {
  if (checked) {
    selectedResources.value.push(resource);
  }
  else {
    selectedResources.value = selectedResources.value.filter(res => resource.id !== res.id);
  }
};

const handleSearch = (e: Event) => {
  const { target } = e;
  const term = (target as HTMLButtonElement).value;
  emit('search', term.trim());
};
</script>

<template>
  <Transition name="fade">
    <Overlay v-show="visible">
      <Transition name="slide-up">
        <div class="picker">
          <div class="header">
            <span>{{ title }}</span>
            <TertiaryButton @click="closePicker">
              <i class="i-youcan-x" />
            </TertiaryButton>
          </div>
          <div class="search">
            <Input v-model="term" placeholder="Search" @input.stop="handleSearch" @keyup.enter.stop="handleSearch" />
          </div>
          <div v-if="isLoading" class="loading">
            <Spinner label="" />
          </div>
          <ul v-else-if="resources?.length !== undefined && resources.length > 0" class="list">
            <li v-for="resource in resources" :key="resource.id" class="resource">
              <ResourceItem
                :resource="resource"
                :thumbnail-url="resource.thumbnailUrl"
                show-stock
                :stock-label="stockLabel"
                @change="handleChange"
              />
              <ul v-if="resource.variants !== undefined && resource.variants?.length > 0">
                <li v-for="variant in resource.variants" :key="variant.id">
                  <ResourceItem
                    :resource="variant"
                    :thumbnail-url="variant.thumbnailUrl"
                    show-stock
                    :stock-label="stockLabel"
                    :show-thumbnail="false"
                    @change="handleChange"
                  />
                </li>
              </ul>
            </li>
          </ul>
          <span v-else class="empty-state">{{ emptyStateLabel }}</span>
          <div class="footer">
            <span class="selection">{{ selectedResources?.length }} {{ selectionLabel }}</span>
            <div class="actions">
              <SecondaryButton @click="closePicker">
                <span>{{ cancelLabel }}</span>
              </SecondaryButton>
              <PrimaryButton :disabled="isLoading || resources?.length === undefined || resources.length <= 0" @click="add">
                <span>{{ confirmLabel }}</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Transition>
    </Overlay>
  </Transition>
</template>

<style scoped>
.picker {
  --border: 1px solid var(--gray-100);

  width: 620px;
  border-radius: 5px;
  background-color: white;
}

.header {
  padding: 8px 16px;
  border-bottom: var(--border);
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  padding: 16px;
  border-bottom: var(--border);
  background-color: var(--gray-50);
}

.footer {
  padding: 16px;
  border-top: 1px solid var(--gray-200);
}

.selection {
  color: var(--gray-400);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.list {
  position: relative;
  max-height: 500px;
  margin: 0;
  padding: 0;
  overflow: scroll;
  list-style: none;
}

.list::after {
  content: "";
  display: block;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(#fff0, var(--base-white));
}

.empty-state {
  display: block;
  padding: 16px 24px;
  color: var(--gray-400);
  text-align: center;
}

.container ul li > ul {
  padding: 0;
  list-style: none;
}

.fade-enter-active {
  animation: fade 0.35s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.35s reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(16px);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
