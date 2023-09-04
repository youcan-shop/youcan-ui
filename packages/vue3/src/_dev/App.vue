<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import DropDown from '~/components/Dropdown/Dropdown.vue';

const items = [
  { label: 'Shoes', value: 1 },
  { label: 'Cosmetics', value: 2 },
  { label: 'Gym', value: 3 },
  { label: 'test', value: 4 },
  { label: 'something', value: 5 },
  { label: 'hi', value: 6 },
];

const category = ref(null);

function search(term: string) {
  const data = [
    {
      label: term,
      value: 1,
    },
  ];

  for (let index = 0; index < term.length; index++) {
    items.push({
      label: String(Math.floor(Math.random() * 1000)),
      value: String(Math.floor(Math.random() * 1000)),
    });
  }

  console.log(data);

  // if we return array here, it will act like the dropdown items, but if we return nothing the dropdown will just use the items prop
  // return [
  //   {
  //     label: term,
  //     value: 1,
  //   },
  // ];
}
</script>

<template>
  <div>
    <div style="padding: 5rem;background: red;">
      {{ search }}
    </div>
    <DropDown
      v-model="category"
      searchable
      :items="items"
      placeholder="Select category"
    />
  </div>
</template>
