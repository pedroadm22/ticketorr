"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen flex-col bg-zinc-950 text-zinc-50 overflow-hidden">
      
      <Header 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        userName="Pedro Lucas"
      />

      <div className="flex flex-1 w-full overflow-hidden">
        
        <Sidebar/>

        <div className="flex flex-col flex-1 bg-zinc-950 overflow-y-auto">
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>

          <Footer />
        </div>

      </div>
    </div>
  );
}