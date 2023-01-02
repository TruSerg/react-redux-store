import Header from "../Header/Header";

import style from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={style.mainWrapper}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
