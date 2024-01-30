import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Drawer, PrimaryButton } from '~/components';

type Story = StoryObj<typeof Drawer>;
const meta: Meta<typeof Drawer> = {
  title: 'Application/Drawer',
  component: Drawer,
  tags: ['drawer', 'aside', 'side bar'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
  args: {
    position: 'right',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Drawer, PrimaryButton },
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
