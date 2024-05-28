import type { AcceptType } from '../types';

export interface BaseFileInputProps {
  modelValue: File[] | undefined
  limit?: number
  disabled: boolean
  accept?: AcceptType | string
}
