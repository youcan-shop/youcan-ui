import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { MultiSwitch } from '~/components';
import type { SwitchButtonOption } from '~/types';

type Story = StoryObj<typeof MultiSwitch>;
const meta: Meta<typeof MultiSwitch> = {
  title: 'Application/MultiSwitch',
  component: MultiSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['multi switch', 'switch', 'multi'],
  argTypes: {
    selectedOption: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
};

export const Default: Story = {
  render: args => ({
    components: { MultiSwitch },
    setup() {
      const OPTIONS: SwitchButtonOption[] = [
        {
          label: 'Mobile',
          value: 1,
          icon: 'i-youcan-device-mobile',
        },
        {
          label: 'Desktop',
          value: 2,
          icon: 'i-youcan-desktop',
        },
        {
          label: 'Tablet',
          value: 3,
          icon: 'i-youcan-credit-card',
        },
      ];
      const activeOption = ref<SwitchButtonOption>(OPTIONS[0]);

      return { args, OPTIONS, activeOption };
    },
    template: `
        <MultiSwitch v-model:selected-option="activeOption" :options="OPTIONS" />
        <p>{{ activeOption.value }} : {{ activeOption.label }}</p>
      `,
  }),
};

export default meta;
