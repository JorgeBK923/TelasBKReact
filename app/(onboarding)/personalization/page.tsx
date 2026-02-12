"use client";

import React from 'react';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { PersonalizationForm } from '@/components/onboarding/PersonalizationForm';
import { useOnboarding } from '@/context/OnboardingContext';

export default function PersonalizationPage() {
    const { state } = useOnboarding();
    const firstName = state.registration?.name?.split(' ')[0] || 'Você';

    return (
        <>
            <OnboardingHeader sticky bordered />

            <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-[640px] flex flex-col gap-6">
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800">
                            <div className="h-full bg-primary w-[80%] rounded-r-full" />
                        </div>

                        <div className="p-8 sm:p-10 flex flex-col gap-8">
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-tight">
                                    Tudo pronto para começar, {firstName}!
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                                    Nos ajude a personalizar sua experiência respondendo a duas perguntas rápidas.
                                </p>
                            </div>

                            <PersonalizationForm />
                        </div>
                    </div>

                    <p className="text-center text-slate-400 text-sm">
                        Passo 4 de 5 &bull; Configuração do Ambiente
                    </p>
                </div>
            </main>

            {/* Background Pattern */}
            <div
                className="fixed inset-0 pointer-events-none z-[-1] opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
        </>
    );
}
