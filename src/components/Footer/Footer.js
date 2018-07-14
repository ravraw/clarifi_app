import React from "react";
import styled from "styled-components";
// import * as components from "../../components/componentList";

const Footer = styled.footer`
  background: gray;
  display: flex;
  width: 100%;
  height: 5vh;
  align-items: center;
  justify-content: center;
`;

export default props => {
  return (
    <Footer>
      <p>FOOTER</p>
    </Footer>
  );
};
