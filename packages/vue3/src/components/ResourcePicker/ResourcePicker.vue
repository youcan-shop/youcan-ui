<script setup lang="ts">
import Resource from './Internal/Resource.vue';
import Overlay from '~/components/Overlay/Overlay.vue';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '~/components';

withDefaults(defineProps<{
  visible: boolean
}>(), {
  visible: false,
});

const emit = defineEmits(['update:visible', 'confirm']);

const closePicker = () => {
  emit('update:visible', false);
};

const add = () => {
  emit('confirm');
};
</script>

<template>
  <Transition name="fade">
    <Overlay v-show="visible">
      <div class="picker">
        <div class="header">
          <span>Choose product</span>
          <TertiaryButton @click="closePicker">
            <i class="i-youcan-x" />
          </TertiaryButton>
        </div>
        <ul class="list">
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
          <li class="resource">
            <Resource />
          </li>
          <li class="resource">
            <Resource />
          </li>
          <li class="resource">
            <Resource />
          </li>
          <li class="resource">
            <Resource />
          </li>
          <li class="resource">
            <Resource />
          </li>
          <li class="resource">
            <Resource />
          </li>
        </ul>
        <div class="footer">
          <span class="selection">0 products selected</span>
          <div class="actions">
            <SecondaryButton @click="closePicker">
              <span>Cancel</span>
            </SecondaryButton>
            <PrimaryButton v-if="!cancelOnly" @click="add">
              <span>Add</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Overlay>
  </Transition>
</template>

<style scoped>
.picker {
  max-width: 620px;
  border-radius: 5px;
  background-color: white;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: "Mona Sans";
}

.header {
  padding: 4px 16px;
  border-bottom: 1px solid var(--gray-100);
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer {
  padding: 16px;
  border-top: 1px solid var(--gray-200);
}

.selection {
  color: var(--gray-400);
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.list {
  position: relative;
  max-height: 500px;
  margin: 0;
  padding: 0;
  overflow: scroll;
  list-style: none;
}

.list::after {
  content: "";
  display: block;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(#fff0, #fff);
}

.list li.resource {
  border-bottom: 1px solid var(--gray-100);
}

ul.list li.resource:hover {
  transition: all 0.3s;
  background-color: var(--gray-50);
}

.container ul li > ul {
  padding-inline-start: 40px;
  list-style: none;
}

.slide-up-enter-active {
  animation: slide-up 0.35s ease-in-out;
}

.slide-up-leave-active {
  animation: slide-up 0.35s reverse ease-in-out;
}

.fade-enter-active {
  animation: fade 0.35s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.35s reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
