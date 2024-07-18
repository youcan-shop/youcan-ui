<script setup lang="ts">
import { computed } from 'vue';
import BreadcrumbItem from './BreadcrumbItem.vue';
import type { BreadcrumbDropdownItemProps, BreadcrumbsProps } from './types';
import { Button, DropdownMenu, DropdownMenuItem } from '~/components';

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  maxVisibleItems: 4,
});

const visibleItems = computed(() => {
  if (props.items.length <= props.maxVisibleItems) {
    return props.items;
  }

  const start = props.items.slice(0, 1);
  const end = props.items.slice(-2);
  const hiddenItems = props.items.slice(1, -2);
  const dropdownItem: BreadcrumbDropdownItemProps = {
    label: '...',
    to: '',
    isDropdown: true,
    dropdownItems: hiddenItems,
  };

  return [...start, dropdownItem, ...end];
});
</script>

<template>
  <nav>
    <ol class="breadcrumbs">
      <li v-for="(item, index) in visibleItems" :key="index" class="crumb" :class="{ 'dropdown-item': item.isDropdown }">
        <BreadcrumbItem
          v-if="!item.isDropdown"
          :label="item.label"
          :to="item.to"
          :is-current="index === visibleItems.length - 1"
        />
        <DropdownMenu v-else position="bottom">
          <Button variant="tertiary">
            <i class="i-youcan:dots-three elipsis" />
          </Button>
          <template #MenuItems>
            <a v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.to" class="dropdown-crumbs" :href="dropdownItem.to">
              <DropdownMenuItem
                :label="dropdownItem.label"
              />
            </a>
          </template>
        </DropdownMenu>
        <i v-if="index < visibleItems.length - 1" class="i-youcan:caret-right separator" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  list-style: none;
}

.breadcrumbs .crumb .dropdown-crumbs {
  color: var(--gray-900);
  text-decoration: none;
}

.breadcrumbs .crumb {
  display: flex;
  align-items: center;
  font: var(--text-md-medium);
}

.breadcrumbs .crumb .separator {
  margin: 0 5px;
  transition: color 0.3s ease;
  color: var(--gray-400);
}

.breadcrumbs .dropdown-item:hover > .separator,
.breadcrumbs .crumb:last-child:hover > .separator {
  color: var(--gray-400);
}

.breadcrumbs .crumb:not(.dropdown-item):hover > .separator {
  color: var(--brand-400);
}
</style>
