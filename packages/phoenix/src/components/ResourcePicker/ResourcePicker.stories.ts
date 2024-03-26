import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { PrimaryButton, ResourcePicker } from '~/components';
import type { Resource } from '~/components/ResourcePicker/types';

type Story = StoryObj<typeof ResourcePicker>;
const meta: Meta<typeof ResourcePicker> = {
  title: 'Application/ResourcePicker',
  component: ResourcePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['resource picker', 'resource', 'picker'],
  argTypes: {
    visible: { table: { disable: true } },
    resources: { table: { disable: true } },
  },
  args: {
    title: 'Choose resource',
    selectionLabel: 'resources selected',
    stockLabel: 'in stock',
    confirmLabel: 'Add',
    cancelLabel: 'Cancel',
    isLoading: false,
    emptyStateLabel: 'No resources available',
    searchPlaceholder: 'Search',
  },
};

export const Default: Story = {
  render: args => ({
    components: { ResourcePicker, PrimaryButton },
    setup() {
      const MOCK_RESOURCES: Resource[] = [
        {
          id: 1,
          thumbnailUrl: '',
          name: 'Apple MacBook Pro',
          price: '$2,499.00',
          stock: 7,
          isChecked: false,
          variants: [
            {
              id: 33,
              thumbnailUrl: '',
              name: 'Apple MacBook Pro 16 M3 Max',
              price: '$3,499.00',
              stock: 3,
              isChecked: false,
            },
            {
              id: 21,
              thumbnailUrl: '',
              name: 'Apple MacBook Pro 14 M3 Pro',
              price: '$2,499.00',
              stock: 4,
              isChecked: false,
            },
          ],
        },
        {
          id: 2,
          thumbnailUrl: '',
          name: 'Apple iMac',
          price: '$1,499.00',
          stock: 2,
          isChecked: false,
        },
      ];

      const showPicker = ref(false);
      const selectedResources = ref<Resource[]>([]);
      const resources = ref<Resource[]>(MOCK_RESOURCES);

      const onConfirm = (resources: Resource[]) => {
        selectedResources.value = resources;
        showPicker.value = false;
      };

      return { args, MOCK_RESOURCES, showPicker, selectedResources, resources, onConfirm };
    },
    template: `
    <ResourcePicker
      v-model:visible="showPicker"
      :resources="resources"
      v-bind="args"
      @confirm="onConfirm"
    />
    <PrimaryButton @click="showPicker = true;">
      <span>Open Picker</span>
    </PrimaryButton>
    <div v-if="selectedResources.length > 0" class="selection">
      <pre>{{ selectedResources }}</pre>
    </div>
    `,
  }),
};

export default meta;
