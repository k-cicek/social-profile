import { useState } from "react";

interface FollowButtonProps {
    userId: string;
    initialIsFollowing: boolean;
    initialFollowerCount: number;
    onUpdate: (isFollowing: boolean, followerCount: number) => void;
}

export function FollowButton({
    userId,
    initialIsFollowing,
    initialFollowerCount,
    onUpdate,
}: FollowButtonProps) {
    const [isFollowing, setFollowing] = useState(initialIsFollowing);
    const [followerCount, setFollowerCount] = useState(initialFollowerCount);
    const [isLoading, setLoading] = useState(false);

    async function handleClick() {
        if (isLoading) return;

        const previousIsFollowing = isFollowing;
        const previousFollowerCount = followerCount;

        const nextIsFollowing = !previousIsFollowing;
        const nextFollowerCount = previousFollowerCount + (nextIsFollowing ? 1 : -1);

        setFollowing(nextIsFollowing);
        setFollowerCount(nextFollowerCount);
        onUpdate(nextIsFollowing, nextFollowerCount);

        setLoading(true);

        try {
            const response = await fetch(`/api/users/${userId}/follow`, {
                method: "POST",
            });

            if (!response.ok) {
                const errorBody = await response.json();
                console.error("Follow request failed:", errorBody);
                throw new Error("Follow action failed");
            }

            const data = (await response.json()) as {
                isFollowing: boolean;
                followerCount: number;
            };

            setFollowing(data.isFollowing);
            setFollowerCount(data.followerCount);
            onUpdate(data.isFollowing, data.followerCount);
        } catch {
            setFollowing(previousIsFollowing);
            setFollowerCount(previousFollowerCount);
            onUpdate(previousIsFollowing, previousFollowerCount);
        } finally {
            setLoading(false);
        }

    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isLoading}
            aria-pressed={isFollowing}
            className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all hover:scale-105 active:scale-100 disabled:cursor-not-allowed disabled:opacity-70 ${isFollowing
                ? "bg-slate-500 hover:bg-slate-600"
                : "bg-[#0f3460] hover:bg-[#1a1a2e]"
                }`}
        >
            {isLoading
                ? "İşleniyor..."
                : isFollowing
                    ? "Takip ediliyor"
                    : "Takip et"}
        </button>
    )
}