import React from "react";
import { Button as ButtonContainer } from "reakit";
import { css } from "emotion";

const Button = ({ text }) => {
  return (
    <ButtonContainer
      className={css`
        color: #ffffff;
        background: red;
        padding: 0.375em 0.75em;
        line-height: 1.5;
        border: transparent;
        cursor: pointer;
        font-size: 16px;
        border-radius: 2.5px;
        &[aria-disabled="true"] {
          cursor: auto;
        }
        /* &:not([aria-disabled="true"]) {
          &:hover {
            color: #ffffff;
            border-color: ${hoverBorderColor};
            background-color: ${hoverBackgroundColor};
          }
          &:active,
          &[aria-expanded="true"] {
            color: ${activeColor};
            border-color: ${activeBorderColor};
            background-color: ${activeBackgroundColor};
          }
        } */
      `}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
