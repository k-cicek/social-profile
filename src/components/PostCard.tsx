import type { Post } from "@/lib/types";
import { Heart, MessageCircle } from "lucide-react";

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <article className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 hover:shadow-md">
            <p className="text-[15px] leading-relaxed text-slate-800">{post.content}</p>

            {post.imageUrl && (
                <img
                    src={post.imageUrl}
                    alt="Post görseli"
                    className="mt-5 aspect-video w-full rounded-xl object-cover"
                />
            )}

            <footer className="mt-5 flex items-center justify-between">
                <div className="flex gap-5">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Heart size={13} strokeWidth={1.5} />
                        {post.likeCount} beğeni
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MessageCircle size={13} strokeWidth={1.5} />
                        {post.commentCount} yorum
                    </span>
                </div>

                <time
                    dateTime={post.createdAt}
                    className="text-xs italic text-slate-400"
                >
                    {new Intl.DateTimeFormat("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    }).format(new Date(post.createdAt))}
                </time>
            </footer>
        </article>
    );
}