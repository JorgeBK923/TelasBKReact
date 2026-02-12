export interface PlanData {
    name: string;
    price: string;
    priceSuffix?: string;
    features: string[];
}

export interface RegistrationData {
    name: string;
    email: string;
}

export interface PersonalizationData {
    workspaceName: string;
    role: string;
    objective: string;
}

export interface OnboardingState {
    currentStep: number;
    registration: RegistrationData | null;
    selectedPlan: PlanData | null;
    paymentCompleted: boolean;
    personalization: PersonalizationData | null;
    setupCompleted: boolean;
}
