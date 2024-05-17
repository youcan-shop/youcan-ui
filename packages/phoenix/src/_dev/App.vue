<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Sidebar, SidebarItem, SidebarSubitem } from '~/components';
import type { ItemStyleProps, SidebarStyleProps, SubItemStyleProps } from '~/components/Sidebar/types';

interface SidebarItemType {
  label: string
  icon?: string
  children?: SidebarItemType[]
  url?: string
}

const items: SidebarItemType[] = [
  {
    label: 'Products',
    icon: 'i-youcan-tag',
    children: [
      { label: 'All Products' },
      { label: 'Categories', url: 'http://google.com/categories' },
    ],
  },
  {
    label: 'Insights',
    icon: 'i-youcan-chart-line',
    url: 'http://google.com/Insight',
  },
  {
    label: 'Truck',
    icon: 'i-youcan-truck',
    url: 'http://google.com/truck',
  },
  {
    label: 'Users',
    icon: 'i-youcan-user',
    children: [
      { label: 'All Users' },
      { label: 'roles', url: 'http://google.com/roles' },
    ],
  },
];

const customItemStyle: ItemStyleProps = {
  hoverColor: 'var(--gray-800)',
  activeColor: 'var(--gray-800)',
  iconColor: 'var(--gray-300)',
  labelColor: 'var(--gray-300)',
  activeMarkColor: 'var(--yellow-500)',
  activeIconColor: 'var(--yellow-500)',
  activeLabelColor: 'var(--yellow-500)',
  font: 'var(--text-md-regular)',
};

const customSidebarStyle: SidebarStyleProps = {
  backgroundColor: 'var(--blue-900)',
  width: 250,
  hoverColor: 'var(--blue-800)',
  activeColor: 'var(--blue-900)',
  iconColor: 'var(--gray-300)',
  subItemIconColor: 'var(--gray-300)',
  font: 'var(--text-lg-medium)',
  spacing: 10,
};

const customSubItemStyle: SubItemStyleProps = {
  labelColor: 'var(--gray-300)',
  activeLabelColor: 'var(--yellow-500)',
  font: 'var(--text-md-regular)',
};

// HANDELLING SIDEBAR ACTIVE ITEM
const active = ref(0);

function setActive(id: number) {
  active.value = id;
}

// HANDELLING SIDEBAR NAVIGATION
function navigate(item: SidebarItemType) {
  // eslint-disable-next-line no-console
  console.log('🚀 ~ navigate ~ item:', item.url);
}
</script>

<template>
  <div class="container">
    <Sidebar
      collapsed
      :style-config="customSidebarStyle"
    >
      <!-- SIDEBAR HEADER -->
      <template #header>
        <p>Awesome App</p>
      </template>

      <!-- SIDEBAR ITEMS -->
      <template #items>
        <SidebarItem
          v-for="(item, index) in items"
          :key="item.label"
          :label="item.label"
          :active="active === index"
          :icon="item.icon"
          :style-config="customItemStyle"
          @click="setActive(index), item.url && navigate(item)"
        >
          <template v-if="item.children">
            <SidebarSubitem
              v-for="subItem in item.children" :key="subItem.label"
              :label="subItem.label" :style-config="customSubItemStyle" @click="setActive(index), subItem.url && navigate(subItem)"
            />
          </template>
        </SidebarItem>
      </template>

      <!-- SIDEBAR LOWER ITEMS -->
      <template #lower-items>
        <SidebarItem
          icon="i-youcan-gear"
          label="Settings"
          :style-config="customItemStyle"
        />
      </template>
    </Sidebar>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
