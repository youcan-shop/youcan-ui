<script setup lang="ts">
import { a } from '@storybook/vue3/dist/render-e631cd2d';
import { SearchInput } from '~/components';
import { QueryResult } from '~/components/Search/types';

async function queryHandler():Promise<QueryResult[]> {
  return [{
    label:'hi',
    value: 'hi'
  }]
}

function handleSelect(){
  alert('life is life')
}

</script>

<template>
  <SearchInput :query-handler="queryHandler" @select="handleSelect"/>
</template>