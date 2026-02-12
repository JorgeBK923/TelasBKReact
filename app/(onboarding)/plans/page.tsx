"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { PlanCard } from '@/components/onboarding/PlanCard';
import { useOnboarding } from '@/context/OnboardingContext';
import { PLANS, getPlanByName } from '@/constants/plans';

const trustedCompanies = ['ACME Corp', 'Globex', 'Soylent', 'Initech', 'Umbrella'];

export default function PlansPage() {
    const router = useRouter();
    const { setSelectedPlan } = useOnboarding();

    const handlePlanSelect = (planName: string) => {
        if (planName === 'Enterprise') {
            router.push('/contact');
            return;
        }
        const planData = getPlanByName(planName);
        if (planData) setSelectedPlan(planData);
        router.push(`/payment?plan=${encodeURIComponent(planName)}`);
    };

    return (
        <>
            <OnboardingHeader />

            <main className="flex-grow flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center max-w-3xl mx-auto mt-8 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Acelere seu ciclo de desenvolvimento com IA
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Automação contínua para diversas etapas do seu fluxo. Agentes trabalhando 24/7 para garantir mais eficiência e consistência.
                    </p>
                </div>

                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {PLANS.map((plan) => (
                        <PlanCard key={plan.name} {...plan} onSelect={() => handlePlanSelect(plan.name)} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
                        Confiado por times de engenharia inovadores
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                        {trustedCompanies.map((company) => (
                            <span key={company} className="text-xl font-black text-slate-400 dark:text-slate-600">
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
