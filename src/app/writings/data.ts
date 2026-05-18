export type Writing = {
  title: string;
  url: string;
  venue: string;
  date: string;
  summary: string;
};

export const recentWritings: Writing[] = [
  {
    title: "The case for fine-grained tracking of compute for AI",
    url: "https://www.lesswrong.com/posts/LFkzAxGCzEz2r4CtE/the-case-for-fine-grained-tracking-of-compute-for-ai",
    venue: "LessWrong",
    date: "May 2026",
    summary:
      "Current approaches to tracking AI compute (which rely on a handful of hardware proxies such as FLOPs and bandwidth) are becoming less useful as hardware diversifies across multiple architecture types.",
  },
];
