import React from 'react';
import { ChatSidebar } from '@/components/chat/ChatSidebar';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased h-screen flex flex-col md:flex-row overflow-hidden transition-colors duration-200">
            <ChatSidebar />
            <main className="flex-1 flex flex-col relative min-w-0 h-full">
                {children}
            </main>
        </div>
    );
}
