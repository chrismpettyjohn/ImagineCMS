import type { Metadata } from "next";
import { ThemeProvider } from "../ui/theme/ThemeProvider";
import { AdminHeader } from "../ui/components/admin-header/AdminHeader";
import { AdminSidebar } from "../ui/components/admin-sidebar/AdminSidebar";

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
          <AdminHeader />
          <AdminSidebar />
          {children}
        </body>
      </html>
    </ThemeProvider>

  );
}
