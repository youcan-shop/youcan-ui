import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RadioGroup } from '~/components';
import type { RadioData } from '~/components/Radio/types';

type Story = StoryObj<typeof RadioGroup>;
const meta: Meta<typeof RadioGroup> = {
  title: 'Application/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['radio', 'radio button', 'radio group'],
  argTypes: {
    modelValue: { table: { disable: true } },
    items: { table: { disable: true } },
  },
  args: {
    name: 'languages',
  },
};

export const Default: Story = {
  render: args => ({
    components: { RadioGroup },
    setup() {
      const languages = ref<RadioData[]>([
        {
          label: 'JavaScript',
          value: 'js',
        },
        {
          label: 'PHP',
          value: 'php',
        },
        {
          label: 'Python',
          value: 'python',
        },
      ]);

      const value = ref(languages.value[0].value);

      return { args, value, languages };
    },
    template: `
    <RadioGroup  v-model="value" v-bind="args" :items="languages" />
    <p>{{ value }}</p>
    `,
  }),
};

export default meta;
