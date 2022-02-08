import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push({ pathname: "/products" });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/products">
        <a>products...</a>
      </Link>
      <button onClick={clickHandler}>order</button>
    </div>
  );
}
