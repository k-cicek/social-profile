"use client";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        setMounted(true);
        try {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            const initial = (saved as "light" | "dark") ?? (prefersDark ? "dark" : "light");
            setTheme(initial);
            if (initial === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
        } catch (e) {

        }
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch { }
        if (next === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }


    if (!mounted) return <button aria-hidden className="w-10 h-8 rounded-md bg-transparent" />;

    return (
        <button
            onClick={toggle}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center w-10 h-8 rounded-md transition-colors"
        >
            {theme === "dark" ? (
                <Moon size={18} strokeWidth={1.5} className="text-muted" />
            ) : (
                <Sun size={18} strokeWidth={1.5} className="text-muted" />
            )}
        </button>
    );
}