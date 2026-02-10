'use client';

import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    sortOption: string;
    setSortOption: (sort: string) => void;
}

export function FilterBar({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption
}: FilterBarProps) {
    const categories = ["Todos", "Testes Funcionais", "Segurança", "Performance", "Mobile"];

    return (
        <div className="mb-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between bg-white dark:bg-[#1c2027] p-4 rounded-2xl border border-[#e2e8f0] dark:border-[#3b4554] shadow-sm">
            <div className="relative w-full lg:w-72">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="w-5 h-5" />
                </div>
                <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#101822] border-none ring-1 ring-[#e2e8f0] dark:ring-[#3b4554] rounded-xl text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all placeholder:text-slate-400"
                    placeholder="Buscar agentes..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar w-full lg:w-auto">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === category
                                ? "bg-primary text-white shadow-md shadow-primary/20"
                                : "bg-slate-50 dark:bg-[#101822] text-slate-600 dark:text-slate-400 border border-[#e2e8f0] dark:border-[#3b4554] hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto">
                <label className="hidden lg:block text-xs font-bold text-slate-400 uppercase tracking-wider">Ordenar por:</label>
                <div className="relative w-full lg:w-44">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 bg-slate-50 dark:bg-[#101822] border-none ring-1 ring-[#e2e8f0] dark:ring-[#3b4554] rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary appearance-none text-slate-900 dark:text-white cursor-pointer transition-all"
                    >
                        <option>Mais usados</option>
                        <option>Recentes</option>
                        <option>A-Z</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
