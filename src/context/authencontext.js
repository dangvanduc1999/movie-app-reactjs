import useAsync from "hooks/useAsync";
import React, { useState, useEffect } from "react";
import {
  getAccoundDetail,
  postAuthentication,
  postCreateSession
} from "./FetchApi";

export const AuthenContext = React.createContext();

function AuthenProvider({ children }) {
  const [islogin, setIslogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(" ");
  const [users, setUsers] = useState([
    {
      username: "vanduclipi",
      email: "vanduclipi@gmail.com",
      password: "0935973326",
      password2: "0935973326"
    }
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
    setIslogin(!islogin);
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
  const request_token = localStorage.getItem("request_token");
  // const session_id = localStorage.getItem("session_id");
  const state = useAsync(
    postAuthentication,
    {
      username: users[0].username,
      password: users[0].password,
      request_token: request_token
    },
    islogin
  );
  const state2 = useAsync(
    postCreateSession,
    {
      request_token: request_token
    },
    state.check
  );
  const sessionId = localStorage.getItem("session_id");
  const accounIdState = useAsync(getAccoundDetail, sessionId, state2.check);

  const AuthenData = {
    accounIdState,
    state,
    state2,
    users,
    errors,
    message,
    islogin,
    isSignUp,
    getValuesForm,
    handleLogin,
    signUpUser,
    handleSignUp,
    setMessage
  };
  return (
    <AuthenContext.Provider value={AuthenData}>
      {children}
    </AuthenContext.Provider>
  );
}
export default AuthenProvider;
export const AuthenContextConsumer = AuthenContext.Consumer;
