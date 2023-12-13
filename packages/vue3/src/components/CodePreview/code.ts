export const code = `<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'

const props = defineProps<{
    code?:string
}>();

// Returns a highlighted HTML string
const html = Prism.highlight(props.code, Prism.languages['html']);
</script>

<template>
    <pre>
        <code v-html="html"/>

        {{ "test" }}
    </pre>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
}
</style>`;
