import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import type { TagItemValue } from './types';
import Tag from './Tag.vue';

type Story = StoryObj<typeof Tag>;
const meta: Meta<typeof Tag> = {
  title: 'Application/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['input', 'color', 'option', 'tag', 'multi-select'],
  argTypes: {
    modelValue: { table: { disable: true } },
    type: {
      control: { type: 'select' },
      options: ['text', 'color'],
    },
  },
  args: {
    type: 'text',
    placeholder: 'Your favorite programming languages',
    max: 3,
    disabled: false,
    error: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Tag },
    setup() {
      const preferredLanguages = ref<TagItemValue[]>([
        { label: 'Pink', hexColor: '#F49FBC' },
        { label: 'Lavender', hexColor: '#805D93' },
        { label: 'Apricot', hexColor: '#FFD3BA' },
        { label: 'Olive Green', hexColor: '#9EBD6E' },
        { label: 'Shamrock Green', hexColor: '#169873' },
      ]);

      return { args, preferredLanguages };
    },
    template: ' <Tag v-model="preferredLanguages" v-bind="args" /> ',
  }),
};

export default meta;
