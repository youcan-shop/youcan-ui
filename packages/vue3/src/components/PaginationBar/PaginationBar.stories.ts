import type { Meta } from '@storybook/vue3';
import { ref } from 'vue';
import PaginationBar from './PaginationBar.vue';

const meta: Meta<typeof PaginationBar> = {
  title: 'Application/PaginationBar',
  component: PaginationBar,
  tags: ['application', 'input', 'pagination'],
  argTypes: {
    current: { table: { disable: true } },
  },
  args: {
    size: 20,
    total: 14,
    count: 2,
  },
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    const value = ref(5);

    return { args, value };
  },
  components: { PaginationBar },
  template: '<PaginationBar v-model:current="value" v-bind="args"/><span class="sb-c-preview-text">Page: {{ value }}</span>',
});

export const Default = Template.bind({
});
