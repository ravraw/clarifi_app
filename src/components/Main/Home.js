import React from "react";
import styled from "styled-components";
import brain from "../../img/Logo.png";
import { Particles } from "../componentList";

const Home = styled.div`
  width: 100%;
  text-align: center;
  filter:blur(0px);
  > img  {
    height: 80%;
    width: auto;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  > h1 {
      font-size: 4em;
      position:absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index:10;
      color:#FF5733   ;
  }
  > a{
      border: 1px solid black;
      border-radius:50px;
      font-size:3em;
      padding: 0 .5em;
      margin: 0 .5em;
      background:#FF5733 ;  
      color: white;
      text-decoration:none;
      position:absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index:10;
  }
 
  }
`;

export default () => {
  return (
    <Home>
      <Particles />
      <img src={brain} alt="brain" />
      <h1> MACHINE LEARNING WITH CLARIFI</h1>
      <a href="">ENTER</a>
    </Home>
  );
};
