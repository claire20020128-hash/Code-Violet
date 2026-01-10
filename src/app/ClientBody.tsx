"use client";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased min-h-screen bg-[#0c0d1d]" suppressHydrationWarning>
      {children}
    </body>
  );
}
