import CartIsEmpty from "../../static/img/empty-cart.jpg";

import style from "./styles.module.scss";

const CartIsEmptyImage = () => {
  return (
    <div className={style.image}>
      <img src={CartIsEmpty} alt="cart is empty" />
    </div>
  );
};

export default CartIsEmptyImage;
