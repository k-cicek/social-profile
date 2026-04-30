import { notFound } from "next/navigation";
import { users, stats, posts } from "@/lib/mock/data";
import { ProfileHeader } from "@/components/ProfileHeader";
import { PostList } from "@/components/PostList";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function UserProfilePage({ params }: PageProps) {
    const { id } = await params;

    const user = users.find((item) => item.id === id);
    const userStats = stats[id];
    const userPosts = posts[id] ?? [];

    if (!user || !userStats) {
        notFound();
    }

    return (
        <main className="mx-auto min-h-screen max-w-3xl space-y-6 px-4 py-8 text-slate-950 sm:py-12">
            <ProfileHeader user={user} stats={userStats} />
            <PostList posts={userPosts} />
        </main>
    );
}