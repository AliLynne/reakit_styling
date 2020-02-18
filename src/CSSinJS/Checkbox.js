import React from "react";
import { Checkbox as CheckboxContainer, useCheckboxState } from "reakit";
import { css } from "emotion";

const Checkbox = () => {
  const checkbox = useCheckboxState({ state: false });
  return (
    <>
      <h3>Checkbox as Button</h3>
      <CheckboxContainer
        {...checkbox}
        as="button"
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
          &[aria-checked="true"] {
            background-color: #0062e6;
          }
        `}
      >
        {checkbox.state ? "Checked" : "Unchecked"}
      </CheckboxContainer>
    </>
  );
};

export default Checkbox;
