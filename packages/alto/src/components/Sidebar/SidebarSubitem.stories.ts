import type { Meta, StoryObj } from '@storybook/vue3';
import { Sidebar, SidebarItem, SidebarSubitem } from '~/components';

type Story = StoryObj<typeof SidebarSubitem>;
const meta: Meta<typeof SidebarSubitem> = {
  title: 'Application/Sidebar/SidebarSubitem',
  component: SidebarSubitem,
  tags: ['sidebar', 'bar', 'nav', 'item', 'subitem'],
  argTypes: {},
  args: {
    label: 'Categories',
    active: false,
  },
};

export const SidebarSubitem_: Story = {
  render: args => ({
    components: { Sidebar, SidebarItem, SidebarSubitem },
    setup() {
      const item = { label: 'Products', active: true, icon: 'i-youcan-tag' };

      return { args, item };
    },
    template: `
      <Sidebar>
        <template #items>
          <SidebarItem v-bind="item">
            <SidebarSubitem v-bind="args" />
          </SidebarItem>
        </template>
      </Sidebar>
    `,
  }),
};

export default meta;
