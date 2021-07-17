import React, { useContext, useState, useEffect } from "react";

import Button from "../../buttton/Button";
import FormMessage from "../FormMessage/FormMessage";

import { AuthenContext } from "../../../context/authencontext";
import { Link, Redirect } from "react-router-dom";
import "./SigninForm.scss";
import useForm from "../useForm";

function SignupForm() {
  const { islogin, getValuesForm } = useContext(AuthenContext);
  const [check, setCheck] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleclick = (e) => {
    e.preventDefault();
    setCheck(true);
    getValuesForm(values);
  };
  const { handleChange, values } = useForm();

  const handlePopup = () => {
    setCheck(false);
  };
  useEffect(() => {
    if (islogin) {
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
        setRedirect(true);
      }, 1500);
    }
  }, [islogin]);
  if (redirect) {
    return <Redirect to={`/`} />;
  }
  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2 className="form__signin">SIGN IN</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name="username"
                value={values.username}
                required
                onChange={handleChange}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required
                value={values.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <p className="form__register">
              You have not account? click{" "}
              <Link to="/signup" id="signup__link">
                Sign up{" "}
              </Link>{" "}
              to register{" "}
            </p>

            <Button
              type="submit"
              text="Submit"
              buttonStyle="btn--outline-blue"
              buttonSize="btn--big"
              onclick={handleclick}
            />
          </form>
        </div>
        {check ? <FormMessage handlePopup={handlePopup} /> : <></>}
      </div>
    </>
  );
}

export default SignupForm;
