import { httpClient } from "@/infrastructure/http/httpClient";
import type { BoardListResponse } from "@/features/board/domain/model/boardListResponse";
import type { BoardDetailResponse } from "@/features/board/domain/model/boardDetailResponse";
import type { BoardPost } from "@/features/board/domain/model/boardPost";
import type { BoardPostDetail } from "@/features/board/domain/model/boardPostDetail";

export async function fetchBoardList(page: number, size: number): Promise<{ posts: BoardPost[]; totalCount: number; page: number }> {
  const response = await httpClient<BoardListResponse>(
    `/api/v1/post/list?page=${page}&size=${size}`
  );

  const posts: BoardPost[] = response.posts.map((item) => ({
    boardId: item.post_id,
    title: item.title,
    nickname: item.nickname ?? "-",
    createdAt: item.created_at,
  }));

  return { posts, totalCount: response.total, page: response.page };
}

export async function fetchBoardPost(postId: number): Promise<BoardPostDetail> {
  const response = await httpClient<BoardDetailResponse>(`/api/v1/post/${postId}`);

  return {
    postId: response.post_id,
    title: response.title,
    content: response.content,
    nickname: response.nickname ?? "-",
    createdAt: response.created_at,
  };
}
