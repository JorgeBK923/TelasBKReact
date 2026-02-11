"use client";

import React from 'react';
import { Bot, ArrowRight, HelpCircle } from 'lucide-react';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { SetupProgress } from '@/components/onboarding/SetupProgress';
import { SetupTimeline, type TimelineStep } from '@/components/onboarding/SetupTimeline';

const setupSteps: TimelineStep[] = [
    {
        title: 'Pagamento confirmado!',
        description: 'Transação verificada com segurança.',
        status: 'complete',
    },
    {
        title: 'Workspace iniciado',
        description: 'ID da organização: ORG-8821X',
        status: 'complete',
    },
    {
        title: 'Implantando Agente de QA...',
        description: 'Configurando scripts de automação',
        status: 'active',
    },
    {
        title: 'Conectando aos servidores...',
        status: 'pending',
    },
    {
        title: 'Tudo pronto',
        status: 'pending',
        icon: 'flag',
    },
];

export default function SetupPage() {
    const isComplete = false;

    return (
        <>
            <OnboardingHeader sticky bordered />

            <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-12 md:px-10">
                <div className="flex flex-col max-w-[640px] w-full gap-8">
                    {/* Hero Icon */}
                    <div className="flex flex-col items-center justify-center gap-6">
                        <div className="relative flex items-center justify-center size-24 rounded-full bg-primary/5 dark:bg-primary/10">
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-75" />
                            <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
                            <Bot className="text-primary w-12 h-12 animate-bounce" style={{ animationDuration: '3s' }} />
                        </div>
                        <div className="text-center space-y-2">
                            <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                                Preparando seu ambiente...
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-normal max-w-md mx-auto">
                                Estamos configurando sua instância segura. Isso deve levar menos de um minuto.
                            </p>
                        </div>
                    </div>

                    {/* Progress Card */}
                    <div className="w-full bg-slate-50 dark:bg-card-dark rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-slate-700 shadow-sm">
                        <SetupProgress percentage={72} />
                        <SetupTimeline steps={setupSteps} />

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex justify-end">
                            <button
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                                    isComplete
                                        ? 'bg-primary hover:brightness-110 text-white shadow-lg shadow-primary/30 hover:scale-105'
                                        : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                }`}
                                disabled={!isComplete}
                            >
                                <span>Acessar Workspace</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Support Link */}
                    <div className="flex justify-center mt-4">
                        <a
                            className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                            href="#"
                        >
                            <HelpCircle className="w-4 h-4" />
                            Problemas com a configuração? Contate o suporte
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
