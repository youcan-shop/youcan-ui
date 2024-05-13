export interface FileInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
  label?: string
}

export interface MediaInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
  label?: string
  subLabel?: string
  highlightedLabel?: string
}

export interface UploadedMediaProps {
  file: File | string
  progress?: number
  errorText?: string
}

export interface UploadedFileProps {
  file: File
  progress?: number
  error?: string
}
