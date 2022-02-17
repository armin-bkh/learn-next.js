import Link from "next/link";

export default function Home() {
  return (
    <div>
      pre-rendering next.js
      <Link href="/users">
        <a>users</a>
      </Link>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
    </div>
  );
}
