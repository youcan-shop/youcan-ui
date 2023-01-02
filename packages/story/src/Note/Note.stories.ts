import type { Meta } from '@storybook/vue3';
import { Note } from '@youcan/ui-vue3';

const meta: Meta<typeof Note> = {
  title: 'Application/Note 🔴',
  component: Note,
  tags: ['application', 'display', 'note'],
};

export default meta;

export const Default = {
  args: {
  },
};
