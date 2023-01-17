import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';
import type { TableComposableVariant } from '../types';

export default function (name: TableComposableVariant): Component | undefined {
  switch (name) {
    case 'thumbnail': return defineAsyncComponent(() => import('~/components/Thumbnail/Thumbnail.vue'));
    case 'link': return defineAsyncComponent(() => import('~/components/Table/Internal/Link.vue'));
    case 'status': return defineAsyncComponent(() => import('~/components/Status/EditableStatus.vue'));
    case 'percentage': return defineAsyncComponent(() => import('~/components/Percentage/Percentage.vue'));
    case 'button': return defineAsyncComponent(() => import('~/components/Table/Internal/Button.vue'));
    case 'rating': return defineAsyncComponent(() => import('~/components/Rating/RatingInput.vue'));
    case 'toggle': return defineAsyncComponent(() => import('~/components/Toggle/Toggle.vue'));
    case 'counter': return defineAsyncComponent(() => import('~/components/Increment/Increment.vue'));
    case 'icon': return defineAsyncComponent(() => import('~/components/Table/Internal/Icon.vue'));
    default: return undefined;
  }
}
