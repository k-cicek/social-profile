import { PostList } from "@/components/PostList";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileStats } from "@/components/ProfileStats";


export default function Page() {

    return (
        <main className="max-w-2xl mx-auto p-4 space-y-6 bg-gray-50 min-h-screen">
            <ProfileHeader />
            <ProfileStats />
            <PostList />
        </main>
    );
}