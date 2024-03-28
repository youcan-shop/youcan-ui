import type { Meta, StoryObj } from '@storybook/vue3';
import { SecondaryButton } from '~/components';

type Story = StoryObj<typeof SecondaryButton>;
const meta: Meta<typeof SecondaryButton> = {
  title: 'Application/Button/SecondaryButton',
  component: SecondaryButton,
  tags: ['button', 'submit'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'only'],
    },
    icon: { control: false },
    default: { control: false },
  },
  args: {
    size: 'xs',
    iconPosition: 'left',
    disabled: false,
    roundedFull: false,
  },
};

export const SecondaryButton_: Story = {
  render: args => ({
    components: { SecondaryButton },
    setup() {
      return { args };
    },
    template: `<SecondaryButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </SecondaryButton>`,
  }),
};

export default meta;
