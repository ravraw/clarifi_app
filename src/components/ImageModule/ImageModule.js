import React, { Component } from "react";
import styled from "styled-components";

const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid red;

  > h1 {
    border: 1px solid red;
  }
`;

export default class ImageModule extends Component {
  render() {
    return (
      <container>
        <h1>The brain will detect faces in your pictures</h1>
        <input type="text" placeholder="Enter image link" />
        <button>Detect</button>
      </container>
    );
  }
}
