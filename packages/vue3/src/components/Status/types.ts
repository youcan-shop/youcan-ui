export interface StaticStatusDefinition {
  label: string
  color: string
}

export interface StatusDefinition<T = any> extends StaticStatusDefinition {
  value: T
}
