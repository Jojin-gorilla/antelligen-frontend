export const boardCreateStyles = {
  page: "min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-8",

  container: "mx-auto max-w-2xl",

  header: {
    wrap: "mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700",
    title: "text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100",
  },

  card: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 p-6 flex flex-col gap-6",

  field: {
    wrap: "flex flex-col gap-1.5",
    label: "text-sm font-semibold text-slate-700 dark:text-slate-300",
    input:
      "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400",
    textarea:
      "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400",
  },

  error: "rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400",

  actions: "flex items-center justify-end gap-3 pt-2",

  cancelButton:
    "rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950",

  submitButton:
    "rounded-lg bg-blue-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-offset-slate-950",
};
