import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  margin: 10px;
  padding: 5px;
  text-decoration: none;
`;
export default props => (
  <NavItem>
    <a href="">{props.name}</a>
  </NavItem>
);
