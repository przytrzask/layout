import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

import "./globals.css";

import { Tabs } from "@/components/ui/tabs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <SidebarProvider>
          <div className="flex flex-col">
            <Header />
            <div className="flex">
              <AppSidebar className="sticky top-16" />
              <main className="flex-1 relative">
                <div className="absolute inset-4 bg-white rounded-2xl overflow-auto">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
