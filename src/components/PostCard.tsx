import type { Post, User } from "@/lib/types";
import { BadgeCheck, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
    post: Post;
    author: User;
}

export function PostCard({ post, author }: PostCardProps) {
    return (
        <article className="group cursor-pointer rounded-2xl border border-border bg-background p-5 shadow-sm hover:border-border hover:shadow-md">
            <div className="flex gap-3">
                <Image
                    src={author.avatarUrl}
                    alt={author.displayName}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover shadow-md"
                />

                <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-1.5">
                        <span className="truncate text-sm font-semibold text-primary">
                            {author.displayName}
                        </span>

                        {author.isVerified && (
                            <BadgeCheck
                                size={14}
                                strokeWidth={1.75}
                                className="shrink-0 text-blue-500"
                            />
                        )}

                        <span className="truncate text-xs text-muted">
                            @{author.username}
                        </span>
                    </div>

                    <p className="text-[15px] leading-relaxed text-primary">
                        {post.content}
                    </p>

                    {post.imageUrl && (
                        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl">
                            <Image
                                src={post.imageUrl}
                                alt="Post görseli"
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                priority={true}
                                className="object-cover"
                            />
                        </div>
                    )}

                    <footer className="mt-4 flex items-center justify-between">
                        <div className="flex gap-5">
                            <span className="flex items-center gap-1.5 text-xs text-muted">
                                <Heart size={13} strokeWidth={1.5} />
                                {post.likeCount}
                            </span>

                            <span className="flex items-center gap-1.5 text-xs text-muted">
                                <MessageCircle size={13} strokeWidth={1.5} />
                                {post.commentCount}
                            </span>
                        </div>

                        <time
                            dateTime={post.createdAt}
                            className="text-xs italic text-muted"
                        >
                            {new Intl.DateTimeFormat("tr-TR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }).format(new Date(post.createdAt))}
                        </time>
                    </footer>
                </div>
            </div>
        </article>
    );
}