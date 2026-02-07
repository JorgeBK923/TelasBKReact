import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BugKillers - Plataforma de QA com IA",
  description: "Economize 15h/Sprint em documentação de testes. Seu agente de IA transforma User Stories em cenários de teste profissionais em 60 segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <UserProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
