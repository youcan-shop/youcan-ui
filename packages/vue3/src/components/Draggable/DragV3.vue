<script lang="ts" setup>
import { defineProps, onMounted, onUnmounted, reactive, ref,watch } from 'vue';
import Sortable from 'sortablejs';

const emit = defineEmits

const props = defineProps({
    modelValue: Dragga
  items: {
    type: Array,
    required: true,
  },
});

const list = ref(null);

const useSortable = (list, items) => {
  const sortedItems = reactive(items);

  const sortableOptions = {
    animation: 150,
    onEnd: (evt) => {
      const item = sortedItems.splice(evt.oldIndex, 1)[0];
      sortedItems.splice(evt.newIndex, 0, item);
    },
  };

  const onCheckChange = (item) => {
    item.checked = !item.checked;
  };

  onMounted(() => {
    Sortable.create(list.value, sortableOptions);
  });

  onUnmounted(() => {
    Sortable.destroy(list.value);
  });

  return {
    sortedItems,
    onCheckChange,
  };
};

const { sortedItems } = useSortable(list, props.items);

watch(sortedItems, () => {
  emit('update:modelValue', sortedItems);
});
</script>

<template>
  <div ref="list" class="sortable-list">
    <div v-for="(item) in sortedItems" :key="item.label">
      <div class="item" :class="{ checked: item.checked }">
        <DraggableItem v-model="item.checked" :can-check="canCheck" @check="(value, checked) => handleCheck(value, checked)" />
      </div>
    </div>
  </div>
</template>
