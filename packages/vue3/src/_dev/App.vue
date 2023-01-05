<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Checkbox, Dropdown, Input } from '~/components';
import type { DropdownItemDefinition, DropdownItemGroups } from '~/components/Dropdown/types';

const items = {
  One: [{
    value: 1,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island',
    selected: false,
  },
  {
    value: 2,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island 2',
    selected: false,
  },
  {
    value: 3,
    image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
    label: 'Monkey island 3',
    selected: false,
  }],
  Two: [
    {
      value: 3,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
      selected: false,
    },
    {
      value: 3,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
      selected: false,
    },
  ],
} as DropdownItemGroups;

const selected = ref<DropdownItemDefinition | null>(null);
const inputmodel = ref<DropdownItemDefinition | null>(null);
</script>

<template>
  <div>
    <Dropdown v-model="selected" style="width:360px" icon="i-youcan-language" placeholder="Choose a monkey island" :searchable="true" :items="items" />
  </div>
  {{ selected?.label ?? 'none' }}
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
