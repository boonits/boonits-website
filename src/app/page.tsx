import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <article>
      {/* Hero */}
      <header className="mb-16">
        <div className="relative w-28 h-28 mb-8 overflow-hidden rounded-full ring-2 ring-border">
          <Image
            src="/me.jpg"
            alt="Katherine Biewer"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="mb-3 text-balance">Katherine Biewer</h1>
        <p className="text-lg text-text-muted">
          Researcher at the intersection of hardware and AI
        </p>
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
            Previously, I&apos;ve worked as a spatial analyst and software engineer. My favourtie project was 
            leading the development of evaluations investigating hardware design capabilities in LLMs.
          </p>
          <p className="leading-relaxed">
            I&apos;m an endlessly curious person and have an almost insatiable thirst for 
            learning new things. If you have a fascinating project or an idea worth exploring,
            I&apos;d love to hear about it.
          </p>
          <p>
            This website will be updated with some of my writings and other content soon!
          </p>
        </div>
      </section>

      {/* Connect */}
      <footer className="pt-2">
        <h2 className="mb-6">Get in touch</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="https://calendar.app.google/p5yyGZsJjy3VZpTJ6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaCalendarAlt size={16} />
            Book a chat
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/boonits"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/katherine-biewer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:katbiewer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
            Email
          </a>
        </div>
      </footer>
    </article>
  );
}
