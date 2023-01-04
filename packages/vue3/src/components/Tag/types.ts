export type TagItemType = 'text' | 'color';

export interface TagItemValue {
  label: string
  hexColor?: string
}

export interface UniqueTagItem extends TagItemValue {
  id: string
}
