import type { Meta } from '@storybook/vue3';
import { Utils } from '@youcan/ui-core';
import BaseButton_ from './_BaseButton.vue';
import PrimaryButton_ from './PrimaryButton.vue';
import SecondaryButton_ from './SecondaryButton.vue';
import PrimaryDestructiveButton_ from './PrimaryDestructiveButton.vue';
import SecondaryDestructiveButton_ from './SecondaryDestructiveButton.vue';
import TertiaryButton_ from './TertiaryButton.vue';

const meta: Meta<typeof BaseButton_> = {
  title: 'Primitive/Button',
  component: BaseButton_,
  tags: ['primitive', 'button', 'input'],
};

export default meta;

const BaseButtonTemplate = (args: Record<string, unknown>) => ({
  components: { BaseButton_ },
  setup() {
    return { args };
  },
  template: `<BaseButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </BaseButton_>`,
});

export const _BaseButton = Utils.templatify(BaseButtonTemplate.bind({}));

_BaseButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};

const PrimaryButtonTemplate = (args: Record<string, unknown>) => ({
  components: { PrimaryButton_ },
  setup() {
    return { args };
  },
  template: `<PrimaryButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </PrimaryButton_>`,
});

export const PrimaryButton = Utils.templatify(PrimaryButtonTemplate.bind({}));

PrimaryButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};

const SecondaryButtonTemplate = (args: Record<string, unknown>) => ({
  components: { SecondaryButton_ },
  setup() {
    return { args };
  },
  template: `<SecondaryButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </SecondaryButton_>`,
});

export const SecondaryButton = Utils.templatify(SecondaryButtonTemplate.bind({}));

SecondaryButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};

const PrimaryDestructiveButtonTemplate = (args: Record<string, unknown>) => ({
  components: { PrimaryDestructiveButton_ },
  setup() {
    return { args };
  },
  template: `<PrimaryDestructiveButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </PrimaryDestructiveButton_>`,
});

export const PrimaryDestructiveButton = Utils.templatify(PrimaryDestructiveButtonTemplate.bind({}));

PrimaryDestructiveButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};

const SecondaryDestructiveButtonTemplate = (args: Record<string, unknown>) => ({
  components: { SecondaryDestructiveButton_ },
  setup() {
    return { args };
  },
  template: `<SecondaryDestructiveButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </SecondaryDestructiveButton_>`,
});

export const SecondaryDestructiveButton = Utils.templatify(SecondaryDestructiveButtonTemplate.bind({}));

SecondaryDestructiveButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};

const TertiaryButtonTemplate = (args: Record<string, unknown>) => ({
  components: { TertiaryButton_ },
  setup() {
    return { args };
  },
  template: `<TertiaryButton_ v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </TertiaryButton_>`,
});

export const TertiaryButton = Utils.templatify(TertiaryButtonTemplate.bind({}));

TertiaryButton.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};
