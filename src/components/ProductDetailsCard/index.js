import { memo } from "react";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import BasicRating from "../Rating";
import ButtonAddToCart from "../Buttons/ButtonAddToCart";
import ButtonGoToCart from "../Buttons/ButtonGoToCart";

import style from "./styles.module.scss";

const ProductsDetailsCard = ({
  image,
  category,
  title,
  price,
  description,
  rating,
  isAddItemToCart,
  handleAddProductToCart,
}) => {
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img className={style.img} src={image} alt="product" />
      </div>
      <div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="p"
            className={style.cardCategory}
          >
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            className={style.cardTitle}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            className={style.cardPrice}
          >
            {price} <span className={style.priceCurrency}>$</span>
          </Typography>
          <CardMedia className={style.rating}>
            <BasicRating value={rating} />
          </CardMedia>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={style.cardButtons}>
          {!isAddItemToCart ? (
            <ButtonAddToCart
              handleAddProductToCart={handleAddProductToCart}
              size="large"
            />
          ) : (
            <ButtonGoToCart size="large" />
          )}
        </CardActions>
      </div>
    </div>
  );
};

export default memo(ProductsDetailsCard);
