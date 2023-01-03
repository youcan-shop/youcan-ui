import type { Meta } from '@storybook/vue3';
import { Utils } from '@youcan/ui-core';
import PrimaryButton from './PrimaryButton.vue';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Primitive/PrimaryButton 🔴',
  component: PrimaryButton,
  tags: ['primitive', 'button', 'input'],
};

export default meta;

const Template = (args: Record<string, unknown>) => ({
  components: { PrimaryButton },
  setup() {
    return { args };
  },
  template: `<PrimaryButton v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </PrimaryButton>`,
});

export const Default = Utils.templatify(Template.bind({}));

Default.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};
