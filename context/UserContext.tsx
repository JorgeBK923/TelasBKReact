"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CURRENT_USER } from "@/constants/user";

interface UserData {
    name: string;
    email: string;
    role: string;
    company: string;
    phone: string;
    plan: string;
    avatarUrl: string;
}

interface UserContextType {
    user: UserData;
    updateAvatar: (newUrl: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserData>(CURRENT_USER);

    useEffect(() => {
        // Load custom avatar from localStorage if exists
        const savedAvatar = localStorage.getItem("user_profile_image");
        if (savedAvatar) {
            setUser((prev) => ({ ...prev, avatarUrl: savedAvatar }));
        }
    }, []);

    const updateAvatar = (newUrl: string) => {
        setUser((prev) => ({ ...prev, avatarUrl: newUrl }));
        localStorage.setItem("user_profile_image", newUrl);
    };

    return (
        <UserContext.Provider value={{ user, updateAvatar }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
