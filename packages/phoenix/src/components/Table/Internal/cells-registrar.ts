import type { Component } from 'vue';
import type { TableComposableVariant } from '../types';
import Link from './Link.vue';
import Button from './Button.vue';
import Thumbnail from '~/components/Thumbnail/Thumbnail.vue';
import Status from '~/components/Status/Status.vue';
import Rating from '~/components/Rating/Rating.vue';
import Toggle from '~/components/Toggle/Toggle.vue';
import Increment from '~/components/Increment/Increment.vue';
import Input from '~/components/Input/Input.vue';

export default function (name: TableComposableVariant): Component | undefined {
  switch (name) {
    case 'thumbnail': return Thumbnail;
    case 'link': return Link;
    case 'status': return Status;
    case 'button': return Button;
    case 'rating': return Rating;
    case 'toggle': return Toggle;
    case 'counter': return Increment;
    case 'input': return Input;
    default: return undefined;
  }
}
