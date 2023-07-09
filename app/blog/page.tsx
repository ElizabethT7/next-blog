'use client';
import Posts from "@/components/list/Posts";
import Search from "@/components/search/Search";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

/*async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });

  if(!response.ok) throw new Error('Unable to fetch posts!')
  return response.json();
}*/

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

export default /*async*/ function Blog() {
  //const posts = await getData();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts().then(setPosts)
.finally(() => setLoading(false))  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <Search onSearch={setPosts}/>
      {
        loading ? 
        (<h3>Loading...</h3>
        ) : (
          <Posts posts={posts} />
        )
      }
    </>
  )
}
