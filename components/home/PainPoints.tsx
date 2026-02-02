import { Clock, DollarSign, Bug, AlertTriangle } from 'lucide-react';

const painPoints = [
    {
        icon: Clock,
        title: 'Horas Perdidas',
        description: 'Tempo gasto escrevendo testes manuais em vez de automatizar cenários críticos.',
        color: 'bg-red-500/10 text-red-500',
    },
    {
        icon: DollarSign,
        title: 'Salários Altos',
        description: 'Alto custo por hora de engenharia sênior desperdiçado em tarefas repetitivas.',
        color: 'bg-yellow-500/10 text-yellow-500',
    },
    {
        icon: Bug,
        title: 'Bugs de Requisito',
        description: 'Falhas detectadas tarde demais no ciclo devido a User Stories mal definidas.',
        color: 'bg-orange-500/10 text-orange-500',
    },
    {
        icon: AlertTriangle,
        title: 'Atrasos na Entrega',
        description: 'Sprints atrasadas devido a gargalos na validação e escrita de BDD.',
        color: 'bg-purple-500/10 text-purple-500',
    },
];

export function PainPoints() {
    return (
        <section className="py-24 px-4 bg-white dark:bg-[#0a0e1a] relative transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                        O Custo do QA Manual
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl">
                        Identifique onde sua equipe está perdendo tempo e dinheiro com processos obsoletos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((point) => (
                        <div
                            key={point.title}
                            className="group p-6 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
                        >
                            <div className={`size-12 rounded-lg ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <point.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                                {point.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
