import React, { Component } from "react";
import styled from "styled-components";
import Clarifai from "clarifai";
import * as components from "../../components/componentList";

const Container = styled.div`
  background: white;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "roboto";
  > .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100px;
    > input {
      width: 70%;
      height: 30px;
      margin: 10px;
      font-size: 1em;
    }
    > button {
      border: none;
      height: 30px;
      cursor: pointer;
      margin: 5px 5px;
      padding: 0 15px;
      background: gray;
      color: white;
    }
  }
`;
const app = new Clarifai.App({
  apiKey: "fd3068e7fcbf496faa9e9f4755f242aa"
});

export default class ImageModule extends Component {
  state = {
    inputUrl: "",
    imageUrl: "",
    faceCoordinates: null
  };

  calculateFaceCoordinates = response => {
    let inputImage = document.querySelector("#image");
    let imageWidth = Number(inputImage.width);
    let imageHeight = Number(inputImage.height);
    let coordinatesArray = response.outputs[0].data.regions.map(el => {
      let box = el.region_info.bounding_box;
      console.log(box, imageWidth, imageHeight);
      return {
        leftCol: box.left_col * imageWidth,
        topRow: box.top_row * imageHeight,
        rightCol: imageWidth - box.right_col * imageWidth,
        bottomRow: imageHeight - box.bottom_row * imageHeight
      };
    });
    console.log(coordinatesArray);
    this.setState({ faceCoordinates: coordinatesArray });
  };

  onInputChange = event => {
    this.setState({ inputUrl: event.target.value });
  };

  onImageSubmit = () => {
    this.setState({ imageUrl: this.state.inputUrl });
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.inputUrl)
      .then(response => {
        return this.calculateFaceCoordinates(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <components.Particles />
        <h1>The brain will detect faces in your pictures</h1>
        <h1>Give it a try !!!</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Enter image link"
            onChange={this.onInputChange}
          />
          <button onClick={this.onImageSubmit}>Detect</button>
        </div>
        <components.ImageContainer
          imageSrc={this.state.imageUrl}
          faceCoordinates={this.state.faceCoordinates}
        />
      </Container>
    );
  }
}
