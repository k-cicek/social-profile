import type { Post, User, UserStats } from "@/lib/types";

export const users: User[] = [
  {
    id: "1",
    username: "ayse.design",
    displayName: "Ayşe Demir",
    bio: "Minimal arayüzler ve ürün tasarımı.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    isVerified: true,
    isFollowing: false,
    createdAt: "2023-01-01",
  },
  {
    id: "3",
    username: "empty.user",
    displayName: "Boş Profil",
    bio: "Henüz paylaşım yok.",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    isVerified: false,
    isFollowing: false,
    createdAt: "2024-01-01",
  },
];

export const stats: Record<string, UserStats> = {
  "1": { followerCount: 1200, followingCount: 200, postCount: 5 },
  "3": { followerCount: 10, followingCount: 5, postCount: 0 },
};

export const posts: Record<string, Post[]> = {
  "1": [
    {
      id: "p1",
      userId: "1",
      content: "Profil sayfası küçük ama önemli bir üründür.",
      likeCount: 100,
      commentCount: 10,
      createdAt: "2024-01-01",
    },
    {
      id: "p2",
      userId: "1",
      content: "UI sadeliği zordur.",
      likeCount: 200,
      commentCount: 20,
      createdAt: "2024-01-02",
    },
  ],
  "3": [],
};
