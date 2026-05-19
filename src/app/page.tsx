import Image from "next/image";
import Link from "next/link";
import { recentWritings } from "./writings/data";

export default function Home() {
  return (
    <article>
      {/* Hero */}
      <header className="mb-16 flex items-center gap-6">
        <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-full ring-2 ring-border">
          <Image
            src="/me.jpg"
            alt="Katherine Biewer"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="mb-3 text-balance">Katherine Biewer</h1>
          <p className="text-lg text-text-muted">
            Researcher at the intersection of hardware and AI
          </p>
        </div>
      </header>

      {/* About */}
      <section className="mb-16">
        <div className="space-y-5">
          <p className="leading-relaxed">
            I research how hardware will continue to impact AI progress. Currently, I am focused
            on measuring the ability of AI to accelerate hardware R&D. This project
            had been funded by Coefficient Giving.
          </p>
          <p>
            Previously, I&apos;ve worked as a software engineer and spatial analyst. My favourtie project was
            leading the development of evaluations investigating hardware design capabilities in LLMs.
          </p>
          <p className="leading-relaxed">
            I&apos;m an endlessly curious person and have an almost insatiable thirst for
            learning new things. If you have a fascinating project or an idea worth exploring,
            I&apos;d love to hear about it.
          </p>
        </div>
      </section>

      {/* Recent posts */}
      <section>
        <h2 className="mb-6">Recent posts</h2>
        <ul className="space-y-6">
          {recentWritings.map((post) => (
            <li key={post.url}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="font-heading text-xl font-normal leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-sm text-text-muted">
                  {post.venue} · {post.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <Link
          href="/writings"
          className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          All posts →
        </Link>
      </section>
    </article>
  );
}
