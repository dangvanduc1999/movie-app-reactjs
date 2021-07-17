import { useState, useEffect } from "react";

export default function useForm(validate) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [Name, setName] = useState({});
  const [errors, setErrors] = useState({});

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setName({
      ...Name,
      [name]: value,
    });
  };
  // handle input
  const handleInput = (e) => {
    const { name } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  useEffect(() => {
    if (Object.keys(Name).length >= 1) {
      setErrors(validate(Name));
    }
  }, [Name, validate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    handleInput,
  };
}
