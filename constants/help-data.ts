import { Rocket, Code2, Link2 } from "lucide-react";

export interface HelpCategory {
    emoji: string;
    bgClass: string;
    title: string;
    description: string;
}

export interface Article {
    title: string;
    description: string;
    readTime: string;
}

export interface TopicChip {
    icon: React.ReactNode;
    label: string;
}

export const helpCategories: HelpCategory[] = [
    { emoji: "🚀", bgClass: "bg-blue-50 dark:bg-blue-900/20", title: "Primeiros Passos", description: "Instale o BugKillers, configure sua conta e comece a criar seus primeiros testes." },
    { emoji: "✏️", bgClass: "bg-purple-50 dark:bg-purple-900/20", title: "Agente AI", description: "Aprenda como treinar o Agente AI para detectar bugs complexos automaticamente." },
    { emoji: "⚙️", bgClass: "bg-orange-50 dark:bg-orange-900/20", title: "Integrações", description: "Conecte com Jira, Slack, GitHub e outras ferramentas do seu ecossistema." },
    { emoji: "💡", bgClass: "bg-yellow-50 dark:bg-yellow-900/20", title: "Melhores Práticas", description: "Guias avançados de BDD e estratégias de QA para times de alta performance." },
    { emoji: "🔒", bgClass: "bg-green-50 dark:bg-green-900/20", title: "Segurança", description: "Informações sobre conformidade SOC2, criptografia de dados e permissões." },
    { emoji: "💳", bgClass: "bg-gray-50 dark:bg-gray-900/20", title: "Faturamento", description: "Gerencie assinaturas, métodos de pagamento e visualize faturas passadas." },
];

export const popularArticles: Article[] = [
    { title: "Como criar seu primeiro cenário BDD", description: "Passo a passo detalhado utilizando a linguagem Gherkin no editor visual.", readTime: "5 min" },
    { title: "Configurando webhooks para alertas em tempo real", description: "Receba notificações no Slack ou Teams sempre que um teste falhar.", readTime: "3 min" },
    { title: "Solução de problemas com o Agente AI", description: "O que fazer quando a IA não identifica corretamente um elemento da UI.", readTime: "8 min" },
];
