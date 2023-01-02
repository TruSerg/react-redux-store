import { CircularProgress } from "@mui/material";

import style from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={style.loaderArea}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
