import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl border border-border bg-background p-8 text-center shadow-sm">
                <p className="text-sm font-medium text-muted">404</p>

                <h1 className="mt-2 text-xl font-bold text-primary">
                    Kullanıcı bulunamadı
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted">
                    Aradığın profil mevcut değil veya kaldırılmış olabilir.
                </p>

                <Link
                    href="/users/1"
                    className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[color:var(--accent-hover,#1a1a2e)]"
                >
                    Örnek profile dön
                </Link>
            </section>
        </main>
    );
}