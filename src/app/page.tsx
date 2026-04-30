import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl space-y-6 bg-gray-50 p-6 text-gray-950">
      <h1 className="text-2xl font-bold">Ana Sayfa</h1>

      <Link
        href="/users/1"
        className="inline-block rounded-xl bg-gray-950 px-4 py-2 text-white"
      >
        Profil sayfasına git
      </Link>
    </main>
  );
}