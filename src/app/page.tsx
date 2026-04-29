import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileStats } from "@/components/ProfileStats";
import { PostList } from "@/components/PostList";
import { users, stats, posts } from "@/lib/mock/data";

export default function Home() {
  const user = users[0];
  const userStats = stats[user.id];
  const userPosts = posts[user.id] ?? [];

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <ProfileHeader />
      <ProfileStats />
      <PostList />
    </main>
  );
}