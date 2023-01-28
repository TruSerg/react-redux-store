import Container from "../../../../components/Container";
import Loader from "../../../../components/Loader";
import ProductCard from "../../../../components/ProductCard";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";

const ProductsCategoryPageLayout = ({
  categoryProductsList,
  category,
  isAddItemToCart,
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
                ({ id, image, title, price, description, rating }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    price={price}
                    description={description}
                    rating={rating.rate}
                    isAddItemToCart={isAddItemToCart}
                    handleGoToDetails={() => handleGoToDetails(id)}
                    handleAddProductToCart={() => handleAddProductToCart(id)}
                  />
                )
              )}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductsCategoryPageLayout;
