import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Upload, UploadPreview } from '~/components';

type Story = StoryObj<typeof Upload>;
const meta: Meta<typeof Upload> = {
  title: 'Application/Upload',
  component: Upload,
  tags: ['file', 'file input', 'input', 'upload', 'media'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    limit: 3,
    disabled: false,
    highlightedLabel: 'Click to upload',
    label: 'or drag and drop',
    subLabel: 'Recommended: 800 x 800px',
  },
};

export const Upload_: Story = {
  render: args => ({
    components: { Upload, UploadPreview },
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
                <UploadPreview
                  v-for="(attachment, index) in attachments"
                  :key="index"
                  :file="attachment"
                  @delete="deleteFile(attachment)"
                />
              </div>
              <Upload v-model="attachments" v-bind="args" />`,
  }),
};

export default meta;
