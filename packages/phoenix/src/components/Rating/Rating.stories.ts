import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RatingInput } from '~/components';

type Story = StoryObj<typeof RatingInput>;
const meta: Meta<typeof RatingInput> = {
  title: 'Application/RatingInput',
  component: RatingInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['rate', 'score', 'rating', 'stars'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    ceil: 5,
  },
};

export const Default: Story = {
  render: args => ({
    components: { RatingInput },
    setup() {
      const value = ref(5);

      return { args, value };
    },
    template: `
    <RatingInput v-model="value" v-bind="args" />
    <p>{{ value }}</p>
    `,
  }),
};

export default meta;
