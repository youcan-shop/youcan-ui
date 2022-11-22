<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <Story>
    <Variant title="text">
      <Button>
        Continue
      </Button>
    </Variant>
    <Variant title="icon">
      <Button>
        <i class="i-line-md:loading-twotone-loop" />
      </Button>
    </Variant>
  </Story>
</template>
