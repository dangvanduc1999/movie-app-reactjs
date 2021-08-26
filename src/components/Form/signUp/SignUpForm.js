import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useForm from "../useForm";
import Button from "../../buttton/Button";
import validate from "../Validate";
import FormMessage from "../FormMessage/FormMessage";
import { AuthenContext } from "../../../context/authencontext";
import "./signupform.scss";

function SignUpForm() {
  const [redirect, setRedirect] = useState(false);
  const [check, setCheck] = useState(false);
  const { signUpUser, isSignUp, handleSignUp, setMessage } =
    useContext(AuthenContext);

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    handleInput,
  } = useForm(validate);

  const handleUser = () => {
    const currentValue = Object.values(values).every(
      (value) => value.length > 0
    );
    if (Object.keys(errors).length === 0 && currentValue) {
      signUpUser(values);
      handleSignUp();
    }
  };
  useEffect(() => {
    if (isSignUp) {
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
        handleSignUp();
        setMessage("");
        setRedirect(true);
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignUp]);

  if (redirect) {
    return <Redirect to={`/signin`} />;
  }
  const handlePopup = () => {
    setCheck(false);
  };
  return (
    <>
      <div className="login">
        <div className="signup__login-box">
          <h2 className="form__signin">SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="signup__user-box">
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={handleInput}
                required
              />
              <label className="signup__label">Username</label>
              {errors.username && (
                <p className="signup-form__message">{errors.username}</p>
              )}
            </div>
            <div className="signup__user-box">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={handleInput}
                required
              />
              <label className="signup__label">Email</label>
              {errors.email && (
                <p className="signup-form__message">{errors.email}</p>
              )}
            </div>
            <div className="signup__user-box">
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={handleInput}
                required
              />
              <label className="signup__label">Password</label>
              {errors.password && (
                <p className="signup-form__message">{errors.password}</p>
              )}
            </div>
            <div className="signup__user-box">
              <input
                type="password"
                name="password2"
                value={values.password2}
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={handleInput}
                required
              />
              <label className="signup__label"> ConfirmPassword</label>
              {errors.password2 && (
                <p className="signup-form__message">{errors.password2}</p>
              )}
            </div>

            <Button
              type="submit"
              text="Submit"
              buttonStyle="btn--outline-blue"
              buttonSize="btn--big"
              onclick={handleUser}
            />
          </form>
        </div>
        {check ? (
          <FormMessage handlePopup={handlePopup} isSubmit="true" />
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}

export default SignUpForm;
