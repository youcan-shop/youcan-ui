import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

type Story = StoryObj<typeof Button>;
const meta: Meta<typeof Button> = {
  title: 'Application/Button/BaseButton',
  component: Button,
  tags: ['button', 'submit'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'link'],
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
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">
      <span>Button label</span>
      <template #icon><span>🔴</span></template>
    </Button>`,
  }),
};

export default meta;
