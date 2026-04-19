import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import {
  Sparkles,
  FileText,
  Hash,
  Image as ImageIcon,
  Zap,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    id: "seo-title",
    title: "SEO Title Generator",
    desc: "High-CTR titles that rank and click",
    icon: Sparkles,
    color: "text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-500/10",
    border: "border-violet-500/20",
    shimmer: "via-violet-400",
    tag: "Titles",
  },
  {
    id: "seo-description",
    title: "SEO Description",
    desc: "Optimized descriptions with timestamps",
    icon: FileText,
    color: "text-sky-400",
    bg: "bg-sky-500/10 dark:bg-sky-500/10",
    border: "border-sky-500/20",
    shimmer: "via-sky-400",
    tag: "Copy",
  },
  {
    id: "tags",
    title: "Tags Generator",
    desc: "50+ strategic YouTube tags",
    icon: Hash,
    color: "text-red-400",
    bg: "bg-red-500/10 dark:bg-red-500/10",
    border: "border-red-500/20",
    shimmer: "via-red-400",
    tag: "Tags",
  },
  {
    id: "hashtag",
    title: "Hashtag Generator",
    desc: "Trending & viral hashtags",
    icon: Hash,
    color: "text-purple-400",
    bg: "bg-purple-500/10 dark:bg-purple-500/10",
    border: "border-purple-500/20",
    shimmer: "via-purple-400",
    tag: "Social",
  },
  {
    id: "thumbnail",
    title: "Thumbnail Prompt",
    desc: "Detailed AI thumbnail prompts",
    icon: ImageIcon,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/10",
    border: "border-emerald-500/20",
    shimmer: "via-emerald-400",
    tag: "Visual",
  },
  {
    id: "script",
    title: "Video Script",
    desc: "Full engaging video scripts",
    icon: FileText,
    color: "text-orange-400",
    bg: "bg-orange-500/10 dark:bg-orange-500/10",
    border: "border-orange-500/20",
    shimmer: "via-orange-400",
    tag: "Script",
  },
  {
    id: "viral-hook",
    title: "Viral Hook Generator",
    desc: "Hooks that stop the scroll",
    icon: Zap,
    color: "text-pink-400",
    bg: "bg-pink-500/10 dark:bg-pink-500/10",
    border: "border-pink-500/20",
    shimmer: "via-pink-400",
    tag: "Hook",
  },
  {
    id: "shorts",
    title: "Shorts Ideas",
    desc: "Viral YouTube Shorts concepts",
    icon: PlayCircle,
    color: "text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/10",
    border: "border-blue-500/20",
    shimmer: "via-blue-400",
    tag: "Shorts",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="leading-none">
              <p className="text-sm sm:text-base font-bold tracking-tight">ViraNest</p>
              <p className="text-[10px] text-muted-foreground tracking-wide hidden sm:block">YouTube Growth OS</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:inline-flex">Free Beta</Badge>
            <ThemeToggle />
            {/* <Button variant="outline" size="sm">Sign in</Button> */}
            {/* <Button size="sm">Get Started Free</Button> */}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[100px]" />

        <div className="relative max-w-3xl mx-auto">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-500 tracking-widest uppercase">
              AI-Powered YouTube SEO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-5 text-foreground">
            One keyword.
            <br />
            <span className="bg-gradient-to-br from-violet-500 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              Complete SEO.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-9 leading-relaxed">
            Enter any topic and get titles, descriptions, tags, scripts, hooks,
            and thumbnail prompts — instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 h-12 text-sm sm:text-base rounded-xl font-semibold
                         bg-gradient-to-r from-violet-600 to-fuchsia-600
                         hover:from-violet-500 hover:to-fuchsia-500
                         border-0 shadow-lg shadow-violet-500/20 text-white"
            >
              Try Now — It&apos;s Free
            </Button>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 rounded-xl">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-2.5">
            Toolkit
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-sm mx-auto">
            Powerful AI tools for every part of your YouTube workflow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={`/tool/${tool.id}`}
                className="group relative flex flex-col rounded-2xl p-5
                           bg-card border border-border
                           hover:border-border/60 hover:-translate-y-1 hover:shadow-xl
                           transition-all duration-300 overflow-hidden"
              >
                {/* Top shimmer on hover */}
                <span
                  className={`absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r from-transparent ${tool.shimmer} to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center
                      ${tool.bg} border ${tool.border}
                      transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-5 h-5 ${tool.color}`} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase
                                   text-muted-foreground bg-muted border border-border
                                   px-2 py-1 rounded-md">
                    {tool.tag}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base tracking-tight text-card-foreground mb-1.5">
                  {tool.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                  {tool.desc}
                </p>

                {/* Arrow reveal */}
                <div
                  className={`flex items-center gap-1 mt-4 text-xs font-semibold ${tool.color}
                    opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-200`}
                >
                  Generate <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 ViraNest · YouTube Growth OS · All rights reserved
      </footer>
    </div>
  );
}