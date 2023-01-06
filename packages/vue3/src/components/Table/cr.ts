import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';

export default function (name: string): Component | '' {
  switch (name) {
    case 'thumbnail': return defineAsyncComponent(() => import('~/components/Thumbnail/Thumbnail.vue'));
    default: return '';
  }
}
