<script setup lang="ts">
import { ref } from 'vue';
import Resource from './Internal/Resource.vue';
import type { PickerProps, Resource as ResourceType } from './types.ts';
import Overlay from '~/components/Overlay/Overlay.vue';
import { Input, PrimaryButton, SecondaryButton, Spinner, TertiaryButton } from '~/components';

const props = withDefaults(defineProps<PickerProps>(), {
  visible: false,
  title: 'Choose resource',
  selectionLabel: 'resources selected',
  confirmLabel: 'Add',
  cancelLabel: 'Cancel',
  isLoading: true,
});

const emit = defineEmits(['update:visible', 'confirm', 'update:selectedResources', 'search']);

const selectedResource = ref<ResourceType[]>(props.selectedResources || []);
const term = ref('');

const closePicker = () => {
  emit('update:visible', false);
};

const add = () => {
  emit('confirm', selectedResource);
};

const handleChange = (resource: ResourceType) => {
  if (resource.isChecked) {
    selectedResource.value.push(resource);
    emit('update:selectedResources', [...selectedResource.value]);
  }
  else {
    selectedResource.value = selectedResource.value.filter(res => resource.id !== res.id);
    emit('update:selectedResources', [...selectedResource.value]);
  }
};

const handleSearch = (e: Event) => {
  const { target } = e;
  const term = (target as HTMLButtonElement).value;
  emit('search', term);
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
          <ul v-else class="list">
            <li v-for="resource in resources" :key="resource.id" class="resource">
              <Resource
                :id="resource.id"
                :name="resource.name"
                :stock="resource.stock"
                :price="resource.price"
                :thumbnail-url="resource.thumbnailUrl"
                show-stock
                :stock-label="stockLabel"
                :show-thumbnail="resource.variantFor ? false : true"
                @change="handleChange"
              />
            </li>
          </ul>
          <div class="footer">
            <span class="selection">{{ selectedResources?.length }} {{ selectionLabel }}</span>
            <div class="actions">
              <SecondaryButton @click="closePicker">
                <span>{{ cancelLabel }}</span>
              </SecondaryButton>
              <PrimaryButton :disabled="isLoading" @click="add">
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
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: "Mona Sans";
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

.list li.resource {
  border-bottom: var(--border);
}

ul.list li.resource:hover {
  transition: all 0.3s;
  background-color: var(--gray-50);
}

.container ul li > ul {
  padding-inline-start: 40px;
  list-style: none;
}

.slide-up-enter-active {
  animation: slide-up 0.35s ease-in-out;
}

.slide-up-leave-active {
  animation: slide-up 0.35s reverse ease-in-out;
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
