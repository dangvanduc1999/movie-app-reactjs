import React from "react";
import "./Button.scss";

const STYLE = ["btn--primary", "btn--outline", "btn--outline-blue"];

const SIZE = ["btn--medium", "btn--large", "btn--big"];

const Button = ({ buttonStyle, buttonSize, text, type, onclick }) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <>
      <button
        className={` btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onclick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
export default Button;
