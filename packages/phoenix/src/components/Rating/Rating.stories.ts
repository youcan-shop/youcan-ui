import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Rating } from '~/components';

type Story = StoryObj<typeof Rating>;
const meta: Meta<typeof Rating> = {
  title: 'Application/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['rate', 'rating', 'rating', 'stars'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    stars: 5,
    editable: true,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Rating },
    setup() {
      const value = ref(5);

      return { args, value };
    },
    template: `
    <Rating v-model="value" v-bind="args" />
    <p>{{ value }}</p>
    `,
  }),
};

export default meta;
