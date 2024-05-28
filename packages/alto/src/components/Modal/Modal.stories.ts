import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Button, Modal } from '~/components';

type Story = StoryObj<typeof Modal>;
const meta: Meta<typeof Modal> = {
  title: 'Application/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['modal'],
  argTypes: {
    visible: { table: { disable: true } },
    default: {
      control: false,
    },
  },
  args: {
    title: 'Edit profile',
    confirmLabel: 'Save',
    cancelLabel: 'Cancel',
    cancelOnly: false,
    confirmIcon: 'i-youcan-check-circle',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const showModal = ref(false);

      return { args, showModal };
    },
    template: `
      <Modal v-model:visible="showModal" v-bind="args" @on-confirm="showModal = false;">
        <p class="content">
          The quick brown fox jumps over the lazy dog.
        </p>
      </Modal>
      <Button @click="showModal = true;" variant="primary">
        <span>Open Modal</span>
      </Button>
      `,
  }),
};

export default meta;
