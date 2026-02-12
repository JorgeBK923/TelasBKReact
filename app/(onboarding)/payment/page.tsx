"use client";

import React, { Suspense } from 'react';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { PaymentForm } from '@/components/onboarding/PaymentForm';
import { OrderSummary } from '@/components/onboarding/OrderSummary';

export default function PaymentPage() {
    return (
        <>
            <OnboardingHeader sticky bordered />

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Pagamento Seguro
                            </h1>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">
                                Finalize sua assinatura e comece a testar com IA agora.
                            </p>
                        </div>
                        <PaymentForm />
                    </div>

                    <div className="mt-10 lg:mt-0 lg:col-span-5">
                        <Suspense>
                            <OrderSummary />
                        </Suspense>
                    </div>
                </div>
            </main>
        </>
    );
}
