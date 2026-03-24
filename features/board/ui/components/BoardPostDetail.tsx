"use client";

import Link from "next/link";
import { useBoardPost } from "@/features/board/application/hooks/useBoardPost";

interface BoardPostDetailProps {
  postId: number;
}

export default function BoardPostDetail({ postId }: BoardPostDetailProps) {
  const state = useBoardPost(postId);

  if (state.status === "LOADING") {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 dark:text-slate-500 text-sm">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  if (state.status === "ERROR") {
    return (
      <div className="flex items-center justify-center py-20 text-red-500 text-sm">
        {state.message}
      </div>
    );
  }

  const { post } = state;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-700">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{post.title}</h2>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
          <span>{post.nickname}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span>{formattedDate}</span>
        </div>
      </div>
      <div className="min-h-48 whitespace-pre-wrap px-6 py-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {post.content}
      </div>
      <div className="border-t border-slate-100 px-6 py-4 dark:border-slate-800">
        <Link
          href="/board"
          className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
        >
          ← 목록으로
        </Link>
      </div>
    </div>
  );
}
