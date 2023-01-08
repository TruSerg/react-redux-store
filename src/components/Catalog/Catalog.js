import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

import { getProductsCategories } from "../../store/getCategoriesSlice";

import CatalogLayout from "./CatalogLayout";

const Catalog = () => {
  const dispatch = useDispatch();

  const { categoriesList, isLoading } = useSelector(
    (state) => state.getCategories
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getProductsCategories());
  }, []);

  return (
    <CatalogLayout
      categoriesList={categoriesList}
      isLoading={isLoading}
      anchorEl={anchorEl}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default memo(Catalog);
