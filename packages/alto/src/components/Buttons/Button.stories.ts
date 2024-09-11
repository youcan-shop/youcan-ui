import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

type Story = StoryObj<typeof Button>;
const meta: Meta<typeof Button> = {
  title: 'Application/Buttons',
  component: Button,
  tags: ['button', 'submit'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    default: {
      control: false,
    },
  },
  args: {
    size: 'xs',
    disabled: false,
    rounded: false,
    iconOnly: false,
  },
};

export const BaseButton_: Story = {
  render: args => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"><i class="i-youcan-check-circle"></i></Button>',
  }),
};

export default meta;
