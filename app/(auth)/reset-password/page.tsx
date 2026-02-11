'use client';

import { Suspense } from 'react';
import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';

function ResetPasswordContent() {
    return (
        <AuthCardShell>
            <ResetPasswordForm />
        </AuthCardShell>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense>
            <ResetPasswordContent />
        </Suspense>
    );
}
