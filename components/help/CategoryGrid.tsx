import { HelpCategory } from "@/constants/help-data";

interface CategoryGridProps {
    categories: HelpCategory[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    if (categories.length === 0) return null;

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
