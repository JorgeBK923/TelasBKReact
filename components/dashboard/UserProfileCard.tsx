"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Calendar, Clock, AlertTriangle } from "lucide-react";
import { PhotoUploadModal } from "@/components/dashboard/PhotoUploadModal";
import { formatDistanceToNow, getLastActivity, updateLastActivity } from "@/utils/date";

export function UserProfileCard() {
    const pathname = usePathname();

    // Check if we are on the profile data page (either /profile or /profile/data)
    // Adjust this logic if your profile root is different, based on user request it is /profile or /profile/data
    const showActions = pathname === '/profile' || pathname === '/profile/data';

    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [lastActivityText, setLastActivityText] = useState("há 5 minutos");

    // Placeholder image
    const placeholderImage = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

    // State for the profile image
    const [profileImage, setProfileImage] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuBrzo0FcvIunHSpnEoPZ8JbTeyUACHHixGsutFCzHk5sHWyA9u5blbx8Dz6Nn9tZcU9w3rnrU0pYXoLtsXxhHW3zJT7wW1IVym5fOKisUZwh4M-ppc3f7RHZlsufb5BjepVXMn08hUkUPSqSmRXNru5FyUi6feECZjTv-ML92XcvkSojBtITpKIDnrNxj0n5TUiGN4R8SghPXOjrN7pJlklAUEjISeh7l8lgs7Hu54swag2xMgJJVujvL8DbqZsMAq6zeFtwzDeCLI");

    // Load from localStorage on mount and update last activity
    useEffect(() => {
        const savedImage = localStorage.getItem('user_profile_image');
        if (savedImage) {
            setProfileImage(savedImage);
        }

        // Update and display last activity
        updateLastActivity();
        const lastActivity = getLastActivity();
        setLastActivityText(formatDistanceToNow(lastActivity));

        // Update every minute
        const interval = setInterval(() => {
            const activity = getLastActivity();
            setLastActivityText(formatDistanceToNow(activity));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    // Update last activity when pathname changes (user navigates)
    useEffect(() => {
        updateLastActivity();
    }, [pathname]);

    const handleRemoveClick = () => {
        setIsRemoveModalOpen(true);
    };

    const handleConfirmRemove = () => {
        setProfileImage(placeholderImage);
        localStorage.setItem('user_profile_image', placeholderImage);
        setIsRemoveModalOpen(false);
        console.log("Foto removida");
    };

    const handleSavePhoto = (newImageUrl: string) => {
        setProfileImage(newImageUrl);
        localStorage.setItem('user_profile_image', newImageUrl);
    };

    return (
        <>
            <div className="w-full bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-start justify-between transition-colors">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                            <div
                                className="size-20 rounded-full bg-cover bg-center ring-4 ring-slate-50 dark:ring-white/5"
                                style={{
                                    backgroundImage: `url('${profileImage}')`,
                                }}
                                aria-label="Foto de perfil de Ricardo Dev"
                            />
                            <div
                                className="absolute bottom-0 right-0 bg-green-500 size-4 border-2 border-white dark:border-card-dark rounded-full"
                                title="Online"
                            />
                        </div>

                        {showActions && (
                            <>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsUploadModalOpen(true)}
                                        className="px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary/5 text-xs font-semibold transition-colors"
                                    >
                                        Alterar Foto
                                    </button>
                                    <button
                                        onClick={handleRemoveClick}
                                        className="px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-xs font-semibold transition-colors"
                                    >
                                        Remover
                                    </button>
                                </div>
                                <p className="text-[10px] text-slate-400 text-center leading-tight w-24">
                                    JPG, PNG até 5MB
                                </p>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col mt-1">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Ricardo Dev
                            </h2>
                            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide">
                                Plano Enterprise
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400">
                            ricardo@bugkillers.ai
                        </p>
                        <div className="flex flex-col gap-1 mt-3">
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                <Calendar className="size-3.5" />
                                Membro desde Janeiro 2026
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                <Clock className="size-3.5" />
                                Última atividade: {lastActivityText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo Upload Modal */}
            <PhotoUploadModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                currentImage={profileImage}
                onSave={handleSavePhoto}
            />

            {/* Confirmation Modal for Removal */}
            {isRemoveModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-[400px] p-6 animate-in fade-in zoom-in-95 border border-slate-100 dark:border-white/10">
                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full w-fit mx-auto mb-4">
                            <AlertTriangle className="size-8 text-red-600 dark:text-red-400" />
                        </div>

                        <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white mb-2">
                            Remover foto de perfil?
                        </h3>

                        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mb-6">
                            Tem certeza que deseja remover sua foto de perfil? Esta ação não pode ser desfeita e sua foto retornará ao padrão.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsRemoveModalOpen(false)}
                                className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirmRemove}
                                className="px-4 py-2.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                            >
                                Sim, remover
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
