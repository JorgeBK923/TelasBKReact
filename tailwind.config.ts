import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            colors: {
                primary: "#0033ff",
                "primary-light": "#EEF2FF",
                "primary-dark": "#0022cc",
                "background-light": "#F5F6F8",
                "background-dark": "#0f1323",
                "card-dark": "#1C1C1E",
            },
            boxShadow: {
                glow: "0 4px 12px rgba(0, 51, 255, 0.25)",
            },
        },
    },
    plugins: [],
};

export default config;
