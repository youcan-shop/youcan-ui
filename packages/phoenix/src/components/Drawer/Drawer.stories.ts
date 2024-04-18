import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Button, Drawer } from '~/components';

type Story = StoryObj<typeof Drawer>;
const meta: Meta<typeof Drawer> = {
  title: 'Application/Drawer',
  component: Drawer,
  tags: ['drawer', 'aside', 'side bar'],
  argTypes: {
    position: {
      options: ['left', 'right'],
      control: 'select',
    },
  },
  args: {
    position: 'right',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Drawer, Button },
    setup() {
      const show = ref(false);

      return { args, show };
    },
    template: `
    <Drawer v-model:visible="show" v-bind="args">
      <p v-for="index in 50" :key="index">
        The quick brown fox jumps over the lazy dog.
      </p>
    </Drawer>
  `,
  }),
};

export default meta;
