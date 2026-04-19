import OpenAI from "openai";

export async function generateContent(
  tool: string,
  keyword: string,
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY ?? process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY or OPENAI_API_KEY is not configured. Please add it to .env.local",
    );
  }

  const groq = new OpenAI({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const systemPrompt = getSystemPrompt(tool);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Topic: ${keyword}` },
    ],
    temperature: 0.75,
    max_tokens: 1500,
  });

  return (
    completion.choices[0]?.message?.content?.trim() || "No content generated."
  );
}

function getSystemPrompt(tool: string): string {
  const base =
    "You are an expert YouTube SEO specialist and content creator. Respond in a clear, professional, and highly actionable way. Use markdown formatting when appropriate.";

  switch (tool) {
    case "seo-title":
      return `${base} Generate 8-10 highly clickable, SEO optimized YouTube titles for the given topic. Include numbers, power words, and emotional triggers where suitable.`;
    case "seo-description":
      return `${base} Write a complete, engaging YouTube video description (2000+ characters) with timestamps, strong CTA, and relevant keywords.`;
    case "tags":
      return `${base} Generate 60+ relevant YouTube tags. Separate them with commas. Include broad, long-tail, and high-search tags.`;
    case "hashtag":
      return `${base} Generate 20-25 trending and viral YouTube hashtags for this topic.`;
    case "thumbnail":
      return `${base} Create a highly detailed, professional prompt for AI image generators (like Flux or Midjourney) to make a viral YouTube thumbnail for this topic.`;
    case "script":
      return `${base} Write a complete YouTube video script with a strong hook, main content sections, and clear CTA.`;
    case "viral-hook":
      return `${base} Generate 10 powerful viral hooks (first 5-8 seconds) that can stop the scroll for this topic.`;
    case "shorts":
      return `${base} Generate 8 viral YouTube Shorts ideas with title and hook for this topic.`;
    default:
      return base;
  }
}
