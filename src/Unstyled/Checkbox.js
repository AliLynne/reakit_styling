import React from "react";
import { Checkbox as CheckboxContainer, useCheckboxState } from "reakit";

const Checkbox = () => {
  const checkbox = useCheckboxState({ state: false });
  return <CheckboxContainer {...checkbox} />;
};

export default Checkbox;
