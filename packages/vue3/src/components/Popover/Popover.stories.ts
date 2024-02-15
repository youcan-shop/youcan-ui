import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Popover, PrimaryButton, TertiaryButton } from '~/components';

type Story = StoryObj<typeof Popover>;
const meta: Meta<typeof Popover> = {
  title: 'Application/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['popover'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    objectFit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none'],
      if: { arg: 'imgSrc', neq: '' },
    },
    show: { table: { disable: true } },
    default: { control: false },
    title: { control: false },
    description: { control: false },
    footer: { control: false },
  },
  args: {
    position: 'top',
    imgSrc: '',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Popover, PrimaryButton, TertiaryButton },
    setup() {
      const show = ref(false);

      return { args, show };
    },
    template: `
        <Popover
          v-model:show="show"
          v-bind="args"
          @click-outside="show = false"
        >
        <template #title>
          Introducing Themes!
        </template>
        <template #description>
          <p style="margin: 0">
            Introducing themes, a new way to make your store stand out
          </p>
        </template>
        <template #footer>
          <div style="display: flex; gap: 20px">
            <TertiaryButton @click="show = false">
              Later
            </TertiaryButton>
            <PrimaryButton @click="show = false">
              Get started
            </PrimaryButton>
          </div>
        </template>
        <PrimaryButton @click="show = !show;">
          <span>Show Popover</span>
        </PrimaryButton>
      </Popover>
    `,
  }),
};

export default meta;
