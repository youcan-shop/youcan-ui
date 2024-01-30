import type { Meta, StoryObj } from '@storybook/vue3';
import ActionBar from './ActionBar.vue';
import { PrimaryButton, TertiaryButton } from '~/components';

type Story = StoryObj<typeof ActionBar>;
const meta: Meta<typeof ActionBar> = {
  title: 'Application/ActionBar',
  component: ActionBar,
  tags: ['action bar', 'actions row', 'bar'],
};

export const Default: Story = {
  render: args => ({
    components: { ActionBar, PrimaryButton, TertiaryButton },
    setup() {
      return { args };
    },
    template: `
    <ActionBar>
      <TertiaryButton>
        Cancel
      </TertiaryButton>
      <PrimaryButton>
        Save
      </PrimaryButton>
    </ActionBar>
  `,
  }),
};

export default meta;
