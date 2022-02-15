import router, { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  const paths = data.map((product) => ({
    params: { productId: `${product.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { productId } }) => {
  const response = await fetch(`http://localhost:3001/products/${productId}`);
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};

const ProductDetail = ({ product }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1>
        {product.id} {product.title} {product.price}
      </h1>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDetail;
