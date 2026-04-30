export function EmptyState() {
    return (
        <section className="rounded-2xl border border-slate-200 border-dashed bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-gray-950">
                Henüz paylaşım yok
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                Bu kullanıcı henüz herhangi bir paylaşım yapmamış.
            </p>
        </section>
    );
}