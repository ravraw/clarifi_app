import React from "react";
import styled from "styled-components";
const ImageContainer = styled.div`
  border: 1px solid black;
  position: relative;
  display: flex;

  > div {
    position: absolute;
    border: 1px solid red;
  }
`;

export default ({ imageSrc, faceCoordinates }) => {
  const Div = faceCoordinates
    ? faceCoordinates.map((el, i) => {
        console.log(el);
        return (
          <div
            key={i}
            style={{
              top: el.topRow,
              right: el.rightCol,
              bottom: el.bottomRow,
              left: el.leftCol
            }}
          />
        );
      })
    : null;

  return (
    <ImageContainer>
      <img id="image" src={imageSrc} alt="imageSrc" />
      {Div}
    </ImageContainer>
  );
};
