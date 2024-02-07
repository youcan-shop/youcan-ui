import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from './_BaseButton.vue';

type Story = StoryObj<typeof BaseButton>;
const meta: Meta<typeof BaseButton> = {
  title: 'Application/Button/BaseButton',
  component: BaseButton,
  tags: ['application', 'display', 'badge', 'note'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'only'],
    },
  },
  args: {
    size: 'xs',
    iconPosition: 'left',
    disabled: false,
    roundedFull: false,
  },
};

export const BaseButton_: Story = {
  render: args => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `<BaseButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </BaseButton>`,
  }),
};

export default meta;
