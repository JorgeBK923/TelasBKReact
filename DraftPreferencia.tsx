< !DOCTYPE html >
    <html class="light" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>BugKillers Settings &amp; Preferences</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "primary": "#0033ff",
            "primary-light": "#EEF2FF",
            "background-light": "#F5F6F8",
            "background-dark": "#0f1323",
            "card-dark": "#1C1C1E",
                    },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
                    },
            borderRadius: {
                "DEFAULT": "0.5rem",
            "lg": "0.75rem",
            "xl": "1rem",
            "2xl": "1.5rem",
            "full": "9999px"
                    },
            boxShadow: {
                'glow': '0 4px 12px rgba(0, 51, 255, 0.25)',
                    }
                },
            },
        }
        </script>
        <style>
            ::-webkit-scrollbar {
                width: 6px;
            height: 6px;
        }
            ::-webkit-scrollbar-track {
                background: transparent; 
        }
            ::-webkit-scrollbar-thumb {
                background: #cbd5e1;
            border-radius: 3px;
        }
            ::-webkit-scrollbar-thumb:hover {
                background: #94a3b8; 
        }
            .dark ::-webkit-scrollbar-thumb {
                background: #334155; 
        }
            .no-scrollbar::-webkit-scrollbar {
                display: none;
        }
            .no-scrollbar {
                -ms - overflow - style: none;
            scrollbar-width: none;
        }
            @keyframes fadeIn {
                from {opacity: 0; transform: translateY(4px); }
            to {opacity: 1; transform: translateY(0); }
        }
            .animate-fade-in-up {
                animation: fadeIn 0.4s ease-out forwards;
        }.toggle-checkbox:checked {
                right: 0;
            border-color: #0033ff;
        }
            .toggle-checkbox:checked + .toggle-label {
                background - color: #0033ff;
        }
        </style>
    </head>
        <body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased h-screen flex flex-col overflow-hidden transition-colors duration-300">
            <header class="flex-none h-16 bg-primary dark:bg-card-dark border-b border-primary dark:border-white/10 px-4 lg:px-8 flex items-center justify-between z-20 transition-colors duration-300">
                <div class="flex items-center gap-3">
                    <div class="size-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined text-2xl">pest_control</span>
                    </div>
                    <h1 class="text-xl font-bold tracking-tight text-white dark:text-white">BugKillers</h1>
                </div>
                <div class="flex items-center gap-6">
                    <button class="flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 dark:text-slate-400 dark:hover:bg-white/5 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
                        <span class="material-symbols-outlined hidden dark:block">light_mode</span>
                        <span class="material-symbols-outlined block dark:hidden">dark_mode</span>
                    </button>
                    <div class="h-8 w-[1px] bg-white/20 dark:bg-white/10"></div>
                    <div class="flex items-center gap-3 cursor-pointer">
                        <div class="size-9 rounded-full bg-cover bg-center border-2 border-white/30 dark:border-white/10 shadow-sm" data-alt="Portrait of Ricardo Dev user" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUaP6h1-QAx14fZulD0gmZpcE5tBE_cCO_eZzXnb3utyw7O7nrHiQfQXmMUvnjfFbS8V-vGEMBE8-4BQ4smsOh0WYKExzBXa6-HFINUz8PNPvQjqFH5BVh-j1jb1Nkwn0ZxFImqfkcgotWkqj8k_7uV3di_d9x0NjKVqfUXOIeO7gU5giKmPt6kojOXrsDs7gOLWNeaTGV7RlCsOJFFDbolz7O6Ev8yVLaENQv0gShTMhSyPWIGdK6L6-lhWlq8N6U3jq4ciGFd2U');">
                            <div class="bg-green-500 size-2.5 border border-primary dark:border-card-dark rounded-full absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4"></div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="flex flex-1 overflow-hidden">
                <aside class="w-64 flex-none bg-white dark:bg-card-dark border-r border-slate-200 dark:border-white/10 flex flex-col justify-between py-6 hidden md:flex transition-colors duration-300">
                    <nav class="flex flex-col gap-1">
                        <p class="px-8 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Conta</p>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">person</span>
                            <span class="text-sm font-medium">Dados</span>
                        </a>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">credit_card</span>
                            <span class="text-sm font-medium">Plano</span>
                        </a>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">bar_chart</span>
                            <span class="text-sm font-medium">Uso</span>
                        </a>
                        <p class="px-8 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-6">Sistema</p>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">extension</span>
                            <span class="text-sm font-medium">Integrações</span>
                        </a>
                        <a class="flex items-center gap-3 pl-[20px] pr-4 py-3 bg-primary-light dark:bg-primary/20 border-l-[4px] border-primary text-slate-900 dark:text-white transition-colors" href="#">
                            <span class="material-symbols-outlined text-[20px] text-primary">settings</span>
                            <span class="text-sm font-semibold">Preferências</span>
                        </a>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">lock</span>
                            <span class="text-sm font-medium">Segurança</span>
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12 transition-colors duration-300">
                    <div class="md:hidden flex overflow-x-auto pb-2 gap-2 no-scrollbar mb-6 -mx-4 px-4">
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Dados</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Plano</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Uso</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Integrações</a>
                        <a class="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap" href="#">Preferências</a>
                    </div>
                    <div class="max-w-5xl mx-auto flex flex-col gap-6">
                        <div class="w-full bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-start justify-between transition-colors">
                            <div class="flex flex-col sm:flex-row items-start gap-5">
                                <div class="flex flex-col items-center gap-3">
                                    <div class="relative">
                                        <div class="size-20 rounded-full bg-cover bg-center ring-4 ring-slate-50 dark:ring-white/5" data-alt="Ricardo Dev profile picture" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrzo0FcvIunHSpnEoPZ8JbTeyUACHHixGsutFCzHk5sHWyA9u5blbx8Dz6Nn9tZcU9w3rnrU0pYXoLtsXxhHW3zJT7wW1IVym5fOKisUZwh4M-ppc3f7RHZlsufb5BjepVXMn08hUkUPSqSmRXNru5FyUi6feECZjTv-ML92XcvkSojBtITpKIDnrNxj0n5TUiGN4R8SghPXOjrN7pJlklAUEjISeh7l8lgs7Hu54swag2xMgIJVujvL8DbqZsMAq6zeFtwzDeCLI');"></div>
                                        <div class="absolute bottom-0 right-0 bg-green-500 size-4 border-2 border-white dark:border-card-dark rounded-full" title="Online"></div>
                                    </div>
                                    <div class="flex gap-2">
                                        <button class="px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary/5 text-xs font-semibold transition-colors">Alterar Foto</button>
                                        <button class="px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-xs font-semibold transition-colors">Remover</button>
                                    </div>
                                    <p class="text-[10px] text-slate-400 text-center leading-tight w-24">JPG, PNG até 5MB</p>
                                </div>
                                <div class="flex flex-col mt-1">
                                    <div class="flex items-center gap-3 flex-wrap mb-1">
                                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Ricardo Dev</h2>
                                        <span class="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide">Plano Enterprise</span>
                                    </div>
                                    <p class="text-slate-500 dark:text-slate-400">ricardo@bugkillers.ai</p>
                                    <div class="flex flex-col gap-1 mt-3">
                                        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                            <span class="material-symbols-outlined text-[14px]">calendar_month</span>
                                            Membro desde Janeiro 2026
                                        </div>
                                        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                            <span class="material-symbols-outlined text-[14px]">schedule</span>
                                            Última atividade: há 5 minutos
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
                                <button class="flex-1 md:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    Ver Perfil Público
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-end gap-4 mt-2">
                            <div class="flex flex-col gap-1">
                                <h3 class="text-xl font-bold text-slate-900 dark:text-white">Preferências da Conta</h3>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">Personalize sua experiência, notificações e configurações regionais.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-6">
                                <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 0ms;">
                                    <div class="flex items-center gap-3 mb-6">
                                        <div class="size-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                                            <span class="material-symbols-outlined text-xl">palette</span>
                                        </div>
                                        <h4 class="text-lg font-bold text-slate-900 dark:text-white">Interface &amp; Idioma</h4>
                                    </div>
                                    <div class="space-y-6">
                                        <div>
                                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Tema da Interface</label>
                                            <div class="grid grid-cols-3 gap-3">
                                                <label class="cursor-pointer group">
                                                    <input class="peer sr-only" name="theme" type="radio" />
                                                    <div class="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                                        <span class="material-symbols-outlined text-slate-500 peer-checked:text-primary mb-1">light_mode</span>
                                                        <p class="text-xs font-semibold text-slate-600 dark:text-slate-300 peer-checked:text-primary">Light</p>
                                                    </div>
                                                </label>
                                                <label class="cursor-pointer group">
                                                    <input class="peer sr-only" name="theme" type="radio" />
                                                    <div class="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                                        <span class="material-symbols-outlined text-slate-500 peer-checked:text-primary mb-1">dark_mode</span>
                                                        <p class="text-xs font-semibold text-slate-600 dark:text-slate-300 peer-checked:text-primary">Dark</p>
                                                    </div>
                                                </label>
                                                <label class="cursor-pointer group">
                                                    <input checked="" class="peer sr-only" name="theme" type="radio" />
                                                    <div class="p-3 rounded-lg border border-slate-200 dark:border-white/10 peer-checked:border-primary peer-checked:bg-primary-light/50 dark:peer-checked:bg-primary/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center">
                                                        <span class="material-symbols-outlined text-slate-500 peer-checked:text-primary mb-1">settings_system_daydream</span>
                                                        <p class="text-xs font-semibold text-slate-600 dark:text-slate-300 peer-checked:text-primary">System</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="language">Idioma</label>
                                            <div class="relative">
                                                <select class="w-full rounded-lg border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-700 dark:text-slate-300 text-sm focus:ring-primary focus:border-primary" id="language">
                                                    <option value="pt-BR">Português (Brasil)</option>
                                                    <option value="en-US">English (US)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 200ms;">
                                    <div class="flex items-center gap-3 mb-6">
                                        <div class="size-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <span class="material-symbols-outlined text-xl">notifications_active</span>
                                        </div>
                                        <h4 class="text-lg font-bold text-slate-900 dark:text-white">Notificações Push</h4>
                                    </div>
                                    <div class="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                                        <div class="flex flex-col gap-1 pr-4">
                                            <span class="text-sm font-bold text-slate-900 dark:text-white">Ativar notificações no navegador</span>
                                            <span class="text-xs text-slate-500 dark:text-slate-400">Receba alertas em tempo real mesmo com a aba fechada.</span>
                                        </div>
                                        <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <input class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300" id="push-toggle" name="toggle" type="checkbox" />
                                            <label class="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer" for="push-toggle"></label>
                                        </div>
                                    </div>
                                    <div class="mt-4 flex gap-2">
                                        <span class="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/20">Atenção</span>
                                        <p class="text-xs text-slate-500 dark:text-slate-400 self-center">Você precisará permitir permissões no navegador.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6">
                                <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 100ms;">
                                    <div class="flex items-center gap-3 mb-6">
                                        <div class="size-10 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                            <span class="material-symbols-outlined text-xl">mail</span>
                                        </div>
                                        <h4 class="text-lg font-bold text-slate-900 dark:text-white">Notificações por Email</h4>
                                    </div>
                                    <div class="space-y-4">
                                        <div class="flex items-center justify-between">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Cenários gerados</span>
                                                <span class="text-xs text-slate-500 dark:text-slate-400">Receba um resumo quando um lote for concluído.</span>
                                            </div>
                                            <input checked="" class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                        </div>
                                        <hr class="border-slate-100 dark:border-white/5" />
                                        <div class="flex items-center justify-between">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Novos agentes lançados</span>
                                                <span class="text-xs text-slate-500 dark:text-slate-400">Saiba quando novos modelos de IA estiverem disponíveis.</span>
                                            </div>
                                            <input checked="" class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                        </div>
                                        <hr class="border-slate-100 dark:border-white/5" />
                                        <div class="flex items-center justify-between">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Alertas de limite de uso</span>
                                                <span class="text-xs text-slate-500 dark:text-slate-400">Quando você atingir 80% do seu plano mensal.</span>
                                            </div>
                                            <input checked="" class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                        </div>
                                        <hr class="border-slate-100 dark:border-white/5" />
                                        <div class="flex items-center justify-between">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Newsletter</span>
                                                <span class="text-xs text-slate-500 dark:text-slate-400">Dicas de QA e atualizações da plataforma.</span>
                                            </div>
                                            <input class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                        </div>
                                    </div>
                                    <div class="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                                        <h5 class="text-sm font-bold text-slate-900 dark:text-white mb-4">Produto</h5>
                                        <div class="space-y-4">
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Avisos de manutenção</span>
                                                    <span class="text-xs text-slate-500 dark:text-slate-400">Receba alertas sobre interrupções planejadas.</span>
                                                </div>
                                                <input checked="" class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                            </div>
                                            <hr class="border-slate-100 dark:border-white/5" />
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Atualizações importantes</span>
                                                    <span class="text-xs text-slate-500 dark:text-slate-400">Notificações sobre grandes mudanças no sistema.</span>
                                                </div>
                                                <input checked="" class="rounded border-slate-300 text-primary focus:ring-primary size-5" type="checkbox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10 mt-2">
                            <button class="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                Cancelar
                            </button>
                            <button class="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-glow opacity-90 cursor-wait transition-all">
                                <svg class="animate-spin size-4 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                                </svg>
                                Salvando...
                            </button>
                        </div>
                        <footer class="max-w-4xl mx-auto mt-6 mb-4 text-center">
                            <p class="text-xs text-slate-400 dark:text-slate-600">© 2026 BugKillers AI. All rights reserved.</p>
                        </footer>
                    </div>
                </main>
            </div>
            <div class="fixed bottom-8 right-8 z-50 animate-fade-in-up">
                <div class="flex items-center gap-3 bg-white dark:bg-[#1C1C1E] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-4 pr-6">
                    <div class="flex-none text-green-500">
                        <span class="material-symbols-outlined">check_circle</span>
                    </div>
                    <p class="text-sm font-medium text-slate-900 dark:text-white">Preferências salvas com sucesso</p>
                </div>
            </div>
        </body></html>