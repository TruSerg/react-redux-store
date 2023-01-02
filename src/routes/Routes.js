import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductsCategoryPageContainer from "../pages/ProductsCategoryPage/containers/ProductsCategoryPageContainer";
import ProductDetailsPageContainer from "../pages/ProductDetailsPage/containers/ProductDetailsPageContainer";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.PRODUCTS_PAGE} element={<ProductsPageContainer />} />
      <Route
        path={ROUTES.PRODUCTS_CATEGORY_PAGE}
        element={<ProductsCategoryPageContainer />}
      />
      <Route
        path={ROUTES.PRODUCT_DETAILS_PAGE}
        element={<ProductDetailsPageContainer />}
      />
      <Route path={ROUTES.CART_PAGE} element={<CartPageContainer />} />

      <Route path="*" element={<Navigate to={ROUTES.PRODUCTS_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
