import Container from "../../../../components/Container";

import ProductCard from "../../../../components/ProductCard";
import Loader from "../../../../components/Loader";

import style from "./styles.module.scss";

const ProductsPageLayout = ({
  products,
  cartList,
  isLoading,
  handleGoToDetails,
  handleAddProductToCart,
}) => {
  return (
    <div className={style.wrapper}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.productsWrapper}>
            {products.map(
              ({ id, image, title, price, description, rating }) => {
                const isAddItemToCart =
                  cartList.findIndex((item) => item.id === id) !== -1;

                return (
                  <ProductCard
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                    description={description}
                    rating={rating.rate}
                    isAddItemToCart={isAddItemToCart}
                    handleGoToDetails={() => handleGoToDetails(id)}
                    handleAddProductToCart={() => handleAddProductToCart(id)}
                  />
                );
              }
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsPageLayout;
