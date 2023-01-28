import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { AccountCircle, ShoppingCartOutlined } from "@mui/icons-material";

import { ROUTES } from "../../routes/routeNames";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import Input from "../Input";

import style from "./styles.module.scss";

const HeaderLayout = ({ searchValue, cartList, handleChange }) => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <div className={style.headerCatalog}>
            <Catalog />
          </div>

          <div className={style.headerSearch}>
            <Input value={searchValue} onChange={handleChange} />
          </div>

          <div className={style.headerIconButtons}>
            <Link to={ROUTES.CART_PAGE}>
              <IconButton className={style.iconCart}>
                <Badge badgeContent={cartList.length} color="success">
                  <ShoppingCartOutlined
                    className={style.cartIcon}
                    fontSize="inherit"
                  />
                </Badge>
              </IconButton>
            </Link>

            {/*<IconButton className={style.iconUser}>*/}
            {/*  <AccountCircle fontSize="large" />*/}
            {/*</IconButton>*/}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderLayout;
