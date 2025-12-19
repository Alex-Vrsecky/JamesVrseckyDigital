import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

import "styles/globals.css";
import Header from "components/header";
import Footer from "components/footer";

export const metadata: Metadata = {
  title: "JVD",
  description: "Software and web development solutions for small businesses.",
  verification: {
    google: "JYjCjM0apONBhHKwGO_f8hRqZBjUPB5tyTS8rOxVU20",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.svg" type="image/iso+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-white flex flex-col min-h-screen items-center p-5 sm:p-20">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
