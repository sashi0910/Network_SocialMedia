import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// ✅ Proper typing for generateMetadata using ResolvingMetadata and async params
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const { username } = await params;
  const user = await getProfileByUsername(username);
  if (!user) return;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
    openGraph: {
      images: [`/profile/${user.username}/preview.jpg`, ...previousImages],
    },
  };
}

// ✅ Component props using the same structure (async-friendly types)
export default async function ProfilePageServer({ params }: Props) {
  const { username } = await params;

  const user = await getProfileByUsername(username);
  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}
