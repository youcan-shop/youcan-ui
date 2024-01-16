export interface StaticStatusDefinition {
  label: string
  color: string
  labelColor?: string
}

export interface StatusDefinition<T = any> extends StaticStatusDefinition {
  value: T
}

export interface EditableStatusProps {
  statuses: StatusDefinition[]
  modelValue: StatusDefinition
}

export interface StaticStatusProps {
  status: StaticStatusDefinition
}
