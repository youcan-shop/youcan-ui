import type { Meta, StoryObj } from '@storybook/vue3';
import { SettingsNav, SettingsNavItem } from '~/components';

type Story = StoryObj<typeof SettingsNavItem>;
const meta: Meta<typeof SettingsNavItem> = {
  title: 'Application/Setting/SettingsNavItem',
  component: SettingsNavItem,
  tags: ['settings', 'settings nav', 'nav', 'item'],
  args: {
    label: 'General',
    icon: 'i-youcan-gear',
    active: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { SettingsNavItem, SettingsNav },
    setup() {
      return { args };
    },
    template: `
      <SettingsNav>
        <template #items>
          <SettingsNavItem v-bind="args"/>
        </template>
      </SettingsNav>
    `,
  }),
};

export default meta;
