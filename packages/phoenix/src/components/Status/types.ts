export interface StatusObject {
  label: string
  color: string
  labelColor?: string
  value?: string
}

export interface StatusProps {
  status: StatusObject | StatusObject[]
  editable?: boolean
}
