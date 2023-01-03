import type { Meta } from '@storybook/vue3';
import { Utils } from '@youcan/ui-core';
import BaseButton from './_BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
  title: 'Primitive/BaseButton 🔴',
  component: BaseButton,
  tags: ['primitive', 'button', 'input'],
};

export default meta;

const Template = (args: Record<string, unknown>) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<BaseButton v-bind="args">
    <span>Button label</span>
    <template #icon><span>🔴</span></template>
  </BaseButton>`,
});

export const Default = Utils.templatify(Template.bind({}));

Default.args = {
  size: 'xs',
  iconPosition: 'left',
  disabled: false,
  roundedFull: false,
};
