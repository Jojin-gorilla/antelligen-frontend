import type { BoardPost } from "@/features/board/domain/model/boardPost";

export type BoardState =
  | { status: "LOADING" }
  | { status: "ERROR"; message: string }
  | { status: "SUCCESS"; posts: BoardPost[]; totalCount: number; page: number };
