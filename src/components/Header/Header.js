import React from "react";
import styled from "styled-components";
import * as components from "../../components/componentList";

const Header = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
`;

export default props => {
  return (
    <Header>
      <h1>LOGO</h1>
      <components.Navbar>
        <components.NavItem name="FACE-DETECTION" />
        <components.NavItem name="FACE-DETECTION" />
        <components.NavItem name="FACE-DETECTION" />
        <components.NavItem name="FACE-DETECTION" />
        <components.NavItem name="LOG-IN" />
      </components.Navbar>
    </Header>
  );
};
