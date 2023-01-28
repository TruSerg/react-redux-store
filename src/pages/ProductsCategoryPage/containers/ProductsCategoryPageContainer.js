import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";

import { useSearch } from "../../../hooks";
import { useCart } from "../../../hooks";

import ProductsCategoryPageLayout from "../components/ProductsCategoryPageLayout";

const ProductsCategoryPageContainer = () => {
  const dispatch = useDispatch();

  const { categoryProductsList, categoryItem, isLoading } = useSelector(
    (state) => state.getCategory
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
      categoryProductsList={filteredArray}
      category={categoryItem.category}
      isAddItemToCart={isAddItemToCart}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductsCategoryPageContainer;
