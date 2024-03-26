import type { Meta, StoryObj } from '@storybook/vue3';
import { TertiaryButton } from '~/components';

type Story = StoryObj<typeof TertiaryButton>;
const meta: Meta<typeof TertiaryButton> = {
  title: 'Application/Button/TertiaryButton',
  component: TertiaryButton,
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

export const TertiaryButton_: Story = {
  render: args => ({
    components: { TertiaryButton },
    setup() {
      return { args };
    },
    template: `<TertiaryButton v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </TertiaryButton>`,
  }),
};

export default meta;
