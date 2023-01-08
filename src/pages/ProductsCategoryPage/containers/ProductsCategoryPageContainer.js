import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

import { getProductDetails } from "../../../store/getProductDetailsSlice";
import { addProductToCart } from "../../../store/cartSlice";

import ProductsCategoryPageLayout from "../components/ProductsCategoryPageLayout";

const ProductsCategoryPageContainer = () => {
  const dispatch = useDispatch();

  const { categoryProductsList, categoryItem, isLoading } = useSelector(
    (state) => state.getCategory
  );

  const { cartList } = useSelector((state) => state.cart);

  const { searchValue } = useSelector((state) => state.getProducts);

  const [filteredCategoryProductsList, setFilteredCategoryProductsList] =
    useState([]);

  const debouncedApplyFilter = useCallback(
    debounce((searchValue) => {
      setFilteredCategoryProductsList(() => {
        const optimizedSearchValue = searchValue.trim().toLowerCase();

        return categoryProductsList.filter((product) =>
          product.title.toLowerCase().includes(optimizedSearchValue)
        );
      });
    }, 300),
    [categoryProductsList]
  );

  useEffect(() => {
    if (categoryProductsList.length > 0) {
      setFilteredCategoryProductsList(categoryProductsList);
    }
  }, [categoryProductsList]);

  useEffect(() => {
    debouncedApplyFilter(searchValue);
  }, [searchValue, debouncedApplyFilter]);

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  const handleAddProductToCart = useCallback(
    (id) => {
      categoryProductsList.filter((product) => {
        if (product.id === id) {
          const addProduct = { ...product, quantity: 1 };

          dispatch(addProductToCart(addProduct));
        }
      });
    },
    [dispatch, categoryProductsList]
  );

  return (
    <ProductsCategoryPageLayout
      categoryProductsList={filteredCategoryProductsList}
      cartList={cartList}
      category={categoryItem.category}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductsCategoryPageContainer;
