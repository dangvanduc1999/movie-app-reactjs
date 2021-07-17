const validate = (values) => {
  let error = {};
  const re =
    //eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //  username

  if (!(values.username === undefined)) {
    if (values.username.trim() === "") {
      error.username = "User name is required";
    }
  }
  //   email

  if (values.email === "") {
    error.email = "email required";
  } else if (values.email && !re.test(values.email)) {
    error.email = "Email address is not valid";
  }

  //password

  if (values.password === "") {
    error.password = "Password is required";
  } else if (values.password && values.password.length < 6) {
    error.password = "Password needs to be 6 characters or more";
  }

  //comfirm password
  if (values.password2 === "") {
    error.password2 = " Comfirm password is required";
  } else if (values.password2 && values.password2 !== values.password) {
    error.password2 = "Confirm password do not match ";
  }
  return error;
};
export default validate;
