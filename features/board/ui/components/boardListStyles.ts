export const boardListStyles = {
  page: "min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-8",

  container: "mx-auto max-w-5xl",

  header: {
    wrap: "mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700",
    title: "text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100",
    badge: "rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-100 dark:bg-blue-800",
  },

  card: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",

  // 데스크탑 테이블
  table: {
    wrap: "hidden w-full md:block",
    header: "grid grid-cols-[3rem_1fr_8rem_8rem] border-b border-slate-200 bg-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400",
    row: "grid grid-cols-[3rem_1fr_8rem_8rem] items-center border-b border-slate-100 px-4 py-3.5 transition-colors duration-150 last:border-b-0 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-slate-800 dark:hover:bg-slate-800",
    colNum: "text-sm font-mono text-slate-400 dark:text-slate-500",
    colTitle: "truncate pr-4 text-sm font-medium text-slate-800 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-400",
    colAuthor: "text-center text-sm text-slate-500 dark:text-slate-400",
    colDate: "text-right text-xs tabular-nums text-slate-400 dark:text-slate-500",
  },

  // 모바일 카드
  mobileList: {
    wrap: "block md:hidden divide-y divide-slate-100 dark:divide-slate-800",
    card: "flex flex-col gap-1.5 px-4 py-4 transition-colors hover:bg-blue-50 dark:hover:bg-slate-800",
    title: "text-sm font-semibold text-slate-800 dark:text-slate-100",
    meta: "flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500",
    metaDot: "h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600",
  },

  empty: "flex flex-col items-center justify-center gap-2 py-20 text-slate-400 dark:text-slate-500",
  emptyIcon: "text-4xl",
  emptyText: "text-sm",

  loading: "flex items-center justify-center gap-2 py-20 text-slate-400 dark:text-slate-500 text-sm",
  error: "flex items-center justify-center py-20 text-red-500 text-sm",

  pagination: {
    wrap: "flex items-center justify-center gap-1.5 px-4 py-5 border-t border-slate-100 dark:border-slate-800",
    btn: "flex h-8 w-8 items-center justify-center rounded text-sm font-medium transition-colors",
    active: "bg-blue-900 text-white dark:bg-blue-700",
    inactive: "border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
  },
};
