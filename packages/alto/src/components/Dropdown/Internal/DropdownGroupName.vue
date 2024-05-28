<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Utils } from '@youcan/ui-core';
import type { DropdownGroupNameProps } from '../types';
import { Checkbox } from '~/components';

const props = defineProps<DropdownGroupNameProps>();

const emit = defineEmits(['onSelect']);

const checked = ref(false);

function select() {
  emit('onSelect', checked.value, props.name);
}
const uid = Utils.uid('checkbox');
onMounted(() => {
  checked.value = props.selected;
});

watch(() => props.selected, (newValue) => {
  checked.value = newValue;
});
</script>

<template>
  <label class="group-name" :for="uid">
    <div v-if="multiple" class="check-box">
      <Checkbox v-if="multiple" v-model="checked" :uid="uid" tabindex="-1" @change="select" />
    </div>
    {{ name }}
  </label>
</template>
