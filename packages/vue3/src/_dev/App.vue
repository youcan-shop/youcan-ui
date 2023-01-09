<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { DropdownPrefix, Input, InputGroup, Percentage } from '~/components';
import type { DropdownItemGroups } from '~/components/Dropdown/types';

const items = {
  One: [
    {
      value: 1,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island',
    },
    {
      value: 2,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 2',
    },
    {
      value: 3,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
    },
  ],
  Two: [
    {
      value: 4,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 4',
    },
    {
      value: 5,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 5',
    },
  ],
} as DropdownItemGroups;

const model = ref({ main: '', prefix: null });
</script>

<template>
  <div>
    <InputGroup style="max-width: 500px">
      <template #input>
        <Input v-model="model.main" type="text" placeholder="Translate text..">
          <template #icon>
            <i i-youcan-language />
          </template>

          <template #suffix>
            <Percentage type="info" :percentage="(model.main.length / 32) * 100" />
          </template>

          <template #prefix>
            <DropdownPrefix v-model="model.prefix" icon="i-youcan-language" placeholder="Language" :items="items" />
          </template>
        </Input>
      </template>

      <template #label>
        Language picker
      </template>

      <template #info>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, qui?
      </template>
    </InputGroup>
  </div>
</template>

<style scoped></style>
