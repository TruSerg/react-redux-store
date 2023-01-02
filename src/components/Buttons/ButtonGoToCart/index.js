import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../routes/routeNames";

import style from "./styles.module.scss";

const ButtonGoToCart = ({ size }) => {
  return (
    <Link to={ROUTES.CART_PAGE}>
      <Button className={style.btnToCart} size={size}>
        GO TO CART
      </Button>
    </Link>
  );
};

export default ButtonGoToCart;
