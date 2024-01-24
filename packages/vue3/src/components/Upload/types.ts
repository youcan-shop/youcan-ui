export interface FileInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
}

export interface MediaInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
  label?: string
  subLabel?: string
  highlightedLabel?: string
}

export interface UploadedProps {
  file: File | string
  progress?: number
  error?: string
}
