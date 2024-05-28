import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge, Button, Divider, DropdownMenu, DropdownMenuItem } from '~/components';

type Story = StoryObj<typeof DropdownMenu>;
const meta: Meta<typeof DropdownMenu> = {
  title: 'Application/Dropdowns/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['dropdown', 'menu', 'dropdown menu'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    default: {
      control: false,
    },
    MenuItems: {
      control: false,
    },
  },
  args: {
    position: 'bottom',
  },
};

export const Default: Story = {
  render: args => ({
    components: { DropdownMenu, DropdownMenuItem, Divider, Button, Badge },
    setup() {
      return { args };
    },
    template: `
      <DropdownMenu v-bind="args">
      <Button variant="primary">
       Show menu
      </Button>
      <template #MenuItems>
        <DropdownMenuItem label="Account" />
        <Divider thickness="light" />
        <DropdownMenuItem label="With accessory">
          <template #accessory>
            <i class="i-youcan:rocket-launch" />
          </template>
        </DropdownMenuItem>
        <DropdownMenuItem label="With Badge">
          <template #icon>
            <Badge state="success" :size="20">
              Badge
            </Badge>
          </template>
        </DropdownMenuItem>
        <DropdownMenuItem label="Notification" />
        <DropdownMenuItem class="custom-class" label="Logout">
          <template #icon>
            <i class="i-youcan:sign-out" />
          </template>
        </DropdownMenuItem>
      </template>
    </DropdownMenu>
    `,
  }),
};

export default meta;
