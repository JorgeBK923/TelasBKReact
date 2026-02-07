'use client';

import React from 'react';
import { MessageBubble, CodeBlockWithAnalysis } from '@/components/chat/MessageBubble';
import { PlusCircle, Send } from 'lucide-react';

export function ChatWindow() {
    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Scrollable Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-8 pb-20">
                    <div className="flex justify-center">
                        <span className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] px-3 py-1 rounded-full text-xs font-medium text-slate-500">Hoje, 10:23</span>
                    </div>

                    <MessageBubble
                        type="bot"
                        content={<p className="p-5">Olá, Ana! Estou pronto para analisar seu código. Cole trechos ou logs de erro e eu identificarei bugs, vulnerabilidades de segurança e sugerirei correções.</p>}
                    />

                    <MessageBubble
                        type="user"
                        content={
                            <>
                                <p className="leading-relaxed">Estou tendo um problema crítico na autenticação. O código parece correto, mas às vezes o app quebra sem aviso. Aqui está o trecho:</p>
                                <div className="mt-2 w-full bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20 p-4 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                                    <pre><code>{`const verifyUser = (token) => {
    const user = decode(token);
    if (user.isAdmin) {
        return grantAccess();
    }
    return denyAccess();
}`}</code></pre>
                                </div>
                            </>
                        }
                    />

                    <MessageBubble isAnalyzing type="bot" />

                    <MessageBubble type="bot" content={<CodeBlockWithAnalysis />} />

                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-[#f8fafc] dark:bg-[#0f172a]/95 backdrop-blur-sm shrink-0">
                <div className="max-w-3xl mx-auto">
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl blur-md transition-opacity opacity-0 group-hover:opacity-100"></div>

                        <div className="relative bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] rounded-2xl shadow-lg flex items-end p-2 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50">
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
                                <PlusCircle className="w-6 h-6" />
                            </button>
                            <textarea
                                className="w-full bg-transparent border-0 focus:ring-0 text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none py-3 max-h-32 focus:outline-none"
                                placeholder="Descreva o problema ou cole seu código..."
                                rows={1}
                            ></textarea>
                            <button className="p-2 bg-primary text-white rounded-xl hover:bg-[#041E96] transition-all shadow-md hover:shadow-lg active:scale-95 m-1">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                            Ambiente Seguro • BugKillers v2.4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
