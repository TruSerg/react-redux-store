import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

import { getAllProducts } from "../../../store/getProductsSlice";
import { getProductDetails } from "../../../store/getProductDetailsSlice";
import { addProductToCart } from "../../../store/cartSlice";

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();

  const { products, searchValue, isLoading } = useSelector(
    (state) => state.getProducts
  );

  const { cartList } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  const debouncedApplyFilter = useCallback(
    debounce((searchValue) => {
      setFilteredProducts(() => {
        const optimizedSearchValue = searchValue.trim().toLowerCase();

        return products.filter((product) =>
          product.title.toLowerCase().includes(optimizedSearchValue)
        );
      });
    }, 300),
    [products]
  );

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    debouncedApplyFilter(searchValue);
  }, [debouncedApplyFilter, searchValue]);

  const handleAddProductToCart = useCallback(
    (id) => {
      products.filter((product) => {
        if (product.id === id) {
          const addProduct = { ...product, quantity: 1 };

          dispatch(addProductToCart(addProduct));
        }
      });
    },
    [products]
  );

  return (
    <ProductsPageLayout
      products={filteredProducts}
      cartList={cartList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductsPageContainer;
