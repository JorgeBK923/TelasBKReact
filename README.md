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
│   │   └── agents/               # Galeria de Agentes
│   ├── (auth)/                   # Grupo de autenticação [REFATORADO]
│   │   └── login/                # Página de Login com Tema Dinâmico
│   ├── (dashboard)/              # Grupo de rotas do Dashboard
│   │   ├── layout.tsx            # Layout com Header reativo
│   │   ├── profile/              # Página de perfil [REFATORADO]
│   │   ├── settings/             # Página de preferências [REFATORADO]
│   │   └── ...                   # Páginas de billing, security, etc
│   ├── (website)/                # Landing page [OTIMIZADO]
│   ├── (workspace)/              # Área de chat e trabalho [NOVO]
│   │   ├── layout.tsx            # Sidebar azul dedicada
│   │   └── chat/                 # Ambiente de Chat IA
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
│   ├── agents/                   # AgentCard, FilterBar
│   ├── chat/                     # ChatSidebar, ChatWindow, MessageBubble
│   ├── auth/                     # LoginForm, SocialButtons
│   ├── home/                     # Componentes da landing page
│   │   ├── Navbar.tsx            # Navegação do site
│   │   ├── Hero.tsx              # Seção hero
│   │   ├── Pricing.tsx           # Tabela de preços
│   │   ├── Footer.tsx            # Rodapé
│   │   └── ...                   # Outros componentes
│   │
│   └── ui/                       # [NOVO] Componentes UI reutilizáveis
│       ├── ErrorBoundary.tsx     # Captura de erros em componentes
│       └── Toggle.tsx            # Switch toggle acessível
│
├── hooks/                        # [NOVO] Hooks customizados
│   └── useClickOutside.ts        # Detecta cliques fora de elementos
│
├── context/                      # UserContext (Estado Global) [OTIMIZADO]
├── constants/                    # user.ts (Dados Iniciais)
├── providers/                    # Context Providers
│   └── ThemeProvider.tsx         # Provider do next-themes
│
├── drafts/                       # Protótipos HTML originais
│   ├── DraftDados.tsx            # Design da página de Dados
│   ├── DraftIntegracoes.tsx      # Design da página de Integrações
│   ├── DraftPreferencia.tsx      # Design da página de Preferências
│   └── DraftSeguranca.tsx        # Design da página de Segurança
│
├── contact-support.tsx           # [NOVO] Protótipo de Contato e Suporte
├── help-center.tsx               # [NOVO] Protótipo de Central de Ajuda
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

#### `Header.tsx` & `ProfileMenu.tsx`
Interface de cabeçalho inteligente:
- **Dados Reativos**: Nome e avatar sincronizados via `UserContext`.
- **Menu Dropdown**: Acesso rápido a configurações e logout (com estados de loading).
- **Tema**: Toggle otimizado entre modo claro e escuro.
- **Imagens Otimizadas**: Migrado para `next/image` com `Image` component. [REFATORADO]
- **Click Outside**: Usa hook `useClickOutside` para fechar o menu. [REFATORADO]
- **Acessibilidade**: Atributos `aria-label`, `aria-expanded` e `aria-haspopup`. [REFATORADO]

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

### ⚙️ Preferências (Subcomponentes) [NOVO]

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

### 🪝 Hooks Customizados [NOVO]

#### `useClickOutside.ts`
Hook para detectar cliques fora de um elemento:
- **Ref-based**: Recebe um `RefObject` e um handler de callback.
- **Cleanup**: Remove automaticamente o event listener no unmount.
- **Uso**: Substituiu lógica inline no `ProfileMenu` por hook reutilizável.

### 🤖 Agentes (Seleção)

#### `AgentCard.tsx`
Cartões informativos sobre os agentes de IA:
- **Status**: Indicadores visuais de Online/Manutenção.
- **Labels**: Versão, Tags e Prioridade.
- **Imagens Otimizadas**: Migrado de `<img>` para `next/image`. [REFATORADO]

#### `FilterBar.tsx`
Sistema de busca e filtragem:
- Busca por nome e filtros por categoria de teste.

### 💬 Workspace (Chat)

#### `ChatSidebar.tsx`
Histórico de conversas inteligente e perfil do usuário:
- **Sincronização**: Exibe os dados do usuário atualizados.
- **Navegação**: Agrupamento por períodos (Hoje, Esta Semana).

#### `MessageBubble.tsx`
Interface de conversa premium:
- **Markdown & Código**: Suporte a blocos de código com sintaxe destacada.
- **Identidade**: Mostra o avatar do usuário atual em tempo real.
- **Imagens Otimizadas**: Migrado para `next/image`. [REFATORADO]

#### `ChatWindow.tsx`
Interface de chat fluida com suporte a inputs de texto e áreas de visualização de mensagens otimizadas.

#### Modais de Segurança
- **`ChangePasswordModal.tsx`**: Validação de força de senha em tempo real e confirmação. Agora com acessibilidade (`role="dialog"`, `aria-modal`, fechamento por `Escape`) e ícone `AlertTriangle` do lucide-react. [REFATORADO]
- **`TwoFactorModal.tsx`**: Fluxo em 3 etapas (Setup QR, Verificação, Códigos de Backup).
- **`LogoutAllSessionsModal.tsx`**: Encerramento em massa de sessões remotas com feedback.

#### Modais de Integrações
- **`NewIntegrationModal.tsx`**: Galeria para novas conexões.
- **`IntegrationConfigModal.tsx`**: Gestão de instâncias e tokens.
- **`IntegrationDisconnectModal.tsx`**: Segurança ao remover conexões.
- **`IntegrationNotifyModal.tsx`**: Sistema de notificação para features pendentes.

#### Modais de Faturamento (Billing)
- **`PlansCompareModal.tsx`**: Visualização lado a lado de benefícios.
- **`ManageSubscriptionModal.tsx`**: Hub de gestão do plano atual.
- **`UpdateCardModal.tsx`**: Interface para novos dados de pagamento.
- **`CancelSubscriptionModal.tsx` & `PauseSubscriptionModal.tsx`**: Retenção e gestão de churn.

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

---

## 🛣️ Rotas e Páginas

| Rota | Descrição | Status |
|------|-----------|--------|
| `/login` | Login com suporte a tema adaptativo | ✅ Completo |
| `/agents` | Seleção de Agentes especializados | ✅ Completo |
| `/chat` | Área de trabalho (Workspace) | ✅ Completo |
| `/profile` | Edição de perfil e sincronização global | ✅ Completo |
| `/billing` | Planos, Modais e Faturamento | ✅ Completo |
| `/settings` | Preferências, tema, idioma e notificações | ✅ Completo |
| `/security` | Segurança, 2FA e Senha | ✅ Completo |

---

## 🧠 Gerenciamento de Estado

Implementamos uma camada de estado global para garantir a **Consistência de Dados** em toda a aplicação.

### UserContext
Localizado em `context/UserContext.tsx`, este provider gerencia:
- **Dados do Usuário**: Nome, email, cargo e avatar.
- **Sincronização**: Qualquer alteração no perfil reflete instantaneamente no Header, Sidebar e Chat.
- **Persistência**: Integração com `localStorage` para manter as preferências do usuário entre sessões.
- **Memoização**: `useCallback` para `updateAvatar` e `useMemo` para o valor do contexto, evitando re-renders desnecessários. [OTIMIZADO]

### Avatar Padrão [NOVO]
- Substituído URL externo do Google por SVG local (`public/default-avatar.svg`).
- Garante carregamento rápido e independência de serviços externos.

---

## ❌ Tratamento de Erros [NOVO]

O projeto implementa uma estratégia de tratamento de erros em múltiplas camadas:

### `ErrorBoundary` (Componente)
- Integrado ao root `layout.tsx`, captura erros em toda a árvore de componentes.
- Exibe UI amigável com opção de "Tentar Novamente".
- Aceita `fallback` customizável por seção.

### `error.tsx` (Página de Erro)
- Página de erro padrão do Next.js App Router.
- Exibe botões de "Tentar Novamente" e "Início".
- Suporte completo a dark mode.

### `global-error.tsx` (Erro Crítico)
- Captura erros no root layout (quando o layout principal falha).
- Inclui seu próprio `<html>` e `<body>` para renderização independente.
- Botão de "Recarregar" para recuperação.

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

---

## 🎨 Temas Light/Dark

O projeto usa `next-themes` para gerenciar os temas.

### Como funciona

1. **ThemeProvider** em `providers/ThemeProvider.tsx` envolve a aplicação (integrado ao `UserProvider`).
2. **Hook `useTheme()`** usado no Header e na Página de Login para toggle.
3. **Página de Login**: Totalmente refatorada para suportar transições de tema (overlay, backgrounds e backgrounds de containers dinâmicos).
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
