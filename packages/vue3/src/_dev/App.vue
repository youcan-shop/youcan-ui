<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Drawer, PrimaryButton } from '~/components';
const showDrawer = ref(false);
</script>

<template>
  <Drawer v-model:visible="showDrawer">
    <div class="drawer-content">
      <img class="banner" src="https://developer.youcan.shop/banner.webp" alt="">
      <div class="content">
        <h1 class="title">
          Get started with YouCan UI
        </h1>
        <p class="description">
          Create your app using our UI library to insure seemless integration and user experience
        </p>
        <ul class="features">
          <li>👔 Tailored for you</li>
          <li>🏢 Internal and External Use</li>
          <li>⚙️ Vue.js and CSS</li>
        </ul>
      </div>
      <PrimaryButton class="cta" @click="showDrawer = false">
        <span>Get Started</span>
      </PrimaryButton>
    </div>
  </Drawer>
  <div class="container">
    <PrimaryButton @click="showDrawer = true">
      <span>Open Drawer</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50%;
  padding: 16px;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  max-width: 992px;
  height: 100%;
}

.drawer-content .banner {
  width: 100%;
  height: 60%;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  object-fit: cover;
}

.drawer-content .content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content .title {
  text-align: center;
}

.content .description {
  margin: 0;
  color: var(--gray-500);
  text-align: center;
}

.content .features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  list-style: none;
  gap: 16px;
}

.content .features li {
  margin: 0;
  padding: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
}

.drawer-content .cta {
  width: 100%;
  min-height: 55px;
}
</style>
