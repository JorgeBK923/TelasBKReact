<!DOCTYPE html>

<html class="light" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BugKillers Help Center</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0033ff",
                        "background-light": "#f8fafc",
                        "background-dark": "#0f1323",
                        "text-main": "#101218",
                        "text-sub": "#5e678d",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary/20">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="bg-primary text-white border-b border-primary/10 sticky top-0 z-50">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex h-16 items-center justify-between">
<!-- Logo Area -->
<div class="flex items-center gap-2">
<div class="size-8 bg-white text-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">pest_control</span>
</div>
<h1 class="text-xl font-bold tracking-tight">BugKillers</h1>
</div>
<!-- Navigation Links -->
<div class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-white/80 transition-colors" href="#">Dashboard</a>
<a class="text-sm font-medium hover:text-white/80 transition-colors" href="#">Docs</a>
<a class="text-sm font-medium hover:text-white/80 transition-colors" href="#">API</a>
<a class="text-sm font-medium hover:text-white/80 transition-colors" href="#">Community</a>
</div>
<!-- User Actions -->
<div class="flex items-center gap-4">
<button class="hidden sm:flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all">
                            Log out
                        </button>
<div class="relative">
<div class="size-9 rounded-full bg-white/20 bg-cover bg-center border-2 border-white/30 cursor-pointer" data-alt="User profile avatar showing a smiling woman" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWMtZI5GCQkI5Azs1q9EdE13Vpz0ivveewPMDm2PKWRVhecdHoCEmztXUr06GhwtVAkybzo0J5yxqVeDw7rApOZq-Pk8TeNPYxxNimG_FZTt6cUlAbLQ107eq0L7NUvOw9vRqnefkSNC3YNGx2NjWG5xI_4kzB0LbxNFLLSw-56DLZ-sR7A2Rw58Ptm-kS6xqrmocOeHmgWgXj4eXJpVXMVZvX6xeSfUVER8nxaDV3xqjfECzpPTLdxbDKSE1G0YbRObQnUhaPwbQ');"></div>
<div class="absolute bottom-0 right-0 size-2.5 bg-green-400 border-2 border-primary rounded-full"></div>
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
<!-- Breadcrumbs -->
<nav class="flex text-sm text-text-sub">
<a class="hover:text-primary transition-colors" href="#">Home</a>
<span class="mx-2">/</span>
<span class="text-text-main font-medium">Ajuda</span>
</nav>
<!-- Hero Section -->
<section class="flex flex-col items-center text-center gap-6 py-6 sm:py-10">
<h2 class="text-4xl sm:text-5xl font-black tracking-tight text-text-main">
                    Central de Ajuda
                </h2>
<p class="text-lg text-text-sub max-w-2xl">
                    Encontre tutoriais, guias e documentação técnica para maximizar seu uso do BugKillers.
                </p>
<!-- Search Bar -->
<div class="w-full max-w-2xl relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="block w-full pl-12 pr-4 py-4 bg-white border-0 ring-1 ring-slate-200 rounded-xl text-text-main placeholder:text-slate-400 focus:ring-2 focus:ring-primary shadow-lg shadow-slate-200/50 transition-all text-base" placeholder="Pesquise por artigos, tutoriais ou tópicos (ex: Integração Jira)" type="text"/>
</div>
<!-- Chips -->
<div class="flex flex-wrap justify-center gap-3">
<span class="text-sm text-text-sub font-medium py-1.5">Populares:</span>
<a class="px-3 py-1.5 bg-white border border-slate-200 hover:border-primary/50 hover:bg-primary/5 rounded-full text-sm text-text-main transition-colors flex items-center gap-1.5 group" href="#">
<span class="material-symbols-outlined text-[16px] text-text-sub group-hover:text-primary">rocket_launch</span>
                        Criar cenário
                    </a>
<a class="px-3 py-1.5 bg-white border border-slate-200 hover:border-primary/50 hover:bg-primary/5 rounded-full text-sm text-text-main transition-colors flex items-center gap-1.5 group" href="#">
<span class="material-symbols-outlined text-[16px] text-text-sub group-hover:text-primary">integration_instructions</span>
                        Integração Jira
                    </a>
<a class="px-3 py-1.5 bg-white border border-slate-200 hover:border-primary/50 hover:bg-primary/5 rounded-full text-sm text-text-main transition-colors flex items-center gap-1.5 group" href="#">
<span class="material-symbols-outlined text-[16px] text-text-sub group-hover:text-primary">webhook</span>
                        Webhook
                    </a>
</div>
</section>
<!-- Category Grid -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        🚀
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Primeiros Passos</h3>
<p class="text-text-sub text-sm leading-relaxed">Instale o BugKillers, configure sua conta e comece a criar seus primeiros testes.</p>
</div>
</a>
<!-- Card 2 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        ✏️
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Agente AI</h3>
<p class="text-text-sub text-sm leading-relaxed">Aprenda como treinar o Agente AI para detectar bugs complexos automaticamente.</p>
</div>
</a>
<!-- Card 3 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        ⚙️
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Integrações</h3>
<p class="text-text-sub text-sm leading-relaxed">Conecte com Jira, Slack, GitHub e outras ferramentas do seu ecossistema.</p>
</div>
</a>
<!-- Card 4 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        💡
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Melhores Práticas</h3>
<p class="text-text-sub text-sm leading-relaxed">Guias avançados de BDD e estratégias de QA para times de alta performance.</p>
</div>
</a>
<!-- Card 5 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        🔒
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Segurança</h3>
<p class="text-text-sub text-sm leading-relaxed">Informações sobre conformidade SOC2, criptografia de dados e permissões.</p>
</div>
</a>
<!-- Card 6 -->
<a class="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col gap-4" href="#">
<div class="size-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        💳
                    </div>
<div>
<h3 class="font-bold text-lg text-text-main mb-1 group-hover:text-primary transition-colors">Faturamento</h3>
<p class="text-text-sub text-sm leading-relaxed">Gerencie assinaturas, métodos de pagamento e visualize faturas passadas.</p>
</div>
</a>
</section>
<!-- Main Split Content -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
<!-- Popular Articles (Left 2/3) -->
<div class="lg:col-span-2 flex flex-col gap-6">
<div class="flex items-center justify-between">
<h3 class="text-xl font-bold text-text-main">Artigos Populares</h3>
<a class="text-primary text-sm font-medium hover:underline" href="#">Ver todos</a>
</div>
<div class="space-y-4">
<article class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors group cursor-pointer">
<div class="flex flex-col gap-1">
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">Como criar seu primeiro cenário BDD</h4>
<p class="text-sm text-text-sub line-clamp-1">Passo a passo detalhado utilizando a linguagem Gherkin no editor visual.</p>
</div>
<div class="shrink-0 flex items-center gap-1.5 text-xs font-medium text-text-sub bg-slate-100 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                5 min
                            </div>
</article>
<article class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors group cursor-pointer">
<div class="flex flex-col gap-1">
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">Configurando webhooks para alertas em tempo real</h4>
<p class="text-sm text-text-sub line-clamp-1">Receba notificações no Slack ou Teams sempre que um teste falhar.</p>
</div>
<div class="shrink-0 flex items-center gap-1.5 text-xs font-medium text-text-sub bg-slate-100 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                3 min
                            </div>
</article>
<article class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors group cursor-pointer">
<div class="flex flex-col gap-1">
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">Solução de problemas com o Agente AI</h4>
<p class="text-sm text-text-sub line-clamp-1">O que fazer quando a IA não identifica corretamente um elemento da UI.</p>
</div>
<div class="shrink-0 flex items-center gap-1.5 text-xs font-medium text-text-sub bg-slate-100 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                8 min
                            </div>
</article>
</div>
</div>
<!-- What's New (Right 1/3) -->
<div class="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 h-fit">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-primary">campaign</span>
<h3 class="text-lg font-bold text-text-main">Novidades</h3>
</div>
<div class="relative border-l-2 border-primary/20 ml-2 space-y-8 pb-2">
<!-- Timeline Item 1 -->
<div class="relative pl-6">
<div class="absolute -left-[9px] top-1 size-4 bg-white border-2 border-primary rounded-full"></div>
<span class="text-xs font-bold text-primary uppercase tracking-wide">Nov 14</span>
<h4 class="font-semibold text-text-main text-sm mt-1">Integração Azure DevOps</h4>
<p class="text-xs text-text-sub mt-1 leading-relaxed">Sincronização bidirecional de bugs e work items agora disponível no plano Enterprise.</p>
</div>
<!-- Timeline Item 2 -->
<div class="relative pl-6">
<div class="absolute -left-[9px] top-1 size-4 bg-white border-2 border-primary rounded-full"></div>
<span class="text-xs font-bold text-primary uppercase tracking-wide">Nov 02</span>
<h4 class="font-semibold text-text-main text-sm mt-1">Melhoria nas Asserções de IA</h4>
<p class="text-xs text-text-sub mt-1 leading-relaxed">O algoritmo de validação visual está 40% mais rápido em telas complexas.</p>
</div>
<!-- Timeline Item 3 -->
<div class="relative pl-6">
<div class="absolute -left-[9px] top-1 size-4 bg-white border-2 border-primary rounded-full"></div>
<span class="text-xs font-bold text-primary uppercase tracking-wide">Out 28</span>
<h4 class="font-semibold text-text-main text-sm mt-1">Dark Mode (Beta)</h4>
<p class="text-xs text-text-sub mt-1 leading-relaxed">Agora você pode usar o BugKillers com o tema escuro. Ative nas configurações.</p>
</div>
</div>
<a class="mt-6 block text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">
                        Ver changelog completo →
                    </a>
</div>
</div>
<!-- Video Tutorials -->
<section class="mt-6">
<h3 class="text-xl font-bold text-text-main mb-6">Tutoriais em Vídeo</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Video 1 -->
<div class="group cursor-pointer">
<div class="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-3">
<div class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Laptop screen showing data charts and code" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsYMQ1HWu3li0PAgLk5M51d5Xmlmw3oPvnx4bkNUDlpRujip55D3bmtAjpaAGB7walfwmCuWoW57-kFVzxq-_gvcWb5Fk79NkUlmvJsWOdxw_5d6csKwY2MF6bFnW4c563UcwpQTnDRjVovDP70uFdec5Gmg_6xm_oCdMSzMsY0C2RQVt-dxou-MsNcB5_pOZ9OECpblfzkkgFKX3e-yVqUI5IvGImJTGELJ0IMl2MKT58dCW6EwzOeSB1fal3ggfyiGnTlHT2nww');"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-white text-3xl">play_arrow</span>
</div>
</div>
<div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">04:20</div>
</div>
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">Guia de Setup Inicial</h4>
<p class="text-sm text-text-sub mt-1">Configurando seu ambiente em 5 minutos.</p>
</div>
<!-- Video 2 -->
<div class="group cursor-pointer">
<div class="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-3">
<div class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Person writing notes on a diagram flow chart" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjSnziwML5M_rqhxeulXGLIAMv8FIeSq-dr2qcsdbLnYbWZRMeZ53b2SD2RWq5DE8iWO_cHPWgW2JzPRiNAcg0zOjJLHF1t3_LjKHD0mB52cIDtqHH5AbEBgXHJpOPlpS3u1jsZhofepCYciyL1lrFxwNCi0bwLBwhd9gCUPcst2hoyuc--6z4n8HOV2fmbihn3yGNyrJYeMlyVgLcXCWqvSFK-qNoZ8PQl45yiGRCHRkdMRPBxGLpjXDs-x7BdDMUenATgV_MqP8');"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-white text-3xl">play_arrow</span>
</div>
</div>
<div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">12:15</div>
</div>
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">BDD Avançado</h4>
<p class="text-sm text-text-sub mt-1">Escrevendo cenários complexos com Gherkin.</p>
</div>
<!-- Video 3 -->
<div class="group cursor-pointer">
<div class="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-3">
<div class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Team meeting discussing project on whiteboard" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEkUDTltkuWra6UKwPJqHuqJkJNO9FKh5baPrw1k4agHuulhEPLFIqQGsyS0YNHYCOwHkoLnUXC1uZfMt53fAibUPcLpfvX9FRonTRjCI6LZR_4zFWIwQ-KsDAjxTcdAL_04P4qrliZenb-S-BxCceyBhG7mW-7Rwv4o6ktO_IJ5VDtjy8FWGyWywbdBYI9ketFo-rNJ6ZxWIC1CpmHiM8NtrosQ8WiUPfgaO5GipBksalikylXvYHAQ13JsgaA3t0Y3jap8fk9qs');"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-white text-3xl">play_arrow</span>
</div>
</div>
<div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">08:45</div>
</div>
<h4 class="font-semibold text-text-main group-hover:text-primary transition-colors">Gestão de Equipes</h4>
<p class="text-sm text-text-sub mt-1">Permissões, roles e fluxos de aprovação.</p>
</div>
</div>
</section>
<!-- Bottom CTA -->
<section class="mt-8 mb-8">
<div class="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm">
<h2 class="text-2xl font-bold text-text-main mb-3">Não encontrou o que procurava?</h2>
<p class="text-text-sub mb-8 max-w-lg mx-auto">Nossa equipe de suporte está pronta para ajudar você a resolver qualquer problema técnico ou dúvida sobre faturamento.</p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="h-12 px-8 rounded-xl bg-primary text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2 w-full sm:w-auto justify-center">
<span class="material-symbols-outlined text-[20px]">chat</span>
                            Falar com Suporte
                        </button>
<button class="h-12 px-8 rounded-xl bg-white border-2 border-primary text-primary font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
<span class="material-symbols-outlined text-[20px]">calendar_month</span>
                            Agendar Demo
                        </button>
</div>
</div>
</section>
</main>
<!-- Footer Simple -->
<footer class="border-t border-slate-200 py-8 mt-auto">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p class="text-sm text-text-sub">© 2023 BugKillers Inc. Todos os direitos reservados.</p>
<div class="flex gap-6">
<a class="text-sm text-text-sub hover:text-primary" href="#">Termos</a>
<a class="text-sm text-text-sub hover:text-primary" href="#">Privacidade</a>
<a class="text-sm text-text-sub hover:text-primary" href="#">Status</a>
</div>
</div>
</footer>
</div>
</body></html>