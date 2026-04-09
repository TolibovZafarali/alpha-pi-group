import type { Metadata } from "next";

import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha-Pi Group",
  description:
    "Alpha-Pi Group provides driver recruiting, carrier support, and professional business communication for transportation businesses.",
  icons: {
    icon: "/alpha-pi-logo-white.svg",
    shortcut: "/alpha-pi-logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
