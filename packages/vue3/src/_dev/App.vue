<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
</script>

<template>
  <div class="container">
    <p class="testfont">
      خط الكوفي العربي1234
    </p>
    <p class="testfont">
      Hello it's me AA BB Balance
    </p>
    <p class="testtokens">
      Hello it's me AA BB Balance
      1234
    </p>
  </div>
</template>

<style scoped>
.testfont {
  font-family: var(--font-family);
}

.testtokens {
  font: var(--display-md-regular);
}
</style>
