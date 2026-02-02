import { Link2, Bot, Download, Code, CheckSquare, ClipboardList } from 'lucide-react';

const steps = [
    {
        icon: Link2,
        title: '1. Conecte',
        description: 'Integre com seu Jira ou Azure DevOps em segundos. Nós lemos suas User Stories automaticamente.',
        color: 'text-blue-600',
    },
    {
        icon: Bot,
        title: '2. Analise & Gere',
        description: 'Nossa IA identifica gaps nos requisitos e gera cenários Gherkin cobrindo edge cases.',
        color: 'text-purple-600',
    },
    {
        icon: Download,
        title: '3. Exporte no Formato Ideal',
        description: 'Envie os testes direto para seu repositório Git ou ferramenta de gestão de testes.',
        color: 'text-green-500',
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 px-4 bg-white dark:bg-[#0a0e1a] transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-600/20 via-blue-600/50 to-blue-600/20 z-0" />

                    {steps.map((step, index) => (
                        <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="size-24 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:border-blue-600 transition-colors duration-300">
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-sm px-6">{step.description}</p>

                            {/* Show export menu for last step */}
                            {index === 2 && (
                                <div className="bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-md p-2 w-48 mx-auto text-left shadow-lg opacity-80 group-hover:opacity-100 transition-opacity mt-4">
                                    <div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase font-bold mb-1 pl-2">Exportar como:</div>
                                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-white/5 rounded cursor-pointer">
                                        <Code className="w-3.5 h-3.5 text-green-400" /> BDD (.feature)
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-white/5 rounded cursor-pointer">
                                        <CheckSquare className="w-3.5 h-3.5 text-blue-400" /> Checklist (Markdown)
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-white/5 rounded cursor-pointer">
                                        <ClipboardList className="w-3.5 h-3.5 text-blue-500" /> Jira Test Cases
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
