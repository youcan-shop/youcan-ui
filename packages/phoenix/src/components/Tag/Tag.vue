<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import TagItem from './TagItem.vue';
import type { DropdownValue, TagItemValue, TagProps } from '~/types';
import { Dropdown } from '~/components';

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
const selected = ref<DropdownValue[]>([]);

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
    selected.value = (model.value as DropdownValue[]);
  });
};

onMounted(() => {
  if (model.value.length && props.type === 'dropdown' && props.items) {
    const list = (model.value as DropdownValue[]);
    if (typeof props.max === 'number' && list.length > props.max) {
      list.splice(0, props.max);
    }
    selected.value = list;
  }
  else {
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
  }
});
</script>

<template>
  <div ref="tagsContainer" class="tag" :class="`type-${type}`" tabindex="0" :disabled="disabled" :error="error">
    <TagItem
      v-for="(tag, index) in model" :key="`${tag.label}-${index}`" :model-value="model[index]" :type="type"
      @update:model-value="(value) => updateTag(index, value)" @remove="removeTag(index)"
    />
    <template v-if="type === 'dropdown'">
      <Dropdown
        v-model="selected"
        class="dropdown" :class="[{ max: checkLimit() }]"
        :items="items ? items : []"
        multiple
        :searchable="searchable"
        :placeholder="placeholder"
        :multi-select-label="placeholder"
        :limit="max ? max : 0"
        :disabled="disabled"
        @update:model-value="(value) => emit('update:modelValue', value ? value : [])"
      />
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
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.tag.type-dropdown {
  padding: 0;
}

.dropdown:deep(.dropdown-input) {
  border: 0 !important;
  box-shadow: unset !important;
}

.dropdown :deep(.dropdown-input .label .selected-count),
.dropdown :deep(.dropdown-input .label .caret),
.dropdown :deep(.dropdown-list .dropdown-item .checkbox) {
  display: none;
}

.dropdown.max :deep(.dropdown-list .dropdown-item:not(.selected)) {
  background-color: var(--base-white);
  cursor: not-allowed;
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
