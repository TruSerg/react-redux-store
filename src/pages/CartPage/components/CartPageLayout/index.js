import { Link } from "react-router-dom";
import { RemoveCircle } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import { ROUTES } from "../../../../routes/routeNames";

import Container from "../../../../components/Container";
import BasicRating from "../../../../components/Rating";
import BackButton from "../../../../components/Buttons/BackButton";
import ButtonDelete from "../../../../components/Buttons/ButtonDelete";
import CartIsEmptyImage from "../../../../components/CartIsEmptyImage";

import style from "./styles.module.scss";

const CartPageLayout = ({
  cartList,
  handleGoToDetails,
  handleDeleteProductFromCart,
}) => {
  return (
    <div>
      <Container>
        <div className={style.tableWrapper}>
          <h2 className={style.cartTitle}>Cart</h2>
          <BackButton size="large" />
          {cartList.length === 0 ? (
            <CartIsEmptyImage />
          ) : (
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableBody>
                  {cartList.map(({ id, image, title, rating, price }) => (
                    <TableRow key={id}>
                      <TableCell className={style.tableImage} align="left">
                        <img className={style.img} src={image} />
                      </TableCell>
                      <TableCell className={style.tableTitle} align="left">
                        <p className={style.productTitle}>{title}</p>
                        <Link
                          to={ROUTES.PRODUCT_DETAILS_PAGE}
                          onClick={() => handleGoToDetails(id)}
                        >
                          <Button className={style.btnDetails} size="medium">
                            DETAILS
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell className={style.tableRating} align="left">
                        <BasicRating value={rating.rate} />
                      </TableCell>
                      <TableCell className={style.tableButtons} align="left">
                        <div className={style.iconGroup}>
                          <IconButton className={style.iconButton}>
                            <RemoveCircle color="inherit" fontSize="large" />
                          </IconButton>
                          <IconButton className={style.iconButton}>
                            <AddCircle color="inherit" fontSize="large" />
                          </IconButton>
                        </div>
                        <ButtonDelete
                          handleDelete={() => handleDeleteProductFromCart(id)}
                          size="large"
                        />
                      </TableCell>
                      <TableCell className={style.tablePrice} align="left">
                        {price} <span className={style.priceCurrency}>$</span>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} />
                    <TableCell align="right">Total price</TableCell>
                    <TableCell align="right">total</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CartPageLayout;
