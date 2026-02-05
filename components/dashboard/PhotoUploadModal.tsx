"use client";

import { useState, useRef, DragEvent, ChangeEvent, useEffect } from "react";
import { X, UploadCloud, Image as ImageIcon, AlertCircle, CheckCircle2 } from "lucide-react";

interface PhotoUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentImage?: string;
    onSave: (newImageUrl: string) => void;
}

export function PhotoUploadModal({
    isOpen,
    onClose,
    currentImage,
    onSave,
}: PhotoUploadModalProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Sync preview with currentImage when modal opens or currentImage changes
    useEffect(() => {
        if (isOpen) {
            setPreviewUrl(currentImage || null);
            setFile(null);
            setError(null);
        }
    }, [isOpen, currentImage]);

    if (!isOpen) return null;

    const validateFile = (file: File): boolean => {
        setError(null);

        // Validate type
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            setError("Formato inválido. Apenas JPG, PNG ou WebP.");
            return false;
        }

        // Validate size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError("Arquivo muito grande. Máximo de 5MB.");
            return false;
        }

        // Validate dimensions (async check - simplified here, but ideal for full implementation)
        // For now, we proceed with valid file type/size
        return true;
    };

    const handleFileSelect = (selectedFile: File) => {
        if (!validateFile(selectedFile)) return;

        setFile(selectedFile);

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
    };

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleSave = async () => {
        if (!file || !previewUrl) return;

        setIsLoading(true);
        // Simulate upload
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);

        // Pass the new image back to parent
        onSave(previewUrl);

        // Close after success
        setTimeout(() => {
            onClose();
            // Reset state
            setIsSuccess(false);
            setFile(null);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div
                className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Alterar Foto de Perfil
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto">
                    {/* Preview Area */}
                    <div className="flex justify-center mb-6">
                        <div className="relative group">
                            <div className="size-32 rounded-full overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800 bg-slate-100 dark:bg-slate-800">
                                {previewUrl ? (
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <ImageIcon className="size-12" />
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                                title="Escolher imagem"
                            >
                                <UploadCloud className="size-4" />
                            </button>
                        </div>
                    </div>

                    {/* Drag & Drop Area */}
                    <div
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                            border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                            ${isDragging
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
                                : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }
                            ${error ? 'border-red-300 bg-red-50 dark:bg-red-900/10' : ''}
                        `}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileInputChange}
                        />

                        <div className="flex flex-col items-center gap-2">
                            <div className={`p-3 rounded-full ${isDragging ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                <UploadCloud className="size-6" />
                            </div>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="text-blue-600 hover:underline">Clique para selecionar</span> ou arraste aqui
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                JPG, PNG ou WebP até 5MB
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    {error && (
                        <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm">
                            <AlertCircle className="size-4 shrink-0" />
                            {error}
                        </div>
                    )}

                    {isSuccess && (
                        <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-sm">
                            <CheckCircle2 className="size-4 shrink-0" />
                            Foto atualizada com sucesso!
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!file || isLoading || isSuccess}
                        className={`
                            px-6 py-2.5 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all text-sm flex items-center gap-2
                            ${!file || isLoading || isSuccess
                                ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed shadow-none'
                                : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                            }
                        `}
                    >
                        {isLoading ? (
                            <>
                                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Salvando...
                            </>
                        ) : (
                            'Salvar Foto'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
