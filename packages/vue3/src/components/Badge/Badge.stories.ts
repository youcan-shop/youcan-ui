import type { Meta } from '@storybook/vue3';
import { Utils } from '@youcan/ui-core';
import Badge_ from './Badge.vue';

const meta: Meta<typeof Badge_> = {
  title: 'Application/Badge',
  component: Badge_,
  tags: ['application', 'display', 'badge', 'note'],
  argTypes: {
    size: {
      options: [20, 24],
      control: {
        type: 'select',
      },
    },
    state: {
      options: ['neutral', 'danger', 'info', 'warning', 'success'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

const BadgeTemplate = (args: Record<string, unknown>) => ({
  components: { Badge_ },
  setup() {
    return { args };
  },
  template: '<Badge_ v-bind="args">45</Badge_>',
});

export const Badge = Utils.templatify(BadgeTemplate.bind({}));

Badge.args = {
  size: 20,
  state: 'neutral',
};
