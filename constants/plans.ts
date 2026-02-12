import type { PlanData } from '@/types/onboarding';

export interface PlanConfig {
    name: string;
    description: string;
    price: string;
    priceSuffix?: string;
    buttonText: string;
    variant: 'outline' | 'filled' | 'subtle';
    features: string[];
    isPopular?: boolean;
    badge?: string;
}

export const PLANS: PlanConfig[] = [
    {
        name: 'Starter',
        description: 'Para validar fluxos e automatizar rotinas básicas.',
        price: 'R$ 49',
        priceSuffix: '/mês',
        buttonText: 'Começar',
        variant: 'outline',
        features: [
            '1 Agente de IA',
            '50 Testes mensais',
            'Relatórios básicos',
            'Integração com GitHub',
        ],
    },
    {
        name: 'Professional',
        description: 'Para escalar operações com alta demanda de processamento.',
        price: 'R$ 80',
        priceSuffix: '/mês',
        buttonText: 'Selecionar Plano',
        isPopular: true,
        badge: 'Mais Escolhido',
        variant: 'filled',
        features: [
            '5 Agentes de IA simultâneos',
            'Testes Ilimitados',
            'Depuração avançada (Debug Mode)',
            'Integração CI/CD Completa',
            'Suporte Prioritário',
        ],
    },
    {
        name: 'Enterprise',
        description: 'Para customização total e ambientes de alta segurança.',
        price: 'Sob consulta',
        buttonText: 'Falar com Vendas',
        variant: 'subtle',
        features: [
            'Agentes de IA Ilimitados',
            'Deploy On-Premise ou Nuvem Privada',
            'SSO e Controles de Acesso (RBAC)',
            'SLA Garantido',
            'Gerente de Sucesso Dedicado',
        ],
    },
];

export function getPlanByName(name: string): PlanData | null {
    const found = PLANS.find((p) => p.name === name);
    if (!found) return null;
    return {
        name: found.name,
        price: found.price,
        priceSuffix: found.priceSuffix,
        features: found.features,
    };
}
