import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/detail";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { GET_PRODUCT, Product } from "../../graphql/products";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data } = useQuery<{ product: Product }>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return (
    <div>
      <ProductDetail item={data.product} />
    </div>
  );
};

export default ProductDetailPage;
