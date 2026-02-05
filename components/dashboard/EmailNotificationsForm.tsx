"use client";

interface EmailNotificationItem {
    id: string;
    label: string;
    description: string;
    checked: boolean;
}

interface EmailNotificationsSection {
    title: string;
    items: EmailNotificationItem[];
}

interface EmailNotificationsFormProps {
    notifications: EmailNotificationsSection[];
    onToggle: (sectionIndex: number, itemIndex: number) => void;
}

export function EmailNotificationsForm({ notifications, onToggle }: EmailNotificationsFormProps) {
    return (
        <div className="space-y-6">
            {notifications.map((section, sectionIndex) => (
                <div
                    key={section.title}
                    className={sectionIndex > 0 ? "pt-6 border-t border-slate-100 dark:border-white/5" : ""}
                >
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                        {section.title}
                    </h5>
                    <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {item.label}
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            {item.description}
                                        </span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            onChange={() => onToggle(sectionIndex, itemIndex)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                                {itemIndex < section.items.length - 1 && (
                                    <hr className="mt-4 border-slate-100 dark:border-white/5" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
