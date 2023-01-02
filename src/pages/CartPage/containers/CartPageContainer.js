import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { getProductDetails } from "../../../store/getProductDetailsSlice";

import CartPageLayout from "../components/CartPageLayout";
import { deleteProductFromCart } from "../../../store/cartSlice";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);

  console.log(cartList);

  const handleGoToDetails = useCallback(
    (id) => {
      dispatch(getProductDetails(id));
    },
    [dispatch]
  );

  const handleDeleteProductFromCart = useCallback((id) => {
    dispatch(deleteProductFromCart(id));
  }, []);

  return (
    <CartPageLayout
      cartList={cartList}
      handleGoToDetails={handleGoToDetails}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
    />
  );
};

export default CartPageContainer;
