<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import {
  Checkbox,
  ColorPicker,
  Input,
  InputGroup,
  Rating,
  RatingInput,
  TextArea,
} from '~/components';
import DropdownPrefix from '~/components/Input/prefixes/DropdownPrefix.vue';

const textModel = ref();
const inputModel = ref();
const ratingModel = ref(1);
const checkboxModel = ref();
</script>

<template>
  <div>
    <InputGroup>
      <template #label>
        Input label
      </template>

      <template #error>
        I think we boofed it
      </template>

      <template #info>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, commodi.
      </template>

      <template #input>
        <Input v-model="inputModel" :error="true" style="max-width:360px;" placeholder="Placeholder text">
          <template #prefix>
            <DropdownPrefix />
          </template>
          <template #icon>
            <i i-youcan-link />
          </template>
        </Input>
      </template>
    </InputGroup>
    value: {{ inputModel }}
  </div>

  <div>
    <Rating :score="3" />
  </div>

  <div>
    <RatingInput v-model="ratingModel" :ceil="5" />
    value: {{ ratingModel }}
  </div>

  <div>
    <TextArea v-model="textModel" style="max-width:360px;" placeholder="Placeholder text" />
    value: {{ textModel }}
  </div>

  <div>
    <ColorPicker />
  </div>

  <div>
    <Checkbox v-model="checkboxModel" disabled>
      <template #label>
        What the dog doing
      </template>
    </Checkbox>
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  color: var(--gray-900);
  font: var(--text-md-regular);
}
</style>
