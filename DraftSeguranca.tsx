< !DOCTYPE html >
    <html class="light" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>BugKillers Settings &amp; Security</title>
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
        }
            .toggle-checkbox:checked {
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
                        <a class="flex items-center gap-3 px-8 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
                            <span class="text-sm font-medium">Preferências</span>
                        </a>
                        <a class="flex items-center gap-3 pl-[20px] pr-4 py-3 bg-primary-light dark:bg-primary/20 border-l-[4px] border-primary text-slate-900 dark:text-white transition-colors" href="#">
                            <span class="material-symbols-outlined text-[20px] text-primary">lock</span>
                            <span class="text-sm font-semibold">Segurança</span>
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8 lg:px-12 transition-colors duration-300">
                    <div class="md:hidden flex overflow-x-auto pb-2 gap-2 no-scrollbar mb-6 -mx-4 px-4">
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Dados</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Plano</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Uso</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Integrações</a>
                        <a class="flex-none px-4 py-2 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium whitespace-nowrap" href="#">Preferências</a>
                        <a class="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap" href="#">Segurança</a>
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
                                <h3 class="text-xl font-bold text-slate-900 dark:text-white">Segurança da Conta</h3>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">Proteja seu acesso, gerencie sessões e autenticação em duas etapas.</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up flex flex-col justify-between" style="animation-delay: 0ms;">
                                    <div>
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="size-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined text-xl">key</span>
                                            </div>
                                            <h4 class="text-lg font-bold text-slate-900 dark:text-white">Senha</h4>
                                        </div>
                                        <div class="mb-6">
                                            <p class="text-sm text-slate-700 dark:text-slate-300 font-medium">Última alteração: há 45 dias</p>
                                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Sua senha nunca foi comprometida em violações de dados conhecidas.</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <button class="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                                            Alterar senha
                                        </button>
                                        <p class="text-xs text-slate-400 text-center">Use uma senha forte e exclusiva.</p>
                                    </div>
                                </div>
                                <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up flex flex-col justify-between" style="animation-delay: 50ms;">
                                    <div>
                                        <div class="flex items-center justify-between mb-4">
                                            <div class="flex items-center gap-3">
                                                <div class="size-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                                    <span class="material-symbols-outlined text-xl">security</span>
                                                </div>
                                                <h4 class="text-lg font-bold text-slate-900 dark:text-white">Autenticação em Dois Fatores (2FA)</h4>
                                            </div>
                                            <span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wide">Desativado</span>
                                        </div>
                                        <div class="mb-6">
                                            <p class="text-sm text-slate-600 dark:text-slate-400">Adicione uma camada extra de segurança à sua conta exigindo um código do seu smartphone ao fazer login.</p>
                                        </div>
                                    </div>
                                    <button class="w-full px-4 py-2.5 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
                                        Ativar 2FA
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 100ms;">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="size-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <span class="material-symbols-outlined text-xl">devices</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <h4 class="text-lg font-bold text-slate-900 dark:text-white">Sessões Ativas</h4>
                                        <p class="text-xs text-slate-500 dark:text-slate-400">Gerencie e saia de suas sessões ativas em outros navegadores e dispositivos.</p>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-primary/20 dark:border-primary/20">
                                        <div class="flex items-start gap-4">
                                            <div class="mt-1">
                                                <span class="material-symbols-outlined text-slate-500 dark:text-slate-400 text-2xl">laptop_windows</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span class="text-sm font-bold text-slate-900 dark:text-white">Chrome no Windows</span>
                                                    <span class="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase">Este dispositivo</span>
                                                </div>
                                                <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                                    <span>São Paulo, BR</span>
                                                    <span class="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                                    <span class="text-green-600 dark:text-green-400 font-medium">Ativo agora</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <div class="flex items-start gap-4">
                                            <div class="mt-1">
                                                <span class="material-symbols-outlined text-slate-400 text-2xl">phone_iphone</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <span class="text-sm font-medium text-slate-900 dark:text-white">Safari no iPhone 14</span>
                                                <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                                    <span>Rio de Janeiro, BR</span>
                                                    <span class="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                                    <span>Última atividade: há 2 horas</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/20 rounded-lg hover:bg-white dark:hover:bg-white/10 hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap">
                                            Encerrar sessão
                                        </button>
                                    </div>
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <div class="flex items-start gap-4">
                                            <div class="mt-1">
                                                <span class="material-symbols-outlined text-slate-400 text-2xl">laptop_mac</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <span class="text-sm font-medium text-slate-900 dark:text-white">Chrome no MacOS</span>
                                                <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                                    <span>Lisboa, PT</span>
                                                    <span class="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                                    <span>Última atividade: 22 de Out</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/20 rounded-lg hover:bg-white dark:hover:bg-white/10 hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap">
                                            Encerrar sessão
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 flex justify-end">
                                    <button class="px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                                        Encerrar todas as sessões
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 150ms;">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="size-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                        <span class="material-symbols-outlined text-xl">warning</span>
                                    </div>
                                    <h4 class="text-lg font-bold text-slate-900 dark:text-white">Alertas de Segurança</h4>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-start gap-3">
                                        <div class="flex items-center h-5">
                                            <input checked="" class="size-4 rounded border-slate-300 text-primary focus:ring-primary" id="alert-new-device" name="alert-new-device" type="checkbox" />
                                        </div>
                                        <div class="text-sm">
                                            <label class="font-medium text-slate-900 dark:text-white" for="alert-new-device">Login em novo dispositivo</label>
                                            <p class="text-slate-500 dark:text-slate-400 text-xs">Receba um email sempre que sua conta for acessada de um dispositivo não reconhecido.</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="flex items-center h-5">
                                            <input checked="" class="size-4 rounded border-slate-300 text-primary focus:ring-primary" id="alert-password" name="alert-password" type="checkbox" />
                                        </div>
                                        <div class="text-sm">
                                            <label class="font-medium text-slate-900 dark:text-white" for="alert-password">Alteração de senha</label>
                                            <p class="text-slate-500 dark:text-slate-400 text-xs">Notificação imediata se sua senha for alterada.</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="flex items-center h-5">
                                            <input checked="" class="size-4 rounded border-slate-300 text-primary focus:ring-primary" id="alert-2fa" name="alert-2fa" type="checkbox" />
                                        </div>
                                        <div class="text-sm">
                                            <label class="font-medium text-slate-900 dark:text-white" for="alert-2fa">Desativação de 2FA</label>
                                            <p class="text-slate-500 dark:text-slate-400 text-xs">Alerta crítico se a autenticação de dois fatores for removida.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
                                    <button class="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                                        Salvar
                                    </button>
                                </div>
                            </div>
                            <div class="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-6 shadow-sm border border-red-200 dark:border-red-900/50 animate-fade-in-up" style="animation-delay: 200ms;">
                                <h4 class="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Zona de Perigo</h4>
                                <p class="text-sm text-red-600/80 dark:text-red-400/70 mb-6">Ações irreversíveis ou que afetam o acesso à sua conta.</p>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <button class="px-4 py-2.5 rounded-lg border border-red-200 dark:border-red-800 bg-white dark:bg-transparent text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                        Desativar conta
                                    </button>
                                    <button class="px-4 py-2.5 rounded-lg text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                                        Excluir conta permanentemente
                                    </button>
                                </div>
                            </div>
                        </div>
                        <footer class="max-w-4xl mx-auto mt-6 mb-4 text-center">
                            <p class="text-xs text-slate-400 dark:text-slate-600">© 2026 BugKillers AI. All rights reserved.</p>
                        </footer>
                    </div>
                </main>
            </div>

        </body></html>