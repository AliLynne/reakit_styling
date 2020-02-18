import React from "react";
import { Button } from "reakit";

const InlineStyles = () => {
  return (
    <>
      <h2>Inline Style Examples</h2>
      <Button
        style={{
          color: "white",
          background: "red",
          padding: "0.375em 0.75em",
          lineHeight: "1.5",
          border: "transparent",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "2.5px"
        }}
      >
        Button
      </Button>
    </>
  );
};

export default InlineStyles;
