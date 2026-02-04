< !DOCTYPE html >
    <html class="light" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>BugKillers Settings &amp; Profile</title>
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
        <style>::-webkit-scrollbar {
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
        }.no-scrollbar::-webkit-scrollbar {
                display: none;
        }
            .no-scrollbar {
                -ms - overflow - style: none;
            scrollbar-width: none;
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
                        <a class="flex items-center gap-3 pl-[20px] pr-4 py-3 bg-primary-light dark:bg-primary/20 border-l-[4px] border-primary text-slate-900 dark:text-white transition-colors" href="#">
                            <span class="material-symbols-outlined text-[20px] font-semibold text-primary">person</span>
                            <span class="text-sm font-semibold">Dados</span>
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
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
                            <span class="text-sm font-medium">Preferências</span>
                        </a>
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">lock</span>
                            <span class="text-sm font-medium">Segurança</span>
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12 transition-colors duration-300">
                    <div class="md:hidden flex overflow-x-auto pb-2 gap-2 no-scrollbar mb-6 -mx-4 px-4">
                        <a class="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap" href="#">Dados</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Plano</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Uso</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Segurança</a>
                    </div>
                    <div class="max-w-4xl mx-auto flex flex-col gap-6">
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
                        <div class="flex flex-col gap-1 mt-2">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Dados Pessoais</h3>
                            <p class="text-slate-500 dark:text-slate-400 text-sm">Gerencie suas informações pessoais e detalhes da conta.</p>
                        </div>
                        <div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
                            <div class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                <div class="col-span-1">
                                    <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Nome Completo</label>
                                    <input class="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none" type="text" value="Ricardo Dev" />
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Email</label>
                                    <div class="relative">
                                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
                                        <input class="w-full h-12 pl-10 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none" type="email" value="ricardo@bugkillers.ai" />
                                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-[20px]" title="Verificado">check_circle</span>
                                    </div>
                                    <p class="text-xs text-green-600 dark:text-green-500 mt-1.5 font-medium flex items-center gap-1">
                                        <span class="material-symbols-outlined text-[14px] fill-1">verified</span>
                                        Email verificado
                                    </p>
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Empresa</label>
                                    <div class="relative">
                                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">domain</span>
                                        <input class="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none" type="text" value="BugKillers Inc." />
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Cargo</label>
                                    <input class="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none" type="text" value="CTO &amp; Co-Founder" />
                                </div>
                                <div class="col-span-1">
                                    <label class="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Telefone</label>
                                    <div class="relative">
                                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">smartphone</span>
                                        <input class="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 transition-all outline-none" type="tel" value="+55 11 99999-9999" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-6 md:px-8 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5 flex items-center justify-end gap-3">
                                <div class="flex items-center gap-1 text-green-600 dark:text-green-500 text-sm font-semibold mr-2 animate-pulse">
                                    <span class="material-symbols-outlined text-[18px]">check_circle</span>
                                    Perfil atualizado!
                                </div>
                                <button class="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                    Cancelar
                                </button>
                                <button class="px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-glow flex items-center gap-2 transition-all active:scale-95">
                                    <span class="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                                    Salvando...
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 mt-4">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Assinatura</h3>
                        </div>
                        <div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6 md:p-8">
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-6">
                                <div>
                                    <div class="flex items-center gap-3">
                                        <h4 class="text-xl font-bold text-slate-900 dark:text-white">Plano Enterprise</h4>
                                        <span class="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase flex items-center gap-1.5">
                                            <span class="size-2 bg-green-500 rounded-full"></span>
                                            🟢 ATIVO
                                        </span>
                                    </div>
                                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Sua próxima cobrança será em <span class="font-semibold text-slate-700 dark:text-white">01 Fevereiro 2026</span></p>
                                </div>
                                <div class="text-left md:text-right flex flex-col md:items-end gap-2">
                                    <div class="text-2xl font-bold text-slate-900 dark:text-white">R$ 497<span class="text-sm font-normal text-slate-500">/mês</span></div>
                                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <span class="material-symbols-outlined text-[16px]">description</span>
                                        Ver histórico de faturas
                                    </button>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-3">
                                    <p class="text-sm font-bold text-slate-900 dark:text-white">Inclui:</p>
                                    <ul class="space-y-2">
                                        <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <span class="material-symbols-outlined text-green-500 text-[20px]">check</span>
                                            Cenários ilimitados
                                        </li>
                                        <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <span class="material-symbols-outlined text-green-500 text-[20px]">check</span>
                                            Todos os agentes (atuais + futuros)
                                        </li>
                                        <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <span class="material-symbols-outlined text-green-500 text-[20px]">check</span>
                                            Suporte prioritário
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col sm:flex-row items-center justify-end gap-3 mt-4 md:mt-0 content-end">
                                    <button class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
                                        Comparar Planos
                                    </button>
                                    <button class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                                        Gerenciar Assinatura
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 mt-4">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Visão Geral de Uso</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-white/5 p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h4 class="font-bold text-slate-900 dark:text-white">Consumo de Janeiro 2026</h4>
                                    <span class="text-xs font-semibold bg-slate-100 dark:bg-white/10 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Mensal</span>
                                </div>
                                <div class="flex items-end gap-1 mb-2">
                                    <span class="text-3xl font-bold text-slate-900 dark:text-white">347</span>
                                    <span class="text-sm text-slate-500 mb-1">de ∞ execuções</span>
                                </div>
                                <div class="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 mb-2 overflow-hidden">
                                    <div class="bg-primary h-2.5 rounded-full" style="width: 15%"></div>
                                </div>
                                <p class="text-xs text-slate-500">O ciclo renova em 3 dias.</p>
                            </div>
                            <div class="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-xl shadow-sm border border-green-600 p-6 text-white relative overflow-hidden">
                                <div class="absolute right-0 top-0 opacity-10 pointer-events-none">
                                    <span class="material-symbols-outlined text-[120px]">savings</span>
                                </div>
                                <div class="relative z-10">
                                    <h4 class="font-bold text-white/90 flex items-center gap-2">
                                        💰 Economia Estimada
                                    </h4>
                                    <p class="text-white/80 text-sm mt-1 mb-4">Graças à automação BugKillers neste mês.</p>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <p class="text-xs text-white/70 uppercase font-semibold">Horas Salvas</p>
                                            <p class="text-2xl font-bold">124h</p>
                                        </div>
                                        <div>
                                            <p class="text-xs text-white/70 uppercase font-semibold">Custo Evitado</p>
                                            <p class="text-2xl font-bold">R$ 12k</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <h3 class="text-lg font-bold text-red-600 dark:text-red-500 mb-4">Zona de Perigo</h3>
                            <div class="rounded-xl border border-red-200 dark:border-red-900/50 bg-white dark:bg-card-dark p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <h4 class="text-base font-bold text-slate-900 dark:text-white">Deletar Conta</h4>
                                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
                                        Ao deletar sua conta, todos os dados, configurações e histórico de uso serão permanentemente removidos dos nossos servidores. Esta ação acionará um modal de confirmação e <strong class="text-slate-700 dark:text-slate-300">não pode ser desfeita</strong>.
                                    </p>
                                </div>
                                <button class="shrink-0 px-5 py-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    Deletar Minha Conta
                                </button>
                            </div>
                        </div>
                        <footer class="max-w-4xl mx-auto mt-6 mb-4 text-center">
                            <p class="text-xs text-slate-400 dark:text-slate-600">© 2026 BugKillers AI. All rights reserved.</p>
                        </footer>
                    </div>
                </main>
            </div>
        </body></html>