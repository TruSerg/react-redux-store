import Container from "../../../../components/Container";
import Loader from "../../../../components/Loader";
import ProductCard from "../../../../components/ProductCard";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";

const ProductsCategoryPageLayout = ({
  categoryProductsList,
  cartList,
  category,
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
          <>
            <h1 className={style.title}>{category}</h1>
            <BackButton size="large" />
            <div className={style.productsWrapper}>
              {categoryProductsList.map(
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
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductsCategoryPageLayout;
