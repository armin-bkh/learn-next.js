import { useRouter } from "next/router";

const ProductDetail = () => {
  const { query } = useRouter();
  const { productId } = query;

  return <div>Product {productId} Detail Page</div>;
};

export default ProductDetail;
