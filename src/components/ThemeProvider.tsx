
"use client";
import { useEffect, useState } from "react";

export default function ThemeProvider() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            const theme = saved ?? (prefersDark ? "dark" : "light");
            if (theme === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
        } catch { }
        const onStorage = (e: StorageEvent) => {
            if (e.key === "theme") {
                if (e.newValue === "dark") document.documentElement.classList.add("dark");
                else document.documentElement.classList.remove("dark");
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    return mounted ? null : null;
}