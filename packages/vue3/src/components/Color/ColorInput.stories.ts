import type { Meta } from '@storybook/vue3';
import ColorInput from './ColorInput.vue';

const meta: Meta<typeof ColorInput> = {
  title: 'Application/ColorInput',
  component: ColorInput,
  tags: ['color', 'color input', 'color picker'],
  argTypes: {
    preserveTransparency: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes),
  data() {
    return { color: '#505060' };
  },
  components: { ColorInput },
  template: ' <ColorInput v-model="color" /> ',
});

export const Default = Template.bind({});
