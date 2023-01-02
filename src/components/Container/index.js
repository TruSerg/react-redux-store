import style from "./styles.module.scss";

const Index = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Index;
