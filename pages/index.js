import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="menu for navigate" />
      </Head>
      <main className="main">
        <nav>
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
        </nav>
      </main>
    </>
  );
}
