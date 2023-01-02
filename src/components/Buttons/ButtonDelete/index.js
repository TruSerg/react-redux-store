import { Button } from "@mui/material";

import style from "./styles.module.scss";

const ButtonDelete = ({ size, handleDelete }) => {
  return (
    <Button className={style.btnDelete} onClick={handleDelete} size={size}>
      DELETE
    </Button>
  );
};

export default ButtonDelete;
