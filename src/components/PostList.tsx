import type { Post, User } from "@/lib/types";
import { PostCard } from "./PostCard";
import { EmptyState } from "./EmptyState";
import Link from "next/link";

interface PostListProps {
    posts: Post[];
    pagination: {
        page: number;
        totalPages: number;
        hasNextPage: boolean;
    }
    author: User;
}

export function PostList({ posts, pagination, author }: PostListProps) {
    if (posts.length === 0) {
        return <EmptyState />;
    }

    return (
        <section className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} author={author} />
            ))}
            <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-4 shadow-sm">
                <Link
                    href={`?page=${pagination.page - 1}`}
                    aria-disabled={pagination.page <= 1}
                    className={
                        pagination.page <= 1
                            ? "pointer-events-none text-sm text-muted"
                            : "text-sm font-medium text-primary hover:text-primary"
                    }
                >
                    Önceki
                </Link>

                <span className="text-sm text-muted">
                    Sayfa {pagination.page} / {pagination.totalPages || 1}
                </span>

                <Link
                    href={`?page=${pagination.page + 1}`}
                    aria-disabled={!pagination.hasNextPage}
                    className={
                        !pagination.hasNextPage
                            ? "pointer-events-none text-sm text-muted"
                            : "text-sm font-medium text-primary hover:text-primary"
                    }
                >
                    Sonraki
                </Link>
            </div>
        </section>
    );
}