/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
                DEFAULT: "#0f172a", // slate-900
                foreground: "#f8fafc", // slate-50
            },
            secondary: {
                DEFAULT: "#94a3b8", // slate-400
                foreground: "#0f172a", // slate-900
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "#f59e0b", // amber-500
                foreground: "#0f172a", // slate-900
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
        },
        borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
        },
        boxShadow: {
            elegant: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
            card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        },
    },
};
export const plugins = [require("tailwindcss-animate")];
  