import React, { Component } from "react";
import * as components from "./components/componentList";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3005/users/")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return <components.Layout />;
  }
}

export default App;
