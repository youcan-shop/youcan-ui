import type { Meta, StoryObj } from '@storybook/vue3';
import { Thumbnail } from '~/components';

type Story = StoryObj<typeof Thumbnail>;
const meta: Meta<typeof Thumbnail> = {
  title: 'Application/Thumbnail',
  component: Thumbnail,
  tags: ['application', 'display', 'thumbnail', 'image', 'avatar'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    objectFit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none'],
    },
  },
  args: {
    size: 'small',
    src: 'https://i.imgur.com/YcP0tik.jpeg',
    objectFit: 'cover',
    alt: 'YcP0tik',
  },
};
export const Default: Story = {
  render: args => ({
    components: { Thumbnail },
    setup() {
      return { args };
    },
    template: '<Thumbnail  v-bind="args" />',
  }),
};

export default meta;
