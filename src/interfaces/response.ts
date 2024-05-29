export interface Response<T> {
  Response: 'True' | 'False'
  Search?: T
  totalResults?: string
  Error?: string
}
