export interface FileInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
}

export interface MediaInputProps {
  modelValue: File[]
  limit?: number
  disabled?: boolean
  label: string
  subLabel?: string
  highlightedLabel: string
}

export interface UploadedFileProps {
  file: File
  progress?: number
  error?: string
}

export interface UploadedMediaProps {
  file: File
  progress?: number
  error?: string
}
