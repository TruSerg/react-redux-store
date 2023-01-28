import {
  Button,
  TextField,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Container from "../../../../components/Container";

import style from "./styles.module.scss";

const RegistrationPageLayout = ({
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
              <TextField
                type="text"
                value={formData.username}
                name="username"
                onChange={onChange}
                placeholder="User name..."
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
              <TextField
                type="text"
                value={formData.name.firstname}
                onChange={onChange}
                placeholder="First name..."
              />
            </div>
            <div>
              <TextField
                type="text"
                value={formData.lastname}
                name="formData.name.lastname"
                onChange={onChange}
                placeholder="Last name..."
              />
            </div>
            <div>
              <TextField
                type="text"
                value={formData.city}
                name="formData.address.city"
                onChange={onChange}
                placeholder="City..."
              />
            </div>
            <div>
              <TextField
                type="text"
                value={formData.street}
                name="formData.address.street"
                onChange={onChange}
                placeholder="Street..."
              />
            </div>
            <div>
              <TextField
                type="number"
                value={formData.number}
                name="formData.address.number"
                onChange={onChange}
                placeholder="Number..."
              />
            </div>
            <div>
              <TextField
                type="number"
                value={formData.zipcode}
                name="formData.address.zipcode"
                onChange={onChange}
                placeholder="Zipcode..."
              />
            </div>
            <div>
              <TextField
                type="number"
                value={formData.lat}
                name="formData.address.geolocation.lat"
                onChange={onChange}
                placeholder="lat..."
              />
            </div>
            <div>
              <TextField
                type="number"
                value={formData.long}
                name="formData.address.geolocation.long"
                onChange={onChange}
                placeholder="long..."
              />
            </div>
            <div>
              <TextField
                type="phone"
                value={formData.phone}
                name="phone"
                onChange={onChange}
                placeholder="Phone..."
              />
            </div>
            <div className={style.button}>
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

export default RegistrationPageLayout;
