<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Utils } from '@youcan/ui-core';
import TagItem from './TagItem.vue';
import type { TagItemType, TagItemValue, UniqueTagItem } from './types';

const props = withDefaults(defineProps<{
  modelValue: TagItemValue[]
  type?: TagItemType
  placeholder?: string
  disabled?: boolean
  error?: boolean
}>(), {
  type: 'text',
  placeholder: 'Add tag',
  disabled: false,
  error: false,
});

const emit = defineEmits(['update:modelValue']);

const tagInput = ref<HTMLInputElement>();
const tagsContainer = ref<HTMLDivElement>();
const newTagLabel = ref('');

const model = computed({
  get: () => props.modelValue.map((item: TagItemValue) => ({ ...item, id: Utils.uid(item.label) }) as UniqueTagItem),
  set: (value: UniqueTagItem[]) => emit('update:modelValue', value.map(({ label, hexColor }: UniqueTagItem) => ({ label, hexColor }) as TagItemValue)),
});

const removeTag = (index: number) => {
  if (props.disabled) {
    return;
  }

  model.value = Utils.removeFromArray(model.value, index);
};

onMounted(() => {
  tagInput.value?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!newTagLabel.value) {
        return;
      }

      model.value = model.value.concat({
        id: Utils.uid(newTagLabel.value),
        label: newTagLabel.value,
      });

      newTagLabel.value = '';
    }
  });

  tagsContainer.value?.addEventListener('click', (event: MouseEvent) => {
    if (event.target === tagsContainer.value) {
      tagInput.value?.focus();
    }
  });
});
</script>

<template>
  <div ref="tagsContainer" class="tag" tabindex="0" :disabled="disabled" :error="error">
    <TagItem v-for="(tag, index) in model" :key="tag.id" v-model="model[index]" :type="type"
      @remove="removeTag(index)" />
    <input ref="tagInput" v-model="newTagLabel" type="text" class="tag-input" :placeholder="placeholder">
  </div>
</template>

<style scoped>
.tag {
  --width: 460px;
  --border: 1px solid var(--gray-100);
  --shadow: var(--shadow-xs);
  --background-color: var(--base-white);

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  width: var(--width);
  background-color: var(--background-color);
  border-radius: 8px;
  border: var(--border);
  box-shadow: var(--shadow);
}

.tag:hover {
  --border: 1px solid var(--gray-200);
}

.tag[disabled='false'][error='false']:focus,
.tag[disabled='false'][error='false']:focus-within {
  --border: 1px solid var(--brand-500);
  --shadow: var(--focus-xs-brand);
}

.tag[disabled='false'][error='true'] {
  --border: 1px solid var(--red-500);
}

.tag[disabled='false'][error='true']:focus,
.tag[disabled='false'][error='true']:focus-within {
  --border: 1px solid var(--red-500);
  --shadow: var(--focus-xs-red);
}

.tag[disabled='true'] {
  --text-color: var(--gray-300);
  --background-color: var(--gray-50);
}

.tag[disabled='true'] .tag-input {
  background-color: var(--gray-50);
  pointer-events: none;
}

.tag .tag-input {
  flex: 1;
  min-width: 146px;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
  border: none;
  outline: none;
}

.tag .tag-input::placeholder {
  color: var(--gray-300);
}
</style>
