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
  margin-top:10px;
  color: var(--gray-500);
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
  padding:12px;
  border-radius: 4px;
  width: 200px;
  height: 200px;
}

.emojis {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.emojis .emoji {
  font-size: 18px;
  cursor: pointer;
}
</style>
