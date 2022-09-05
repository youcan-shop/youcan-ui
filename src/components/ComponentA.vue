<script setup lang="ts">
defineProps<{
  msg: string
}>();
</script>

<template>
  <div>
    <span i-carbon:3d-curve-auto-colon>test</span>
    Hello {{ msg }}! <span class="icon-heart" style="color:tomato" />
  </div>
</template>
