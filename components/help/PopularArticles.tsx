import { Clock } from "lucide-react";
import { Article } from "@/constants/help-data";

interface PopularArticlesProps {
    articles: Article[];
}

export function PopularArticles({ articles }: PopularArticlesProps) {
    if (articles.length === 0) return null;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Artigos Populares</h3>
                <span className="text-primary text-sm font-medium hover:underline cursor-pointer">Ver todos</span>
            </div>
            <div className="space-y-4">
                {articles.map((article) => (
                    <article
                        key={article.title}
                        className="bg-white dark:bg-card-dark p-5 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm flex items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors group cursor-pointer"
                    >
                        <div className="flex flex-col gap-1">
                            <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{article.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{article.description}</p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">
                            <Clock className="size-3.5" />
                            {article.readTime}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
