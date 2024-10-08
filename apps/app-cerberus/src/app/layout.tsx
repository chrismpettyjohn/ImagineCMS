import type { Metadata } from "next";
import { SiteHeader } from "../ui/components/layout/SiteHeader";
import { ThemeProvider } from "../ui/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "ImagineCMS ",
  description: "Content management made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <SiteHeader />
          {children}
        </body>
      </html>
    </ThemeProvider>

  );
}
