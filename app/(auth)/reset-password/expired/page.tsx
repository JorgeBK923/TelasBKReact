'use client';

import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { ResetExpiredCard } from '@/components/auth/ResetExpiredCard';

export default function ResetExpiredPage() {
    return (
        <AuthCardShell>
            <ResetExpiredCard />
        </AuthCardShell>
    );
}
