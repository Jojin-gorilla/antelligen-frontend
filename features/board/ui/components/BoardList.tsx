"use client";

import { useBoardList } from "@/features/board/application/hooks/useBoardList";
import BoardListItem from "@/features/board/ui/components/BoardListItem";
import { boardListStyles as s } from "@/features/board/ui/components/boardListStyles";

const PAGE_SIZE = 10;

export default function BoardList() {
  const { boardState, page, goToPage } = useBoardList();

  if (boardState.status === "LOADING") {
    return (
      <div className={s.card}>
        <div className={s.loading}>데이터를 불러오는 중입니다...</div>
      </div>
    );
  }

  if (boardState.status === "ERROR") {
    return (
      <div className={s.card}>
        <div className={s.error}>{boardState.message}</div>
      </div>
    );
  }

  const { posts, totalCount } = boardState;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  if (posts.length === 0) {
    return (
      <div className={s.card}>
        <div className={s.empty}>
          <span className={s.emptyIcon}>📭</span>
          <span className={s.emptyText}>등록된 게시물이 없습니다.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={s.card}>
      {/* 데스크탑 테이블 */}
      <div className={s.table.wrap}>
        <div className={s.table.header}>
          <span>번호</span>
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-right">작성일</span>
        </div>
        {posts.map((post, i) => (
          <BoardListItem key={post.boardId} post={post} index={i} page={page} />
        ))}
      </div>

      {/* 모바일 카드 리스트 */}
      <div className={s.mobileList.wrap}>
        {posts.map((post, i) => (
          <BoardListItem key={post.boardId} post={post} index={i} page={page} />
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className={s.pagination.wrap}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`${s.pagination.btn} ${p === page ? s.pagination.active : s.pagination.inactive}`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
