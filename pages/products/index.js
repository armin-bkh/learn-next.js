import Link from "next/link";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getStaticProps = async () => {
  const { data } = await axios.get("/products");

  return {
    props: {
      products: data,
    },
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
                {product.id} {product.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
