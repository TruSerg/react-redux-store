import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";

import { getProductsCategory } from "../../store/getCategorySlice";

import { ROUTES } from "../../routes/routeNames";

import Loader from "../Loader";

import style from "./styles.module.scss";

const CatalogLayout = ({
  categoriesList,
  isLoading,
  anchorEl,
  open,
  handleClick,
  handleClose,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <MenuIcon
        className={style.catalog}
        fontSize="large"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {isLoading ? (
          <Loader size={30} />
        ) : (
          <div>
            {categoriesList.map((category) => (
              <Link
                key={category}
                onClick={() => dispatch(getProductsCategory(category))}
                to={ROUTES.PRODUCTS_CATEGORY_PAGE}
              >
                <MenuItem className={style.catalogItem} onClick={handleClose}>
                  {category}
                </MenuItem>
              </Link>
            ))}
          </div>
        )}
      </Menu>
    </div>
  );
};

export default CatalogLayout;
