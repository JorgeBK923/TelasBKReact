import { Search, Rocket, Code2, Link2 } from "lucide-react";

interface TopicChip {
    icon: React.ReactNode;
    label: string;
}

const popularTopics: TopicChip[] = [
    { icon: <Rocket className="size-4" />, label: "Criar cenário" },
    { icon: <Code2 className="size-4" />, label: "Integração Jira" },
    { icon: <Link2 className="size-4" />, label: "Webhook" },
];

interface HelpHeroProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onTagClick: (tag: string) => void;
}

export function HelpHero({ searchQuery, onSearchChange, onTagClick }: HelpHeroProps) {
    return (
        <section className="flex flex-col items-center text-center gap-6 py-6 sm:py-10">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                Central de Ajuda
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                Encontre tutoriais, guias e documentação técnica para maximizar seu uso do BugKillers.
            </p>
            <div className="w-full max-w-2xl relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="size-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                    className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-card-dark border-0 ring-1 ring-slate-200 dark:ring-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary shadow-lg shadow-slate-200/50 dark:shadow-none transition-all text-base"
                    placeholder="Pesquise por artigos, tutoriais ou tópicos (ex: Integração Jira)"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium py-1.5">Populares:</span>
                {popularTopics.map((topic) => (
                    <button
                        key={topic.label}
                        onClick={() => onTagClick(topic.label)}
                        className="px-3 py-1.5 bg-white dark:bg-card-dark border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 rounded-full text-sm text-slate-900 dark:text-slate-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                        <span className="text-slate-500 group-hover:text-primary">{topic.icon}</span>
                        {topic.label}
                    </button>
                ))}
            </div>
        </section>
    );
}
