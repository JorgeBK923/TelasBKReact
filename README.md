# 🐛 BugKillers - Plataforma Front-End

Plataforma web desenvolvida com **Next.js 16**, **React 19** e **Tailwind CSS 4** para gerenciamento de testes automatizados e QA.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Componentes](#-componentes)
- [Gerenciamento de Estado](#-gerenciamento-de-estado)
- [Rotas e Páginas](#-rotas-e-páginas)
- [Tratamento de Erros](#-tratamento-de-erros)
- [Performance](#-performance)
- [Segurança](#-segurança)
- [Temas Light/Dark](#-temas-lightdark)
- [Cores Customizadas](#-cores-customizadas)
- [Responsividade](#-responsividade)

---

## 🚀 Tecnologias

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React com App Router |
| **React** | 19.2.3 | Biblioteca de UI |
| **Tailwind CSS** | 4.x | Framework de estilos utilitários |
| **TypeScript** | 5.x | Tipagem estática |
| **lucide-react** | 0.563+ | Biblioteca de ícones |
| **next-themes** | 0.4.6 | Gerenciamento de temas (light/dark) |

---

## 📁 Estrutura do Projeto

```
Projeto-BugKillers/
├── app/                          # App Router do Next.js
│   ├── (agents)/                 # Seleção de Agentes [NOVO]
│   │   ├── agents/               # Galeria de Agentes
│   │   └── error.tsx             # [NOVO] Página de erro do grupo Agents
│   ├── (auth)/                   # Grupo de autenticação [REFATORADO]
│   │   ├── login/                # Página de Login com Tema Dinâmico [REFATORADO]
│   │   ├── register/             # Página de Cadastro (split-screen)
│   │   ├── forgot-password/      # [NOVO] Fluxo de recuperação de senha
│   │   │   ├── page.tsx          # Formulário de email
│   │   │   └── link-sent/page.tsx # Confirmação de envio
│   │   ├── reset-password/       # [NOVO] Redefinição de senha
│   │   │   ├── page.tsx          # Criar nova senha (com ?token=xxx)
│   │   │   ├── success/page.tsx  # Sucesso + auto-redirect 5s
│   │   │   └── expired/page.tsx  # Link expirado
│   │   └── error.tsx             # [NOVO] Página de erro do grupo Auth
│   ├── (onboarding)/             # [NOVO] Fluxo de Onboarding pós-cadastro
│   │   ├── layout.tsx            # Layout compartilhado do onboarding
│   │   ├── plans/                # Seleção de plano (Starter/Pro/Enterprise)
│   │   ├── payment/              # Pagamento com cartão de crédito
│   │   ├── personalization/      # Personalização de workspace e objetivos
│   │   ├── setup/                # Provisionamento do ambiente com timeline
│   │   └── error.tsx             # [NOVO] Página de erro do grupo Onboarding
│   ├── (dashboard)/              # Grupo de rotas do Dashboard
│   │   ├── layout.tsx            # Layout com Header reativo
│   │   ├── dashboard/            # Página principal do painel [REFATORADO]
│   │   ├── help/                 # [NOVO] Central de Ajuda
│   │   ├── profile/              # Página de perfil [REFATORADO]
│   │   ├── settings/             # Página de preferências [REFATORADO]
│   │   ├── security/             # Página de segurança [REFATORADO]
│   │   ├── error.tsx             # [NOVO] Página de erro do grupo Dashboard
│   │   └── ...                   # Páginas de billing, usage, etc
│   ├── (website)/                # Landing page [OTIMIZADO]
│   │   └── contact/              # [NOVO] Página de Contato
│   ├── (workspace)/              # Área de chat e trabalho [REFATORADO]
│   │   ├── layout.tsx            # Sidebar azul dedicada
│   │   ├── chat/                 # Ambiente de Chat IA [REFATORADO]
│   │   └── error.tsx             # [NOVO] Página de erro do grupo Workspace
│   ├── error.tsx                 # [NOVO] Página de erro padrão
│   ├── global-error.tsx          # [NOVO] Página de erro crítico global
│   ├── globals.css               # Estilos globais v4
│   └── layout.tsx                # Root layout (Provider + ErrorBoundary)
│
├── components/                   # Componentes reutilizáveis
│   ├── dashboard/                # Componentes do painel
│   │   ├── Header.tsx            # Cabeçalho azul + toggle tema
│   │   ├── Sidebar.tsx           # Menu lateral com navegação
│   │   ├── ProfileMenu.tsx       # Menu dropdown do perfil [REFATORADO]
│   │   ├── UserProfileCard.tsx   # Card de perfil reutilizável [REFATORADO]
│   │   ├── PhotoUploadModal.tsx  # Upload e ajuste de foto de perfil [REFATORADO]
│   │   ├── ChangePasswordModal.tsx # Modal de troca de senha segura [REFATORADO]
│   │   ├── TwoFactorModal.tsx    # Fluxo de ativação de 2FA
│   │   ├── LogoutAllSessionsModal.tsx # Logout remoto em massa
│   │   ├── NewIntegrationModal.tsx  # Adicionar novas ferramentas
│   │   ├── IntegrationConfigModal.tsx # Configurações de API/Tokens
│   │   ├── IntegrationDisconnectModal.tsx # Confirmação de desconexão
│   │   ├── IntegrationNotifyModal.tsx # Lead capture para ferramentas "Em breve"
│   │   ├── PlansCompareModal.tsx    # Tabela comparativa de planos
│   │   ├── ManageSubscriptionModal.tsx # Gestão de assinatura ativa
│   │   ├── UpdateCardModal.tsx      # Troca de método de pagamento
│   │   ├── CancelSubscriptionModal.tsx # Fluxo de cancelamento
│   │   ├── PauseSubscriptionModal.tsx # Pausa temporária de faturamento
│   │   ├── DeleteAccountModal.tsx # Modal de confirmação de exclusão
│   │   ├── profile/              # [NOVO] Subcomponentes de perfil
│   │   │   ├── SubscriptionCard.tsx  # Card de assinatura do plano
│   │   │   └── UsageOverview.tsx     # Visão geral de consumo e economia
│   │   ├── settings/             # [NOVO] Subcomponentes de preferências
│   │   │   ├── ThemeLanguageCard.tsx       # Seleção de tema e idioma
│   │   │   ├── EmailNotificationsCard.tsx  # Configuração de emails
│   │   │   └── PushNotificationsCard.tsx   # Notificações push do navegador
│   │   └── index.ts              # Exports centralizados
│   │
│   ├── agents/                   # AgentCard, FilterBar [REFATORADO]
│   ├── chat/                     # ChatSidebar, ChatWindow, MessageBubble [REFATORADO]
│   ├── auth/                     # Componentes de autenticação [REFATORADO]
│   │   ├── LoginForm.tsx         # Formulário de login [REFATORADO]
│   │   ├── RegisterForm.tsx      # Formulário de cadastro [REFATORADO]
│   │   ├── SocialButtons.tsx     # Botões sociais (Google, GitHub)
│   │   ├── AuthCardShell.tsx     # [NOVO] Shell reutilizável (bg, overlay, tema, card, logo)
│   │   ├── ForgotPasswordForm.tsx # [NOVO] Input de email + enviar link
│   │   ├── LinkSentCard.tsx      # [NOVO] Confirmação com email mascarado e cooldown
│   │   ├── ResetPasswordForm.tsx # [NOVO] Nova senha com strength bar e checklist
│   │   ├── ResetSuccessCard.tsx  # [NOVO] Sucesso com countdown auto-redirect
│   │   └── ResetExpiredCard.tsx  # [NOVO] Link expirado com reenvio
│   ├── contact/                  # [NOVO] Componentes da página de Contato
│   │   ├── ContactHero.tsx       # Hero da página de contato
│   │   ├── ContactForm.tsx       # Formulário de contato com validação
│   │   ├── SupportChannels.tsx   # Canais de suporte (email, chat, central)
│   │   ├── ContactFAQ.tsx        # Accordion de perguntas frequentes
│   │   ├── DemoCTA.tsx           # CTA para agendar demonstração
│   │   ├── ScheduleDemoModal.tsx # Modal de agendamento de demo
│   │   └── index.ts              # Exports centralizados
│   │
│   ├── onboarding/               # [NOVO] Componentes do fluxo de Onboarding
│   │   ├── OnboardingHeader.tsx  # Header compartilhado (logo + tema)
│   │   ├── PlanCard.tsx          # Card de plano reutilizável (3 variantes)
│   │   ├── PaymentForm.tsx       # Formulário de cartão com formatação
│   │   ├── OrderSummary.tsx      # Resumo do pedido com breakdown
│   │   ├── PersonalizationForm.tsx # Form de workspace, papel e objetivos
│   │   ├── ObjectiveCard.tsx     # Radio card com ícone para objetivos
│   │   ├── SetupProgress.tsx     # Barra de progresso animada (shimmer)
│   │   └── SetupTimeline.tsx     # Timeline de provisionamento (3 estados)
│   │
│   ├── help/                     # [NOVO] Componentes da Central de Ajuda
│   │   ├── HelpHero.tsx          # Busca e chips de tópicos populares
│   │   ├── HelpBreadcrumbs.tsx   # Breadcrumb de navegação
│   │   ├── CategoryGrid.tsx      # Grid de categorias de ajuda
│   │   ├── PopularArticles.tsx   # Artigos mais acessados
│   │   ├── VideoTutorials.tsx    # Grid de vídeo-tutoriais
│   │   ├── WhatsNew.tsx          # Timeline de novidades
│   │   ├── HelpBottomCTA.tsx     # CTA para falar com suporte
│   │   ├── SupportModal.tsx      # Modal de contato com suporte
│   │   └── index.ts              # Exports centralizados
│   │
│   ├── home/                     # Componentes da landing page
│   │   ├── Navbar.tsx            # Navegação do site [REFATORADO]
│   │   ├── Hero.tsx              # Seção hero
│   │   ├── Pricing.tsx           # Tabela de preços
│   │   ├── Footer.tsx            # Rodapé
│   │   └── ...                   # Outros componentes
│   │
│   └── ui/                       # [NOVO] Componentes UI reutilizáveis
│       ├── ErrorBoundary.tsx     # Captura de erros em componentes
│       └── Toggle.tsx            # Switch toggle acessível
│
├── lib/                          # [NOVO] Utilitários compartilhados
│   └── password-utils.ts         # getPasswordStrength, strengthColors, strengthLabels
│
├── hooks/                        # Hooks customizados
│   ├── useClickOutside.ts        # Detecta cliques fora de elementos
│   └── useChat.ts                # Hook de chat IA com streaming simulado
│
├── types/                        # [NOVO] Tipagens TypeScript
│   ├── chat-types.ts             # Interfaces de ChatMessage e Conversation
│   └── onboarding.ts             # [NOVO] Interfaces do fluxo de onboarding
│
├── context/                      # Contexts (Estado Global) [OTIMIZADO]
│   ├── UserContext.tsx            # Dados do usuário e sincronização global [OTIMIZADO]
│   └── OnboardingContext.tsx      # [NOVO] Estado do fluxo de onboarding (sessionStorage)
├── constants/                    # Dados estáticos
│   ├── user.ts                   # Dados iniciais do usuário
│   ├── help-data.ts              # [NOVO] Categorias e artigos da Central de Ajuda
│   └── plans.ts                  # [NOVO] Configurações dos planos (Starter/Pro/Enterprise)
├── providers/                    # Context Providers
│   └── ThemeProvider.tsx         # Provider do next-themes
│
├── public/                       # Arquivos estáticos
│   └── default-avatar.svg       # [NOVO] Avatar padrão local (SVG)
├── next.config.ts                # Configuração do Next.js [REFATORADO]
├── tailwind.config.ts            # Configuração do Tailwind
├── postcss.config.mjs            # Configuração do PostCSS
├── tsconfig.json                 # Configuração do TypeScript
└── package.json                  # Dependências e scripts
```

---

## 💻 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd Projeto-BugKillers

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (localhost:3000) |
| `npm run build` | Gera build de produção |
| `npm start` | Executa build de produção |
| `npm run lint` | Verifica erros de linting |

---

## 🧩 Componentes

### Dashboard (Gestão)

#### `Sidebar.tsx` [REFATORADO]
Menu lateral com navegação organizada por seções:
- **Seções**: Conta (Perfil, Plano, Dados) → Sistema (Integrações, Preferências, Segurança) → Suporte (Ajuda).
- **Novo Link**: Rota `/help` adicionada na seção Suporte com ícone `HelpCircle`.
- **Estado Ativo**: Indicador visual com borda esquerda + fundo highlight.
- **Voltar para Agentes**: Botão de retorno com ícone `Bot`.

#### `Header.tsx` & `ProfileMenu.tsx`
Interface de cabeçalho inteligente:
- **Dados Reativos**: Nome e avatar sincronizados via `UserContext`.
- **Menu Dropdown**: Acesso rápido a configurações e logout (com estados de loading).
- **Tema**: Toggle otimizado entre modo claro e escuro.
- **Imagens Otimizadas**: Migrado para `next/image` com `Image` component. [REFATORADO]
- **Click Outside**: Usa hook `useClickOutside` para fechar o menu. [REFATORADO]
- **Acessibilidade**: Atributos `aria-label`, `aria-expanded` e `aria-haspopup`. [REFATORADO]

#### `dashboard/page.tsx` [REFATORADO]
Página principal do painel com visão geral completa:
- **Métricas de Uso**: Contador de cenários gerados com barra de progresso.
- **Economia Estimada**: Card gradiente com horas salvas e custo evitado (R$).
- **Histórico**: Gráfico de barras com uso dos últimos 6 meses.
- **Performance de Agentes**: Métricas individuais por agente (QA Criador, Funcional Pro, Security Bot, Performance Monitor).
- **Navegação Mobile**: Pills horizontais para acesso rápido às seções.

#### `UserProfileCard.tsx`
Componente central de gestão de perfil:
- **Upload de Avatar**: Integrado ao `PhotoUploadModal`.
- **Sincronização Global**: Atualiza instantaneamente o cabeçalho e as conversas.
- **Imagens Otimizadas**: Migrado para `next/image` com `fill` e `sizes`. [REFATORADO]

### 📊 Perfil (Subcomponentes) [NOVO]

#### `SubscriptionCard.tsx`
Card de visualização da assinatura ativa:
- **Status do Plano**: Indicador visual com badge "ATIVO".
- **Detalhes**: Próxima cobrança, valor mensal e lista de benefícios inclusos.

#### `UsageOverview.tsx`
Visão geral de consumo e economia:
- **Consumo Mensal**: Barra de progresso com execuções realizadas.
- **Economia Estimada**: Card gradiente com horas salvas e custo evitado pela automação.

### ⚙️ Preferências (Subcomponentes) [REFATORADO]

#### `settings/page.tsx` [REFATORADO]
Página de preferências com salvamento assíncrono e tratamento de erros:
- **Async/Await**: `handleSave` migrado para `async/await` com `try/catch`. [REFATORADO]
- **Estado de Erro**: Novo estado `error` com banner `AlertCircle` em vermelho quando falha ao salvar. [REFATORADO]
- **Mensagem**: "Não foi possível salvar as preferências. Tente novamente." exibida com animação `slide-in-from-top-2`. [REFATORADO]

#### `ThemeLanguageCard.tsx`
Card de configuração de interface:
- **Seleção de Tema**: Grid com opções Light, Dark e System (radio buttons visuais).
- **Idioma**: Select com suporte a Português (Brasil) e English (US).

#### `EmailNotificationsCard.tsx`
Configuração de notificações por email:
- **Toggles Individuais**: Cenários gerados, novos agentes, alertas de uso, newsletter.
- **Seção Produto**: Avisos de manutenção e atualizações importantes.

#### `PushNotificationsCard.tsx`
Notificações push do navegador:
- **Toggle Principal**: Ativar/desativar notificações em tempo real.
- **Feedback Visual**: Badge de status (ativas vs. atenção).

### 🧱 Componentes UI [NOVO]

#### `Toggle.tsx`
Componente switch toggle reutilizável:
- **Acessibilidade**: `role="switch"`, `aria-checked` e `aria-label`.
- **Estados**: Transição visual entre ativo (cor primary) e inativo.

#### `ErrorBoundary.tsx`
Boundary de captura de erros em componentes React:
- **Fallback Customizável**: Aceita `fallback` prop para UI alternativa.
- **UI Padrão**: Ícone de alerta, mensagem de erro e botão "Tentar Novamente".
- **Integração**: Envolvido no root `layout.tsx` protegendo toda a aplicação.

### 🤖 Agentes (Seleção) [REFATORADO]

#### `AgentCard.tsx`
Cartões informativos sobre os agentes de IA:
- **Status**: Indicadores visuais de Disponível/Manutenção/Offline.
- **Labels**: Versão, Tags e Prioridade.
- **Reiniciar**: Funcionalidade de restart com estados de loading, sucesso e erro.
- **Badges**: Indicadores de "Novo" e alta prioridade.
- **Última Execução**: Timestamp da execução mais recente.
- **Imagens Otimizadas**: Migrado de `<img>` para `next/image`. [REFATORADO]

#### `FilterBar.tsx`
Sistema de busca e filtragem:
- Busca por nome e filtros por categoria de teste.

### 💬 Workspace (Chat) [REFATORADO]

#### `ChatWindow.tsx`
Interface de chat completa com integração ao hook `useChat`:
- **Mensagens**: Renderização via `MessageBubble` com scroll automático.
- **Textarea Dinâmico**: Auto-resize até 128px de altura máxima.
- **Anexos**: Botão de anexar arquivos com ícones inteligentes por extensão (`FileImage`, `FileCode`, `FileText`).
- **Novo Chat**: Botão para iniciar nova conversa com `resetChat()`.
- **Erro**: Exibição de erros com `AlertCircle`.

#### `ChatSidebar.tsx`
Histórico de conversas inteligente e perfil do usuário:
- **Sincronização**: Exibe os dados do usuário atualizados.
- **Navegação**: Agrupamento por períodos (Hoje, Esta Semana).

#### `MessageBubble.tsx`
Interface de conversa premium:
- **Markdown & Código**: Suporte a blocos de código com sintaxe destacada.
- **Identidade**: Mostra o avatar do usuário atual em tempo real.
- **Imagens Otimizadas**: Migrado para `next/image`. [REFATORADO]

#### `security/page.tsx` [REFATORADO]
Página de segurança com salvamento assíncrono e tratamento de erros:
- **Async/Await**: `handleSaveAlerts` migrado para `async/await` com `try/catch`. [REFATORADO]
- **Erro Tratado**: Mensagem de erro ("Erro ao salvar configurações. Tente novamente.") exibida via toast em caso de falha. [REFATORADO]

#### Modais de Segurança
- **`ChangePasswordModal.tsx`**: Validação de força de senha em tempo real e confirmação. Agora com acessibilidade (`role="dialog"`, `aria-modal`, fechamento por `Escape`) e ícone `AlertTriangle` do lucide-react. [REFATORADO]
- **`TwoFactorModal.tsx`**: Fluxo em 3 etapas (Setup QR, Verificação, Códigos de Backup).
- **`LogoutAllSessionsModal.tsx`**: Encerramento em massa de sessões remotas com feedback.

#### Modais de Integrações
- **`NewIntegrationModal.tsx`**: Galeria para novas conexões.
- **`IntegrationConfigModal.tsx`**: Gestão de instâncias e tokens. Operações de teste e salvamento com `try/catch`, estado `saveError` e banner de erro no footer. [REFATORADO]
- **`IntegrationDisconnectModal.tsx`**: Segurança ao remover conexões. Validação do texto de confirmação ao submeter (em vez de botão desabilitado), `try/catch` e banner de erro com `AlertTriangle`. [REFATORADO]
- **`IntegrationNotifyModal.tsx`**: Sistema de notificação para features pendentes.

#### Modais de Faturamento (Billing)
- **`PlansCompareModal.tsx`**: Visualização lado a lado de benefícios.
- **`ManageSubscriptionModal.tsx`**: Hub de gestão do plano atual.
- **`UpdateCardModal.tsx`**: Interface para novos dados de pagamento. Operação de tokenização com `try/catch` e erro exibido via estado `errors`. [REFATORADO]
- **`CancelSubscriptionModal.tsx`**: Retenção e gestão de churn. Validação de motivo obrigatório ao submeter (em vez de botão desabilitado), `try/catch` com fallback para etapa anterior e banner de erro. [REFATORADO]
- **`PauseSubscriptionModal.tsx`**: Pausa temporária de faturamento. Validação de duração obrigatória ao submeter, `try/catch` e banner de erro com `AlertCircle`. [REFATORADO]

#### `PhotoUploadModal.tsx` [REFATORADO]
Modal de upload de foto com melhorias de acessibilidade:
- Atributos `role="dialog"`, `aria-modal` e `aria-label`.
- Fechamento por tecla `Escape`.
- `aria-label` nos botões de ação.

#### `DeleteAccountModal.tsx`
Modal de confirmação crítica com:
- Cabeçalho com ícone de alerta vermelho
- Texto de aviso sobre ação irreversível
- **Mecanismo de segurança**: Input para digitar "EXCLUIR"
- Botão de confirmação (inativo até digitar corretamente)
- Botão de cancelamento "Manter minha conta"
- Lista do que será excluído

### 📞 Contato [NOVO]

#### `ContactHero.tsx`
Hero da página de contato:
- **Ícone + Headline**: "Como podemos ajudar?" com tagline sobre especialistas em QA.
- **Layout**: Texto centralizado com espaçamento generoso.

#### `ContactForm.tsx`
Formulário de contato com validação completa:
- **Campos**: Nome, Email (com ícone `Mail`), Empresa (com ícone `Building2`), Assunto (select) e Mensagem (textarea).
- **Assuntos**: Quero conhecer a plataforma, Suporte técnico, Falar sobre preços, Parcerias.
- **Submit**: Estados idle → loading (spinner) → success (CheckCircle + "Enviado!").
- **Auto-Reset**: Formulário limpa automaticamente após envio com sucesso.

#### `SupportChannels.tsx`
Card de canais de atendimento:
- **Canais**: Email, Chat ao Vivo (com indicador pulsante) e Central de Ajuda.
- **Horário Comercial**: Segunda a Sexta, 09h às 18h (BRT).
- **Redes Sociais**: Links para Twitter, GitHub e Facebook com ícones SVG.

#### `ContactFAQ.tsx`
Accordion de perguntas frequentes:
- **5 Perguntas**: Período de teste, integrações, segurança, suporte e cancelamento.
- **Animação**: Ícone `ChevronDown` rotaciona 180° ao expandir.
- **Transição**: Slide-in suave ao abrir cada resposta.

#### `DemoCTA.tsx`
Seção CTA para demonstração ao vivo:
- **Visual**: Background com gradiente radial.
- **Ação**: Botão abre `ScheduleDemoModal`.

#### `ScheduleDemoModal.tsx`
Modal de agendamento de demonstração em 2 etapas:
- **Campos**: Nome, Email, Empresa e Tamanho do Time (1-5, 6-15, 16-50, 50+).
- **Horários**: Grid com 12 slots de 30 minutos (09:00–16:30), seleção visual com destaque azul.
- **Sucesso**: Confirmação com horário em BRT e duração de 15 minutos.
- **Acessibilidade**: Fechamento por Escape, backdrop click e bloqueio de scroll.

### 📝 Cadastro e Onboarding [NOVO]

#### `RegisterForm.tsx` [REFATORADO]
Formulário de criação de conta com validação e feedback visual:
- **Campos**: Nome Completo (`User`), E-mail Corporativo (`Mail`), Senha (`Lock`).
- **Validação Inline**: Mensagens de erro por campo (borda vermelha + texto) com limpeza automática ao digitar. Valida nome, email (formato), senha (mín. 6 chars) e aceite de termos. [REFATORADO]
- **Força da Senha**: Indicador de 4 barras com cores progressivas (vermelho → laranja → amarelo → verde). Lógica extraída para `lib/password-utils.ts`. [REFATORADO]
- **Visibilidade**: Toggle de exibir/ocultar senha com ícones `Eye`/`EyeOff`.
- **Termos**: Checkbox obrigatório para aceitar Termos e Política de Privacidade.
- **Submit**: Estados idle → loading (spinner "Criando conta...") com bloqueio do formulário.
- **Integração**: Salva dados no `OnboardingContext` (`setRegistration`) e `UserContext` (`updateUser`), depois redireciona para `/plans`. [REFATORADO]

#### `SocialButtons.tsx` [REFATORADO]
Botões de autenticação social reutilizáveis:
- **Prop `action`**: Aceita `'login'` (padrão) ou `'register'` para alternar entre "Entrar com" e "Cadastrar com".
- **Provedores**: Google (com logo oficial SVG) e GitHub.

### 🔑 Recuperação de Senha [NOVO]

Fluxo completo de recuperação de senha em 5 etapas, convertido de protótipos HTML para React/Next.js com TypeScript, dark mode e acessibilidade.

**Fluxo do Usuário**: Login "Esqueceu a senha?" → `/forgot-password` → `/forgot-password/link-sent` → `/reset-password?token=xxx` → `/reset-password/success` ou `/reset-password/expired`.

#### `AuthCardShell.tsx` [NOVO]
Shell reutilizável compartilhado entre Login e todas as páginas de recuperação de senha:
- **Background**: Imagem de fundo com overlay translúcido e backdrop-blur.
- **Tema**: Toggle light/dark com ícones `Sun`/`Moon` e animações de rotação.
- **Card**: Container centralizado com bordas, sombra e transições de cor.
- **Logo**: BugKillers com ícone `Bug`.
- **Reutilização**: Login refatorado para usar este componente, eliminando duplicação de layout.

#### `ForgotPasswordForm.tsx` [REFATORADO]
Formulário de solicitação de link de recuperação:
- **Input**: Campo de email com ícone `Mail` e validação.
- **Mascaramento**: Função `maskEmail()` — `nome@empresa.com` → `no***@empresa.com`.
- **Validação de E-mail**: Regex `EMAIL_REGEX` para validar campo vazio e formato inválido com mensagens específicas. [REFATORADO]
- **Try/Catch**: Chamada de API envolvida em `try/catch` com mensagem de falha no envio. [REFATORADO]
- **Banner de Erro**: Exibição de erros com `AlertCircle` em banner vermelho com animação `slide-in-from-top-2`. Erro auto-limpa ao digitar. [REFATORADO]
- **Feedback Visual**: Borda do input e ícone `Mail` ficam vermelhos quando há erro. Botão de submit não mais desabilitado por campo vazio — valida ao submeter. [REFATORADO]
- **Submit**: Estados idle → loading (spinner "Enviando...") → redirect para `/forgot-password/link-sent`.
- **Navegação**: Link "Voltar para o Login" com ícone `ArrowLeft` e animação hover.

#### `LinkSentCard.tsx` [NOVO]
Card de confirmação de envio do link:
- **Email Mascarado**: Exibe o email mascarado recebido via query string (`useSearchParams`).
- **Badge**: Indicador "O link expira em 24 horas" com ícone `Timer`.
- **Reenvio com Cooldown**: Botão "Reenviar link" com timer de 60 segundos client-side; botão desabilitado durante cooldown.
- **Abrir E-mail**: Botão principal com `href="mailto:"`.
- **Suspense**: Página envolvida em `<Suspense>` para `useSearchParams`.

#### `ResetPasswordForm.tsx` [REFATORADO]
Formulário de criação de nova senha com validação completa:
- **Campos**: Nova senha e Confirmar senha, ambos com toggle de visibilidade (`Eye`/`EyeOff`).
- **Strength Bar**: 4 segmentos com cores progressivas (vermelho → laranja → amarelo → verde) e label textual ("Muito fraca", "Fraca", "Média", "Forte"). Usa `getPasswordStrength` de `lib/password-utils.ts`.
- **Checklist**: Indicadores visuais com ícones `Check`/`Circle` — "Mínimo 8 caracteres" e "Senhas coincidem".
- **Validação de Token**: Lido via `useSearchParams()`; se ausente, redireciona para `/reset-password/expired`.
- **Validação Inline**: Mensagens de erro específicas para campos vazios, senha curta, senhas não coincidentes e senha fraca. Botão de submit não mais desabilitado — valida ao submeter. [REFATORADO]
- **Try/Catch**: Chamada de API envolvida em `try/catch` com mensagem de falha na redefinição. [REFATORADO]
- **Banner de Erro**: Exibição de erros com `AlertCircle` em banner vermelho. Erro auto-limpa ao digitar nos campos. [REFATORADO]
- **Feedback Visual**: Bordas dos inputs ficam vermelhas quando há erro. [REFATORADO]
- **Suspense**: Página envolvida em `<Suspense>` para `useSearchParams`.

#### `ResetSuccessCard.tsx` [NOVO]
Card de sucesso na redefinição de senha:
- **Ícone**: Círculo verde com `CheckCircle` e anéis decorativos.
- **Countdown**: Timer de 5 segundos com auto-redirect para `/login`.
- **Botão**: "Acessar BugKillers" com link direto para login.
- **Feedback**: Texto "Redirecionando em X segundos..." atualizado em tempo real.

#### `ResetExpiredCard.tsx` [NOVO]
Card de link expirado:
- **Ícone**: Círculo amber com `TimerOff` e anéis decorativos.
- **Ação Principal**: Botão "Solicitar novo link" direciona para `/forgot-password`.
- **Navegação**: Link "Voltar para o Login" com ícone `ArrowLeft`.

#### `lib/password-utils.ts` [NOVO]
Utilitário compartilhado para validação de força de senha:
- **`getPasswordStrength()`**: Retorna 0–4 baseado em: 8+ chars, maiúsculas, números, caracteres especiais.
- **`strengthColors`**: Array de classes Tailwind para as 4 barras de força.
- **`strengthLabels`**: Labels em pt-BR ("Muito fraca", "Fraca", "Média", "Forte").
- **Reutilização**: Importado por `RegisterForm` e `ResetPasswordForm`, eliminando duplicação.

#### `login/page.tsx` [REFATORADO]
Página de login refatorada para usar `AuthCardShell`:
- **Antes**: Layout completo inline (background, overlay, theme toggle, card, logo).
- **Depois**: Apenas conteúdo interno (título, `SocialButtons`, divisor, `LoginForm`, link de cadastro) envolvido em `AuthCardShell`.

#### `LoginForm.tsx` [REFATORADO]
- **Link "Esqueceu a senha?"**: Migrado de `<a href="#">` para `<Link href="/forgot-password">` com import do `next/link`.
- **Validação de E-mail**: Regex `EMAIL_REGEX` para validar formato antes do submit. [REFATORADO]
- **Try/Catch**: Chamada de API envolvida em `try/catch` com mensagem de erro de conexão ("Erro de conexão. Verifique sua internet e tente novamente."). [REFATORADO]
- **Feedback Visual de Erro**: Bordas dos inputs ficam vermelhas (`border-red-300`) e ícones mudam para `text-red-400` quando há erro. [REFATORADO]

#### `register/page.tsx` [REFATORADO]
Página de cadastro com layout split-screen:
- **Painel Esquerdo** (desktop): Hero com imagem de fundo, texto motivacional e ícones de tecnologias (JS, Python, Jira).
- **Painel Direito**: Logo, formulário de cadastro com `SocialButtons` + `RegisterForm`.
- **Responsivo**: Painel esquerdo oculto em mobile (`hidden lg:flex`).
- **Navegação**: Link "Já tem uma conta?" migrado de `<a href="#">` para `<Link href="/login">`. [REFATORADO]

#### `OnboardingHeader.tsx`
Header compartilhado para todas as páginas do fluxo de onboarding:
- **Props**: `sticky` (posição fixa no topo com backdrop-blur) e `bordered` (borda inferior).
- **Tema**: Toggle otimizado com `useTheme()` e proteção de hidratação (`mounted`).

#### `PlanCard.tsx` [REFATORADO]
Card de plano reutilizável com 3 variantes visuais:
- **Variantes**: `outline` (borda primary), `filled` (fundo primary) e `subtle` (borda neutra).
- **Popular**: Badge "Mais Popular" flutuante com elevação visual (`-translate-y-4`).
- **Badge**: Tag opcional de destaque (ex: "Mais Escolhido").
- **Features**: Lista de benefícios com ícones `CheckCircle`.
- **Callback**: Prop `onSelect` para capturar a seleção do plano pelo componente pai. [REFATORADO]

#### `plans/page.tsx` [REFATORADO]
Página de seleção de plano com 3 tiers:
- **Starter**: R$ 49/mês — 1 agente, 50 testes, relatórios básicos.
- **Professional**: R$ 80/mês — 5 agentes, testes ilimitados, CI/CD completa. Destacado como "Mais Popular".
- **Enterprise**: Sob consulta — agentes ilimitados, deploy on-premise, SSO/RBAC. Redireciona para `/contact`. [REFATORADO]
- **Trust Section**: Logos de empresas parceiras ("Confiado por times de engenharia inovadores").
- **Dados Centralizados**: Planos migrados de inline para `constants/plans.ts` via constante `PLANS`. [REFATORADO]
- **Integração**: Salva plano selecionado no `OnboardingContext` (`setSelectedPlan`) e navega para `/payment?plan=NomePlano`. [REFATORADO]

#### `PaymentForm.tsx` [REFATORADO]
Formulário de pagamento com formatação inteligente de inputs:
- **Campos**: Nome no Cartão, Número (formatação automática 0000 0000 0000 0000), Validade MM/AA e CVV.
- **Validação Inline**: Mensagens de erro por campo (borda vermelha + texto) com limpeza ao digitar. Valida nome, número (mín. 13 dígitos), validade (4 dígitos) e CVV (mín. 3 dígitos). [REFATORADO]
- **Ícones**: `CreditCard` no número, `HelpCircle` no CVV.
- **Segurança**: Aviso de criptografia 256 bits com ícone `Lock`.
- **Submit**: Estados idle → loading (spinner "Processando...").
- **Integração**: Marca pagamento como concluído no `OnboardingContext` (`setPaymentCompleted`) e navega para `/personalization`. [REFATORADO]

#### `OrderSummary.tsx` [REFATORADO]
Resumo do pedido com breakdown de preços:
- **Plano Dinâmico**: Nome, preço e features carregados dinamicamente via query string (`useSearchParams`) e `getPlanByName()` de `constants/plans.ts`. [REFATORADO]
- **Incluso**: Lista de benefícios com `CheckCircle` gerada pelo plano selecionado.
- **Breakdown**: Subtotal, impostos e total a pagar com separadores visuais.
- **Sticky**: Fixo na lateral em telas grandes (`lg:sticky lg:top-28`).
- **Alterar Plano**: Link migrado de `<a href="#">` para botão com `router.push('/plans')`. [REFATORADO]
- **Suspense**: Componente envolvido em `<Suspense>` na página para `useSearchParams`. [REFATORADO]

#### `PersonalizationForm.tsx` [REFATORADO]
Formulário de personalização de uso com 3 campos:
- **Workspace**: Input de texto com ícone `LayoutGrid`.
- **Papel**: Select com opções QA Engineer, Developer, Product Manager, CTO/Tech Lead.
- **Objetivo**: Radio cards visuais (`ObjectiveCard`) — Automação de Testes, Gestão de Bugs, Monitoramento.
- **Validação Inline**: Mensagens de erro para workspace e papel (borda vermelha + texto) com limpeza ao interagir. [REFATORADO]
- **Integração**: Salva dados no `OnboardingContext` (`setPersonalization`) e navega para `/setup`. Botão alterado de "Ir para Pagamento" para "Configurar Ambiente" com `type="submit"`. [REFATORADO]
- **Nome Dinâmico**: Página de personalização exibe o primeiro nome do usuário ("Tudo pronto para começar, {nome}!") via `OnboardingContext`. [REFATORADO]
- **Step Indicator**: Corrigido de "Passo 2 de 3" para "Passo 4 de 5". [REFATORADO]

#### `ObjectiveCard.tsx`
Card de seleção tipo radio com feedback visual:
- **Ícone Dinâmico**: Aceita qualquer ícone lucide-react via prop `icon`.
- **Estados**: Default (borda neutra), hover (borda azul), checked (borda primary + fundo highlight + `CheckCircle`).

#### `SetupProgress.tsx`
Barra de progresso animada para provisionamento:
- **Shimmer**: Efeito de brilho animado sobre a barra de progresso.
- **Porcentagem**: Exibida ao lado do label "Status da Instalação".
- **Glow**: Sombra azul na barra (`shadow-[0_0_15px_rgba(0,51,255,0.5)]`).

#### `SetupTimeline.tsx`
Timeline de provisionamento com 3 estados visuais:
- **Complete**: Círculo verde com `Check` — passos concluídos.
- **Active**: Círculo primary com `Loader2` (spinning) — passo em andamento com descrição pulsante.
- **Pending**: Círculo cinza com `Circle` ou `Flag` — passos futuros (opacity reduzida).
- **Linha Vertical**: Conecta todos os steps visualmente.

#### `setup/page.tsx` [REFATORADO]
Página de provisionamento do ambiente com simulação animada:
- **Hero Dinâmico**: Ícone `Bot` animado (bounce + ping + pulse) durante carregamento; animações cessam e texto muda para "Ambiente pronto!" ao concluir. [REFATORADO]
- **Simulação Automática**: Progressão temporizada em 3 fases — 45% (2s) → 72% (4s) → 90% (5.5s) → 100% com timeline steps atualizando em tempo real. [REFATORADO]
- **Timeline Dinâmica**: Função `getSetupSteps()` retorna steps com status calculado com base no passo atual (`complete`, `active` ou `pending`). [REFATORADO]
- **Progress Card**: `SetupProgress` com porcentagem animada + `SetupTimeline` com 5 etapas (pagamento → workspace → agente → servidores → pronto).
- **Botão**: "Acessar Workspace" desabilitado até conclusão, habilitado com estilo primary + glow. Ao clicar, marca `setSetupCompleted()` no `OnboardingContext` e navega para `/agents`. [REFATORADO]
- **Suporte**: Link inferior "Problemas com a configuração? Contate o suporte".

### 🔄 Fluxo de Navegação do Onboarding [NOVO]

O fluxo de onboarding agora é funcional com navegação real entre as etapas, validação de formulários e estado global persistido em `sessionStorage`:

**Fluxo Completo**: `/register` → `/plans` → `/payment?plan=NomePlano` → `/personalization` → `/setup` → `/agents`

| Etapa | Página | Ação no Contexto | Navegação |
|-------|--------|-------------------|-----------|
| 1. Cadastro | `/register` | `setRegistration()` + `updateUser()` | → `/plans` |
| 2. Plano | `/plans` | `setSelectedPlan()` | → `/payment?plan=X` (Enterprise → `/contact`) |
| 3. Pagamento | `/payment` | `setPaymentCompleted()` | → `/personalization` |
| 4. Personalização | `/personalization` | `setPersonalization()` | → `/setup` |
| 5. Setup | `/setup` | `setSetupCompleted()` | → `/agents` |

- **Validação**: Todos os formulários (cadastro, pagamento, personalização) possuem validação inline com mensagens de erro por campo, bordas vermelhas e limpeza automática ao corrigir.
- **Dados Dinâmicos**: Nome do usuário, plano selecionado e features são propagados entre páginas via `OnboardingContext`.
- **Root Layout**: `OnboardingProvider` integrado ao `layout.tsx` envolvendo `ThemeProvider` e `ErrorBoundary`.

### ❓ Central de Ajuda [NOVO]

#### `HelpHero.tsx`
Hero com busca e tópicos populares:
- **Busca**: Input com ícone de lupa e filtragem em tempo real de categorias e artigos.
- **Chips**: Botões de atalho para tópicos populares ("Criar cenário", "Integração Jira", "Webhook").
- **Estados de Foco**: Feedback visual acessível no input.

#### `HelpBreadcrumbs.tsx`
Breadcrumb de navegação:
- **Caminho**: Home / Ajuda com link de retorno ao perfil.

#### `CategoryGrid.tsx`
Grid responsivo de categorias de ajuda:
- **Layout**: 1 coluna (mobile), 2 colunas (tablet), 3 colunas (desktop).
- **Cards**: Emoji destacado + título + quantidade de artigos por categoria.
- **Hover**: Animação de scale no emoji e mudança de borda/sombra.
- **6 Categorias**: Primeiros Passos, Agente AI, Integrações, Melhores Práticas, Segurança, Faturamento.

#### `PopularArticles.tsx`
Listagem de artigos mais acessados:
- **Layout**: 2 colunas (título + badge de tempo de leitura).
- **Tempo**: Ícone `Clock` com estimativa em minutos (3–8 min).

#### `VideoTutorials.tsx`
Grid de vídeo-tutoriais:
- **Layout**: 1/2/3 colunas responsivo com thumbnails de vídeo.
- **Overlay**: Botão de play centralizado com efeito hover.
- **Duração**: Badge no canto inferior direito de cada thumbnail.

#### `WhatsNew.tsx`
Timeline de novidades recentes:
- **3 Atualizações**: Integração Azure DevOps, melhorias em AI Assertions, Dark Mode Beta.
- **Visual**: Linha vertical com dots conectores e labels de data.
- **Link**: Acesso ao changelog completo.

#### `HelpBottomCTA.tsx`
Seção CTA inferior para suporte direto:
- **Headline**: "Não encontrou o que procurava?"
- **Ação**: Botão "Falar com Suporte" abre `SupportModal` (anteriormente navegava para `/contact`).

#### `SupportModal.tsx`
Modal de contato com suporte em 2 etapas:
- **Campos**: Nome, Email (lado a lado em sm+), Assunto (select) e Mensagem (textarea).
- **Assuntos**: Suporte técnico, Dúvida sobre a plataforma, Problemas de faturamento, Feedback ou sugestão.
- **Validação**: Nome, email e mensagem obrigatórios.
- **Sucesso**: Confirmação com email do usuário, contato@bugkillers.com e tempo de resposta (até 2h úteis).
- **Acessibilidade**: `role="dialog"`, `aria-modal`, fechamento por Escape, backdrop click e bloqueio de scroll.

### 🏠 Landing Page [REFATORADO]

#### `Navbar.tsx`
Navegação principal do site:
- **Novo Link**: "Contato" adicionado na navegação desktop (antes do Login).
- **Toggle de Tema**: Botões Sun/Moon com animações de rotação.
- **Hidratação**: Correção com estado `mounted` para evitar mismatch SSR.

### 🪝 Hooks Customizados

#### `useClickOutside.ts`
Hook para detectar cliques fora de um elemento:
- **Ref-based**: Recebe um `RefObject` e um handler de callback.
- **Cleanup**: Remove automaticamente o event listener no unmount.
- **Uso**: Substituiu lógica inline no `ProfileMenu` por hook reutilizável.

#### `useChat.ts` [NOVO]
Hook de chat IA com respostas simuladas e streaming:
- **Respostas Inteligentes**: Detecção por palavras-chave para 5 domínios de QA (bugs, testes BDD, segurança, performance, geral).
- **Streaming Simulado**: Renderização palavra a palavra com delays de 30–70ms.
- **API**: `sendMessage()`, `resetChat()`, estados de `isLoading` e `error`.
- **Abort**: Suporte a cancelamento de respostas em andamento.

---

## 🛣️ Rotas e Páginas

| Rota | Descrição | Status |
|------|-----------|--------|
| `/` | Landing page com hero, pricing e CTA | ✅ Completo |
| `/login` | Login com suporte a tema adaptativo | ✅ Completo |
| `/register` | Cadastro com split-screen e força de senha | ✅ Completo |
| `/forgot-password` | Solicitar link de recuperação de senha | ✅ Completo |
| `/forgot-password/link-sent` | Confirmação de envio com reenvio e cooldown | ✅ Completo |
| `/reset-password` | Criar nova senha com validação de token | ✅ Completo |
| `/reset-password/success` | Sucesso com countdown e auto-redirect | ✅ Completo |
| `/reset-password/expired` | Link expirado com reenvio | ✅ Completo |
| `/plans` | Seleção de plano (Starter/Pro/Enterprise) | ✅ Completo |
| `/payment` | Pagamento seguro com resumo do pedido | ✅ Completo |
| `/personalization` | Personalização de workspace e objetivos | ✅ Completo |
| `/setup` | Provisionamento do ambiente com timeline | ✅ Completo |
| `/agents` | Seleção de Agentes especializados | ✅ Completo |
| `/chat` | Área de trabalho (Workspace) com Chat IA | ✅ Completo |
| `/dashboard` | Painel principal com métricas e economia | ✅ Completo |
| `/profile` | Edição de perfil e sincronização global | ✅ Completo |
| `/billing` | Planos, Modais e Faturamento | ✅ Completo |
| `/settings` | Preferências, tema, idioma e notificações | ✅ Completo |
| `/integrations` | Gerenciamento de integrações e ferramentas | ✅ Completo |
| `/security` | Segurança, 2FA e Senha | ✅ Completo |
| `/usage` | Dados de consumo e uso da plataforma | ✅ Completo |
| `/help` | Central de Ajuda com busca e categorias | ✅ Completo |
| `/contact` | Página de Contato com formulário e FAQ | ✅ Completo |

---

## 🧠 Gerenciamento de Estado

Implementamos uma camada de estado global para garantir a **Consistência de Dados** em toda a aplicação.

### UserContext [OTIMIZADO]
Localizado em `context/UserContext.tsx`, este provider gerencia:
- **Dados do Usuário**: Nome, email, cargo e avatar.
- **Sincronização**: Qualquer alteração no perfil reflete instantaneamente no Header, Sidebar e Chat.
- **Persistência**: Integração com `localStorage` para manter as preferências do usuário entre sessões.
- **Memoização**: `useCallback` para `updateAvatar`, `updateUser` e `useMemo` para o valor do contexto, evitando re-renders desnecessários. [OTIMIZADO]
- **`updateUser()`**: Função para atualização parcial dos dados do usuário (`Partial<UserData>`). Utilizada pelo `RegisterForm` para sincronizar nome e email após cadastro. [NOVO]

### OnboardingContext [NOVO]
Localizado em `context/OnboardingContext.tsx`, este provider gerencia o estado do fluxo de onboarding pós-cadastro:
- **Estado Centralizado**: `OnboardingState` com `currentStep`, `registration`, `selectedPlan`, `paymentCompleted`, `personalization` e `setupCompleted`.
- **Persistência**: Integração com `sessionStorage` (chave `onboarding_state`) para manter o progresso entre navegações sem persistir entre sessões.
- **Ações**: `setRegistration()`, `setSelectedPlan()`, `setPaymentCompleted()`, `setPersonalization()` e `setSetupCompleted()` — cada uma avança o `currentStep` automaticamente.
- **Memoização**: `useCallback` para todas as ações e `useMemo` para o valor do contexto.
- **Ref Sync**: `useRef` para manter referência estável do estado entre atualizações, evitando race conditions.
- **Hook**: `useOnboarding()` com validação de contexto (throw se usado fora do provider).
- **Tipagens**: Interfaces em `types/onboarding.ts` — `PlanData`, `RegistrationData`, `PersonalizationData` e `OnboardingState`.

### constants/plans.ts [NOVO]
Configurações dos planos extraídas da página `plans/page.tsx` para constante compartilhada:
- **`PLANS`**: Array de `PlanConfig` com nome, descrição, preço, variante, features e flags (isPopular, badge).
- **`getPlanByName()`**: Busca um plano por nome e retorna `PlanData` para uso no contexto e no `OrderSummary`.
- **Reutilização**: Importado por `plans/page.tsx` e `OrderSummary.tsx`, eliminando duplicação de dados.

### Avatar Padrão [NOVO]
- Substituído URL externo do Google por SVG local (`public/default-avatar.svg`).
- Garante carregamento rápido e independência de serviços externos.

---

## ❌ Tratamento de Erros [REFATORADO]

O projeto implementa uma estratégia de tratamento de erros em múltiplas camadas:

### `ErrorBoundary` (Componente)
- Integrado ao root `layout.tsx`, captura erros em toda a árvore de componentes.
- Exibe UI amigável com opção de "Tentar Novamente".
- Aceita `fallback` customizável por seção.

### `error.tsx` (Página de Erro Raiz)
- Página de erro padrão do Next.js App Router.
- Exibe botões de "Tentar Novamente" e "Início".
- Suporte completo a dark mode.

### `error.tsx` por Route Group [NOVO]
Cada grupo de rotas agora possui sua própria página de erro contextualizada com mensagens e navegação específicas:

| Route Group | Título | Navegação de Fallback |
|-------------|--------|----------------------|
| `(agents)` | "Erro ao carregar agentes" | Dashboard |
| `(auth)` | "Erro na autenticação" | Login |
| `(dashboard)` | "Erro no painel" | Dashboard |
| `(onboarding)` | "Erro na configuração" | Início (`/`) |
| `(workspace)` | "Erro no workspace" | Dashboard |

- **Padrão Visual**: Ícone `AlertTriangle` em círculo vermelho, título, descrição e dois botões (Tentar Novamente + navegação de fallback).
- **Dark Mode**: Suporte completo com classes `dark:`.
- **Reset**: Botão "Tentar Novamente" chama `reset()` do Next.js para re-renderizar o segmento.

### `global-error.tsx` (Erro Crítico)
- Captura erros no root layout (quando o layout principal falha).
- Inclui seu próprio `<html>` e `<body>` para renderização independente.
- Botão de "Recarregar" para recuperação.

### Tratamento de Erros em Formulários e Modais [NOVO]
Padrão de validação e error handling aplicado em 10 componentes (`LoginForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `SettingsPage`, `SecurityPage`, `CancelSubscriptionModal`, `PauseSubscriptionModal`, `UpdateCardModal`, `IntegrationConfigModal`, `IntegrationDisconnectModal`):

- **Async/Await + Try/Catch**: Todas as operações assíncronas (chamadas de API simuladas) migradas de `setTimeout` com callback para `async/await` envolvido em `try/catch`.
- **Validação ao Submeter**: Botões de submit não mais desabilitados por estado do formulário — a validação ocorre no `handleSubmit` com mensagens de erro específicas por cenário.
- **Banner de Erro Consistente**: Componente inline com `AlertCircle` ou `AlertTriangle`, fundo vermelho translúcido (`bg-red-50 dark:bg-red-500/10`), borda vermelha e texto descritivo.
- **Feedback Visual nos Inputs**: Bordas dos inputs ficam vermelhas (`border-red-300 dark:border-red-500/50`) e ícones mudam para `text-red-400` quando há erro.
- **Auto-Clear**: Erros são limpos automaticamente quando o usuário interage com os campos (`onChange` limpa o estado de erro).
- **Validação de E-mail**: `EMAIL_REGEX` (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) adicionado no `LoginForm` e `ForgotPasswordForm` para validar formato antes do submit.

---

## ⚡ Performance [NOVO]

### Otimização de Imagens
- Migração de `<img>` nativo para `next/image` (`Image`) em todos os componentes que exibem avatares e imagens de agentes: `ProfileMenu`, `UserProfileCard`, `AgentCard` e `MessageBubble`.
- Uso de `fill` com `sizes` para imagens responsivas e `width`/`height` para dimensões fixas.
- `next.config.ts` configurado com `remotePatterns` para hosts de imagens externas (Google, Gravatar).

### Lazy Loading da Landing Page
- Componentes abaixo do fold na landing page (`app/(website)/page.tsx`) carregados via `next/dynamic`.
- **Eager**: `Navbar`, `Hero`, `Integrations` (acima do fold).
- **Lazy**: `PainPoints`, `CodeDemo`, `HowItWorks`, `Formats`, `Comparison`, `Roadmap`, `FAQ`, `Pricing`, `CTA`, `Footer`.

### Refatoração de Componentes
- Página de Perfil (`profile/page.tsx`): Seções de Assinatura e Visão Geral de Uso extraídas para `SubscriptionCard` e `UsageOverview`.
- Página de Preferências (`settings/page.tsx`): Seções extraídas para `ThemeLanguageCard`, `PushNotificationsCard` e `EmailNotificationsCard`.
- Toggle switch inline substituído por componente reutilizável `Toggle.tsx`.
- Items de menu do `ProfileMenu` movidos para constantes fora do componente.
- Remoção de imports não utilizados e comentários desnecessários.

### Refatoração do Chat [NOVO]
- Lógica de mensagens extraída para hook customizado `useChat` com tipagens em `types/chat-types.ts`.
- `ChatWindow` refatorado com textarea auto-resize, sistema de anexos e integração ao hook.
- Respostas simuladas com streaming palavra a palavra para 5 domínios de QA.

### Refatoração de Agentes [NOVO]
- `AgentCard` com funcionalidade de restart, estados visuais e badges de prioridade.
- `FilterBar` com melhorias na interface de filtragem.

---

## 🔒 Segurança [NOVO]

### Headers HTTP
O `next.config.ts` agora inclui headers de segurança para todas as rotas:

| Header | Valor | Proteção |
|--------|-------|----------|
| `X-Frame-Options` | `DENY` | Previne clickjacking |
| `X-Content-Type-Options` | `nosniff` | Previne MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controle de referrer |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Força HTTPS (HSTS) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restrição de APIs do navegador |
| `X-DNS-Prefetch-Control` | `on` | Otimiza resolução DNS |

### Acessibilidade em Modais
- `ChangePasswordModal` e `PhotoUploadModal` agora possuem `role="dialog"`, `aria-modal="true"` e `aria-label`.
- Suporte a fechamento por tecla `Escape` em ambos os modais.
- Botões de fechar com `aria-label="Fechar modal"`.
- `ScheduleDemoModal` e `SupportModal` seguem o mesmo padrão de acessibilidade com backdrop click, Escape e bloqueio de scroll. [NOVO]

---

## 🎨 Temas Light/Dark

O projeto usa `next-themes` para gerenciar os temas.

### Como funciona

1. **ThemeProvider** em `providers/ThemeProvider.tsx` envolve a aplicação (integrado ao `UserProvider`).
2. **Hook `useTheme()`** usado no Header e na Página de Login para toggle.
3. **Páginas de Autenticação**: Login e fluxo de recuperação de senha usam `AuthCardShell` com transições de tema (overlay, backgrounds e containers dinâmicos). [REFATORADO]
4. **Tailwind** usa variante `dark:` para estilos alternativos.

---

## 🎨 Cores Customizadas

As cores do design estão definidas no `globals.css` usando a sintaxe do Tailwind v4:

```css
@theme inline {
  --color-primary: #0033ff;        /* Azul principal */
  --color-primary-light: #EEF2FF;  /* Azul claro (fundo activo) */
  --color-primary-dark: #0022cc;   /* Azul escuro */
  --color-background-light: #F5F6F8;
  --color-background-dark: #0f1323;
  --color-card-dark: #1C1C1E;      /* Cards no dark mode */
  --shadow-glow: 0 4px 12px rgba(0, 51, 255, 0.25);
}
```

### Uso nas classes

| Classe | Cor | Uso |
|--------|-----|-----|
| `bg-primary` | #0033ff | Header, botões principais |
| `text-primary` | #0033ff | Links, ícones ativos |
| `border-primary` | #0033ff | Indicador de item ativo |
| `bg-primary-light` | #EEF2FF | Fundo do item ativo (light) |
| `bg-card-dark` | #1C1C1E | Cards no dark mode |
| `shadow-glow` | azul glow | Card Enterprise destacado |

---

## 📱 Responsividade

- **Desktop**: Layout completo com Sidebar fixa
- **Mobile**: Sidebar oculta, navegação por pills horizontais
- Breakpoints padrão do Tailwind: `sm:`, `md:`, `lg:`, `xl:`

---

## 📄 Licença

© 2026 BugKillers AI. Todos os direitos reservados.
