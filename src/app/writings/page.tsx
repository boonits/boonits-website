import type { Metadata } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { recentWritings } from "./data";

export const metadata: Metadata = {
  title: "Writing — Katherine Biewer",
  description: "Essays and posts by Katherine Biewer.",
};

export default function Writings() {
  return (
    <article>
      <header className="mb-12">
        <h1>Writing</h1>
      </header>

      <ul className="space-y-10">
        {recentWritings.map((post) => (
          <li
            key={post.url}
            className="border-b border-border pb-10 last:border-b-0 last:pb-0"
          >
            <h2 className="mb-2">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {post.title}
              </a>
            </h2>
            <p className="mb-3 text-sm text-text-muted">
              {post.venue} · {post.date}
            </p>
            <p className="leading-relaxed">{post.summary}</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Read on {post.venue}
              <FaExternalLinkAlt size={12} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
