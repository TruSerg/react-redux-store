import { useState, useCallback } from "react";

const useForm = (initialFormData) => {
  const [data, setData] = useState(initialFormData);

  const handleFormFieldChange = useCallback((event) => {
    setData((state) => {
      const { name, value } = event.target;

      return {
        ...state,
        [name]: value,
      };
    });
  }, []);

  const handleFormReset = useCallback(() => {
    setData(initialFormData);
  }, [initialFormData]);

  return [data, handleFormFieldChange, handleFormReset];
};

export default useForm;
