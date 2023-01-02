import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { handleSearchChange } from "../../store/getProductsSlice";

import HeaderLayout from "./HeaderLayout";

const Header = () => {
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.getProducts);
  const { cartList } = useSelector((state) => state.cart);

  const handleChange = useCallback(
    (e) => {
      dispatch(handleSearchChange(e.target.value));
    },
    [searchValue]
  );

  return (
    <HeaderLayout
      searchValue={searchValue}
      cartList={cartList}
      handleChange={handleChange}
    />
  );
};
export default Header;
