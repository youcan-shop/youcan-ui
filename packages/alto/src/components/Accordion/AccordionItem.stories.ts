import type { Meta, StoryObj } from '@storybook/vue3';
import { AccordionItem } from '~/components';

type Story = StoryObj<typeof AccordionItem>;
const meta: Meta<typeof AccordionItem> = {
  title: 'Application/Accordion/AccordionItem',
  component: AccordionItem,
  tags: ['accordion', 'toggle', 'collapse'],
  argTypes: {
    default: { table: { disable: true } },
  },
  args: {
    show: false,
    title: 'Accordion row collapsed default',
    disabled: false,
    duration: 200,
  },
};

export const Default: Story = {
  render: args => ({
    components: { AccordionItem },
    setup() {
      return { args };
    },
    template: '<AccordionItem v-bind="args"> Placeholder for accordion text. </AccordionItem>',
  }),
};

export default meta;
