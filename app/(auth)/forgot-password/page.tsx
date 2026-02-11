'use client';

import { AuthCardShell } from '@/components/auth/AuthCardShell';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
    return (
        <AuthCardShell>
            <ForgotPasswordForm />
        </AuthCardShell>
    );
}
