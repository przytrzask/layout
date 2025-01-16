import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black">
        <SidebarProvider>
          <div className="flex flex-col flex-1">
            <Header />
            <div className="flex">
              <AppSidebar />
              <main className="flex-1 relative bg-white">
                {/* Frame Wrapper */}
                {/* SVG for the frame */}
                <svg
                  className="fixed left-[180px] w-[calc(100%-130px)] top-0 h-[103%] pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <mask id="fluidMask">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="white" />
                      <path
                        d="M5,5 Q5,5 7,5 L93,5 Q95,5 95,7 L95,93 Q95,95 93,95 L7,95 Q5,95 5,93 Z"
                        fill="black"
                      />
                    </mask>
                  </defs>
                  <rect
                    width="100"
                    height="100"
                    fill="black"
                    mask="url(#fluidMask)"
                  />
                </svg>
                {/* Content Area */}
                <div className="p-4 bg-white">{children}</div>
              </main>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
