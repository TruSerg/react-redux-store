import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";
import {
  deleteProductFromCart,
  cartItemChange,
  cartTotalSum,
} from "../../../store/cartSlice";

import CartPageLayout from "../components/CartPageLayout";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartList, totalPrice } = useSelector((state) => state.cart);

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
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

  useEffect(() => {
    dispatch(cartTotalSum());
  }, [dispatch, cartList]);

  return (
    <CartPageLayout
      cartList={cartList}
      totalPrice={totalPrice}
      handleGoToDetails={handleGoToDetails}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handleProductQuantityIncrement={handleProductQuantityIncrement}
      handleProductQuantityDecrement={handleProductQuantityDecrement}
    />
  );
};

export default CartPageContainer;
