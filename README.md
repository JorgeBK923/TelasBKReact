# 🐛 BugKillers - Plataforma Front-End

Plataforma web desenvolvida com **Next.js 16**, **React 19** e **Tailwind CSS 4** para gerenciamento de testes automatizados e QA.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Componentes](#-componentes)
- [Gerenciamento de Estado](#-gerenciamento-de-estado)
- [Rotas e Páginas](#-rotas-e-páginas)
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
│   ├── (dashboard)/              # Grupo de rotas do Dashboard
│   ├── (agents)/                 # Seleção de Agentes [NOVO]
│   │   └── agents/               # Galeria de Agentes
│   ├── (auth)/                   # Grupo de autenticação [REFATORADO]
│   │   └── login/                # Página de Login com Tema Dinâmico
│   ├── (dashboard)/              # Grupo de rotas do Dashboard
│   │   ├── layout.tsx            # Layout com Header reativo
│   │   └── ...                   # Páginas de perfil, billing, etc
│   ├── (workspace)/              # Área de chat e trabalho [NOVO]
│   │   ├── layout.tsx            # Sidebar azul dedicada
│   │   └── chat/                 # Ambiente de Chat IA
│   ├── globals.css               # Estilos globais v4
│   └── layout.tsx                # Root layout (Provider Wrapper)
│
├── components/                   # Componentes reutilizáveis
│   ├── dashboard/                # Header, Sidebar, ProfileMenu
│   ├── agents/                   # AgentCard, FilterBar [NOVO]
│   ├── chat/                     # ChatSidebar, ChatWindow, MessageBubble [NOVO]
│   └── auth/                     # LoginForm, SocialButtons
│
├── context/                      # UserContext (Estado Global) [NOVO]
├── constants/                    # user.ts (Dados Iniciais) [NOVO]
├── public/                       # Arquivos estáticos
└── ...
│
├── components/                   # Componentes reutilizáveis
│   ├── dashboard/                # Componentes do painel
│   │   ├── Header.tsx            # Cabeçalho azul + toggle tema
│   │   ├── Sidebar.tsx           # Menu lateral com navegação
│   │   ├── UserProfileCard.tsx   # Card de perfil reutilizável
│   │   ├── PhotoUploadModal.tsx  # [NOVO] Upload e ajuste de foto de perfil
│   │   ├── ChangePasswordModal.tsx # [NOVO] Modal de troca de senha segura
│   │   ├── TwoFactorModal.tsx    # [NOVO] Fluxo de ativação de 2FA
│   │   ├── LogoutAllSessionsModal.tsx # [NOVO] Logout remoto em massa
│   │   ├── NewIntegrationModal.tsx  # [NOVO] Adicionar novas ferramentas
│   │   ├── IntegrationConfigModal.tsx # [NOVO] Configurações de API/Tokens
│   │   ├── IntegrationDisconnectModal.tsx # [NOVO] Confirmação de desconexão
│   │   ├── IntegrationNotifyModal.tsx # [NOVO] Lead capture para ferramentas "Em breve"
│   │   ├── PlansCompareModal.tsx    # [NOVO] Tabela comparativa de planos
│   │   ├── ManageSubscriptionModal.tsx # [NOVO] Gestão de assinatura ativa
│   │   ├── UpdateCardModal.tsx      # [NOVO] Troca de método de pagamento
│   │   ├── CancelSubscriptionModal.tsx # [NOVO] Fluxo de cancelamento
│   │   ├── PauseSubscriptionModal.tsx # [NOVO] Pausa temporária de faturamento
│   │   ├── DeleteAccountModal.tsx # Modal de confirmação de exclusão
│   │   └── index.ts              # Exports centralizados
│   │
│   └── home/                     # Componentes da landing page
│       ├── Navbar.tsx            # Navegação do site
│       ├── Hero.tsx              # Seção hero
│       ├── Pricing.tsx           # Tabela de preços
│       ├── Footer.tsx            # Rodapé
│       └── ...                   # Outros componentes
│
├── providers/                    # Context Providers
│   └── ThemeProvider.tsx         # Provider do next-themes
│
├── drafts/                       # Protótipos HTML originais
│   ├── DraftDados.tsx            # Design da página de Dados
│   ├── DraftIntegracoes.tsx      # Design da página de Integrações
│   ├── DraftPreferencia.tsx      # Design da página de Preferências
│   └── DraftSeguranca.tsx        # Design da página de Segurança
│
├── public/                       # Arquivos estáticos
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

#### `UserProfileCard.tsx`
Componente central de gestão de perfil:
- **Upload de Avatar**: Integrado ao `PhotoUploadModal`.
- **Sincronização Global**: Atualiza instantaneamente o cabeçalho e as conversas.

### 🤖 Agentes (Seleção) [NOVO]

#### `AgentCard.tsx`
Cartões informativos sobre os agentes de IA:
- **Status**: Indicadores visuais de Online/Manutenção.
- **Labels**: Versão, Tags e Prioridade.

#### `FilterBar.tsx`
Sistema de busca e filtragem:
- Busca por nome e filtros por categoria de teste.

### 💬 Workspace (Chat) [NOVO]

#### `ChatSidebar.tsx`
Histórico de conversas inteligente e perfil do usuário:
- **Sincronização**: Exibe os dados do usuário atualizados.
- **Navegação**: Agrupamento por períodos (Hoje, Esta Semana).

#### `MessageBubble.tsx`
Interface de conversa premium:
- **Markdown & Código**: Suporte a blocos de código com sintaxe destacada.
- **Identidade**: Mostra o avatar do usuário atual em tempo real.

#### `ChatWindow.tsx`
Interface de chat fluida com suporte a inputs de texto e áreas de visualização de mensagens otimizadas.

#### Modais de Segurança
- **`ChangePasswordModal.tsx`**: Validação de força de senha em tempo real e confirmação.
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

#### `DeleteAccountModal.tsx`
Modal de confirmação crítica com:
- Cabeçalho com ícone de alerta vermelho
- Texto de aviso sobre ação irreversível
- **Mecanismo de segurança**: Input para digitar "EXCLUIR"
- Botão de confirmação (inativo até digitar corretamente)
- Botão de cancelamento "Manter minha conta"
- Lista do que será excluído

### Páginas

---

## 🛣️ Rotas e Páginas [NOVO]

| Rota | Descrição | Status |
|------|-----------|--------|
| `/login` | Login com suporte a tema adaptativo | ✅ Completo |
| `/agents` | Seleção de Agentes especializados | ✅ Completo |
| `/chat` | Área de trabalho (Workspace) | ✅ Completo |
| `/profile` | Edição de perfil e sincronização global | ✅ Completo |
| `/billing` | Planos, Modais e Faturamento | ✅ Completo |
| `/security` | Segurança, 2FA e Senha | ✅ Completo |

---

---

## 🧠 Gerenciamento de Estado

Implementamos uma camada de estado global para garantir a **Consistência de Dados** em toda a aplicação.

### UserContext
Localizado em `context/UserContext.tsx`, este provider gerencia:
- **Dados do Usuário**: Nome, email, cargo e avatar.
- **Sincronização**: Qualquer alteração no perfil reflete instantaneamente no Header, Sidebar e Chat.
- **Persistência**: Integração com `localStorage` para manter as preferências do usuário entre sessões.

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
