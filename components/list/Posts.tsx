import Link from "next/link";

type Props = {
  posts: any[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul style={{padding: '15px'}}>
    {posts.map((post: any) => (
      <li key={post.id}>
        <Link href={`/blog/${post.id}`}>{post.title}1</Link>
      </li>
    ))}
  </ul>
  )
}