import type { Meta, StoryObj } from '@storybook/vue3';
import { Sidebar, SidebarItem, SidebarSubitem } from '~/components';

type Story = StoryObj<typeof Sidebar>;
const meta: Meta<typeof Sidebar> = {
  title: 'Application/Sidebar/Sidebar',
  component: Sidebar,
  tags: ['sidebar', 'bar', 'nav'],
  argTypes: {
    'items': { table: { disable: true } },
    'header': { table: { disable: true } },
    'lower-items': { table: { disable: true } },
    'collapsed': { table: { disable: true } },
  },
};

export const Sidebar_: Story = {
  render: args => ({
    components: { Sidebar, SidebarItem, SidebarSubitem },
    setup() {
      const items = [
        {
          label: 'Products',
          active: true,
          icon: 'i-youcan-tag',
          children: [
            { label: 'All Products' },
            { label: 'Categories' },
          ],
        },
        {
          label: 'Insights',
          active: false,
          icon: 'i-youcan-chart-line',
        },
      ];

      return { args, items };
    },
    template: `
      <Sidebar>
        <template #header>
          <p>Awesome App</p>
        </template>
        <template #items>
          <SidebarItem
            v-for="item in items"
            :key="item.label"
            :label="item.label"
            :active="item.active"
            :icon="item.icon"
          >
            <template v-if="item.children">
              <SidebarSubitem
                v-for="subItem in item.children" :key="subItem.label"
                :label="subItem.label"
              />
            </template>
          </SidebarItem>
        </template>
        <template #lower-items>
          <SidebarItem icon="i-youcan-gear" label="Settings" />
        </template>
      </Sidebar>
    `,
  }),
};

export default meta;
