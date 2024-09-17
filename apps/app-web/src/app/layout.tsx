import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
