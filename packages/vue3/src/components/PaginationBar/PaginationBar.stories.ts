import type { Meta } from '@storybook/vue3';
import PaginationBar from './PaginationBar.vue';

const meta: Meta<typeof PaginationBar> = {
  title: 'Application/PaginationBar',
  component: PaginationBar,
  tags: ['application', 'input', 'pagination'],
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    return {
      value: 5,
      count: 2,
      total: 14,
      size: 20,
    };
  },
  components: { PaginationBar },
  template: '<PaginationBar v-bind="$props" v-model:current="value" :size="20" @update:current="action" /><span class="sb-c-preview-text">Page: {{ value }}</span>',
  methods: { action: (value: number) => console.log(`Page: ${value}`) },
});

export const Default = Template.bind({
});
