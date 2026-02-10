"use client";

import { useState } from "react";
import {
    HelpHero,
    CategoryGrid,
    PopularArticles,
    WhatsNew,
    VideoTutorials,
    HelpBottomCTA,
} from "@/components/help";
import { helpCategories, popularArticles } from "@/constants/help-data";
import { SearchX } from "lucide-react";

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = helpCategories.filter(cat =>
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredArticles = popularArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const hasResults = filteredCategories.length > 0 || filteredArticles.length > 0;

    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <HelpHero
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onTagClick={setSearchQuery}
            />

            {hasResults ? (
                <>
                    <CategoryGrid categories={filteredCategories} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <PopularArticles articles={filteredArticles} />
                        </div>
                        <WhatsNew />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                    <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full mb-4">
                        <SearchX className="size-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Nenhum resultado encontrado
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md">
                        Não encontramos nada para "{searchQuery}". Tente usar termos diferentes ou navegue pelas categorias abaixo.
                    </p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-6 px-4 py-2 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/20 transition-colors"
                    >
                        Limpar pesquisa
                    </button>
                </div>
            )}

            <VideoTutorials />
            <HelpBottomCTA />
        </div>
    );
}
