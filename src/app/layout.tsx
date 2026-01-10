import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Code Violet (PS5) Release Date, Trailers, Gameplay, and Reviews",
  description: "Code Violet is a third-person action horror game from TeamKill Media. Follow the 2026-01-10 release date, PS5 details, official trailers, gameplay highlights, and review updates.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9SVZQFMBJX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9SVZQFMBJX');
`,
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
