import { X, CheckCircle, Minus } from 'lucide-react';

const comparisonData = [
    {
        feature: 'Tempo por User Story',
        manual: '45-60 min',
        basic: '15-20 min',
        bugkillers: '~30 segundos',
    },
    {
        feature: 'Cobertura de Edge Cases',
        manual: 'Limitada (Erro Humano)',
        basic: 'Baixa',
        bugkillers: 'Alta (IA Preditiva)',
    },
    {
        feature: 'Formatos Suportados',
        manual: 'Manual (Single)',
        basic: 'Básico (BDD only)',
        bugkillers: 'BDD + Checklist',
    },
    {
        feature: 'Integração Jira Bidirecional',
        manual: 'no',
        basic: 'no',
        bugkillers: 'yes',
    },
    {
        feature: 'Auto-Correção de Sintaxe',
        manual: 'no',
        basic: 'partial',
        bugkillers: 'yes',
    },
];

export function Comparison() {
    const renderCell = (value: string) => {
        if (value === 'yes') {
            return <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />;
        }
        if (value === 'no') {
            return <X className="w-5 h-5 text-gray-400 mx-auto" />;
        }
        if (value === 'partial') {
            return <Minus className="w-5 h-5 text-yellow-500 mx-auto" />;
        }
        return value;
    };

    return (
        <section className="py-20 px-4 bg-white dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5 transition-colors duration-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white">
                    Por que BugKillers?
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-slate-500 dark:text-gray-500 font-medium">Recurso</th>
                                <th className="p-4 text-slate-500 dark:text-gray-500 font-medium text-center">QA Manual</th>
                                <th className="p-4 text-slate-500 dark:text-gray-500 font-medium text-center">Geradores Básicos</th>
                                <th className="p-4 text-slate-900 dark:text-white font-bold text-center bg-blue-600/10 rounded-t-xl border-t border-x border-blue-600/20">
                                    BugKillers AI
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {comparisonData.map((row, index) => (
                                <tr key={row.feature}>
                                    <td className="p-4 text-slate-900 dark:text-white font-medium">{row.feature}</td>
                                    <td className="p-4 text-slate-600 dark:text-gray-400 text-center">{renderCell(row.manual)}</td>
                                    <td className="p-4 text-slate-600 dark:text-gray-400 text-center">{renderCell(row.basic)}</td>
                                    <td className={`p-4 text-green-600 dark:text-green-400 font-bold text-center bg-blue-600/5 border-x border-blue-600/20 ${index === comparisonData.length - 1 ? 'rounded-b-xl border-b' : ''}`}>
                                        {renderCell(row.bugkillers)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
