<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Checkbox } from '~/components';
import DropdownItem from '~/components/Dropdown/Internal/DropdownItem.vue';
import type { DropdownItemDefinition } from '~/components/Dropdown/types';

const item = {
  value: 1,
  image: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
  label: 'Monkey island',
} as DropdownItemDefinition<number>;

const selected = ref(false);

const toggle = (val: boolean) => {
  console.log(val);
  selected.value = val;
};
</script>

<template>
  <div>
    <DropdownItem :checkbox="true" :item="item" :selected="selected" @toggle="toggle" />
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
