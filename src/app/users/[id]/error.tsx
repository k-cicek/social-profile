"use client";

export default function ErrorPage({
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl border border-border bg-background p-8 text-center shadow-sm">
                <h1 className="text-xl font-bold text-primary">
                    Profil yüklenemedi
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted">
                    Kullanıcı bilgileri alınırken bir sorun oluştu.
                </p>

                <button
                    type="button"
                    onClick={reset}
                    className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[color:var(--accent-hover,#1a1a2e)]"
                >
                    Tekrar dene
                </button>
            </section>
        </main>
    );
}