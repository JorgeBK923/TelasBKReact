# 🐛 BugKillers - Plataforma Front-End

Plataforma web desenvolvida com **Next.js 16**, **React 19** e **Tailwind CSS 4** para gerenciamento de testes automatizados e QA.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Componentes](#-componentes)
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
│   │   ├── billing/              # Página de Plano & Faturamento
│   │   │   └── page.tsx
│   │   └── dashboard/            # Página de Uso & Limites
│   │       └── page.tsx
│   ├── (website)/                # Grupo de rotas do site público
│   │   └── page.tsx              # Landing page
│   ├── globals.css               # Estilos globais + Tailwind
│   ├── layout.tsx                # Layout raiz da aplicação
│   └── favicon.ico
│
├── components/                   # Componentes reutilizáveis
│   ├── dashboard/                # Componentes do painel
│   │   ├── Header.tsx            # Cabeçalho azul + toggle tema
│   │   ├── Sidebar.tsx           # Menu lateral com navegação
│   │   ├── DashboardLayout.tsx   # Wrapper de layout
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
│   ├── DraftUso.html             # Design da página de Uso
│   └── DraftPlano.html           # Design da página de Plano
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

### Dashboard

#### `Header.tsx`
Cabeçalho principal com:
- Logo BugKillers (ícone de bug)
- Toggle de tema (light/dark)
- Avatar do usuário com status online
- Fundo azul vibrante (#0033ff)

#### `Sidebar.tsx`
Menu lateral com:
- Seção "Conta": Dados, Plano, Uso
- Seção "Sistema": Integrações, Preferências, Segurança
- Indicador de página ativa (borda azul lateral)
- Prop `activePage` para highlight dinâmico

#### `DashboardLayout.tsx`
Layout wrapper que combina Header + Sidebar + área de conteúdo.

### Páginas

#### `/dashboard` (Uso & Limites)
- Card de perfil do usuário
- Estatísticas de cenários gerados
- Card de economia estimada
- Gráfico de histórico de uso
- Performance por agente

#### `/billing` (Plano & Faturamento)
- Card do plano atual (Enterprise)
- Comparação de planos (Free, Startup, Enterprise)
- Histórico de faturas
- Método de pagamento
- Card "Indique e Ganhe"

---

## 🎨 Temas Light/Dark

O projeto usa `next-themes` para gerenciar os temas.

### Como funciona

1. **ThemeProvider** em `providers/ThemeProvider.tsx` envolve a aplicação
2. **Hook `useTheme()`** usado no Header para toggle
3. **Classe `.dark`** adicionada ao `<html>` automaticamente
4. **Tailwind** usa variante `dark:` para estilos alternativos

### Configuração no CSS

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

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
