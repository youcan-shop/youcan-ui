<script setup lang="ts">
import Resource from './Internal/Resource.vue';
</script>

<template>
  <div class="container">
    <p>Picker</p>
    <ul>
      <li class="resource">
        <Resource
          name="Apple iMac"
          stock="4 in stock"
          price="MAD 30,000"
          thumbnail-url="https://images.unsplash.com/photo-1702121269747-fe91af4fa4a8?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          show-stock
        />
      </li>
      <li class="resource variant">
        <Resource
          name="MacBook Pro  16 Pro Max 512Go 18Go MacBook Pro  16 Pro Max 512Go 18Go MacBook Pro  16 Pro Max 512Go 18Go MacBook Pro  16 Pro Max 512Go 18Go MacBook Pro  16 Pro Max 512Go 18Go MacBook Pro  16 Pro Max 512Go 18Go"
          :show-thumbnail="false" :show-stock="true"
        />
      </li>
      <li class="resource">
        <Resource />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  font-family: "Mona sans";
}

.container ul {
  padding: 0;
  list-style: none;
}

ul li.resource {
  border-bottom: 1px solid var(--gray-100);
}

ul li.resource:hover {
  transition: all 0.3s;
  background-color: var(--gray-50);
}

.container ul li > ul {
  padding-inline-start: 40px;
  list-style: none;
}
</style>
