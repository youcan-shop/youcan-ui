<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRaw } from 'vue';
import ResourceItem from './Internal/Resource.vue';
import { isEmptyArray } from './utils';
import type { PickerProps, Resource } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';
import { Button, Input, Spinner } from '~/components';

const props = withDefaults(defineProps<PickerProps>(), {
  visible: false,
  title: 'Choose resource',
  selectionLabel: 'resources selected',
  confirmLabel: 'Add',
  cancelLabel: 'Cancel',
  isLoading: true,
  emptyStateLabel: 'No resources available',
  searchPlaceholder: 'Search',
});
const emit = defineEmits(['update:visible', 'confirm', 'search']);

const term = ref('');

const selectedResources = computed(() => {
  const selectedResources = props.resources?.filter(res => res.isChecked || res.isIndeterminate);

  return selectedResources;
});

const shouldDisabledAddButton = computed(() => {
  return props.isLoading || isEmptyArray(props.resources) || isEmptyArray(selectedResources.value);
});

const closePicker = () => {
  term.value = '';
  emit('update:visible', false);
};

const handleAdd = () => {
  term.value = '';
  const selectedResourcesWithVariants = selectedResources.value?.map((resource) => {
    if (resource.variants) {
      return {
        ...resource,
        variants: resource.variants
          .filter(proxyVariant => proxyVariant.isChecked)
          .map(variant => toRaw<Resource>(variant)),
      };
    }

    return toRaw(resource);
  });

  emit('confirm', selectedResourcesWithVariants);
};

const handleClick = (_: Event, resource: Resource, parent: Resource) => {
  if (parent) { // clicked resource is a variant/child
    const areAllVariantsSelected = parent?.variants?.every(variant => variant.isChecked);
    if (areAllVariantsSelected) {
      parent.isChecked = areAllVariantsSelected;
      parent.isIndeterminate = false;
    }
    else {
      const areSomeVariantsSelected = parent?.variants?.some(variant => variant.isChecked);
      parent.isChecked = areSomeVariantsSelected as boolean;
      parent.isIndeterminate = areSomeVariantsSelected;
    }

    return;
  }

  if (resource.variants) {
    resource.isIndeterminate = false;

    props.resources?.forEach((parentResource) => {
      if (parentResource.id !== resource.id) {
        return;
      }
      parentResource.isChecked = resource.isChecked;
      parentResource.variants?.forEach((variant) => {
        variant.isChecked = resource.isChecked;
      });
    });
  }
};

const handleSearch = (e: Event) => {
  const { target } = e;
  const term = (target as HTMLButtonElement).value;

  emit('search', term);
};

const handleKeypress = (event: KeyboardEvent) => {
  if (props.visible && event.key === 'Escape') {
    closePicker();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeypress);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeypress);
});
</script>

<template>
  <Transition name="fade">
    <Overlay v-show="visible">
      <div class="resource-picker">
        <div class="header">
          <span>{{ title }}</span>
          <Button variant="tertiary" @click="closePicker">
            <i class="i-youcan-x" />
          </Button>
        </div>
        <div class="search">
          <Input v-model.trim="term" :placeholder="searchPlaceholder" @input.stop="handleSearch" @keyup.enter.stop="handleSearch" />
        </div>
        <div v-if="isLoading" class="loading">
          <Spinner label="" />
        </div>
        <ul v-else-if="!isEmptyArray(resources)" class="list">
          <li v-for="resource in resources" :key="resource.id" class="resource">
            <ResourceItem
              v-model="resource.isChecked"
              :resource="resource"
              :thumbnail-url="resource.thumbnailUrl"
              show-stock
              :stock-label="stockLabel"
              :indeterminate="resource.isIndeterminate"
              @change="handleClick"
            />
            <ul v-if="resource.variants">
              <li v-for="(variant, index) in resource.variants" :key="variant.id">
                <ResourceItem
                  v-model="resource.variants[index].isChecked"
                  :resource="variant"
                  :thumbnail-url="variant.thumbnailUrl"
                  show-stock
                  :stock-label="stockLabel"
                  :show-thumbnail="false"
                  @change="handleClick($event, variant, resource)"
                />
              </li>
            </ul>
          </li>
        </ul>
        <span v-else class="empty-state">{{ emptyStateLabel }}</span>
        <div class="footer">
          <span class="selection">{{ selectedResources?.length }} {{ selectionLabel }}</span>
          <div class="actions">
            <Button variant="secondary" @click="closePicker">
              <span>{{ cancelLabel }}</span>
            </Button>
            <Button :disabled="shouldDisabledAddButton" variant="primary" @click="handleAdd">
              <span>{{ confirmLabel }}</span>
            </Button>
          </div>
        </div>
      </div>
    </Overlay>
  </Transition>
</template>

<style scoped>
.resource-picker {
  --border: 1px solid var(--gray-100);

  width: 620px;
  border-radius: 5px;
  background-color: var(--base-white);
}

.resource-picker .header {
  padding: 8px 16px;
  border-bottom: var(--border);
}

.resource-picker .header,
.resource-picker .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resource-picker .search {
  padding: 16px;
  border-bottom: var(--border);
  background-color: var(--gray-50);
}

.resource-picker .footer {
  padding: 16px;
  border-top: 1px solid var(--gray-200);
}

.resource-picker .footer .selection {
  color: var(--gray-400);
}

.resource-picker .footer .actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.resource-picker .loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.resource-picker .list {
  position: relative;
  max-height: 500px;
  margin: 0;
  padding: 0;
  overflow: scroll;
  list-style: none;
}

.resource-picker .list::after {
  content: "";
  display: block;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(#fff0, var(--base-white));
  pointer-events: none;
}

.resource-picker .empty-state {
  display: block;
  padding: 16px 24px;
  color: var(--gray-400);
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
