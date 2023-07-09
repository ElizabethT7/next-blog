import { Metadata } from "next";
import Posts from "@/components/list/Posts";
import Search from "@/components/search/Search";

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <Search />
      <Posts />
    </>
  )
}
