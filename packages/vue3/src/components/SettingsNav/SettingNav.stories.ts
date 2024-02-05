import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { SettingsNav, SettingsNavItem } from '~/components';

type Story = StoryObj<typeof SettingsNav>;
const meta: Meta<typeof SettingsNav> = {
  title: 'Application/Setting/SettingsNav',
  component: SettingsNav,
  tags: ['settings', 'settings nav', 'nav'],
  argTypes: {
    items: { table: { disable: true } },
    header: { table: { disable: true } },
  },
};

export const Default: Story = {
  render: args => ({
    components: { SettingsNav, SettingsNavItem },
    setup() {
      const SETTINGS = [
        { label: 'General', icon: 'i-youcan-gear' },
        { label: 'Account', icon: 'i-youcan-user' },
        { label: 'Privacy', icon: 'i-youcan-lock' },
        { label: 'Appearance', icon: 'i-youcan-palette' },
        { label: 'Subscriptions', icon: 'i-youcan-receipt' },
      ];
      const activeTab = ref(SETTINGS[0].label);

      const handleClick = (tab: string) => {
        activeTab.value = tab;
      };

      return { args, SETTINGS, activeTab, handleClick };
    },
    template: `
      <SettingsNav>
        <template #header>
          <p>Settings</p>
        </template>
        <template #items>
          <SettingsNavItem
            v-for="item in SETTINGS"
            :key="item.label"
            :label="item.label"
            :icon="item.icon"
            :active="activeTab === item.label"
            @click="() => handleClick(item.label)"
          />
        </template>
      </SettingsNav>
    `,
  }),
};

export default meta;
