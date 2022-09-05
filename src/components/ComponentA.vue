<script setup lang="ts">
defineProps<{
  msg: string
}>();
</script>

<template>
  <div>
    Hello {{ msg }}! <span class="icon-heart" style="color:tomato" />
  </div>
</template>
