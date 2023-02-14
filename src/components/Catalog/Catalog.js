import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { memo } from "react";

import { getProductsCategory } from "../../store/getCategoryProductsSlice";
import { useGetCategoriesQuery } from "../../store/fakeStoreAPI";

import CatalogLayout from "./CatalogLayout";

const Catalog = () => {
  const dispatch = useDispatch();

  const { isLoading, data: categoriesList } = useGetCategoriesQuery();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGetCategoryProducts = useCallback(
    (category) => {
      dispatch(getProductsCategory(category));
    },
    [dispatch]
  );

  return (
    <CatalogLayout
      categoriesList={categoriesList}
      isLoading={isLoading}
      handleFetchCategoryProducts={handleGetCategoryProducts}
      anchorEl={anchorEl}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default memo(Catalog);
