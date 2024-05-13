import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FileInput, UploadedFile } from '~/components';

type Story = StoryObj<typeof FileInput>;
const meta: Meta<typeof FileInput> = {
  title: 'Application/Upload/FileInput',
  component: FileInput,
  tags: ['file', 'file input', 'input', 'upload'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    limit: 3,
    disabled: false,
    label: 'Browse your computer',
  },
};

export const FileInput_: Story = {
  render: args => ({
    components: { FileInput, UploadedFile },
    setup() {
      const attachments = ref<File[]>([]);
      const deleteFile = (file: File) => {
        const idx = attachments.value.indexOf(file);
        if (idx > -1) {
          attachments.value.splice(idx, 1);
        }
      };

      return { args, attachments, deleteFile };
    },
    template: `
              <div style="display: flex;flex-direction:column;gap:10px;margin-bottom:10px">
                <UploadedFile
                  v-for="(attachment, index) in attachments"
                  :key="index"
                  :file="attachment"
                  @delete="deleteFile(attachment)"
                />
              </div>
              <FileInput v-model="attachments" v-bind="args" />`,
  }),
};

export default meta;
