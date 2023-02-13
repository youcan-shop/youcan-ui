import type { Meta } from '@storybook/vue3';
import DraggableItem from './DraggableItem.vue';
import type { DraggableItemType } from './types';

const meta: Meta<typeof DraggableItem> = {
  title: 'Application/DraggableItem',
  component: DraggableItem,
  tags: ['application', 'display', 'drag', 'draggable', 'selectable'],
};

export default meta;

export const Default: { args: { modelValue: DraggableItemType } } = {
  args: {
    modelValue: {
      label: 'Order ID',
      value: 'order_id',
      selected: false,
    },
  },
};
