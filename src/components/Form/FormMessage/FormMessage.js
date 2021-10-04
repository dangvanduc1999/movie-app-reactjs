import React, { useContext } from "react";
import { AuthenContext } from "../../../context/authencontext";
import rightImage from "../../../asset/image/rightImage.png";
import wrong from "../../../asset/image/wrong.png";
import "./FormMessage.scss";

function FormMessage({ handlePopup }) {
  const { islogin, message, errors, isSignUp } = useContext(AuthenContext);

  const handleClick = () => {
    handlePopup();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-layout"></div>
        <div className="Form-message__container">
          <div className="Form-message__image">
            <img src={isSignUp || islogin ? rightImage : wrong} alt="" />
          </div>
          <div className="Form-message__text">
            <p> {message.length > 0 ? message : errors} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormMessage;
