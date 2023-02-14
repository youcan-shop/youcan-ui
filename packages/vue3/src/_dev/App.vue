<script setup lang="ts">
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