<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import { emojis as _emojis } from './emojis';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';

withDefaults(
  defineProps<{
    icon: string
    emojis?: string[]
  }>(),
  {
    emojis: () => _emojis,
  },
);

const emit = defineEmits(['select']);

const dropdownRef = ref();
const showDropdown = ref(false);

const model = computed({
  get: () => '',
  set: (value) => {
    emit('select', value);
  },
});

const setEmoji = (emoji: string) => {
  model.value = emoji;
};

const toggleDropdown = (show = !showDropdown.value) => showDropdown.value = show;

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});
</script>

<template>
  <div class="input-emoji">
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i
          :class="icon"
        />
      </template>
    </TertiaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="emojis-dropdown">
      <ul class="emojis">
        <li v-for="(emoji, i) in emojis" :key="i" class="emoji" @click="setEmoji(emoji)">
          {{ emoji }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input-emoji {
  position: relative;
}

.emojis-dropdown {
  position: absolute;
  z-index: 999999;
  width: 200px;
  height: 200px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
}

.emojis {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  overflow: auto;
  list-style: none;
  gap: 10px;
}

.emojis .emoji {
  font-size: 18px;
  cursor: pointer;
}
</style>
