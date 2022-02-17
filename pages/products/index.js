import Link from "next/link";
import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3001/products");

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

const ProductList = ({ products }) => {
  return (
    <section>
      <h1>list of products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                {product.id} {product.title} {product.price}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
