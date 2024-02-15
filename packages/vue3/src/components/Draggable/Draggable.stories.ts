import type { Meta } from '@storybook/vue3';
import { ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import { Draggable, DraggableItem } from '~/components';
import type { DraggableItemType } from '~/components/Draggable/types';

const meta: Meta<typeof Draggable> = {
  title: 'Application/Draggable',
  component: Draggable,
  tags: ['draggable'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
};

export default meta;

const DraggableTemplate = (args: Record<string, unknown>) => ({
  components: { Draggable, DraggableItem },
  setup() {
    const items = ref<DraggableItemType[]>([
      {
        label: 'Navbar',
        value: 1,
        checked: false,
      },
      {
        label: 'Hero',
        value: 2,
        checked: false,
      },
      {
        label: 'Featured Products',
        value: 3,
        checked: false,
      },
    ]);

    return { args, items };
  },
  template: `
    <Draggable v-model="items" v-bind="args">
      <DraggableItem
        v-for="(item, index) in items"
        :key="item.value"
        v-model="items[index]"
      />
    </Draggable>
  `,
});

export const Draggable_ = Utils.templatify(DraggableTemplate.bind({}));

Draggable_.args = {
  canCheck: false,
};

const DraggableItemTemplate = (args: Record<string, unknown>) => ({
  components: { DraggableItem },
  setup() {
    const item = ref<DraggableItemType>({
      label: 'Navbar',
      value: 1,
      checked: false,
    });

    return { args, item };
  },
  template: '<DraggableItem v-bind="args" v-model="item" />',
});

export const DraggableItem_ = Utils.templatify(DraggableItemTemplate.bind({}));

DraggableItem_.args = {
  canCheck: false,
};
