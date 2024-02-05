import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RadioList } from '~/components';
import type { RadioListOption } from '~/components/RadioList/types';

type Story = StoryObj<typeof RadioList>;
const meta: Meta<typeof RadioList> = {
  title: 'Application/Radio/RadioList',
  component: RadioList,
  parameters: {
    layout: 'centered',
  },
  tags: ['radio', 'radio list', 'list'],
  argTypes: {
    modelValue: { table: { disable: true } },
    options: { table: { disable: true } },
  },
};

export const Default: Story = {
  render: args => ({
    components: { RadioList },
    setup() {
      const options = ref<RadioListOption[]>([
        {
          label: 'Pizza',
          suffix: '🍕',
        },
        {
          label: 'Burger',
          suffix: '🍔',
        },
        {
          label: 'Burrito',
          suffix: '🌯',
        },
      ]);

      const value = ref(options.value[0].label);

      return { args, value, options };
    },
    template: `
    <RadioList  v-model="value" :options="options" />
    <p>{{ value }}</p>
    `,
  }),
};

export default meta;
