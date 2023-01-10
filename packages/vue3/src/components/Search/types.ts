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
