<script setup lang="ts">
import { computed, ref, useAttrs, useSlots } from 'vue';
import type { InputProps } from '~/types';

const props = withDefaults(
  defineProps<InputProps>(),
  {
    type: 'text',
    canShow: false,
  },
);

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const slots = useSlots();
const attrs = useAttrs();
const showPassword = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (value: string | number) => emit('update:modelValue', value),
});

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : props.type;
  }

  return props.type;
});
</script>

<template>
  <div
    class="yc-input__wrapper"
    :class="[
      {
        'yc-input__wrapper--enabled': !attrs.disabled,
        'yc-input__wrapper--error': error,
      },
    ]"
  >
    <input :id="uid" ref="primitive" v-model="model" class="yc-input__field" :type="inputType" v-bind="$attrs">
    <div v-if="type === 'password' && canShow" class="yc-input__password-toggle" @click="showPassword = !showPassword">
      <i v-if="showPassword" class="i-youcan:eye" />
      <i v-else class="i-youcan:eye-slash" />
    </div>
    <div v-if="slots.icon || slots.suffix" class="yc-input__tail">
      <div v-if="slots.suffix" class="suffix">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@youcan/styles/input";
</style>
