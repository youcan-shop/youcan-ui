import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { MediaInput } from '~/components';
import  UploadedMedia from './UploadedMedia.vue';

type Story = StoryObj<typeof MediaInput>;
const meta: Meta<typeof MediaInput> = {
  title: 'Application/Upload/MediaInput',
  component: MediaInput,
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

export const MediaInput_: Story = {
  render: args => ({
    components: { MediaInput, UploadedMedia },
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
                <UploadedMedia
                  v-for="(attachment, index) in attachments"
                  :key="index"
                  :file="attachment"
                  @delete="deleteFile(attachment)"
                />
              </div>
              <MediaInput v-model="attachments" v-bind="args" />`,
  }),
};

export default meta;
