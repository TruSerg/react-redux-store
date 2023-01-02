import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../../hooks";

import { postRegistrationUser } from "../../../store/postRegistrationUserSlice";

import RegistrationPageLayout from "../components/RegistrationPageLayout";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [formData, handleChange] = useForm({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
    },
    phone: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(postRegistrationUser(formData));
    },
    [formData]
  );

  return (
    <RegistrationPageLayout
      formData={formData}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegistrationPageContainer;
