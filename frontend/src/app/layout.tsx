import type { Metadata } from "next";
import { Inter, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-ai" });

export const metadata: Metadata = {
  title: "AI mentor | AI-powered student mentoring & growth platform",
  description: "Connect your academic progress, learning habits and mentor guidance in one intelligent platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${dmSans.variable} antialiased selection:bg-main/30 selection:text-main font-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
