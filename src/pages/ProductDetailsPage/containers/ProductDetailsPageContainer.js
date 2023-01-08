import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

import { addProductToCart } from "../../../store/cartSlice";

const ProductDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.getProduct);
  const { cartList } = useSelector((state) => state.cart);

  const handleAddProductToCart = useCallback(
    (id) => {
      if (product.id === id) {
        const addProduct = { ...product, quantity: 1 };

        dispatch(addProductToCart(addProduct));
      }
    },
    [product]
  );

  const isAddItemToCart =
    cartList.findIndex((item) => item.id === product.id) !== -1;

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
