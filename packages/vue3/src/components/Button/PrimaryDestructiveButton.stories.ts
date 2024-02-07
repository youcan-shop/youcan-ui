import type { Meta, StoryObj } from '@storybook/vue3';
import { PrimaryDestructiveButton } from '~/components';

type Story = StoryObj<typeof PrimaryDestructiveButton>;
const meta: Meta<typeof PrimaryDestructiveButton> = {
  title: 'Application/Button/PrimaryDestructiveButton',
  component: PrimaryDestructiveButton,
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

export const PrimaryDestructiveButton_: Story = {
  render: args => ({
    components: { PrimaryDestructiveButton },
    setup() {
      return { args };
    },
    template: `<PrimaryDestructiveButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </PrimaryDestructiveButton>`,
  }),
};

export default meta;
