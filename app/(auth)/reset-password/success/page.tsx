'use client';

import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { ResetSuccessCard } from '@/components/auth/ResetSuccessCard';

export default function ResetSuccessPage() {
    return (
        <AuthCardShell>
            <ResetSuccessCard />
        </AuthCardShell>
    );
}
