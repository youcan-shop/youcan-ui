export interface ToolbarButtonsType {
  text: string[]
  paragraph: string[]
  misc: string[]
  rich: string[]
}
export interface RichTextProps {
  modelValue: string
  lang?: string
  error?: boolean
  license: string
  toolbar?: ToolbarButtonsType
  quickInsert?: boolean
}
