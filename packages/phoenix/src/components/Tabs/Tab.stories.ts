import type { Meta, StoryObj } from '@storybook/vue3';
import { Tab, TabsBar } from '~/components';

type Story = StoryObj<typeof Tab>;
const meta: Meta<typeof Tab> = {
  title: 'Application/Tabs/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['tabs', 'tab', 'switch'],
  args: {
    label: 'Peach 🍑',
    active: false,
    disabled: false,
    count: 0,
  },
};

export const Tab_: Story = {
  render: args => ({
    components: { TabsBar, Tab },
    setup() {
      return { args };
    },
    template: '<TabsBar> <Tab v-bind="args" /> </TabsBar>',
  }),
};

export default meta;
