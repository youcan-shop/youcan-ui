import CheckBox from '~/components/CheckBox/CheckBox.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Primitives/CheckBox',
  component: CheckBox,
  layout: 'fullscreen',
  tags: ['docsPage'],
};

export const Active = {
  args: {
    modelValue: true,
  },
};

export const Inactive = {
  args: {
    modelValue: false,
  },
};

