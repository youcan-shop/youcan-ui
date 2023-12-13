<script setup lang="ts">
import { ref } from 'vue';
import Resource from './Internal/Resource.vue';
import type { Resource as ResourceType } from './types.ts';
import Overlay from '~/components/Overlay/Overlay.vue';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '~/components';

withDefaults(defineProps<{
  visible: boolean
  title?: string
  resources?: ResourceType[]
  selectionLabel?: string
  stockLabel?: string
  confirmLabel?: string
  cancelLabel?: string
}>(), {
  visible: false,
  title: 'Choose resource',
  selectionLabel: 'resources selected',
  confirmLabel: 'Add',
  cancelLabel: 'Cancel',
});

const emit = defineEmits(['update:visible', 'confirm']);

const selectedResource = ref<any[]>([]); // TODO: i know i know i will change this i promise

const closePicker = () => {
  emit('update:visible', false);
};

const add = () => {
  // Emit selected resources
  emit('confirm');
};

function handleChange(resource: ResourceType) {
  // Check the clicked resource:
  if (resource.isChecked) {
    selectedResource.value.push(selectedResource);
    console.log('Adding');
  }
  else {
    console.log('Removing');
  }
  // isChecked ?
  // Yes -> Push to selectedResource
  // No -> Remove from selectedResources
}
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
          <ul class="list">
            <li v-for="resource in resources" :key="resource.name" class="resource">
              <Resource
                :name="resource.name"
                :stock="resource.stock"
                :price="resource.price"
                :thumbnail-url="resource.thumbnailUrl"
                show-stock
                :stock-label="stockLabel"
                @change="handleChange"
              />
            </li>
          </ul>
          <div class="footer">
            <span class="selection">0 {{ selectionLabel }}</span>
            <div class="actions">
              <SecondaryButton @click="closePicker">
                <span>{{ cancelLabel }}</span>
              </SecondaryButton>
              <PrimaryButton @click="add">
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
  width: 620px;
  border-radius: 5px;
  background-color: white;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: "Mona Sans";
}

.header {
  padding: 8px 16px;
  border-bottom: 1px solid var(--gray-100);
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background: linear-gradient(#fff0, #fff);
}

.list li.resource {
  border-bottom: 1px solid var(--gray-100);
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
