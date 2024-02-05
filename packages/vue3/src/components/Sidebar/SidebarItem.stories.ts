import type { Meta, StoryObj } from '@storybook/vue3';
import { Sidebar, SidebarItem } from '~/components';

type Story = StoryObj<typeof SidebarItem>;
const meta: Meta<typeof SidebarItem> = {
  title: 'Application/Sidebar/SidebarItem',
  component: SidebarItem,
  tags: ['sidebar', 'bar', 'nav', 'item'],
  argTypes: {
    count: { table: { disable: true } },
    default: { table: { disable: true } },
  },
  args: {
    label: 'Products',
    active: false,
    icon: 'i-youcan-tag',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Sidebar, SidebarItem },
    setup() {
      return { args };
    },
    template: `
      <Sidebar>
        <template #items>
          <SidebarItem v-bind="args" />
        </template>
      </Sidebar>
    `,
  }),
};

export default meta;
