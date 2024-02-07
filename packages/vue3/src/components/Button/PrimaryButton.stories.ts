import type { Meta, StoryObj } from '@storybook/vue3';
import { PrimaryButton } from '~/components';

type Story = StoryObj<typeof PrimaryButton>;
const meta: Meta<typeof PrimaryButton> = {
  title: 'Application/Button/PrimaryButton',
  component: PrimaryButton,
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

export const PrimaryButton_: Story = {
  render: args => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: `<PrimaryButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </PrimaryButton>`,
  }),
};

export default meta;
