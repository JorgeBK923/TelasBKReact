/**
 * Format a date to relative time (e.g., "há 5 minutos", "há 2 horas")
 */
export function formatDistanceToNow(date: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
        return "há alguns segundos";
    } else if (diffInMinutes === 1) {
        return "há 1 minuto";
    } else if (diffInMinutes < 60) {
        return `há ${diffInMinutes} minutos`;
    } else if (diffInHours === 1) {
        return "há 1 hora";
    } else if (diffInHours < 24) {
        return `há ${diffInHours} horas`;
    } else if (diffInDays === 1) {
        return "há 1 dia";
    } else if (diffInDays < 30) {
        return `há ${diffInDays} dias`;
    } else if (diffInDays < 365) {
        const months = Math.floor(diffInDays / 30);
        return months === 1 ? "há 1 mês" : `há ${months} meses`;
    } else {
        const years = Math.floor(diffInDays / 365);
        return years === 1 ? "há 1 ano" : `há ${years} anos`;
    }
}

/**
 * Get the last activity timestamp from localStorage or return a default
 */
export function getLastActivity(): Date {
    if (typeof window === "undefined") {
        return new Date();
    }

    const saved = localStorage.getItem("user_last_activity");
    if (saved) {
        return new Date(saved);
    }

    // Default: 5 minutes ago
    const defaultDate = new Date();
    defaultDate.setMinutes(defaultDate.getMinutes() - 5);
    return defaultDate;
}

/**
 * Update the last activity timestamp
 */
export function updateLastActivity(): void {
    if (typeof window !== "undefined") {
        localStorage.setItem("user_last_activity", new Date().toISOString());
    }
}
