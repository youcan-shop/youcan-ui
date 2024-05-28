import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RichText } from '~/components';

type Story = StoryObj<typeof RichText>;
const meta: Meta<typeof RichText> = {
  title: 'Application/RichText',
  component: RichText,
  tags: ['info', 'alert'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    disabled: false,
    error: false,
    placeholder: 'Type something...',
  },
};
export const Default: Story = {
  render: args => ({
    components: { RichText },
    setup() {
      const content = ref();

      return { args, content };
    },
    template: `
    <RichText v-bind="args" v-model="content" />
    `,
  }),
};

export default meta;
