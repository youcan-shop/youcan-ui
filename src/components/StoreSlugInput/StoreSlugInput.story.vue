<script setup lang="ts">
import { ref } from 'vue';
import StoreSlugInputVue from './StoreSlugInput.vue';

const firstValue = ref('hello v1');
</script>

<template>
  <Story>
    <Variant title="Default">
      <StoreSlugInputVue
        v-model="firstValue"
        placeholder="Store slug"
        type="text"
        class="input"
      >
        <template #title>
          <p>Store slug</p>
        </template>
        <template #description>
          <p>
            The slug you choose will be your store's domain name that your customers will see.
          </p>
        </template>
        <template #example>
          <i class="i-tabler-search" />
        </template>
        <template #example-text>
          <span class="input-border-example">example.youcan.shop</span>
        </template>
        <template #icon>
          <i class="i-tabler-alert-circle" />
        </template>
        <template #note-desc>
          <span>
            You can always replace it with a custom domain name you purchased.
          </span>
        </template>
      </StoreSlugInputVue>
      <span>Value: {{ firstValue }}</span>
    </Variant>

    <Variant title="With suffix">
      <StoreSlugInputVue
        v-model="firstValue"
        placeholder="Store slug"
        slug-suffix=".youcan.shop"
        type="text"
        class="input"
      >
        <template #title>
          <p>Store slug</p>
        </template>
        <template #description>
          <p>
            The slug you choose will be your store's domain name that your customers will see.
          </p>
        </template>
        <template #example>
          <i class="i-tabler-search" />
        </template>
        <template #example-text>
          <span class="input-border-example">example.youcan.shop</span>
        </template>
        <template #icon>
          <i class="i-tabler-alert-circle" />
        </template>
        <template #note-desc>
          <span>
            You can always replace it with a custom domain name you purchased.
          </span>
        </template>
      </StoreSlugInputVue>
      <span>Value: {{ firstValue }}</span>
    </Variant>
  </Story>
</template>
