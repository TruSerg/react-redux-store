import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../routes/routeNames";

import style from "./styles.module.scss";

const ButtonDetails = ({ size, color, handleGoToDetails }) => {
  return (
    <Link to={ROUTES.PRODUCT_DETAILS_PAGE} onClick={handleGoToDetails}>
      <Button className={style.btnDetails} size={size} color={color}>
        DETAILS
      </Button>
    </Link>
  );
};

export default ButtonDetails;
