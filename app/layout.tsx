import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import RespatiIcon from "@/components/respati-icon";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import { AuthButtons } from "@/components/auth-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthyMind Respati",
  description: "Developed by suga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <Link href="/">
                    <RespatiIcon />
                  </Link>
                </div>
                <AuthButtons />
              </div>
              {children}
              <Toaster position="bottom-right" />
            </main>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
