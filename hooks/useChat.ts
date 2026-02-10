'use client';

import { useState, useCallback, useRef } from 'react';
import { ChatMessage } from '@/types/chat-types';

// Respostas mock que simulam um agente de QA/BugKiller
const mockResponses: Record<string, string> = {
    default: "Entendi sua questão! Vou analisar isso com cuidado. Baseado na minha experiência como agente de QA, posso identificar alguns pontos importantes:\n\n1. **Análise inicial**: O cenário que você descreveu pode ter múltiplas causas raiz.\n2. **Recomendação**: Sugiro começar isolando o componente problemático.\n3. **Próximos passos**: Podemos criar testes automatizados para cobrir esse caso.\n\nDeseja que eu detalhe algum desses pontos?",

    bug: "🔴 **Bug Identificado!**\n\nAnalisei o trecho e encontrei um problema potencial:\n\n- **Tipo**: Erro de referência nula\n- **Severidade**: Alta\n- **Descrição**: A variável pode ser `null` ou `undefined` antes de ser acessada, causando um crash em runtime.\n\n**Correção sugerida:**\n```javascript\nif (user && user.isAdmin) {\n    return grantAccess();\n}\n```\n\nIsso adiciona uma verificação de nulidade antes de acessar a propriedade. Deseja que eu aplique essa correção?",

    teste: "✅ **Cenário de Teste Gerado**\n\nCriei os seguintes cenários BDD para cobrir esse fluxo:\n\n```gherkin\nFuncionalidade: Autenticação de Usuário\n\n  Cenário: Login com credenciais válidas\n    Dado que o usuário está na página de login\n    Quando ele insere email \"user@test.com\"\n    E insere a senha \"123456\"\n    E clica no botão \"Entrar\"\n    Então deve ser redirecionado ao dashboard\n\n  Cenário: Login com token inválido\n    Dado que o token JWT está expirado\n    Quando o sistema tenta decodificar o token\n    Então deve retornar erro 401\n    E exibir mensagem \"Sessão expirada\"\n```\n\nDeseja que eu adicione mais cenários?",

    segurança: "🛡️ **Análise de Segurança**\n\nRealizei uma varredura e encontrei os seguintes pontos de atenção:\n\n| Vulnerabilidade | Severidade | Status |\n|----------------|------------|--------|\n| SQL Injection no endpoint `/api/users` | 🔴 Alta | Aberto |\n| XSS no campo de comentários | 🟡 Média | Aberto |\n| Headers CORS muito permissivos | 🟡 Média | Aberto |\n| Certificado SSL válido | 🟢 OK | Resolvido |\n\n**Recomendação prioritária**: Corrija o SQL Injection imediatamente usando prepared statements.\n\nPosso gerar o código corrigido para cada item?",

    performance: "⚡ **Relatório de Performance**\n\nAnalisei o tempo de resposta da sua aplicação:\n\n- **Tempo médio de carregamento**: 2.3s (meta: < 1.5s)\n- **Largest Contentful Paint**: 1.8s ✅\n- **First Input Delay**: 120ms 🟡\n- **Cumulative Layout Shift**: 0.05 ✅\n\n**Gargalo identificado**: A query no endpoint `/api/dashboard` está fazendo N+1 queries ao banco de dados.\n\n**Solução sugerida**: Implementar eager loading com `JOIN` ou usar cache Redis para dados frequentes.\n\nDeseja que eu otimize essa query?",
};

function getMockResponse(query: string): string {
    const lower = query.toLowerCase();
    if (lower.includes('bug') || lower.includes('erro') || lower.includes('crash') || lower.includes('null')) {
        return mockResponses.bug;
    }
    if (lower.includes('teste') || lower.includes('bdd') || lower.includes('cenário') || lower.includes('gherkin')) {
        return mockResponses.teste;
    }
    if (lower.includes('segurança') || lower.includes('vulnerabilidade') || lower.includes('owasp') || lower.includes('sql')) {
        return mockResponses.segurança;
    }
    if (lower.includes('performance') || lower.includes('lento') || lower.includes('velocidade') || lower.includes('carga')) {
        return mockResponses.performance;
    }
    return mockResponses.default;
}

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef(false);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        setError(null);

        // Se for a primeira mensagem, gera ID de conversa
        if (!conversationId) {
            setConversationId(generateId());
        }

        // 1. Adiciona mensagem do usuário
        const userMsg: ChatMessage = {
            id: generateId(),
            role: 'user',
            content: text.trim(),
            timestamp: new Date(),
        };

        // 2. Cria mensagem vazia do assistente (para streaming)
        const assistantMsg: ChatMessage = {
            id: generateId(),
            role: 'assistant',
            content: '',
            timestamp: new Date(),
            isStreaming: true,
        };

        setMessages(prev => [...prev, userMsg, assistantMsg]);
        setIsLoading(true);
        abortRef.current = false;

        // 3. Simula streaming da resposta (mock)
        // No futuro, substituir por fetch para /api/chat com SSE
        const fullResponse = getMockResponse(text);
        const words = fullResponse.split(' ');
        const assistantId = assistantMsg.id;

        for (let i = 0; i < words.length; i++) {
            if (abortRef.current) break;

            await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 40));

            const partialContent = words.slice(0, i + 1).join(' ');

            setMessages(prev => {
                const idx = prev.findIndex(m => m.id === assistantId);
                if (idx === -1) return prev;
                const updated = [...prev];
                updated[idx] = {
                    ...updated[idx],
                    content: partialContent,
                };
                return updated;
            });
        }

        // 4. Finaliza streaming
        setMessages(prev => {
            const idx = prev.findIndex(m => m.id === assistantId);
            if (idx === -1) return prev;
            const updated = [...prev];
            updated[idx] = {
                ...updated[idx],
                content: fullResponse,
                isStreaming: false,
            };
            return updated;
        });

        setIsLoading(false);
    }, [isLoading, conversationId]);

    const resetChat = useCallback(() => {
        abortRef.current = true;
        setMessages([]);
        setConversationId(null);
        setIsLoading(false);
        setError(null);
    }, []);

    return {
        messages,
        isLoading,
        conversationId,
        error,
        sendMessage,
        resetChat,
    };
}
