<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Percentage, Popover, PrimaryButton, RadioGroup, TertiaryButton } from '~/components';
import type { RadioData } from '~/components/Radio/types';

const show = ref(false);
const languages = ref<RadioData[]>([
  {
    label: 'JavaScript',
    value: 'js',
  },
  {
    label: 'PHP',
    value: 'php',
  },
  {
    label: 'Python',
    value: 'python',
  },
]);
// @ts-expect-error the v-model expects a RadioData but sets a string when value is changed.
const preferredLanguage = ref<RadioData>(languages.value[0].value);
</script>

<template>
  <div class="container">
    <Percentage
      type="danger"
      :percentage="-40"
    />
    <Popover
      v-model:show="show"
      position="top"
      object-fit="cover"
      class="popover"
      @click-outside="show = false"
    >
      <template #title>
        Introducing Themes!
      </template>
      <template #description>
        <p class="mr-0">
          Introducing themes, a new way to make your store stand out
        </p>
      </template>
      <template #footer>
        <div class="actions">
          <PrimaryButton @click="show = false">
            Get started
          </PrimaryButton>
          <TertiaryButton @click="show = false">
            Later
          </TertiaryButton>
        </div>
      </template>
      <PrimaryButton @click="show = !show;">
        <span>Show Popover</span>
      </PrimaryButton>
    </Popover>
    <RadioGroup
      v-model="preferredLanguage"
      name="languages"
      :items="languages"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
