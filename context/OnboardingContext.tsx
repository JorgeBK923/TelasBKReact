"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { OnboardingState, PlanData, PersonalizationData, RegistrationData } from "@/types/onboarding";

interface OnboardingContextType {
    state: OnboardingState;
    setRegistration: (data: RegistrationData) => void;
    setSelectedPlan: (plan: PlanData) => void;
    setPaymentCompleted: () => void;
    setPersonalization: (data: PersonalizationData) => void;
    setSetupCompleted: () => void;
}

const STORAGE_KEY = "onboarding_state";

const initialState: OnboardingState = {
    currentStep: 1,
    registration: null,
    selectedPlan: null,
    paymentCompleted: false,
    personalization: null,
    setupCompleted: false,
};

function loadState(): OnboardingState {
    if (typeof window === "undefined") return initialState;
    try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : initialState;
    } catch {
        return initialState;
    }
}

function saveState(state: OnboardingState) {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        // ignore
    }
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<OnboardingState>(initialState);
    const stateRef = useRef<OnboardingState>(initialState);

    useEffect(() => {
        const loaded = loadState();
        stateRef.current = loaded;
        setState(loaded);
    }, []);

    const update = useCallback((partial: Partial<OnboardingState>) => {
        const next = { ...stateRef.current, ...partial };
        stateRef.current = next;
        saveState(next);
        setState(next);
    }, []);

    const setRegistration = useCallback((data: RegistrationData) => {
        update({ registration: data, currentStep: 2 });
    }, [update]);

    const setSelectedPlan = useCallback((plan: PlanData) => {
        update({ selectedPlan: plan, currentStep: 3 });
    }, [update]);

    const setPaymentCompleted = useCallback(() => {
        update({ paymentCompleted: true, currentStep: 4 });
    }, [update]);

    const setPersonalization = useCallback((data: PersonalizationData) => {
        update({ personalization: data, currentStep: 5 });
    }, [update]);

    const setSetupCompleted = useCallback(() => {
        update({ setupCompleted: true });
    }, [update]);

    const value = useMemo(
        () => ({ state, setRegistration, setSelectedPlan, setPaymentCompleted, setPersonalization, setSetupCompleted }),
        [state, setRegistration, setSelectedPlan, setPaymentCompleted, setPersonalization, setSetupCompleted]
    );

    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error("useOnboarding must be used within an OnboardingProvider");
    }
    return context;
}
