import React, { useState, useEffect } from "react";

export const AuthenContext = React.createContext();

function AuthenProvider({ children }) {
  const [islogin, setIslogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [users, setUsers] = useState([
    {
      username: "vanduc123",
      email: "vanduclipi@gmail.com",
      password: "123456789",
      password2: "123456789",
    },
  ]);
  const [currentuser, setCurrentuser] = useState({});

  const getValuesForm = (values) => {
    setCurrentuser(values);
  };
  const signUpUser = (value) => {
    setUsers((user) => [...user, value]);
  };
  const checkLoginForm = () => {
    const checkUserName = users.filter(
      (user) => user.username === currentuser.username
    );
    if (checkUserName.length > 0) {
      let checkPassword = checkUserName.filter(
        (user) => user.password === currentuser.password
      );
      if (checkPassword.length > 0) {
        setIslogin(!islogin);
        setMessage("Logged in successfully");
      } else {
        setIslogin(false);
        setErrors("Your password is wrong");
      }
    } else {
      setIslogin(false);
      setErrors("Username does not exist");
    }
  };
  const handleLogin = () => {
    setIslogin(false);
  };
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  useEffect(() => {
    checkLoginForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentuser]);
  useEffect(() => {
    if (isSignUp) {
      setMessage("Sign Up Success");
    }
  }, [isSignUp]);

  const AuthenData = {
    users,
    errors,
    message,
    islogin,
    isSignUp,
    checkLoginForm,
    getValuesForm,
    handleLogin,
    signUpUser,
    handleSignUp,
    setMessage,
  };
  return (
    <AuthenContext.Provider value={AuthenData}>
      {children}
    </AuthenContext.Provider>
  );
}
export default AuthenProvider;
export const AuthenContextConsumer = AuthenContext.Consumer;
