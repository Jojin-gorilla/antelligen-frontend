import BoardCreateForm from "@/features/board/ui/components/BoardCreateForm";
import { boardCreateStyles as s } from "@/features/board/ui/components/boardCreateStyles";

export default function BoardCreatePage() {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header.wrap}>
          <h1 className={s.header.title}>게시물 작성</h1>
        </div>
        <BoardCreateForm />
      </div>
    </div>
  );
}
