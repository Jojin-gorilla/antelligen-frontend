import { Suspense } from "react";
import BoardList from "@/features/board/ui/components/BoardList";
import { boardListStyles as s } from "@/features/board/ui/components/boardListStyles";

export default function BoardPage() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header.wrap}>
          <h1 className={s.header.title}>게시판</h1>
          <span className={s.header.badge}>Stock Supporters</span>
        </div>
        <Suspense
          fallback={
            <div className={s.card}>
              <div className={s.loading}>데이터를 불러오는 중입니다...</div>
            </div>
          }
        >
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
}
