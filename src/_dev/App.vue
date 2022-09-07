<script setup lang="ts">
import { ref } from 'vue';
import YInput from '~/components/Yinput/Yinput.vue';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelect from '~/components/YGroupSelect/YGroupSelect.vue';
import '~/assets/main.scss';

const inputString = ref('');
</script>

<template>
  <YInput v-model="inputString" input-type="text" :has-help="true" hint="Subtle input hint" placeholder="Placeholder text" :is-error="false" label="Label" input-icon="i-tabler-home" />
  <p>Input: {{ inputString }}</p>
  <br>
  <YButton icon-position="right">
    <span>Button</span>
    <template #icon>
      <i i-tabler-apple />
    </template>
  </YButton>
  <br>
  <YGroupSelect />
</template>
