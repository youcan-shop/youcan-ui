<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import ColorInput from '~/components/Color/ColorInput.vue';

const color = ref('#7A7A7A72');
const alpha = ref(false);
const showColorInput = ref(true);

const toggleColorInput = () => {
  showColorInput.value = !showColorInput.value;
};
</script>

<template>
  <div>
    <select id="" v-model="alpha" name="">
      <option value="true">
        Preserve transparency
      </option>
      <option value="false">
        Reset transparency
      </option>
    </select>
    <ColorInput v-if="showColorInput" v-model="color" :preserve-transparency="alpha" />
    <button @click="toggleColorInput">
      Toggle color picker
    </button>
  </div>
</template>
