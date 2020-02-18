import React from "react";
import { Button as ButtonContainer } from "reakit";
import styled from "styled-components";

const StyledButton = styled(ButtonContainer)`
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
  &:not([aria-disabled="true"]) {
    &:hover {
      color: #ffffff;
      border-color: rgb(0, 87, 204);
      background-color: rgb(0, 98, 230);
    }
    &:active,
    &[aria-expanded="true"] {
      color: #ffffff;
      border-color: rgb(0, 88, 207);
      background-color: rgb(0, 78, 184);
    }
  }
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
