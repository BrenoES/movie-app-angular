export interface RequestData {
  query?: string;
  filter?: string | null;
  page: number;
}

export interface ResponseData<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
