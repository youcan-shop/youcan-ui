// @unocss-include

import type { Meta } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import SidebarItem from './SidebarItem.vue';
import SidebarSubitem from './SidebarSubitem.vue';

const meta: Meta<typeof Sidebar> = {
  title: 'Application/Sidebar',
  component: Sidebar,
};

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes),
  components: { Sidebar, SidebarItem, SidebarSubitem },
  template: `
      <Sidebar>
      <template #header>
        Store
      </template>
      <template #items>
        <SidebarItem icon="i-youcan-house-simple" label="Home" />
        <SidebarItem icon="i-youcan-cube" label="Orders">
          <SidebarSubitem label="All Orders" />
          <SidebarSubitem label="Create Orders" />
        </SidebarItem>
        <SidebarItem icon="i-youcan-tag" label="Products">
          <SidebarSubitem label="All Products" />
          <SidebarSubitem label="Create Products" />
        </SidebarItem>
        <SidebarItem icon="i-youcan-squares-four" label="Apps" />
      </template>
      <template #lower-items>
        <SidebarItem icon="i-youcan-headset" label="Support" />
        <SidebarItem icon="i-youcan-gear" label="Settings" />
      </template>
    </Sidebar>
  `,
});

export const Default = Template.bind({});

export default meta;
