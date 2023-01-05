<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Checkbox, Dropdown, Input } from '~/components';
import MultiselectDropdown from '~/components/Dropdown/MultiselectDropdown.vue';
import type { DropdownItemDefinition, DropdownItemGroups } from '~/components/Dropdown/types';

const items = {
  One: [{
    value: 1,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island',
  },
  {
    value: 2,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island 2',
  },
  {
    value: 3,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island 3',
  }],
  Two: [
    {
      value: 4,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 4',
    },
    {
      value: 5,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 5',
    },
  ],
} as DropdownItemGroups;

const multiselected = ref<DropdownItemDefinition[]>([]);
const selected = ref<DropdownItemDefinition | null>(null);
const inputmodel = ref<DropdownItemDefinition | null>(null);
</script>

<template>
  <div>
    <Dropdown
      v-model="selected" style="width:360px" icon="i-youcan-language" placeholder="Choose a monkey island"
      :searchable="true" :items="items"
    />
    {{ selected?.label ?? 'none' }}
  </div>
  <div>
    <MultiselectDropdown
      v-model="multiselected" style="width:360px" icon="i-youcan-language"
      label="Choose a monkey island" :searchable="true" :items="items"
    />
    {{ multiselected }}
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
