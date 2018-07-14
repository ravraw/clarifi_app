import React from "react";
import styled from "styled-components";
import brain from "../../img/Logo.png";

const Home = styled.div`
  width: 100%;
  text-align: center;
  > img {
    height: 90%;
    width: auto;
    margin: 20px auto;
  }
`;

export default () => {
  return (
    <Home>
      <img src={brain} alt="brain" />
    </Home>
  );
};
