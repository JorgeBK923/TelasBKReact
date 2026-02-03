import { Header, Sidebar } from "@/components/dashboard";

interface DashboardLayoutProps {
    children: React.ReactNode;
    activePage: "dados" | "plano" | "uso" | "integracoes" | "preferencias" | "seguranca";
}

export function DashboardLayout({ children, activePage }: DashboardLayoutProps) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans antialiased h-screen flex flex-col overflow-hidden transition-colors duration-300">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar activePage={activePage} />
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12 transition-colors duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
