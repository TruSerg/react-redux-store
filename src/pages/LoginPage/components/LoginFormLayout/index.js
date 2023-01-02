import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Container from "../../../../components/Container";

import style from "./styles.module.scss";

const LoginForm = ({
  formData,
  showPassword,
  handleClickShowPassword,
  onChange,
  onSubmit,
}) => {
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.formWrapper}>
          <form onSubmit={onSubmit} id="myForm">
            <div>
              <TextField
                type="email"
                value={formData.email}
                name="email"
                onChange={onChange}
                placeholder="Email..."
              />
            </div>
            <div>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                name="password"
                onChange={onChange}
                placeholder="Password..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="error"
                className={style.btn}
                type="submit"
                form="myForm"
              >
                SIGNUP
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
