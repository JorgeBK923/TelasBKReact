import { Header } from "@/components/dashboard/Header";

export default function AgentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans antialiased h-screen flex flex-col overflow-hidden transition-colors duration-300">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12 transition-colors duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
