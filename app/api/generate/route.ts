import { NextResponse } from "next/server";
import { generateContent } from "@/lib/ai";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();
  const tool = body?.tool as string;
  const keyword = body?.keyword as string;

  if (!tool || !keyword) {
    return NextResponse.json(
      { error: "Missing tool or keyword in request body." },
      { status: 400 },
    );
  }

  try {
    const result = await generateContent(tool, keyword);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while generating content.",
      },
      { status: 500 },
    );
  }
}
