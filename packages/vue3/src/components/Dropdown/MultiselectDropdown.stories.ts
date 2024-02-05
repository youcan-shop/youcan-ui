import type { Meta, StoryObj } from '@storybook/vue3';
import MultiselectDropdown from './MultiselectDropdown.vue';

type Story = StoryObj<typeof MultiselectDropdown>;
const meta: Meta<typeof MultiselectDropdown> = {
  title: 'Application/MultiselectDropdown',
  component: MultiselectDropdown,
  tags: ['MultiselectDropdown'],
};

export const Default: Story = {
  render: args => ({
    components: { MultiselectDropdown },
    setup() {
      return { args };
    },
    data() {
      return {
        Categories: [],
        items: {
          'First Group': [
            { name: 'Shoes', id: 1 },
            { name: 'Cosmetics', id: 2 },
            { name: 'Gym', id: 3 },
          ],
          'Second Group': [
            { name: 'Sandels', id: 4 },
            { name: 'Lipstick', id: 5 },
          ],
        },
      };
    },
    template: `
    <MultiselectDropdown  v-bind="args"
                          v-model="Categories"
                          searchable
                          label="Desired categories"
                          optionLabel="name"
                          optionValue="id"
                          :items="items"
                          placeholder="Select categories">          
    </MultiselectDropdown>
    
    <div class="action-bar">
      <h3>Selected Categories</h3>
      <ul v-if="Categories.length">
          <li v-for="category in Categories" :key="category.id">{{category.label}}</li>
      </ul>
      
      <p v-else>No category selected</p>
    </div>
    
    <h4>Items Given [ "Grouped" to test them even ('_-) ] </h4>
    <pre>{{ items }}</pre>
  `,
  }),
};

export default meta;
