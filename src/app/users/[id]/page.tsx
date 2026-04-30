import { notFound } from "next/navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { PostList } from "@/components/PostList";
import { PaginatedPostsResponse, Post, User, UserStats } from "@/lib/types";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
    searchParams: Promise<{
        page?: string;
    }>;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

async function fetchUser(id: string): Promise<User | null> {
    const response = await fetch(`${baseUrl}/api/users/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) return null;

    return response.json();
}

async function fetchUserStats(id: string): Promise<UserStats | null> {
    const response = await fetch(`${baseUrl}/api/users/${id}/stats`, {
        cache: "no-store",
    });

    if (!response.ok) return null;

    return response.json();
}

async function fetchUserPosts(
    id: string,
    page: number,
    limit: number
): Promise<PaginatedPostsResponse | null> {
    const response = await fetch(`${baseUrl}/api/users/${id}/posts?page=${page}&limit=${limit}`, {
        cache: "no-store",
    });

    if (!response.ok) return null;

    return response.json();
}

export default async function UserProfilePage({ params, searchParams }: PageProps) {
    // throw new Error("Test error");
    //await wait(2000);
    const { id } = await params;
    const { page } = await searchParams;

    const currentPage = Number(page ?? "1");
    const safePage = Number.isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;
    const limit = 10;

    const [user, userStats, postResult] = await Promise.all([
        fetchUser(id),
        fetchUserStats(id),
        fetchUserPosts(id, safePage, limit),
    ]);

    if (!user || !userStats || !postResult) {
        notFound();
    }


    return (
        <main className="mx-auto min-h-screen max-w-3xl space-y-6 px-4 py-8 text-slate-950 sm:py-12">
            <ProfileHeader user={user} stats={userStats} />
            <PostList
                posts={postResult.posts}
                pagination={{
                    page: postResult.page,
                    totalPages: postResult.totalPages,
                    hasNextPage: postResult.hasNextPage,
                }}
                author={user}
            />
        </main>
    );
}