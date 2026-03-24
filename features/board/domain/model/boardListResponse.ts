export interface BoardListResponseItem {
  post_id: number;
  title: string;
  nickname?: string;
  created_at: string;
}

export interface BoardListResponse {
  posts: BoardListResponseItem[];
  total: number;
  page: number;
  size: number;
}
