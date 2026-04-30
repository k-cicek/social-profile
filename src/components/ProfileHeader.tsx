"use client";

import { BadgeCheck } from "lucide-react";
import type { User, UserStats } from "@/lib/types";
import { ProfileStats } from "./ProfileStats";
import { useState } from "react";
import { FollowButton } from "./FollowButon";
import Image from "next/image";

interface ProfileHeaderProps {
    user: User;
    stats: UserStats;
}

export function ProfileHeader({ user, stats }: ProfileHeaderProps) {
    const [isFollowing, setFollowing] = useState(user.isFollowing);
    const [followerCount, setFollowerCount] = useState(stats.followerCount);

    return (
        <section className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
            <div className="h-28 bg-accent" />

            <div className="px-6 pb-6">
                <div className="flex items-end justify-between">
                    <Image
                        src={user.avatarUrl}
                        alt={user.displayName}
                        width={96}
                        height={96}
                        priority
                        className="-mt-12 h-24 w-24 rounded-full border-4 border-border object-cover shadow-md"
                    />
                    <div className="pb-1">
                        <FollowButton
                            userId={user.id}
                            initialIsFollowing={isFollowing}
                            initialFollowerCount={followerCount}
                            onUpdate={(nexIsFollowing, nextFollowerCount) => {
                                setFollowing(nexIsFollowing);
                                setFollowerCount(nextFollowerCount);
                            }}
                        />
                    </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                    <h1 className="font-serif text-2xl font-bold tracking-tight text-primary">
                        {user.displayName}
                    </h1>
                    {user.isVerified && (
                        <BadgeCheck size={22} strokeWidth={1.75} className="shrink-0 text-accent" />
                    )}
                </div>

                <p className="mt-0.5 text-sm text-muted">@{user.username}</p>


                <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted">
                    {user.bio}
                </p>

                <ProfileStats stats={{ ...stats, followerCount }} />

            </div>
        </section>
    );
}
