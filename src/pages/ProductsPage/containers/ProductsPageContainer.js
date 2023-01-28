import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../../store/getProductsSlice";
import { getProductDetails } from "../../../store/getProductDetailsSlice";

import { useSearch } from "../../../hooks";
import { useCart } from "../../../hooks";

import ProductsPageLayout from "../components/ProductsPageLayout";
import { ROUTES } from "../../../routes/routeNames";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading } = useSelector((state) => state.getProducts);

  const { filteredArray } = useSearch(products);

  const { handleAddProductToCart, isAddItemToCart } = useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
