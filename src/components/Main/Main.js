import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 85vh;
`;

export default props => {
  return <Main>{props.children}</Main>;
};
