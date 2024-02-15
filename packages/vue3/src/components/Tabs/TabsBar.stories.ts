import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { StaticStatus, Tab, TabsBar } from '~/components';
import type { StaticStatusDefinition } from '~/types';

type Story = StoryObj<typeof TabsBar>;
const meta: Meta<typeof TabsBar> = {
  title: 'Application/Tabs/TabsBar',
  component: TabsBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['tabs', 'tab', 'switch'],
  argTypes: {
    default: { control: false },
  },
};

export const TabsBar_: Story = {
  render: args => ({
    components: { TabsBar, Tab, StaticStatus },
    setup() {
      const activeTab = ref(0);

      function setActiveTab(id: number) {
        activeTab.value = id;
      }

      const tabs: { [k: string]: StaticStatusDefinition[] } = {
        Fruits: [
          {
            color: '#ffdecb',
            label: 'Peach 🍑',
            labelColor: '#35192b',
          },
          {
            color: '#fffad2',
            label: 'Banana 🍌',
            labelColor: '#555022',
          },
          {
            color: '#cbffd3',
            label: 'Kiwi 🥝',
            labelColor: '#2c4730',
          },
        ],
        Vegetables: [
          {
            color: '#ffceb9',
            label: 'Je3da 🥕',
            labelColor: '#35192b',
          },
          {
            color: '#fff6d2',
            label: 'Corn 🌽',
            labelColor: '#555022',
          },
          {
            color: '#c4ffc5',
            label: 'Broccoli 🥦',
            labelColor: '#2c4730',
          },
        ],
        Meat: [
          {
            color: '#ffd2d2',
            label: 'Chicken 🐔',
            labelColor: '#35192b',
          },
          {
            color: '#e9e9e9',
            label: 'Lamb 🐏',
            labelColor: '#555022',
          },
          {
            color: '#f7cfb0',
            label: 'Beef 🐮',
            labelColor: '#2c4730',
          },
        ],
      };

      return { args, tabs, activeTab, setActiveTab };
    },
    template: `
      <ul style="margin: 0;padding: 0">
        <TabsBar>
          <Tab
            v-for="(tab, index) in Object.keys(tabs)"
            :key="tab"
            :label="tab"
            :active="activeTab === index"
            @click="setActiveTab(index)"
          />
        </TabsBar>
      </ul>
      <div style="background-color: var(--base-white);">
        <div
          v-for="(content, index) in Object.values(tabs)"
          v-show="activeTab === index"
          :key="index"
          style="display: flex; flex-direction: column;gap: 10px; margin-top: 10px"
        >
          <StaticStatus style="max-width: 100%" v-for="fruit in content" :key="fruit.color" :status="fruit" />
        </div>
      </div>
      `,
  }),
};

export default meta;
