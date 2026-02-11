'use client';

import { Suspense } from 'react';
import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { LinkSentCard } from '@/components/auth/LinkSentCard';

function LinkSentContent() {
    return (
        <AuthCardShell>
            <LinkSentCard />
        </AuthCardShell>
    );
}

export default function LinkSentPage() {
    return (
        <Suspense>
            <LinkSentContent />
        </Suspense>
    );
}
