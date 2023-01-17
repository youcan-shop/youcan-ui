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
  <div>
    <Input ref="input" v-model="query" class="search-input" v-bind="$attrs" type="text">
      <template #icon>
        <i i-youcan-magnifyingglass />
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
}

.search-input.focused+.result-list-wrapper,
.result-list-wrapper:has(.search-result:is(:focus, :active)) {
    display: block;
}

.result-list {
    left: 0;
    top: 8px;
    width: 100%;
    z-index: 20;
    padding: 8px 0;
    border-radius: 8px;
    position: absolute;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-100);
    background-color: var(--base-white);
}

.loading {
    padding: 10px 16px;
}
</style>
