import { ClipboardCheck, Terminal, CheckCircle } from 'lucide-react';

const formats = [
    {
        icon: ClipboardCheck,
        badge: 'MANUAL QA',
        badgeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border-blue-100 dark:border-blue-500/20',
        iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500',
        title: 'Checklist Inteligente',
        description: 'Ideal para testes exploratórios e validação manual rápida. Receba listas organizadas por categorias (fluxo principal, erros, segurança) prontas para serem ticadas.',
        features: [
            'Perfeito para Exploratory Testing',
            'Exportável para Excel ou Markdown',
            'Fácil leitura para PMs e Designers',
        ],
        featureColor: 'text-blue-500',
        hoverBorder: 'hover:border-blue-500/30',
    },
    {
        icon: Terminal,
        badge: 'AUTOMATION',
        badgeColor: 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 border-green-100 dark:border-green-500/20',
        iconBg: 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-500',
        title: 'Gherkin BDD',
        description: 'Ideal para automação com Cypress, Playwright ou Cucumber. Cenários estruturados (Given/When/Then) prontos para copiar e colar no seu código.',
        features: [
            'Sintaxe Gherkin validada',
            'Pronto para Frameworks de Teste',
            'Integração direta com repositório',
        ],
        featureColor: 'text-green-500',
        hoverBorder: 'hover:border-green-500/30',
    },
];

export function Formats() {
    return (
        <section className="py-24 px-4 bg-slate-50 border-y border-slate-200 dark:bg-slate-900/20 dark:border-white/5 transition-colors duration-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white">
                        Documentação do Seu Jeito
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Escolha o formato que melhor se adapta ao seu time. Seja para automação ou testes manuais, o BugKillers entrega.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {formats.map((format) => (
                        <div
                            key={format.title}
                            className={`p-8 rounded-2xl bg-white border border-slate-200 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 ${format.hoverBorder} transition-all group shadow-sm dark:shadow-none`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`size-14 rounded-xl ${format.iconBg} flex items-center justify-center`}>
                                    <format.icon className="w-7 h-7" />
                                </div>
                                <span className={`${format.badgeColor} text-xs font-bold px-3 py-1 rounded-full border`}>
                                    {format.badge}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {format.title}
                            </h3>
                            <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {format.description}
                            </p>

                            <div className="space-y-3">
                                {format.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                                        <CheckCircle className={`w-4 h-4 ${format.featureColor}`} />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
