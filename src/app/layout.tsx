import { ReactNode } from "react";
import { AppShell } from "@/core/app-shell"; // Importe o seu AppShell aqui
import "@/app/globals.css"; // Seus estilos globais do Tailwind

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // 1. O Next.js exige que essas tags nasçam aqui no arquivo de layout raiz
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        
        {/* 2. O seu App Shell entra aqui dentro, abraçando o conteúdo dinâmico */}
        <AppShell>
          {children}
        </AppShell>

      </body>
    </html>
  );
}