import { memo } from "react";

import style from "./styles.module.scss";

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default memo(Container);
