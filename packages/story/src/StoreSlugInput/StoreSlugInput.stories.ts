import type { Meta } from '@storybook/vue3';
import { StoreSlugInput } from '@youcan/ui-vue3';
import { Utils } from '@youcan/ui-core';

/**
 * 1. This component should have default slots, it makes no sense to have
 * the integrator to pass those values into it explicitly.
 *
 * 2. WHy should the passed down slots require "<p>" tag to have proper space?
 */
const meta: Meta<typeof StoreSlugInput> = {
  title: 'Application/StoreSlugInput 🔴',
  component: StoreSlugInput,
  tags: ['application', 'input', 'store-slug-input'],
  decorators: [() => (
    {
      template: '<div style="width: 500px;"><story /></div>',
    }
  )],
};

export default meta;

const Template = (args: Record<string, unknown>) => ({
  components: { StoreSlugInput },
  setup() {
    return { args };
  },
  template: `<StoreSlugInput v-bind="args">
    <template #title><p>Store slug</p></template>
    <template #description><p>The slug you choose will be your store's domain name that your customers will see.</p></template>
    <template #example><i>🔍</i></template>
    <template #example-text><span class="input-border-example">example.youcan.shop</span></template>
    <template #icon><i>❔</i></template>
    <template #note-desc><span>You can always replace it with a custom domain name you purchased.</span></template>
  </StoreSlugInput>`,
});

export const HasValue = Utils.templatify(Template.bind({}));

HasValue.args = {
  modelValue: 'ali@youcan.shop',
  placeholder: 'Please fill this field',
  title: 'sssss',
};

export const Placeholder = Utils.templatify(Template.bind({}));

Placeholder.args = {
  modelValue: '',
  placeholder: 'Please fill this field',
};

export const CustomSuffix = Utils.templatify(Template.bind({}));

CustomSuffix.args = {
  modelValue: '',
  placeholder: 'Please fill this field',
  slugSuffix: '.dotshop.com',
};
