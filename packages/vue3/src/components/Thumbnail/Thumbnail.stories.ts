import type { Meta } from '@storybook/vue3';
import Thumbnail_ from './Thumbnail.vue';

const meta: Meta<typeof Thumbnail_> = {
  title: 'Application/Thumbnail',
  component: Thumbnail_,
  tags: ['application', 'display', 'thumbnail', 'image', 'avatar'],
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const Thumbnail = {
  args: {
    size: 'small',
  },
};
