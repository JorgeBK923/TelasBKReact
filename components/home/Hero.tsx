'use client';

import Link from 'next/link';
import { ArrowRight, PlayCircle, Loader2, CheckCircle } from 'lucide-react';

export function Hero() {
    return (
        <header className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background blur effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="flex flex-col gap-6 text-center lg:text-left z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 w-fit mx-auto lg:mx-0">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">
                            Novo Agente v2.0 Disponível
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                        Economize{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            15h/Sprint
                        </span>{' '}
                        em Documentação de Testes
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Seu agente de IA transforma User Stories em cenários de teste profissionais (BDD, Gherkin ou Checklist) em 60 segundos — incluindo revisão de requisitos que encontra bugs antes do código.
                    </p>

                    {/* Features list */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 items-center">
                        <div className="text-sm font-medium text-slate-600 dark:text-gray-300 flex items-center gap-4 bg-slate-50 border border-slate-200 dark:bg-white/5 px-4 py-2 rounded-lg dark:border-white/10">
                            <span className="flex items-center gap-1.5">
                                <span className="text-green-500">✓</span> BDD + Checklist inclusos
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-green-500">✓</span> Sem cartão
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-green-500">✓</span> Setup em 2 minutos
                            </span>
                        </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2">
                            Começar Grátis
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white text-base font-medium h-12 px-6 rounded-lg dark:border-white/5 transition-colors flex items-center justify-center gap-2">
                            <PlayCircle className="w-4 h-4" />
                            Ver Demo
                        </button>
                    </div>
                </div>

                {/* Right content - Code demo */}
                <div className="relative z-10 w-full group">
                    <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                        {/* Window header */}
                        <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500" />
                                <div className="size-3 rounded-full bg-yellow-500" />
                                <div className="size-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex gap-4 text-xs font-mono">
                                <span className="text-gray-500 hover:text-white cursor-pointer">[Input]</span>
                                <span className="text-white border-b border-blue-600 cursor-pointer">[BDD/Gherkin]</span>
                                <span className="text-gray-500 hover:text-white cursor-pointer flex items-center gap-1">
                                    [Checklist]
                                    <span className="size-1.5 rounded-full bg-blue-600" />
                                </span>
                            </div>
                            <div className="text-xs text-gray-600">v2.1</div>
                        </div>

                        {/* Code content */}
                        <div className="p-6 font-mono text-sm bg-[#1e1e1e] text-gray-300 flex flex-col gap-6 relative">
                            {/* View indicator */}
                            <div className="absolute top-4 right-4 z-20 flex flex-col items-end pointer-events-none">
                                <div className="bg-slate-800 border border-slate-700 p-2 rounded text-xs text-gray-400 mb-2 shadow-lg animate-pulse">
                                    Alternar visualização (BDD ↔ Checklist)
                                </div>
                                <div className="bg-blue-600/20 text-blue-500 px-2 py-1 rounded text-xs font-bold border border-blue-600/30">
                                    View: BDD Active
                                </div>
                            </div>

                            {/* Input section */}
                            <div className="opacity-50 blur-[0.5px]">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">// Input: User Story</p>
                                <p className="text-gray-400 pl-4 border-l-2 border-gray-700">
                                    Como usuário, quero resetar minha senha para recuperar acesso à conta.
                                </p>
                            </div>

                            {/* Processing indicator */}
                            <div className="flex items-center gap-3 text-purple-500 py-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span className="text-xs font-bold uppercase tracking-wider">Generating Dual Format...</span>
                            </div>

                            {/* Output section */}
                            <div className="relative">
                                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-green-500/50" />
                                <p className="text-xs text-green-500 uppercase tracking-wider mb-2">// Output: BDD / Checklist (Ready)</p>
                                <div className="pl-4">
                                    <p><span className="text-blue-400">Feature:</span> Password Reset</p>
                                    <p className="pl-4"><span className="text-blue-400">Scenario:</span> Successful reset</p>
                                    <p className="pl-8"><span className="text-blue-400">Given</span> the user is on the login page</p>
                                    <p className="pl-8"><span className="text-blue-400">When</span> they click <span className="text-orange-400">&quot;Forgot Password&quot;</span></p>
                                    <p className="pl-8"><span className="text-blue-400">Then</span> they should receive a recovery link</p>
                                    <p className="mt-2 text-gray-500 italic text-xs">// + 12 Checklist items generated in background...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                        <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Documentação Completa</p>
                            <p className="text-sm font-bold text-white">BDD &amp; Manual</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
