import type { Meta, StoryObj } from '@storybook/vue3';
import { PrimaryButton, SecondaryButton, Topbar } from '~/components';

type Story = StoryObj<typeof Topbar>;
const meta: Meta<typeof Topbar> = {
  title: 'Application/Topbar',
  component: Topbar,
  tags: ['topbar', 'bar', 'header', 'nav'],
  argTypes: {
    start: { control: false },
    end: { control: false },
  },
  args: { },
};

export const Default: Story = {
  render: args => ({
    components: { Topbar, SecondaryButton, PrimaryButton },
    setup() {
      return { args };
    },
    template: `
              <Topbar>
              <template #start>
                <h3>All products</h3>
              </template>
              <template #end>
                <SecondaryButton>
                  <template #icon>
                    <i class="i-youcan-magnifying-glass" />
                  </template>
                  <span>Search</span>
                </SecondaryButton>
                <PrimaryButton>
                  <template #icon>
                    <i class="i-youcan-plus" />
                  </template>
                  <span>Create product</span>
                </PrimaryButton>
              </template>
            </Topbar>`,
  }),
};

export default meta;
