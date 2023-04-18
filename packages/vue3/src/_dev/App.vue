<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import ColorInput from '~/components/Color/ColorInput.vue';

const color = ref('#FFFFFFFF');
const alpha = ref(false);
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
    <ColorInput v-model="color" :preserve-transparency="alpha" />
  </div>
</template>
