# ViraNest AI
ViraNest AI is a Next.js app that generates YouTube growth content from a single topic or keyword.

It includes multiple AI tools such as title generation, description writing, tags, hashtags, thumbnail prompts, scripts, hooks, and Shorts ideas.

## Features
- AI-powered YouTube content generation from one keyword
- Dedicated tool pages under dynamic routes (`/tool/[slug]`)
- API route for generation (`/api/generate`)
- Dark/light theme toggle with `next-themes`
- PWA support via `@ducanh2912/next-pwa` and `public/manifest.json`

## Built With
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui
- OpenAI SDK (configured to call Groq OpenAI-compatible API)
- lucide-react icons

## Tool Slugs
The app currently supports these tools:
- `seo-title`
- `seo-description`
- `tags`
- `hashtag`
- `thumbnail`
- `script`
- `viral-hook`
- `shorts`

## Project Structure
```text
app/
  page.tsx                 # Landing page with tool cards
  layout.tsx               # Root layout, metadata, theme provider, toaster
  api/generate/route.ts    # POST endpoint for AI generation
  tool/[slug]/page.tsx     # Dynamic tool page UI
components/
  theme-toggle.tsx
  ui/                      # shadcn/ui components
lib/
  ai.ts                    # AI generation logic and prompts
  utils.ts                 # Utility helpers
public/
  manifest.json            # PWA manifest
```

## Prerequisites
- Node.js 20+ recommended
- pnpm recommended (this repo includes `pnpm-lock.yaml`)

## Installation
```bash
pnpm install
```

## Environment Variables
Create `.env.local` in the project root.

At least one of the following must be set:
- `GROQ_API_KEY` (preferred in current implementation)
- `OPENAI_API_KEY` (fallback key name supported by code)

The generation logic in `lib/ai.ts` uses:
- Base URL: `https://api.groq.com/openai/v1`
- Model: `llama-3.3-70b-versatile`

## Run Locally
```bash
pnpm dev
```
Open `http://localhost:3000`.

## Scripts
- `pnpm dev` – Run development server
- `pnpm build` – Create production build (`next build --webpack`)
- `pnpm start` – Start production server
- `pnpm lint` – Run ESLint

## API Usage
Endpoint:
- `POST /api/generate`

Request body:
```json
{
  "tool": "seo-title",
  "keyword": "how to grow a youtube channel in 2026"
}
```

Response:
```json
{
  "result": "..."
}
```

If `tool` or `keyword` is missing, the API returns `400`.

## PWA Notes
- PWA is configured in `next.config.ts` with `@ducanh2912/next-pwa`.
- PWA is disabled during development and enabled for production builds.
- Manifest and icons are defined under `public/`.

## Deployment
Build and run in production mode:
```bash
pnpm build
pnpm start
```

Make sure your deployment environment includes `GROQ_API_KEY` or `OPENAI_API_KEY`.
