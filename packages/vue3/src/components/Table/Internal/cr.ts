import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';
import type { TableComposableVariant } from '../types';

export default function (name: TableComposableVariant): Component | string {
  switch (name) {
    case 'thumbnail': return defineAsyncComponent(() => import('~/components/Thumbnail/Thumbnail.vue'));
    case 'link': return defineAsyncComponent(() => import('~/components/Table/Internal/Link.vue'));
    default: return '';
  }
}
