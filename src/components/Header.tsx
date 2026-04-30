"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Layers } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const pathname = usePathname();
    const isProfilePage = pathname !== "/";

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background backdrop-blur-md">
            <div className="mx-auto flex max-w-3xl items-center px-4 py-3">
                {isProfilePage ? (
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
                    >
                        <ChevronLeft size={16} strokeWidth={2} />
                        Profiller
                    </Link>
                ) : (
                    <Link href="/" className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent">
                            <Layers size={14} strokeWidth={2} className="text-white" />
                        </span>
                        <span className="text-sm font-semibold tracking-tight text-primary">
                            Profil App
                        </span>
                    </Link>
                )}
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}