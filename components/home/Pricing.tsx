import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Free',
        description: 'Para desenvolvedores solo.',
        price: 'R$0',
        period: '/mês',
        buttonText: 'Criar Conta',
        buttonLink: '/register',
        buttonStyle: 'border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5',
        features: [
            '50 Stories/mês',
            'Formatos: BDD + Checklist',
            'Exportação Gherkin',
            'Histórico de 7 dias',
        ],
        isPopular: false,
        cardStyle: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none',
    },
    {
        name: 'Startup',
        description: 'Para times ágeis.',
        price: 'R$299',
        period: '/mês',
        buttonText: 'Começar Trial Grátis',
        buttonLink: '/register',
        buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25',
        features: [
            'Stories Ilimitadas',
            'Formatos: BDD + Checklist',
            'Integração Jira/Azure',
            '5 Usuários',
            'Suporte Prioritário',
        ],
        isPopular: true,
        cardStyle: 'bg-white dark:bg-slate-900/80 border-blue-600 shadow-2xl transform md:-translate-y-4',
    },
    {
        name: 'Scale',
        description: 'Para grandes operações.',
        price: 'Sob Consulta',
        period: '',
        buttonText: 'Falar com Vendas',
        buttonLink: '/contact',
        buttonStyle: 'border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5',
        features: [
            'Tudo do Startup',
            'Formatos: BDD + Checklist',
            'SSO & Auditoria',
            'Modelos de IA Customizados',
            'Deploy On-Premise',
        ],
        isPopular: false,
        cardStyle: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none',
    },
];

export function Pricing() {
    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-200 scroll-mt-20" id="pricing">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-900 dark:text-white">
                    Planos Simples
                </h2>
                <p className="text-slate-600 dark:text-gray-400 text-center mb-16">
                    Comece grátis, escale conforme sua equipe cresce.
                </p>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`p-8 rounded-2xl border flex flex-col gap-6 relative ${plan.cardStyle}`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    POPULAR
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">{plan.description}</p>
                            </div>

                            <div className="flex items-end gap-1">
                                <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                                {plan.period && <span className="text-slate-500 mb-1">{plan.period}</span>}
                            </div>

                            <Link href={plan.buttonLink} className={`w-full py-3 rounded-lg font-bold transition-colors text-center block ${plan.buttonStyle}`}>
                                {plan.buttonText}
                            </Link>

                            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-300">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
