import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProductToCart,
  cartItemChange,
  cartTotalSum,
  deleteProductFromCart,
} from "../store/cartSlice";

import { useGetProductsQuery } from "../store/fakeStoreAPI";

const useCart = () => {
  const dispatch = useDispatch();

  const { data: products } = useGetProductsQuery();

  const { cartList } = useSelector((state) => state.cart);

  const handleAddProductToCart = useCallback(
    (id) => {
      products.filter((product) => {
        if (product.id === id) {
          const addProduct = { ...product, quantity: 1 };

          dispatch(addProductToCart(addProduct));
        }
      });
    },
    [dispatch, products]
  );

  const handleDeleteProductFromCart = useCallback(
    (id) => {
      dispatch(deleteProductFromCart(id));
    },
    [dispatch]
  );

  const handleProductQuantityIncrement = useCallback(
    (product) => {
      const updatedProduct = {
        ...product,
        id: product.id,
        quantity: product.quantity + 1,
      };
      dispatch(cartItemChange(updatedProduct));
    },
    [dispatch]
  );

  const handleProductQuantityDecrement = useCallback(
    (product) => {
      if (product.quantity > 1) {
        const updatedProduct = {
          ...product,
          id: product.id,
          quantity: product.quantity - 1,
        };
        dispatch(cartItemChange(updatedProduct));
      }
    },
    [dispatch]
  );

  const isAddItemToCart = useCallback(
    (id) => {
      return cartList.findIndex((item) => item.id === id) !== -1;
    },
    [cartList]
  );

  useEffect(() => {
    dispatch(cartTotalSum());
  }, [dispatch, cartList]);

  return {
    handleAddProductToCart,
    handleDeleteProductFromCart,
    handleProductQuantityIncrement,
    handleProductQuantityDecrement,
    isAddItemToCart,
  };
};

export default useCart;
