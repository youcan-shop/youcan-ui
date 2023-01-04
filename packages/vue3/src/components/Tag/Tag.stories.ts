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
    type: 'text',
    modelValue: [
      { label: 'Cosmetics' },
      { label: 'Beauty' },
      { label: 'Women' },
    ],
    placeholder: 'Placeholder text',
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

const Tag_Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'modelValue'),
  data() {
    return {
      type: 'text',
      modelValue: [
        { label: 'Cosmetics' },
        { label: 'Beauty' },
        { label: 'Women' },
      ],
      placeholder: 'Placeholder text',
    };
  },
  components: { Tag_ },
  template: '<Tag_ v-bind="$props" v-model="modelValue" /><span class="sb-c-preview-text">Data: {{ modelValue }}</span>',
});

export const VModelTagInput = Tag_Template.bind({});

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
