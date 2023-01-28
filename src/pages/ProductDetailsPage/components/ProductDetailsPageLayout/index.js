import Container from "../../../../components/Container";
import ProductDetailsCard from "../../../../components/ProductDetailsCard";
import Loader from "../../../../components/Loader";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";

const ProductDetailsPageLayout = ({
  product,
  isLoading,
  isAddItemToCart,
  handleAddProductToCart,
}) => {
  return (
    <div className={style.wrapper}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BackButton size="large" />
            <div className={style.wrapperProduct}>
              <ProductDetailsCard
                id={product.id}
                category={product.category}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating.rate}
                isAddItemToCart={isAddItemToCart}
                handleAddProductToCart={() =>
                  handleAddProductToCart(product.id)
                }
              />
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsPageLayout;
