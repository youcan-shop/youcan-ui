<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Badge, Divider, DropdownMenu, DropdownMenuItem } from '~/components';

const imgSrc = ref('https://i.imgur.com/61WTxIG.jpg');
</script>

<template>
  <div class="container">
    <DropdownMenu position="bottom">
      <div class="avatar">
        <img :src="imgSrc" alt="avatar" srcset="">
      </div>
      <template #MenuItems>
        <DropdownMenuItem label="Account" />
        <Divider thickness="light" />
        <DropdownMenuItem label="With accessory">
          <template #accessory>
            <i class="i-youcan:rocket-launch" />
          </template>
        </DropdownMenuItem>
        <DropdownMenuItem label="With Badge">
          <template #icon>
            <Badge state="success" :size="20">
              Badge
            </Badge>
          </template>
        </DropdownMenuItem>
        <DropdownMenuItem label="Notification" />
        <DropdownMenuItem label="Logout" class="custom-class">
          <template #icon>
            <i class="i-youcan:sign-out" />
          </template>
        </DropdownMenuItem>
      </template>
    </DropdownMenu>
  </div>
</template>

<style scoped>
.container {
  margin: 30px;
}

.custom-class {
  color: var(--red-500); /* Change this to your desired color */
}

.avatar {
  width: 55px;
  height: 55px;
  overflow: hidden;
  transition: all 200ms linear;
  border: 2px solid var(--gray-300);
  border-radius: 50%;
  box-shadow: var(--shadow-md-brand);
  cursor: pointer;
}

.avatar:hover {
  border: 2px solid var(--gray-400);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
