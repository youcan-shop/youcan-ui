<script setup lang="ts">
import { computed, ref } from 'vue';
import { swatches } from './swatches';
import { SecondaryButton } from '~/components';
import Input from '~/components/Input/Input.vue';

const props = withDefaults(defineProps<{
  modelValue: string
  icon: string
  swatches?: string[]
}>(), {
  swatches,
});

const emit = defineEmits(['update:modelValue']);

const custom = ref('');
const showDropdown = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
    custom.value = value;
  },
});

const setColor = (hex: string) => {
  model.value = hex;
};

const toggleDropdown = () => showDropdown.value = !showDropdown.value;
</script>

<template>
  <div class="input-color">
    <SecondaryButton size="sm" @click="toggleDropdown()">
      <template #icon>
        <i
          :class="icon"
        />
      </template>
    </SecondaryButton>
    <div v-show="showDropdown" class="colors-dropdown">
      <ul class="swatches">
        <li v-for="(color, i) in swatches" :key="i" class="swatch" :style="{ backgroundColor: color }" @click="setColor(color)" />
      </ul>
      <Input v-model="custom" placeholder="hex color" />
    </div>
  </div>
</template>

<style scoped>
.input-color {
  position: relative;
}
.colors-dropdown {
  position: absolute;
  z-index: 999999;
  margin-top:10px;
  color: var(--gray-500);
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
  padding: 7.5px 12px;
  border-radius: 4px;
  width: 200px;
}

.swatches {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;

}
.swatches .swatch {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
