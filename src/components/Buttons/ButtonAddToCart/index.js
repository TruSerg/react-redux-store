import { memo } from "react";
import { Button } from "@mui/material";

import style from "./styles.module.scss";

const ButtonAddToCart = ({ size, handleAddProductToCart }) => {
  return (
    <Button
      className={style.btnAddToCart}
      size={size}
      onClick={handleAddProductToCart}
    >
      ADD TO CART
    </Button>
  );
};

export default memo(ButtonAddToCart);
