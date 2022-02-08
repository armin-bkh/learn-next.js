import Link from "next/link";

const Products = ({ productId = 100 }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/products/1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/products/2">
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href="/products/3">
            <a>Product 3</a>
          </Link>
        </li>
        <li>
          <Link href={`/products/${productId}`} replace>
            <a>Product {productId}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
