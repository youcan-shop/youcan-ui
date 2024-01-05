export interface QueryResultRatingSuffix {
  type: 'rating'
  score: number
  ceil: number
}

export type QueryResultSuffix = QueryResultRatingSuffix | null;

export interface QueryResult<T = any> {
  value: T
  label: string
  thumbnail?: string
  description?: string
  suffix?: QueryResultSuffix
}

export interface SearchInputProps {
  queryHandler: (query: string) => Promise<QueryResult[]>
  thumbnails?: boolean
}

export interface SearchResultProps {
  result: QueryResult
  thumbnail?: boolean
}
