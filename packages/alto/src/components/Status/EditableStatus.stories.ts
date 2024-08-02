import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Status } from '~/components';
import type { StatusObject } from '~/types';

type Story = StoryObj<typeof Status>;
const meta: Meta<typeof Status> = {
  title: 'Application/Status/Editable',
  component: Status,
  parameters: {
    layout: 'centered',
  },
  tags: ['editable', 'editable status', 'status'],
  args: {},
};

export const Editable: Story = {
  render: args => ({
    components: { Status },
    setup() {
      const fruits: StatusObject[] = [
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
    template: '<Status v-model="favoriteFruit" :status="fruits" v-bind="args"/>',
  }),
};

export default meta;
