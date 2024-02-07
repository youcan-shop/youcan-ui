import type { Meta, StoryObj } from '@storybook/vue3';
import { SecondaryDestructiveButton } from '~/components';

type Story = StoryObj<typeof SecondaryDestructiveButton>;
const meta: Meta<typeof SecondaryDestructiveButton> = {
  title: 'Application/Button/SecondaryDestructiveButton',
  component: SecondaryDestructiveButton,
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

export const SecondaryDestructiveButton_: Story = {
  render: args => ({
    components: { SecondaryDestructiveButton },
    setup() {
      return { args };
    },
    template: `<SecondaryDestructiveButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </SecondaryDestructiveButton>`,
  }),
};

export default meta;
