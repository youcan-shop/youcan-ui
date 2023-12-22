<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';

const props = defineProps(nodeViewProps);

const languages = ref([]);
const selectedLanguage = computed({
  get() {
    return props.node.attrs.language;
  },
  set(language) {
    props.updateAttributes({ language });
  },
});

onMounted(() => {
  languages.value = props.extension.options.lowlight.listLanguages();
});
</script>

<template>
  <NodeViewWrapper class="code-block">
    <select v-model="selectedLanguage" class="select-dropdown">
      <option :value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      <option v-for="(language, index) in languages" :key="index" :value="language">
        {{ language }}
      </option>
    </select>
    <pre><code><NodeViewContent /></code></pre>
  </NodeViewWrapper>
</template>

  <style lang="scss">
.code-block {
  position: relative;
}

.select-dropdown {
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  right: 0.5rem;
  width: 100px;
  height: 30px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}
  </style>
