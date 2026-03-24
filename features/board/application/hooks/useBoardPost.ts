"use client";

import { useEffect, useState } from "react";
import { fetchBoardPost } from "@/features/board/infrastructure/api/boardApi";
import type { BoardPostDetail } from "@/features/board/domain/model/boardPostDetail";

type PostState =
  | { status: "LOADING" }
  | { status: "ERROR"; message: string }
  | { status: "SUCCESS"; post: BoardPostDetail };

export function useBoardPost(postId: number) {
  const [state, setState] = useState<PostState>({ status: "LOADING" });

  useEffect(() => {
    setState({ status: "LOADING" });

    fetchBoardPost(postId)
      .then((post) => setState({ status: "SUCCESS", post }))
      .catch(() => setState({ status: "ERROR", message: "게시물을 불러오는데 실패했습니다." }));
  }, [postId]);

  return state;
}
