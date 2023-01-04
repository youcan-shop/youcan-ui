<script setup lang="ts">
import { computed, watch } from 'vue';
import { Utils } from '@youcan/ui-core';
import TagItem from './TagItem.vue';
import type { TagItemType, TagItemValue, UniqueTagItem } from './types';

const props = withDefaults(defineProps<{
  modelValue: TagItemValue[]
  type?: TagItemType
  placeholder?: string
}>(), {
  type: 'text',
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue.map((item: TagItemValue) => ({ ...item, id: Utils.uid(item.label) }) as UniqueTagItem),
  set: (value: UniqueTagItem[]) => emit('update:modelValue', value.map(({ label, hexColor }: UniqueTagItem) => ({ label, hexColor }) as TagItemValue)),
  // set: (value: UniqueTagItem[]) => console.log(value.map(({ label, hexColor }: UniqueTagItem) => ({ label, hexColor }) as TagItemValue)),
});

const removeTag = (index: number) => {
  model.value = Utils.removeFromArray(model.value, index);
  console.log(Utils.removeFromArray(model.value, index));
};

watch(model, (value) => {
  console.log(value);
});
</script>

<template>
  <div class="tag">
    <TagItem v-for="(tag, index) in model" :key="tag.id" v-model="model[index]" @remove="removeTag(index)" />
    <input type="text" class="tag-input">
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

.tag .tag-input {
  flex: 1;
  min-width: 146px;
}
</style>
