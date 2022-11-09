<script setup lang="ts">
const props = defineProps<{
  index: number
  value: SelectItem
}>();
</script>

<template>
  <div v-for="item in value" :key="index" class="dropdown-content">
    <div class="dropdown-item" :class="{ active: item === selectedItem }" @click="emit('select', item)">
      <span>{{ item.label }}</span>
      <i v-if="item.icon" :class="[item.icon]" />
      <img v-if="item.image" :src="item.image">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .dropdown-content {
    position: absolute;
    background-color: #fff;
    min-width: 248px;
    max-width: 248px;
    max-height: 248px;
    border: 1px solid #e7ecf5;
    box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
    overflow: auto;
    z-index: 1;
    .dropdown-item {
      color: black;
      font-size: .7em;
      line-height: 1em;
      padding: 8px;
      text-decoration: none;
      display: block;
      cursor: pointer;
      &:hover {
        background-color: #e7ecf5;
      }
    }
  }
</style>
