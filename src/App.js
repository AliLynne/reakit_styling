import React from "react";
import CSSinJS from "./CSSinJS/CSSinJS";
import InlineStyles from "./InlineStyles/InlineStyles";
import Styled from "./Styled/Styled";
import "./App.css";
import Unstyled from "./Unstyled/Unstyled";

function App() {
  return (
    <div className="App">
      <CSSinJS />
      <InlineStyles />
      <Styled />
      <Unstyled />
    </div>
  );
}

export default App;
