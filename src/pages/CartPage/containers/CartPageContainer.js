import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";

import CartPageLayout from "../components/CartPageLayout";
import { useCart } from "../../../hooks";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartList, totalPrice } = useSelector((state) => state.cart);

  const {
    handleDeleteProductFromCart,
    handleProductQuantityIncrement,
    handleProductQuantityDecrement,
  } = useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

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
