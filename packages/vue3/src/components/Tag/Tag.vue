<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import { onClickOutside } from '@vueuse/core';
import type { DropdownItemDefinition } from '../Dropdown/types';
import TagItem from './TagItem.vue';
import type { TagItemValue, TagProps } from './types';
import { DropdownList } from '~/components';

const props = withDefaults(defineProps<TagProps>(), {
  type: 'text',
  placeholder: 'Add tag',
  disabled: false,
  error: false,
  searchable: true,
});

const emit = defineEmits(['update:modelValue']);

const tagInput = ref<HTMLInputElement>();
const tagsContainer = ref<HTMLDivElement>();
const newTagLabel = ref('');
const show = ref(false);
const list = ref();
const listPosition = ref('bottom');
const selected = ref<DropdownItemDefinition[]>([]);

const model = computed({
  get: () => props.modelValue,
  set: (value: TagItemValue[]) => emit('update:modelValue', value),
});

const hideInput = computed(() => {
  if ((typeof props.max === 'undefined' || model.value.length < props.max) && props.disabled === false) {
    return true;
  }

  return false;
});

const checkLimit = () => {
  return typeof props.max === 'number' && model.value.length >= props.max;
};

const addTag = (value: string) => {
  if (!value || checkLimit()) {
    return;
  }

  model.value = model.value.concat({
    label: value,
  });
};

const updateTag = (index: number, value: TagItemValue) => {
  if (props.disabled) {
    return;
  }

  model.value = Utils.updateArray(model.value, index, value);
};

const removeTag = (index: number) => {
  if (props.disabled) {
    return;
  }

  model.value = Utils.removeFromArray(model.value, index);
  nextTick(() => {
    selected.value = (model.value as DropdownItemDefinition[]);
  });
};

const handleSelect = (item: DropdownItemDefinition) => {
  const index = selected.value.findIndex(el => el.label === item.label);
  if (index > -1) {
    selected.value.splice(index, 1);
  }
  else if (checkLimit() === false) {
    selected.value.push(item);
  }

  nextTick(() => {
    emit('update:modelValue', selected.value);
  });
};

const toggleList = (override = !show.value) => {
  const offset = list.value.getBoundingClientRect();
  if (offset) {
    listPosition.value = offset.bottom > window.innerHeight ? 'top' : 'bottom';
  }
  show.value = override;
};

onClickOutside(tagsContainer, () => toggleList(false));

onMounted(() => {
  tagInput.value?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTag(newTagLabel.value);
      newTagLabel.value = '';
    }

    if (event.key === 'Backspace' && !newTagLabel.value) {
      removeTag(model.value.length - 1);
    }
  });

  tagsContainer.value?.addEventListener('click', (event: MouseEvent) => {
    if (event.target === tagsContainer.value) {
      tagInput.value?.focus();
    }
  });
  if (model.value.length && props.type === 'dropdown' && props.items) {
    selected.value = (model.value as DropdownItemDefinition[]);
  }
});
</script>

<template>
  <div ref="tagsContainer" class="tag" :class="`type-${type}`" tabindex="0" :disabled="disabled" :error="error">
    <TagItem
      v-for="(tag, index) in model" :key="`${tag.label}-${index}`" :model-value="model[index]" :type="type"
      @update:model-value="(value) => updateTag(index, value)" @remove="removeTag(index)"
    />
    <label v-if="props.type === 'dropdown'" class="dropdown-placeholder" @click="toggleList()"> {{ placeholder }} </label>
    <template v-if="type === 'dropdown'">
      <div ref="list" class="dropdown-container" :class="[listPosition, { show }]">
        <DropdownList
          class="dropdown"
          :class="[{ max: checkLimit() }]"
          :items="items ? items : []"
          :selected="selected" multiple
          :searchable="searchable"
          @toggle="handleSelect"
        />
      </div>
    </template>

    <input
      v-else v-show="hideInput" ref="tagInput" v-model="newTagLabel" type="text" class="tag-input"
      :placeholder="placeholder"
    >
  </div>
</template>

<style scoped>
.tag {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 6px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 6px;
}

.dropdown-container {
  visibility: hidden;
  position: absolute;
  z-index: 99;
  left: 0;
  width: 100%;
  opacity: 0;
}

.dropdown-container.show {
  visibility: visible;
  opacity: 1;
}

.dropdown-container.bottom {
  top: calc(100% + 5px);
}

.dropdown-container.top {
  bottom: calc(100% + 5px);
}

.dropdown > :deep(.inner) {
  display: flex;
  flex-direction: column;
  row-gap: 1px;
}

.dropdown :deep(.item .checkbox) {
  display: none;
}

.dropdown :deep(.item:focus),
.dropdown :deep(.item:active) {
  background: var(--base-white);
}

.dropdown :deep(.item.selected) {
  background-color: var(--gray-50);
}

.dropdown :deep(.item:hover) {
  background-color: var(--gray-50);
}

.dropdown.max :deep(.item:not(.selected)) {
  cursor: not-allowed;
}

.dropdown.max :deep(.item:not(.selected):hover) {
  background: var(--base-white);
}

.dropdown-placeholder {
  flex: 1;
  min-width: 20%;
  padding: 8px 0;
  overflow: hidden;
  color: var(--gray-300);
  font: var(--text-sm-regular);
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.tag:hover {
  --border: 1px solid var(--gray-300);
}

.tag[disabled="false"][error="false"]:focus,
.tag[disabled="false"][error="false"]:focus-within {
  --border: 1px solid var(--brand-500);
  --shadow: var(--focus-shadow-xs-brand);
}

.tag[disabled="false"][error="true"] {
  --border: 1px solid var(--red-500);
}

.tag[disabled="false"][error="true"]:focus,
.tag[disabled="false"][error="true"]:focus-within {
  --border: 1px solid var(--red-500);
  --shadow: var(--focus-shadow-xs-red);
}

.tag[disabled="true"] {
  --text-color: var(--gray-300);
  --background-color: var(--gray-50);
}

.tag .tag-input {
  flex: 1;
  min-width: 146px;
  border: none;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.tag[disabled="true"],
.tag[disabled="true"]:deep(*),
.tag[disabled="true"] * {
  cursor: not-allowed !important;
}

.tag .tag-input::placeholder {
  color: var(--gray-300);
}
</style>
