import type { Post } from "@/lib/types";
import { PostCard } from "./PostCard";
import { EmptyState } from "./EmtyState";

interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return <EmptyState />;
    }

    return (
        <section className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
}