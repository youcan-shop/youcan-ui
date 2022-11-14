<script setup lang="ts">
import { ref } from 'vue';
import Input from '~/components/Input/Input.vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  slugSuffix: {
    type: String,
    default: '.youcan.shop',
  },
  placeholder: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const isPopoverDiplayed = ref(false);

const onInput = (emittedValue: string) => emit('update:modelValue', emittedValue);
const onfocus = () => isPopoverDiplayed.value = true;
const onblur = () => isPopoverDiplayed.value = false;
</script>

<template>
  <div class="store-slug-input">
    <div class="input-container">
      <Transition name="fade">
        <div v-show="isPopoverDiplayed" class="popover">
          <div class="store-slug-box-content">
            <div class="box-description">
              <p class="store-slug-title">
                Store slug
              </p>
              <p class="store-slug-description">
                The slug you choose will be your store's domain name that your customers will see.
              </p>
              <div class="border-example">
                <i class="border-icon-example i-tabler-search" />
                <span class="input-border-example">example.youcan.shop</span>
              </div>
            </div>
            <div class="note">
              <div>
                <i class="icon-note i-tabler-alert-circle" />
              </div>
              <span class="note-description">
                You can always replace it with a custom domain name you purchased.
              </span>
            </div>
          </div>
        </div>
      </Transition>
      <Input :model-value="inputValue" type="text" class="input" :placeholder="placeholder"
        @update:model-value="onInput" @focus="onfocus" @blur="onblur" />
      <span class="slug-suffix">{{ slugSuffix }}</span>
    </div>
  </div>
</template>

<style scoped>
.store-slug-input {
  --store-slug-title: var(--gray-900);
  --store-slug-description: var(--gray-500);
  --store-slug-box-input: var(--gray-100);
  --store-slug-box-icon: var(--primary-400);
  --store-slug-note: var(--gray-600);
  --store-slug-note-content: var(--gray-20);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.slug-suffix {
  position: absolute;
  right: 20px;
  color: var(--gray-800);
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.04em;
}

.popover {
  width: 332px;
  background-color: white;
  transform: translateX(calc(100% + 1rem));
  border: 1px solid var(--gray-50);
  top: 0;
  box-shadow: 0px 4px 12px var(--black-800);
  border-radius: 12px;
  position: absolute;
  right: 0;
}

.box-description {
  padding-left: 20px;
  padding-right: 28px;
}

.store-slug-title {
  font-weight: 500;
  color: var(--store-slug-title);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
}

.store-slug-description {
  font-weight: 400;
  color: var(--store-slug-description);
  font-weight: 400;
  font-size: 13px;
  margin-top: -5px;
  line-height: 20px;
  letter-spacing: 0.02em;
}

.border-example {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--store-slug-box-input);
  padding: 12px 16px;
  box-shadow: 0px 1px 8px var(--black-800);
  border-radius: 8px;
  margin-bottom: 14px;
}

.border-icon-example {
  color: var(--store-slug-box-icon);
}

.input-border-example {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: var(--store-slug-description);
}

.note {
  display: flex;
  align-items: center;
  gap: 9px;
  background-color: var(--store-slug-note-content);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 8px 10px 12px 20px;
}

.icon-note {
  color: var(--store-slug-note);
}

.note-description {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: var(--store-slug-note);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
