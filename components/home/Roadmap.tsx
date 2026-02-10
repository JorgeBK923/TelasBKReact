import { FileEdit, PlayCircle, Shield, Rocket } from 'lucide-react';

const roadmapItems = [
    {
        icon: FileEdit,
        title: 'Geração BDD',
        description: 'Criação instantânea de cenários e steps a partir de texto livre.',
        status: 'AGORA',
        isActive: true,
        opacity: 'opacity-100',
        iconBg: 'bg-blue-600 text-white',
        statusBg: 'bg-blue-600 text-white',
    },
    {
        icon: PlayCircle,
        title: 'Agente de Execução',
        description: 'IA que escreve e roda scripts Cypress/Playwright.',
        status: 'Q4 2023',
        isActive: false,
        opacity: 'opacity-75 dark:opacity-75',
        iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-gray-600',
        statusBg: 'bg-slate-500 dark:bg-gray-700 text-white',
    },
    {
        icon: Shield,
        title: 'Security Scan',
        description: 'Análise de vulnerabilidades em cenários de teste.',
        status: 'Q1 2024',
        isActive: false,
        opacity: 'opacity-75 dark:opacity-50',
        iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-gray-400 border border-slate-200 dark:border-gray-700',
        statusBg: 'bg-slate-400 dark:bg-gray-800 text-white dark:text-gray-400',
    },
    {
        icon: Rocket,
        title: 'DevOps Autopilot',
        description: 'Self-healing de pipelines CI/CD quebrados.',
        status: 'Q2 2024',
        isActive: false,
        opacity: 'opacity-75 dark:opacity-50',
        iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-gray-400 border border-slate-200 dark:border-gray-700',
        statusBg: 'bg-slate-400 dark:bg-gray-800 text-white dark:text-gray-400',
    },
];

export function Roadmap() {
    return (
        <section id="agents" className="py-24 px-4 bg-slate-50 dark:bg-[#0a0e1a] overflow-hidden transition-colors duration-200 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-black mb-16 text-center text-slate-900 dark:text-white">
                    Futuro da Automação
                </h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {roadmapItems.map((item) => (
                            <div
                                key={item.title}
                                className={`relative p-6 rounded-xl bg-white dark:bg-slate-900 border ${item.isActive ? 'border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none'} z-10 ${item.opacity} hover:opacity-100 transition-opacity`}
                            >
                                <div className={`absolute -top-3 left-6 md:left-1/2 md:-translate-x-1/2 ${item.statusBg} text-xs font-bold px-2 py-1 rounded`}>
                                    {item.status}
                                </div>
                                <div className={`size-12 rounded-full ${item.iconBg} flex items-center justify-center mb-4`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
