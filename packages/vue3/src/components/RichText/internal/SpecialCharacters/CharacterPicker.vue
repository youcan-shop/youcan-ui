<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import { specialCharacters as _specialCharacters } from './specialCharacters';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';

withDefaults(
  defineProps<{
    icon: string
    characters?: string[]
  }>(),
  {
    characters: () => _specialCharacters,
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

const setCharacter = (character: string) => {
  model.value = character;
};

const toggleDropdown = (show = !showDropdown.value) => (showDropdown.value = show);

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});
</script>

<template>
  <div class="input-characters">
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i :class="icon" />
      </template>
    </TertiaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="characters-dropdown">
      <ul class="characters">
        <li
          v-for="(character, i) in characters"
          :key="i"
          class="character"
          @click="setCharacter(character)"
        >
          {{ character }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input-character {
  position: relative;
}

.characters-dropdown {
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

.characters {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style: none;
  gap: 15px;
}

.characters .character {
  font-size: 18px;
  cursor: pointer;
}
</style>
