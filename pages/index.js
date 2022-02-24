import { useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push({ pathname: "/api/preview", query: {
  //     redirect: "/contact"
  //   } }); 
  // }, []);
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
