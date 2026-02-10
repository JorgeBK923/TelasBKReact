interface HelpCategory {
    emoji: string;
    bgClass: string;
    title: string;
    description: string;
}

const categories: HelpCategory[] = [
    { emoji: "\u{1F680}", bgClass: "bg-blue-50 dark:bg-blue-900/20", title: "Primeiros Passos", description: "Instale o BugKillers, configure sua conta e comece a criar seus primeiros testes." },
    { emoji: "\u{270F}\u{FE0F}", bgClass: "bg-purple-50 dark:bg-purple-900/20", title: "Agente AI", description: "Aprenda como treinar o Agente AI para detectar bugs complexos automaticamente." },
    { emoji: "\u{2699}\u{FE0F}", bgClass: "bg-orange-50 dark:bg-orange-900/20", title: "Integrações", description: "Conecte com Jira, Slack, GitHub e outras ferramentas do seu ecossistema." },
    { emoji: "\u{1F4A1}", bgClass: "bg-yellow-50 dark:bg-yellow-900/20", title: "Melhores Práticas", description: "Guias avançados de BDD e estratégias de QA para times de alta performance." },
    { emoji: "\u{1F512}", bgClass: "bg-green-50 dark:bg-green-900/20", title: "Segurança", description: "Informações sobre conformidade SOC2, criptografia de dados e permissões." },
    { emoji: "\u{1F4B3}", bgClass: "bg-gray-50 dark:bg-gray-900/20", title: "Faturamento", description: "Gerencie assinaturas, métodos de pagamento e visualize faturas passadas." },
];

export function CategoryGrid() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
                <div
                    key={cat.title}
                    className="group bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4 cursor-pointer"
                >
                    <div className={`size-12 ${cat.bgClass} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                        {cat.emoji}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{cat.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
