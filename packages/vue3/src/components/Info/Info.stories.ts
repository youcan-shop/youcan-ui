import type { Meta } from '@storybook/vue3';
import Info from './Info.vue';

const meta: Meta<typeof Info> = {
  title: 'Application/Info',
  component: Info,
  tags: ['info', 'alert'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['success', 'warning', 'info'],
    },

    closeAfterDuration: {
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes),
  components: { Info },
  template: `
    <Info v-bind="$props" :closeAfterDuration="2000" :type="type"
    >
      <template #title>
        Title of Toast
      </template>
      <template #description>
        Description a Toast description for testing purposes
      </template>
    </Info>
  `,
});

export const Default = Template.bind({});

export default meta;
