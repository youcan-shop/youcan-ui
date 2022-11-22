<script setup lang="ts">
import PrimaryButton from '~/components/Button/PrimaryButton/PrimaryButton.vue';
</script>

<template>
  <Story>
    <Variant title="text">
      <PrimaryButton>
        Continue
      </PrimaryButton>
    </Variant>
    <Variant title="icon">
      <PrimaryButton>
        <i class="i-line-md:loading-twotone-loop" />
      </PrimaryButton>
    </variant>
    <Variant title="disabled">
      <PrimaryButton disabled="true">
        <i class="i-line-md:loading-twotone-loop" />
      </PrimaryButton>
    </variant>
  </Story>
</template>
