<script>
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
  },

  props: nodeViewProps,

  data() {
    return {
      languages: this.extension.options.lowlight.listLanguages(),
    };
  },

  computed: {
    selectedLanguage: {
      get() {
        return this.node.attrs.language;
      },
      set(language) {
        this.updateAttributes({ language });
      },
    },
  },
};
</script>

<template>
  <NodeViewWrapper class="code-block">
    <select v-model="selectedLanguage" contenteditable="false" class="select-dropdown">
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
