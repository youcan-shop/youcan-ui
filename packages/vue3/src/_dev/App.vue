<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { onMounted, ref } from 'vue';
import type { StaticStatusDefinition } from '~/components/Status/types';
import { Dropdown, StaticStatus } from '~/components';

const category = ref(null);
const items = ref<any[]>([]);
const loading = ref(false);

const nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon'];

const fruits: StaticStatusDefinition[] = [
  {
    color: '#ffdecb',
    label: '',
    labelColor: '#35192b',
  },
  {
    color: '#fffad2',
    label: '',
    labelColor: '#555022',
  },
  {
    color: '#cbffd3',
    label: '',
    labelColor: '#2c4730',
  },
  {
    color: '#EEAAAA',
    label: '',
    labelColor: '#7B1919',
  },
];

const getStatus = (text: string): StaticStatusDefinition => {
  const status = fruits[Math.floor(Math.random() * (fruits.length))];
  status.label = text;

  return status;
};

const getItems = () => {
  loading.value = true;
  setTimeout(() => {
    const List = Array.from({ length: 10 }, () => {
      return {
        label: nameList[Math.floor(Math.random() * (nameList.length - 1))],
        value: Math.floor(Math.random() * 10000000),
      };
    });
    for (const item of List) {
      items.value.push(item);
    }
    loading.value = false;
  }, 2000);
};

const endOfScroll = () => {
  if (loading.value === false) {
    getItems();
  }
};

onMounted(() => {
  getItems();
});
</script>

<template>
  <div class="dropdown-container">
    <Dropdown
      v-model="category"
      searchable
      :items="items"
      placeholder="Select category"
      :loading="loading"
      @end-of-scroll="endOfScroll"
    >
      <template #accessory="item">
        <div class="status">
          <StaticStatus :status="getStatus(item.label)" />
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 60px auto;
  row-gap: 60px;
}

.status {
  display: flex;
  flex: 1;
  justify-content: end;
}
</style>
