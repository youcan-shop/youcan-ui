<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Badge, Divider, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Thumbnail, Toast } from '~/components';

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
    <DropdownMenu>
      <template #trigger>
        <DropdownMenuTrigger>
          <Thumbnail
            :src="imageSrc"
            :alt="imageAlt"
            size="large"
          />
        </DropdownMenuTrigger>
      </template>
      <template #content>
        <DropdownMenuContent>
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
        </DropdownMenuContent>
      </template>
    </DropdownMenu>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  margin: 40px auto;
  row-gap: 20px;
}

.custom-class {
  color: var(--red-500); /* Change this to your desired color */
}
</style>
