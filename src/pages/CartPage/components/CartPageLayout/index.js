import { Link } from "react-router-dom";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

import { ROUTES } from "../../../../routes/routeNames";

import Container from "../../../../components/Container";
import BasicRating from "../../../../components/Rating";
import BackButton from "../../../../components/Buttons/BackButton";
import ButtonDelete from "../../../../components/Buttons/ButtonDelete";
import CartIsEmptyImage from "../../../../components/CartIsEmptyImage";

import style from "./styles.module.scss";

const CartPageLayout = ({
  cartList,
  totalPrice,
  handleGoToDetails,
  handleDeleteProductFromCart,
  handleProductQuantityIncrement,
  handleProductQuantityDecrement,
}) => {
  return (
    <div>
      <Container>
        <div className={style.cartWrapper}>
          <h2 className={style.cartTitle}>Cart</h2>
          <BackButton size="large" />
          {cartList.length === 0 ? (
            <CartIsEmptyImage />
          ) : (
            <div>
              <div className={style.totalPriceWrapper}>
                <span className={style.totalPriceTitle}>Total price:</span>
                <span className={style.totalPrice}>
                  {totalPrice.toFixed(2)}{" "}
                  <span className={style.totalPriceCurrency}>$</span>
                </span>
              </div>
              {cartList.map((item) => (
                <div className={style.cartContent} key={item.id}>
                  <div className={style.tableImage}>
                    <img className={style.img} src={item.image} alt="product" />
                  </div>
                  <div className={style.tableTitle}>
                    <p className={style.productTitle}>{item.title}</p>
                    <Link
                      to={ROUTES.PRODUCT_DETAILS_PAGE}
                      onClick={() => handleGoToDetails(item.id)}
                    >
                      <Button className={style.btnDetails} size="medium">
                        DETAILS
                      </Button>
                    </Link>
                  </div>
                  <div className={style.tableRating}>
                    <BasicRating value={item.rating.rate} />
                  </div>
                  <div className={style.tableButtons}>
                    <div className={style.iconGroup}>
                      <IconButton
                        className={style.iconButton}
                        onClick={() => handleProductQuantityDecrement(item)}
                      >
                        <RemoveCircle color="inherit" fontSize="large" />
                      </IconButton>
                      <span className={style.quantityLabel}>
                        {item.quantity}
                      </span>
                      <IconButton
                        className={style.iconButton}
                        onClick={() => handleProductQuantityIncrement(item)}
                      >
                        <AddCircle color="inherit" fontSize="large" />
                      </IconButton>
                    </div>
                    <ButtonDelete
                      handleDelete={() => handleDeleteProductFromCart(item.id)}
                      size="large"
                    />
                  </div>
                  <div className={style.tablePrice}>
                    {(item.price * item.quantity).toFixed(2)}{" "}
                    <span className={style.priceCurrency}>$</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartPageLayout;
