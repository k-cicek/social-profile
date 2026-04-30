export default function Loading() {
    return (
        <main className="mx-auto min-h-screen max-w-3xl space-y-6 px-4 py-6">
            <section className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                <div className="h-28 animate-pulse bg-(--border)" />

                <div className="px-6 pb-6">
                    <div className="flex items-end justify-between">
                        <div className="-mt-12 h-24 w-24 animate-pulse rounded-full border-4 border-border bg-(--border)" />
                        <div className="h-10 w-28 animate-pulse rounded-full bg-(--border)" />
                    </div>

                    <div className="mt-4 h-6 w-40 animate-pulse rounded bg-(--border)" />
                    <div className="mt-2 h-4 w-28 animate-pulse rounded bg-(--border)" />
                    <div className="mt-5 h-12 w-full animate-pulse rounded bg-(--border)" />

                    <div className="mt-4 flex gap-4">
                        <div className="h-4 w-20 animate-pulse rounded bg-(--border)" />
                        <div className="h-4 w-20 animate-pulse rounded bg-(--border)" />
                        <div className="h-4 w-20 animate-pulse rounded bg-(--border)" />
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <div className="h-32 animate-pulse rounded-2xl border border-border bg-background" />
                <div className="h-32 animate-pulse rounded-2xl border border-border bg-background" />
            </section>
        </main>
    );
}