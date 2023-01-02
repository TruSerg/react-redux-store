import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import BasicRating from "../Rating";
import ButtonGoToCart from "../Buttons/ButtonGoToCart";
import ButtonDetails from "../Buttons/ButtonDetails";
import ButtonAddToCart from "../Buttons/ButtonAddToCart";

import style from "./styles.module.scss";

const ProductsCard = ({
  image,
  title,
  price,
  rating,
  isAddItemToCart,
  handleGoToDetails,
  handleAddProductToCart,
}) => {
  return (
    <Card className={style.card}>
      <CardMedia
        className={style.cardImg}
        component="img"
        height="inherit"
        image={image}
        alt="product"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
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
        <CardMedia>
          <BasicRating value={rating} />
        </CardMedia>
      </CardContent>
      <CardActions className={style.cardButtons}>
        <ButtonDetails handleGoToDetails={handleGoToDetails} size="large" />
        {!isAddItemToCart ? (
          <ButtonAddToCart
            handleAddProductToCart={handleAddProductToCart}
            size="large"
          />
        ) : (
          <ButtonGoToCart size="large" />
        )}
      </CardActions>
    </Card>
  );
};

export default ProductsCard;
