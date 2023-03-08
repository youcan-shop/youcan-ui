<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { onMounted, ref, watch } from 'vue';
import Input from '../Input/Input.vue';
import SearchResult from './Internal/SearchResult.vue';
import type { QueryResult } from './types';
import SearchLoader from './Internal/SearchLoader.vue';
import SearchNoResults from './Internal/SearchNoResults.vue';

const props = defineProps<{
  queryHandler: (query: string) => Promise<QueryResult[]>
  thumbnails?: boolean
}>();
const emit = defineEmits(['select']);

const query = ref<string>('');
const loading = ref<boolean>(true);
const results = ref<QueryResult[]>([]);

const [refresh] = Utils.debounce(async () => {
  loading.value = true;
  results.value = await props.queryHandler(query.value);
  loading.value = false;
}, 600);

watch(query, () => refresh());
onMounted(async () => refresh());
</script>

<template>
  <div class="search-input-wrapper">
    <Input ref="input" v-model="query" class="search-input" v-bind="$attrs" type="text">
      <template #icon>
        <i i-youcan-magnifying-glass />
      </template>
    </Input>

    <div class="result-list-wrapper">
      <div class="result-list">
        <SearchLoader v-if="loading" />

        <SearchNoResults v-else-if="!results.length" />

        <div v-else class="results">
          <SearchResult
            v-for="result in results" :key="Utils.uid(result.label)" class="search-result"
            :thumbnail="thumbnails" :result="result" @click="emit('select', result)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-list-wrapper {
  display: none;
  position: relative;
  box-sizing: border-box;
}

.search-input-wrapper:focus-within .result-list-wrapper {
  display: block;
}

.result-list {
  position: absolute;
  z-index: 20;
  top: 8px;
  left: 0;
  width: 100%;
  padding: 8px 0;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md);
}

.loading {
  padding: 10px 16px;
}
</style>
