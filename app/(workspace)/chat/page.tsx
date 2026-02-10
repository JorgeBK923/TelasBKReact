'use client';

import React from 'react';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { useChat } from '@/hooks/useChat';

export default function ChatPage() {
    const chat = useChat();

    return (
        <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased h-screen flex flex-col md:flex-row overflow-hidden transition-colors duration-200">
            <ChatSidebar onNewChat={chat.resetChat} messages={chat.messages} />
            <main className="flex-1 flex flex-col relative min-w-0 h-full">
                <ChatWindow
                    messages={chat.messages}
                    isLoading={chat.isLoading}
                    error={chat.error}
                    onSendMessage={chat.sendMessage}
                    onResetChat={chat.resetChat}
                />
            </main>
        </div>
    );
}
