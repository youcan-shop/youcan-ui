import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Accordion, AccordionItem } from '~/components';

type Story = StoryObj<typeof Accordion>;
const meta: Meta<typeof Accordion> = {
  title: 'Application/Accordion',
  component: Accordion,
  tags: ['accordion', 'toggle', 'collapse'],
  argTypes: {
    default: { table: { disable: true } },
  },
};

export const Default: Story = {
  render: () => ({
    components: { Accordion, AccordionItem },
    setup() {
      const current = ref(-1);

      function toggle(index: number) {
        if (index === current.value) {
          current.value = -1;

          return;
        }

        current.value = index;
      }

      return { current, toggle };
    },
    template: `<Accordion>
                <AccordionItem
                  v-for="index in 5"
                  :key="index"
                  :show="index === current"
                  :title="'Accordion row ('+ index + ')'"
                  :disabled="index === 3"
                  @toggle="toggle(index)"
                >
                  Placeholder for accordion text.
                </AccordionItem>
              </Accordion>`,
  }),
};

export default meta;
