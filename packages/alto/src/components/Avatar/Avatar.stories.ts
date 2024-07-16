import type { Meta, StoryObj } from '@storybook/vue3';
import { Avatar } from '~/components';

type Story = StoryObj<typeof Avatar>;
const meta: Meta<typeof Avatar> = {
  title: 'Application/Avatar',
  component: Avatar,
  tags: ['picture', 'avatar', 'profile', 'user'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
  args: {
    size: 'xl',
    clickable: false,
    source: '',
    url: '',
    initials: '',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export default meta;
