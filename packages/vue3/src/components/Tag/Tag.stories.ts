import type { Meta } from '@storybook/vue3';
import Tag_ from './Tag.vue';
import TagItem_ from './TagItem.vue';

const meta: Meta<typeof Tag_> = {
  title: 'Application/Tag',
  component: Tag_,
  tags: ['application', 'input', 'color', 'option', 'tag', 'multi-select'],
};

export default meta;

export const TagInput = {
  args: {
  },
};

export const TagItem = {
  render: (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    components: { TagItem_ },
    template: '<TagItem_ v-bind="args"/>',
  }),
  args: {
    type: 'text',
    modelValue: {
      label: 'label',
      hexColor: '#000000',
    },
  },
  argTypes: {
    type: {
      options: ['text', 'color'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    return {
      type: 'color',
      value: {
        label: 'label',
        // hexColor: '#000000',
      },
    };
  },
  components: { TagItem_ },
  template: '<TagItem_ v-bind="$props" type="color" v-model="value" /><span class="sb-c-preview-text">Color: {{ value }}</span>',
});

export const VModelTagItem = Template.bind({});
