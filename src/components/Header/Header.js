import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { memo } from "react";

import { handleSearchChange } from "../../store/productsSlice";

import HeaderLayout from "./HeaderLayout";

const Header = () => {
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.products);
  const { cartList } = useSelector((state) => state.cart);

  const handleChange = useCallback(
    (e) => {
      dispatch(handleSearchChange(e.target.value));
    },
    [dispatch]
  );

  return (
    <HeaderLayout
      searchValue={searchValue}
      cartList={cartList}
      handleChange={handleChange}
    />
  );
};
export default memo(Header);
