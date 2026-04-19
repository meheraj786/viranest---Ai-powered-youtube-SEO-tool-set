import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

import type { Viewport } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "ViraNest Ai",
  description: "An Ai powered YouTube tools",

  appleWebApp: { capable: true, statusBarStyle: "default", title: "My App" },

  themeColor: "#000000",
};

export const viewport: Viewport = {
  themeColor: "#000000",

  width: "device-width",

  initialScale: 1,
};

// export const metadata: Metadata = {
//   title: "ViraNest Ai",
//   description: "An Ai powered YouTube tools",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
