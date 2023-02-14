import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";
import { useGetProductsQuery } from "../../../store/fakeStoreAPI";

import { useSearch } from "../../../hooks";
import { useCart } from "../../../hooks";

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();

  const { isLoading, data: products } = useGetProductsQuery();

  const { filteredArray } = useSearch(products);

  const { handleAddProductToCart, isAddItemToCart } = useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  return (
    <ProductsPageLayout
      products={filteredArray}
      isAddItemToCart={isAddItemToCart}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductsPageContainer;
