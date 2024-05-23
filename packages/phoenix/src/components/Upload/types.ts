export type AcceptType = 'audio/*' | 'video/*' | 'image/*' | 'file/*';
export interface UploadProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
  label?: string
  subLabel?: string
  highlightedLabel?: string
  error?: boolean
  accept?: AcceptType | string
}

export interface PreviewProps {
  file: File | string
  progress?: number
  error?: boolean
  errorText?: string
}
