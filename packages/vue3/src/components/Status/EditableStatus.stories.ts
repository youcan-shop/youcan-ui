import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { EditableStatus } from '~/components';
import type { StatusDefinition } from '~/components/Status/types';

type Story = StoryObj<typeof EditableStatus>;
const meta: Meta<typeof EditableStatus> = {
  title: 'Application/Status/Editable',
  component: EditableStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['editable', 'editable status', 'status'],
  argTypes: {
    modelValue: { table: { disable: true } },
    statuses: { table: { disable: true } },
  },
};

export const Default: Story = {
  render: args => ({
    components: { EditableStatus },
    setup() {
      const fruits: StatusDefinition[] = [
        {
          color: '#ffdecb',
          label: 'Peach 🍑',
          labelColor: '#35192b',
          value: 'peach',
        },
        {
          color: '#fffad2',
          label: 'Banana 🍌',
          labelColor: '#555022',
          value: 'banana',
        },
        {
          color: '#cbffd3',
          label: 'Kiwi 🥝',
          labelColor: '#2c4730',
          value: 'kiwi',
        },
      ];
      const favoriteFruit = ref(fruits[0]);

      return { args, fruits, favoriteFruit };
    },
    template: '<EditableStatus v-model="favoriteFruit" :statuses="fruits" />',
  }),
};

export default meta;
