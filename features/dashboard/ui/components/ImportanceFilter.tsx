"use client";

export type ImportanceFilterState = {
  minPoints: number;     // 1~5. 이 점수 이상만 통과.
};

export const DEFAULT_IMPORTANCE_FILTER: ImportanceFilterState = {
  minPoints: 3,
};

const POINTS = [1, 2, 3, 4, 5] as const;

const POINT_LABEL: Record<number, string> = {
  1: "1+",
  2: "2+",
  3: "3+",
  4: "4+",
  5: "5",
};

const POINT_HINT: Record<number, string> = {
  1: "전부",
  2: "일반 공시 이상",
  3: "의미 있는 사건 이상 (기본)",
  4: "주요 인수합병 이상",
  5: "회사 존립급만",
};

interface Props {
  value: ImportanceFilterState;
  onChange: (value: ImportanceFilterState) => void;
}

export default function ImportanceFilter({ value, onChange }: Props) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-1.5">
      <span className="text-[11px] text-zinc-400 dark:text-zinc-500">중요도</span>
      {POINTS.map((p) => {
        const isActive = value.minPoints === p;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onChange({ ...value, minPoints: p })}
            title={POINT_HINT[p]}
            className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
              isActive
                ? "bg-purple-500/20 text-purple-700 dark:text-purple-300"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {POINT_LABEL[p]}
          </button>
        );
      })}
    </div>
  );
}
