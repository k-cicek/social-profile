import { BadgeCheck } from "lucide-react";
import type { User, UserStats } from "@/lib/types";

interface ProfileHeaderProps {
    user: User;
    stats: UserStats;
}

export function ProfileHeader({ user, stats }: ProfileHeaderProps) {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-28 bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

            <div className="px-6 pb-6">
                <div className="flex items-end justify-between">
                    <img
                        src={user.avatarUrl}
                        alt={user.displayName}
                        className="-mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
                    />
                    <div className="pb-1">
                        <button className="rounded-full bg-[#0f3460] px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all hover:bg-[#1a1a2e] hover:scale-105 active:scale-100">
                            Takip et
                        </button>
                    </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                    <h1 className="font-serif text-2xl font-bold tracking-tight text-slate-950">
                        {user.displayName}
                    </h1>
                    {user.isVerified && (
                        <BadgeCheck size={22} strokeWidth={1.75} className="flex-shrink-0 text-blue-500" />
                    )}
                </div>

                <p className="mt-0.5 text-sm text-slate-400">@{user.username}</p>


                <p className="mt-4 border-l-2 border-[#0f3460] pl-3 text-sm leading-relaxed text-slate-600">
                    {user.bio}
                </p>

                <div className="mt-3 flex items-center gap-4">
                    <StatItem value={stats.followerCount} label="Takipçi" />
                    <span className="text-slate-200">|</span>
                    <StatItem value={stats.followingCount} label="Takip" />
                    <span className="text-slate-200">|</span>
                    <StatItem value={stats.postCount} label="Post" />
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label }: { value: number; label: string }) {
    return (
        <span className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold text-slate-950">
                {Intl.NumberFormat("tr-TR").format(value)}
            </span>
            <span className="text-sm text-slate-400">{label}</span>
        </span>
    );
}