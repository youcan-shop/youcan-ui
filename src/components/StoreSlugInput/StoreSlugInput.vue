<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Input from '~/components/Input/Input.vue';
const props = defineProps({
  value: {
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

const emit = defineEmits(['input']);

const slugSuffix = ref(props.slugSuffix);
const inputValue = ref(props.value);

const onInput = (emittedValue: string) => {
  emit('input', emittedValue);
};
const focusMenu = ref(false);
const onfocus = () => focusMenu.value = true;
const onblur = () => focusMenu.value = false;
</script>

<template>
  <div class="container">
    <div class="store-slug-input">
      <Input
        :value="inputValue"
        type="text" class="input" :placeholder="placeholder"
        slug-suffix="slugSuffix" @input="onInput" @focus="onfocus" @blur="onblur"
      />
      <span class="slug-suffix">{{ slugSuffix }}</span>
    </div>
    <Transition name="fade">
      <div v-if="focusMenu" class="store-slug-box">
        <div class="store-slug-box-content">
          <p class="store-slug-title">
            Store slug
          </p>
          <p class="store-slug-description">
            The slug you choose will be your store's domain name that your customers will see.
          </p>
          <div class="border-example">
            <i class="i-tabler-search" />
            <span>example.youcan.shop</span>
          </div>
          <div class="note">
            <div class="note-icon">
              <i class="i-tabler-alert-circle" />
            </div>
            <span class="note-description">
              You can always replace it with a custom domain name you purchased.
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
* {
  --store-slug-input: #333333;
  --store-slug-border-box: #F0F0FA;
  --store-slug-box-shadow: rgba(0, 0, 0, 0.04);
  --store-slug-title: #262629;
  --store-slug-description: #4B4C52;
  --store-slug-box-input: #EBEBEB;
  --store-slug-box-icon: #B83375;
  --store-slug-note: #757580;
 }
.container {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
}
.store-slug-input {
  position: relative;
  display: flex;
  align-items: center;
  width: 65%;
}

.store-slug-input span {
  position: absolute;
  right: 20px;
  color: var(--store-slug-input);
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.04em;
}

.store-slug-box {
  width: 332px  ;
  border: 1px solid var(--store-slug-border-box);
  box-shadow: 0px 4px 12px var(--store-slug-box-shadow);
  border-radius: 12px;
  position: absolute;
  right: 0;
}

.store-slug-box-content {
  padding-left: 20px;
  padding-right: 28px;
  margin: auto;
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
  box-shadow: 0px 1px 8px var(--store-slug-box-shadow);
  border-radius: 8px;
  margin-bottom: 14px;
}

.border-example i {
  color: var(--store-slug-box-icon);
}

.border-example span {
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
  margin-bottom: 12px;
}

.note-icon i {
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
