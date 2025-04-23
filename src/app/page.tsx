'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendarAlt } from 'react-icons/fa';

const StyledLink = ({ href, children }) => (
  <Link 
    href={href}
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-neutral font-bold"
  >
    {children}
  </Link>
);

const KathyImage = () => {
  return (
    <div className="relative w-32 h-32 overflow-hidden rounded-full bg-primary p-1">
      <Image
        src="/kathy.svg"
        alt="Katherine Biewer"
        fill
        className="object-cover rounded-full"
        priority
      />
    </div>
  );
};

const SocialButton = ({ href, Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn btn-sm btn-outline flex items-center gap-2"
    aria-label={label}
  >
    <Icon size={16} />
    <span>{label}</span>
  </a>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center gap-6 mb-12">
        <KathyImage />
        <div>
          <h1 className="text-4xl font-bold mb-1">
            Hi! &#x1F44B; I'm Kat
          </h1>
          <p className="text-lg text-neutral-content">
            AI Safety Engineer & Enthusiastic Learner
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-4 mb-10">
        <p className="text-lg leading-relaxed">
          I am an independent software engineer focused on AI safety. Currently, I'm working on building capability <StyledLink href="https://forum.effectivealtruism.org/topics/ai-evaluations-and-standards?sortedBy=new">evaluations</StyledLink> that can meaningfully assess catastrophic risks from AI agents, specifically <StyledLink href="https://www.lesswrong.com/w/recursive-self-improvement">recursive self-improvement</StyledLink> and <StyledLink href="https://www.rand.org/pubs/commentary/2024/10/how-ai-can-automate-ai-research-and-development.html">automated AI R&D</StyledLink>. 
        </p>
        <p className="text-lg leading-relaxed">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a self-proclaimed nerd and have an almost insatiable thirst for learning new things. If you have a fascinating project or curious idea to explore, I'd love to hear about it!
        </p>
        <p className="text-lg leading-relaxed">
          I have also taken the <StyledLink href="https://www.givingwhatwecan.org/pledge">10% pledge &#x1F536; </StyledLink>
          and would encourage you to do the same!
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mb-12">
        <a href="https://calendar.app.google/p5yyGZsJjy3VZpTJ6" target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center gap-2">
          <FaCalendarAlt size={16} />
          Book a chat with me
        </a>
      </div>

      {/* Social links at the bottom */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
        <div className="flex flex-wrap gap-3">
          <SocialButton 
            href="https://github.com/boonits" 
            Icon={FaGithub} 
            label="GitHub"
          />
          <SocialButton 
            href="https://linkedin.com/in/katherine-biewer" 
            Icon={FaLinkedin} 
            label="LinkedIn"
          />
          <SocialButton 
            href="mailto:katbiewer@gmail.com" 
            Icon={FaEnvelope} 
            label="Email"
          />
        </div>
      </div>
    </div>
  );
}