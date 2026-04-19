"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, Loader2, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const toolConfig: Record<
  string,
  {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    color: string;
    bg: string;
    border: string;
    glow: string;
    tag: string;
  }
> = {
  "seo-title": {
    title: "SEO Title Generator",
    description: "Create high-click-through-rate YouTube titles",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Titles",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/20",
    tag: "Titles",
  },
  "seo-description": {
    title: "SEO Description",
    description: "Write engaging and SEO optimized video descriptions",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Description",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    glow: "shadow-sky-500/20",
    tag: "Copy",
  },
  tags: {
    title: "Tags Generator",
    description: "Generate 50+ powerful YouTube tags",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Tags",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    glow: "shadow-red-500/20",
    tag: "Tags",
  },
  hashtag: {
    title: "Hashtag Generator",
    description: "Create viral and trending hashtags",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Hashtags",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/20",
    tag: "Social",
  },
  thumbnail: {
    title: "Thumbnail Prompt",
    description: "Generate detailed AI thumbnail prompts",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Prompt",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/20",
    tag: "Visual",
  },
  script: {
    title: "Video Script",
    description: "Generate complete video script with hook & CTA",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Script",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "shadow-orange-500/20",
    tag: "Script",
  },
  "viral-hook": {
    title: "Viral Hook Generator",
    description: "Create scroll-stopping video hooks",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Hooks",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "shadow-pink-500/20",
    tag: "Hook",
  },
  shorts: {
    title: "YouTube Shorts Ideas",
    description: "Generate viral Shorts concepts & hooks",
    placeholder: "e.g. How to make money online in Bangladesh 2026",
    buttonText: "Generate Shorts Ideas",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/20",
    tag: "Shorts",
  },
};

export default function ToolPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const tool = toolConfig[slug];

  useEffect(() => {
    if (!tool) {
      router.push("/");
    }
  }, [tool, router]);

  if (!tool) return null;

  const handleGenerate = async () => {
    if (!keyword.trim()) return;

    setIsLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: slug, keyword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content.");
      }

      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult(
        "Failed to generate content. Please check your API key and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="text-[10px] uppercase tracking-widest bg-red-500/10 dark:bg-red-500/10 text-red-400 border-red-500/20"
            >
              YouTube
            </Badge>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tool.bg} border ${tool.border}`}>
              <Sparkles className={`w-5 h-5 ${tool.color}`} />
            </div>
            <span className={`text-xs font-semibold tracking-widest uppercase ${tool.color}`}>
              {tool.tag}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter mb-2 text-foreground">
            {tool.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {tool.description}
          </p>
        </div>

        {/* Input card */}
        <Card className="mb-4 border-border shadow-sm">
          <CardHeader className="pb-3 pt-5 px-5">
            <CardTitle className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground">
              Topic / Keyword
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5 pb-5 space-y-3">
            <Input
              placeholder={tool.placeholder}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              className="h-12 text-sm sm:text-base rounded-xl border-input bg-background
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0
                         placeholder:text-muted-foreground/60"
            />

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !keyword.trim()}
              size="lg"
              className={`w-full h-12 text-sm sm:text-base font-semibold rounded-xl
                         bg-gradient-to-r from-violet-600 to-fuchsia-600
                         hover:from-violet-500 hover:to-fuchsia-500
                         border-0 text-white shadow-lg ${tool.glow}
                         disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  {tool.buttonText}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Result card */}
        {result && (
          <Card className="border-border shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-300">
            <CardHeader className="flex flex-row items-center justify-between py-4 px-5">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${tool.bg} border ${tool.border} inline-block`} />
                <CardTitle className="text-sm font-semibold text-card-foreground">
                  Generated Result
                </CardTitle>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className={`h-8 px-3 text-xs font-medium rounded-lg gap-1.5 transition-all
                  ${copied
                    ? "text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/10"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <Textarea
                value={result}
                readOnly
                className="min-h-[280px] sm:min-h-[340px] text-sm font-mono leading-relaxed resize-y
                           bg-muted/40 border-border rounded-xl
                           focus-visible:ring-1 focus-visible:ring-ring"
              />
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}