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
    <ol class="yc-breadcrumbs">
      <li v-for="(item, index) in visibleItems" :key="index" class="yc-breadcrumbs__item" :class="{ 'yc-breadcrumbs__item--dropdown': item.isDropdown }">
        <BreadcrumbItem
          v-if="!item.isDropdown"
          :label="item.label"
          :to="item.to"
          :is-current="index === visibleItems.length - 1"
        />
        <DropdownMenu v-else position="bottom">
          <Button variant="tertiary">
            <i class="i-youcan:dots-three" />
          </Button>
          <template #MenuItems>
            <a v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.to" class="yc-breadcrumbs__dropdown-link" :href="dropdownItem.to">
              <DropdownMenuItem
                :label="dropdownItem.label"
              />
            </a>
          </template>
        </DropdownMenu>
        <i v-if="index < visibleItems.length - 1" class="i-youcan:caret-right yc-breadcrumbs__separator" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
@import "@youcan/styles/breadcrumbs";
</style>
