import Link from "next/link";

export default function Home() {
  return (
    <div>
      pre-rendering next.js
      <h2>
        <Link href="/users">
          <a>users</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts">
          <a>posts</a>
        </Link>
      </h2>
      <h2>
        <Link href="/products">
          <a>products</a>
        </Link>
      </h2>
    </div>
  );
}
