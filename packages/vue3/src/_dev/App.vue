<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Checkbox } from '~/components';
import DropdownList from '~/components/Dropdown/Internal/DropdownList.vue';
import type { DropdownItemGroups } from '~/components/Dropdown/types';

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
      value: 3,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
    },
    {
      value: 3,
      image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
    },
  ],
} as DropdownItemGroups;

const selected = ref(false);

const toggle = (val: boolean) => {
  selected.value = val;
};
</script>

<template>
  <div>
    <DropdownList :searchable="true" :items="items" />
  </div>

  <Checkbox v-model="selected" />
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
