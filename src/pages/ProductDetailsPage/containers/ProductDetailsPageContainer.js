import { useSelector } from "react-redux";

import { useCart } from "../../../hooks";

import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

const ProductDetailsPageContainer = () => {
  const { product, isLoading } = useSelector((state) => state.getProduct);

  const { handleAddProductToCart, isAddItemToCart } = useCart();

  return (
    <ProductDetailsPageLayout
      product={product}
      isLoading={isLoading}
      isAddItemToCart={isAddItemToCart}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductDetailsPageContainer;
