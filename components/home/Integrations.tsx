import { CheckSquare, Cloud, Leaf, Play, Rocket } from 'lucide-react';

const integrations = [
    { name: 'Jira', icon: CheckSquare, color: 'text-blue-500' },
    { name: 'Azure', icon: Cloud, color: 'text-blue-400' },
    { name: 'Cucumber', icon: Leaf, color: 'text-green-500' },
    { name: 'Playwright', icon: Play, color: 'text-orange-500' },
    { name: 'Postman', icon: Rocket, color: 'text-orange-600' },
];

export function Integrations() {
    return (
        <section className="border-y border-slate-200 bg-slate-50 dark:border-white/5 dark:bg-slate-900/50 py-8 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-sm font-medium text-slate-500 mb-6">
                    INTEGRADO AO SEU FLUXO DE TRABALHO
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-100 grayscale-0 dark:opacity-60 dark:grayscale dark:hover:grayscale-0 transition-all duration-500">
                    {integrations.map((integration) => (
                        <div key={integration.name} className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                            <integration.icon className={`w-6 h-6 ${integration.color}`} />
                            {integration.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
