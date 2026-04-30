import { posts, stats, users } from "@/lib/mock/data";
import type { PaginatedPostsResponse, User, UserStats } from "@/lib/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function clone<T>(data: T): T {
  return structuredClone(data);
}

export async function getUserById(id: string): Promise<User> {
  await delay(300);

  const user = users.find((item) => item.id === id);

  if (!user) {
    throw new Error("Kullanıcı bulunamadı");
  }

  return clone(user);
}

export async function getUserStats(id: string): Promise<UserStats> {
  await delay(300);

  const userStats = stats[id];

  if (!userStats) {
    throw new Error("İstatistik bulunamadı");
  }

  return clone(userStats);
}

export async function getUserPosts(
  id: string,
  page = 1,
  limit = 10,
): Promise<PaginatedPostsResponse> {
  await delay(400);

  const userPosts = posts[id];

  if (!userPosts) {
    throw new Error("Paylaşımlar bulunamadı");
  }

  const safePage = Math.max(page, 1);
  const safeLimit = Math.max(limit, 1);

  const start = (safePage - 1) * safeLimit;
  const end = start + safeLimit;

  return {
    posts: clone(userPosts.slice(start, end)),
    page: safePage,
    totalPages: Math.ceil(userPosts.length / safeLimit),
    hasNextPage: end < userPosts.length,
  };
}

export async function toggleFollowUser(id: string): Promise<{
  isFollowing: boolean;
  followerCount: number;
}> {
  await delay(300);

  const user = users.find((item) => item.id === id);
  const userStats = stats[id];

  if (!user || !userStats) {
    throw new Error("Kullanıcı bulunamadı");
  }

  user.isFollowing = !user.isFollowing;
  userStats.followerCount += user.isFollowing ? 1 : -1;

  return {
    isFollowing: user.isFollowing,
    followerCount: userStats.followerCount,
  };
}
