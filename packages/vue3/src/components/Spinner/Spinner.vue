<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    size?: string
    color?: string
    labelColor?: string
    labelFontSize?: string
  }>(),
  {
    color: 'var(--brand-300)',
    size: '80px',
    label: 'Loading',
    labelColor: 'var(--brand-500)',
    labelFontSize: 'md',
  },
);
</script>

<template>
  <div class="container">
    <div class="spinner" />
    <p class="label">
      {{ label }}
    </p>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.label {
  color: v-bind("labelColor");
  font: v-bind("`var(--text-${labelFontSize}-regular)`");
}

.spinner {
  position: relative;
  width: v-bind("size");
  animation: s4 1s infinite linear;
  border: 8px solid #0000;
  border-radius: 50%;
  border-right-color: v-bind("color");
  aspect-ratio: 1;
}

.spinner::before,
.spinner::after {
  content: "";
  position: absolute;
  animation: inherit;
  animation-duration: 2s;
  border: inherit;
  border-radius: 50%;
  inset: -8px;
}

.spinner::after {
  animation-duration: 4s;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
