<script lang="ts" setup>
const daynames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
</script>

<template>
  <div class="days">
    <div v-for="day in daynames" :key="day" class="day name">
      {{ day }}
    </div>
    <div v-for="day in 31" :key="day" class="day in" :class="[{ 'is-tody': day === 24 }, { selected: day === 16 }]">
      {{ day }}
    </div>
    <div v-for="day in 4" :key="day" class="day out">
      {{ day }}
    </div>
  </div>
</template>

<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(7, 40px);
}

.day {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 4px;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.day.name {
  color: var(--gray-500);
  font: var(--text-xs-medium);
}

.day.in {
  transition: background-color 70ms ease-in-out;
  cursor: pointer;
}

.day.in:hover {
  background-color: var(--gray-50);
}

.day.out {
  color: var(--gray-300);
  cursor: not-allowed;
}

.day.is-tody::after {
  --size: 6px;

  content: "";
  position: absolute;
  z-index: 2;
  bottom: 3px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--brand-500);
}

.day.selected {
  background-color: var(--brand-500);
  color: var(--base-white);
  font: var(--text-sm-medium);
}
</style>
