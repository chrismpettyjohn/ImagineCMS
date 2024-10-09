import type { Metadata } from "next";
import { ThemeProvider } from "../ui/theme/ThemeProvider";
import { AdminHeader } from "../ui/components/admin-header/AdminHeader";
import { AdminSidebar, SIDEBAR_WIDTH } from "../ui/components/admin-sidebar/AdminSidebar";
import { Box, CssBaseline } from "@mui/material";

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
          <CssBaseline />
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <AdminSidebar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <AdminHeader />
              <Box component="main" sx={{ flexGrow: 1, pt: 2, maxWidth: '95%', margin: '0' }}>
                {children}
              </Box>
            </Box>
          </Box>
        </body>
      </html>
    </ThemeProvider>
  );
}
