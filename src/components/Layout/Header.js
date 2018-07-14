import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as components from "../../components/componentList";

const Header = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
`;

export default props => {
  return (
    <Header>
      <h1>LOGO</h1>
      <components.Navbar>
        <NavLink to="/imageModule">IMAGE MODULE</NavLink>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/login">SIGN-IN</NavLink>
      </components.Navbar>
    </Header>
  );
};
