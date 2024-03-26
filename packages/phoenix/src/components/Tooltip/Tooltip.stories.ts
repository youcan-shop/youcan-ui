import type { Meta, StoryObj } from '@storybook/vue3';
import { SecondaryButton, Tooltip } from '~/components';

type Story = StoryObj<typeof Tooltip>;
const meta: Meta<typeof Tooltip> = {
  title: 'Application/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['tooltip', 'title', 'info'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    label: 'Add to favorites',
    position: 'top',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Tooltip, SecondaryButton },
    setup() {
      return { args };
    },
    template: `
              <Tooltip v-bind="args">
                <SecondaryButton>
                  Hover 
                </SecondaryButton>  
              </Tooltip> `,
  }),
};

export default meta;
