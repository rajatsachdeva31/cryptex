import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cryptex",
  description: "An AI powered crypto trading learning platform",
  icons: {
    icon: "icon.svg",
  },
  keywords: ["crypto", "AI", "trading", "learning", "platform"],
  authors: [{ name: "Cryptex Team", url: "" }],
  openGraph: {
    title: "Cryptex",
    description: "An AI powered crypto trading learning platform",
    url: "",
    siteName: "Cryptex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptex",
    description: "An AI powered crypto trading learning platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${montserrat.variable} antialiased min-h-screen overscroll-none`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
