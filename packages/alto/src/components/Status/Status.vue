<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { StatusObject, StatusProps } from '~/types';

const props = defineProps<StatusProps>();

const emit = defineEmits(['update:modelValue']);

const showDropdown = ref(false);
const editable = computed(() => Array.isArray(props.status));
const list = ref();
const button = ref();

const selectedStatus = ref<StatusObject>(Array.isArray(props.status) ? props.status[0] : props.status);
const statusArray = ref<StatusObject[]>(Array.isArray(props.status) ? props.status : [props.status]);

const getColor = (status: StatusObject | StatusObject[]): string => {
  if (!Array.isArray(status)) {
    return status.color;
  }
  else {
    return status[0].color;
  }
};

const getLabelColor = (status: StatusObject | StatusObject[]): string | undefined => {
  if (!Array.isArray(status)) {
    return status.labelColor;
  }
  else {
    return status[0].labelColor;
  }
};

const getLabel = (status: StatusObject | StatusObject[]): string => {
  if (!Array.isArray(status)) {
    return status.label;
  }
  else {
    return status[0].label;
  }
};

const toggleDropdown = (override = !showDropdown.value) => showDropdown.value = override;
onClickOutside(list, () => toggleDropdown(false), { ignore: [button] });

const selectStatus = (item: StatusObject) => {
  selectedStatus.value = item;
  showDropdown.value = false;
  emit('update:modelValue', item);
};
</script>

<template>
  <div v-if="!editable" class="yc-static-status" :style="{ backgroundColor: getColor(status), color: getLabelColor(status) || 'black' }">
    <span>{{ getLabel(status) }}</span>
  </div>
  <div v-else class="yc-status">
    <button ref="button" type="button" class="yc-status__trigger" :style="{ backgroundColor: getColor(selectedStatus), color: getLabelColor(selectedStatus) || 'black' }" @click="() => toggleDropdown()">
      <span class="yc-status__trigger__label">
        {{ getLabel(selectedStatus) }}
      </span>
      <i class="yc-status__trigger__icon i-youcan-caret-down" />
    </button>
    <div class="yc-status__wrapper">
      <div v-show="showDropdown" ref="list" class="yc-status__list">
        <button v-for="(item, index) in statusArray" :key="index" type="button" class="yc-status__list__item" @click="selectStatus(item)">
          <span class="yc-status__list__item__color" :style="{ backgroundColor: item.color }" />
          <span class="yc-status__list__item__label">{{ item.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@youcan/styles/status";
</style>
