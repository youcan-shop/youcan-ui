export type Props = Readonly<{
  max: number
  min: number
  limit?: number
  step: number
  tooltipVisible?: boolean
  formatTooltip?: (value: string) => string
  modelValue: number
  disabled: boolean
}>;

export default {
  max: {
    type: Number,
    default: 100,
  },
  min: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
    validator(value: number) {
      if (value !== 0) {
        return true;
      }

      console.error('[YouCanUI/RangeSlider] Error: Step cannot be equal to 0');

      return false;
    },
  },
  limit: {
    type: Number,
    default: undefined,
    validator(value: number | undefined) {
      return value === undefined || typeof value === 'number';
    },
  },
  tooltipVisible: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Number,
    default: 0,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  formatToolTip: {
    type: Function,
    validator(value: any) {
      if (typeof value !== 'function') {
        console.error('[YouCanUI/RangeSlider] Error: prop formatTooltip must be a function');

        return false;
      }

      if (typeof value(0) !== 'string') {
        console.error('[Vue3Slider] Error: prop formatTooltip must return a string');

        return false;
      }

      return true;
    },
  },
};
