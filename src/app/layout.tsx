import "./globals.css";
import { Header } from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground">
        <ThemeProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}