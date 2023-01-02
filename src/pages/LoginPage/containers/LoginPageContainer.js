import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

import { useForm } from "../../../hooks";

import { postUserLogin } from "../../../store/postUserLoginSlice";

import LoginForm from "../components/LoginFormLayout";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(postUserLogin(formData));
    },
    [formData]
  );

  return (
    <div>
      <LoginForm
        formData={formData}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPageContainer;
