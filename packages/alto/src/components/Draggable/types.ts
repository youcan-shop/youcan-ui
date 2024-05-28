export interface DraggableItemType {
  label: string
  value: unknown
  checked?: boolean
}

export interface DraggableProps {
  modelValue: DraggableItemType[]
  canCheck?: boolean
}

export interface DraggableItemProps {
  modelValue: DraggableItemType
  canCheck?: boolean
}
