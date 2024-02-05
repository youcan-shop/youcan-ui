import type { Meta, StoryObj } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';

type Story = StoryObj<typeof Dropdown>;
const meta: Meta<typeof Dropdown> = {
  title: 'Application/Dropdown',
  component: Dropdown,
  tags: ['dropdown'],
};

export const Default: Story = {
  render: args => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    data() {
      return {
        category: {},
        items: [
          { name: 'Shoes', id: 1 },
          { name: 'Cosmetics', id: 2 },
          { name: 'Gym', id: 3 },
        ],
      };
    },
    template: `
    <Dropdown v-bind="args"
              v-model="category"
              searchable
              optionLabel="name"
              optionValue="id"
              :items="items"
              placeholder="Select category">          
    </Dropdown>
    
    <div class="label-text">
        <h4>Selected Category : <em> {{ category?.label }} </em></h4>
    </div>
    <pre>Items Given : {{items}}</pre>
  `,
  }),
};

export default meta;
