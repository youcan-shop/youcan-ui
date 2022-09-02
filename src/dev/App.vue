<script setup lang="ts">
import YouCanUI from '~/index';

const UI = new YouCanUI();

const Test = UI.Test;
console.log(Test);
</script>

<template>
  <Test name="YouCan" />
</template>
