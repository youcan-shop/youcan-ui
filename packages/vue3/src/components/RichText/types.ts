export type ToolbarOption =
  | ['bold']
  | ['italic']
  | ['underline']
  | ['strike']
  | [{ color: string[] }]
  | [{ background: string[] }]
  | [{ header: (false | 1 | 2 | 3 | 4)[] }]
  | [{ align: string[] }]
  | [{ list: 'ordered' | 'bullet' }]
  | ['undo']
  | ['redo']
  | [{ indent: '-1' | '+1' }]
  | [{ direction: 'rtl' | 'ltr' }]
  | ['code-block']
  | ['link']
  | ['image']
  | ['video'];

export interface RichTextProps {
  modelValue: string
  disabled?: boolean
  error?: boolean
  placeholder?: string
  toolbar?: ToolbarOption[]
}
