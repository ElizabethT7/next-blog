'use client';

import Link from "next/link";
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { usePosts } from "@/store";

export default function Posts() {
  const [posts, loading, getAllPosts] = usePosts(
    state => [state.posts, state.loading, state.getAllPosts],
    shallow);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {
      loading ? 
      (<h3>Loading...</h3>
      ) : (
      <ul style={{padding: '15px'}}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      )
    }
    </>
  )
}