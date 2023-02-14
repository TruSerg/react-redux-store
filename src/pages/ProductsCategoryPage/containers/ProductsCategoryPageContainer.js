import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";

import { useCart, useSearch } from "../../../hooks";

import ProductsCategoryPageLayout from "../components/ProductsCategoryPageLayout";

const ProductsCategoryPageContainer = () => {
  const dispatch = useDispatch();

  const { categoryProductsList, categoryItem, isLoading } = useSelector(
    (state) => state.getCategoryProducts
  );

  const { filteredArray } = useSearch(categoryProductsList);

  const { handleAddProductToCart, isAddItemToCart } = useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  return (
    <ProductsCategoryPageLayout
      category={categoryItem.category}
      categoryProductsList={filteredArray}
      isAddItemToCart={isAddItemToCart}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductsCategoryPageContainer;
