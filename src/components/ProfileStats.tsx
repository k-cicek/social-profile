import type { UserStats } from "@/lib/types";

interface ProfileStatsProps {
    stats: UserStats;
}

export function ProfileStats({ stats }: ProfileStatsProps) {
    return (
        <div className="mt-3 flex flex-wrap items-center gap-4">
            <StatItem value={stats.followerCount} label="Takipçi" />
            <span className="text-muted">|</span>
            <StatItem value={stats.followingCount} label="Takip" />
            <span className="text-muted">|</span>
            <StatItem value={stats.postCount} label="Post" />
        </div>
    );
}

function StatItem({ value, label }: { value: number; label: string }) {
    return (
        <span className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold text-primary">
                {Intl.NumberFormat("tr-TR").format(value)}
            </span>
            <span className="text-sm text-muted">{label}</span>
        </span>
    );
}