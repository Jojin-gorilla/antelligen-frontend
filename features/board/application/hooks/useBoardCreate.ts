"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { isAuthenticatedAtom } from "@/features/auth/application/selectors/authSelectors";
import { createBoardPost } from "@/features/board/infrastructure/api/boardApi";

export function useBoardCreate() {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  async function submit() {
    if (!title.trim() || !content.trim()) {
      setError("제목과 본문을 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createBoardPost(title.trim(), content.trim());
      router.push("/board");
    } catch {
      setError("게시물 작성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { title, setTitle, content, setContent, isSubmitting, error, submit };
}
