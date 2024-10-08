import type { Metadata } from "next";
import { SiteHeader } from "../ui/components/layout/SiteHeader";

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
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
