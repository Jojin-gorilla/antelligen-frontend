export interface BoardListResponseItem {
  board_id: number;
  title: string;
  content: string;
  nickname: string;
  created_at: string;
  updated_at: string;
}

export interface BoardListResponse {
  boards: BoardListResponseItem[];
  page: number;
  total_pages: number;
  total_count: number;
}
