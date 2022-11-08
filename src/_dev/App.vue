<script setup lang="ts">
import '~/assets/main.scss';
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';
import Button from '~/components/Button/Button.vue';

const inputValue = ref('hello');
</script>

<template>
  <div>
    <div>
      <Input v-model="inputValue" type="text" placeholder="Placeholder" />
      <span>{{ inputValue }}</span>
    </div>
    <div>
      <Button>
        <span>Continue</span>
      </Button>
    </div>
  </div>
</template>
