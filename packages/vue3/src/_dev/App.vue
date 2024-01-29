<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Badge, Divider, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, Thumbnail, Toast } from '~/components';

const show = ref(false);
const imageSrc = 'https://imgur.com/EXA4lN9.jpeg';
const imageAlt = 'Mr. Frog';
</script>

<template>
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" type="success" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>
  <div class="container">
    <DropdownMenu position="bottom">
      <DropdownMenuTrigger>
        <Thumbnail
          :src="imageSrc"
          :alt="imageAlt"
          size="large"
        />
      </DropdownMenuTrigger>
      <template #MenuList>
        <DropdownMenuItem label="Account" />
        <DropdownMenuItem label="Show toast" @click="show = true;" />
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
        <DropdownMenuItem class="custom-class" label="Logout">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.custom-class {
  color: var(--red-500); /* Change this to your desired color */
}
</style>
