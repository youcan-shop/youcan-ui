<script setup lang="ts">
import type { NodeViewProps } from '@tiptap/vue-3';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/vue-3';

import { ref, watch } from 'vue';
import { Dropdown } from '~/components';
import type { DropdownItemArray } from '~/components/Dropdown/types';

const props = defineProps<NodeViewProps>();

const selectedLanguage = ref({ label: props.node.attrs.language, value: props.node.attrs.language });

watch(selectedLanguage, () => {
  props.updateAttributes({ language: selectedLanguage.value.value });
});

const _languages = props?.extension?.options.lowlight.listLanguages();

const languages: DropdownItemArray = _languages.map((lang: string) => ({
  label: lang,
  value: lang,
}));
</script>

<template>
  <NodeViewWrapper class="code-block">
    <div class="select-dropdown">
      <Dropdown
        v-model="selectedLanguage"
        searchable
        :items="languages"
        placeholder="Language"
      />
    </div>
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
  width: 140px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.code-block pre {
  min-height: 34px;
}

.searchable.dropdown-list .inner button {
  text-transform: capitalize;
}
</style>
