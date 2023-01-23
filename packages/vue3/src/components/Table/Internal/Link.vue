<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    label: string
    target?: string
  }>(),
  {
    target: '_blank',
  },
);
</script>

<template>
  <a :href="href" :target="target" class="link"
    :style="{ font: 'var(--text-sm-medium)', color: 'var(--blue-600)', textDecoration: 'none' }">
    {{ label }}
  </a>
</template>
