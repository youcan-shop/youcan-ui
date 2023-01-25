import type { Component } from 'vue';
import type { TableComposableVariant } from '../types';
import Link from './Link.vue';
import Button from './Button.vue';
import Thumbnail from '~/components/Thumbnail/Thumbnail.vue';
import EditableStatus from '~/components/Status/EditableStatus.vue';
import Percentage from '~/components/Percentage/Percentage.vue';
import Rating from '~/components/Rating/Rating.vue';
import Toggle from '~/components/Toggle/Toggle.vue';
import Increment from '~/components/Increment/Increment.vue';
import Icon from '~/components/Table/Internal/Icon.vue';
import StaticStatus from '~/components/Status/StaticStatus.vue';

export default function (name: TableComposableVariant): Component | undefined {
  switch (name) {
    case 'thumbnail': return Thumbnail;
    case 'link': return Link;
    case 'status': return EditableStatus;
    case 'static-status': return StaticStatus;
    case 'percentage': return Percentage;
    case 'button': return Button;
    case 'rating': return Rating;
    case 'toggle': return Toggle;
    case 'counter': return Increment;
    case 'icon': return Icon;
    default: return undefined;
  }
}
