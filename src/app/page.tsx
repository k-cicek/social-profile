import Link from "next/link";
import { users, stats } from "@/lib/mock/data";
import { BadgeCheck, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl space-y-6 px-4 py-8 text-slate-950">
      <section className="space-y-4">
        {users.map((user) => {
          const userStats = stats[user.id];

          return (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="block rounded-3xl border border-border bg-background p-5 shadow-sm hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={user.avatarUrl}
                  alt={user.displayName}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="truncate text-lg font-semibold text-primary">
                      {user.displayName}
                    </h2>

                    {user.isVerified && (
                      <BadgeCheck
                        size={18}
                        strokeWidth={1.75}
                        className="text-blue-500"
                      />
                    )}
                  </div>

                  <p className="text-sm text-slate-400">@{user.username}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-muted">
                    {user.bio}
                  </p>

                  {userStats && (
                    <div className="mt-3 flex gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <Heart size={14} />
                        {userStats.followerCount}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <MessageCircle size={14} />
                        {userStats.postCount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}