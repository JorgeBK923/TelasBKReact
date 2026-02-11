import React from 'react';
import { CheckCircle } from 'lucide-react';

export interface PlanCardProps {
    name: string;
    description: string;
    price: string;
    priceSuffix?: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    badge?: string;
    variant?: 'outline' | 'filled' | 'subtle';
}

export function PlanCard({
    name,
    description,
    price,
    priceSuffix,
    features,
    buttonText,
    isPopular = false,
    badge,
    variant = 'outline',
}: PlanCardProps) {
    return (
        <div
            className={`relative rounded-2xl p-8 flex flex-col h-full transition-all ${
                isPopular
                    ? 'bg-white dark:bg-card-dark border-2 border-primary shadow-xl shadow-primary/10 transform md:-translate-y-4 z-10'
                    : 'bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-none dark:hover:border-slate-600'
            }`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                    Mais Popular
                </div>
            )}

            <div className={`mb-6 ${isPopular ? 'mt-2' : ''}`}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex justify-between items-center">
                    {name}
                    {badge && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded font-bold">
                            {badge}
                        </span>
                    )}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 h-10">{description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{price}</span>
                {priceSuffix && <span className="text-slate-500 dark:text-slate-400">{priceSuffix}</span>}
            </div>

            <button
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark ${
                    variant === 'filled'
                        ? 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/25'
                        : variant === 'outline'
                        ? 'border-2 border-primary text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-primary/20'
                        : 'border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary'
                }`}
            >
                {buttonText}
            </button>

            <ul className="space-y-4 flex-1">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className={`flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 ${
                            isPopular ? 'font-medium' : ''
                        }`}
                    >
                        <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
