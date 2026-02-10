export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    isStreaming?: boolean;
}

export interface Conversation {
    id: string;
    title: string;
    preview: string;
    updatedAt: Date;
}
