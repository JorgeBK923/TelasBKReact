import { Megaphone } from "lucide-react";

interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

const timelineItems: TimelineItem[] = [
    { date: "Nov 14", title: "Integração Azure DevOps", description: "Sincronização bidirecional de bugs e work items agora disponível no plano Enterprise." },
    { date: "Nov 02", title: "Melhoria nas Asserções de IA", description: "O algoritmo de validação visual está 40% mais rápido em telas complexas." },
    { date: "Out 28", title: "Dark Mode (Beta)", description: "Agora você pode usar o BugKillers com o tema escuro. Ative nas configurações." },
];

export function WhatsNew() {
    return (
        <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 h-fit">
            <div className="flex items-center gap-2 mb-6">
                <Megaphone className="size-5 text-primary" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Novidades</h3>
            </div>
            <div className="relative border-l-2 border-primary/20 ml-2 space-y-8 pb-2">
                {timelineItems.map((item) => (
                    <div key={item.date} className="relative pl-6">
                        <div className="absolute -left-[9px] top-1 size-4 bg-white dark:bg-card-dark border-2 border-primary rounded-full" />
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.date}</span>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm mt-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
            <span className="mt-6 block text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer">
                Ver changelog completo &rarr;
            </span>
        </div>
    );
}
