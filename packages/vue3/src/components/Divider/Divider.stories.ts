import type { Meta, StoryObj } from '@storybook/vue3';
import { Divider } from '~/components';

type Story = StoryObj<typeof Divider>;
const meta: Meta<typeof Divider> = {
  title: 'Application/Divider',
  component: Divider,
  tags: ['divider', 'hr', 'vr', 'separator'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    borderStyle: {
      control: 'select',
      options: ['solid', 'dotted', 'dashed'],
    },
    thickness: {
      control: 'select',
      options: ['light', 'regular', 'thick'],
    },
  },
  args: {
    orientation: 'horizontal',
    borderStyle: 'solid',
    thickness: 'regular',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<div style="height: 100px;"><Divider v-bind="args" /></div>',
  }),
};

export default meta;
